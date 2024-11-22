require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const bodyParser = require('body-parser');
const qr = require('qr-image');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);

// Configurar CORS para Express
app.use(
  cors({
    origin: 'http://localhost:5173', // Permitir solicitudes solo desde tu frontend (Vite)
  })
);

// Instancia de Socket.IO con CORS configurado
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Permitir el origen de Vite
    methods: ['GET', 'POST'], // Métodos permitidos
  },
});

// Inicializar listas de órdenes
let numeroActual = 1;
let ordenes = []; // En preparación
let ordenesPendientesDeCobro = []; // Para cobrar
let ordenesParaRetirar = []; // Para retirar

// Almacenar asociaciones de números de orden y clientes
let ordenesClientes = {};

// Funciones para generar enlace y código QR
function generarEnlaceQR(numeroOrden) {
  const baseUrl = 'https://tu-dominio.com/qr'; // Reemplaza con tu dominio real
  const enlace = `${baseUrl}?order=${numeroOrden}`;
  return enlace;
}

function generarCodigoQR(enlace) {
  const qrCodeImage = qr.imageSync(enlace, { type: 'png' });
  return qrCodeImage;
}

// Endpoint para manejar el escaneo del QR
app.get('/qr', (req, res) => {
  const numeroOrden = req.query.order;

  // Enviar un formulario simple al cliente
  res.send(`
    <html>
      <body>
        <h1>Confirmación de Pedido ${numeroOrden}</h1>
        <form action="/enviar-mensaje" method="POST">
          <label for="telefono">Ingresa tu número de teléfono (formato internacional, sin '+'):</label><br>
          <input type="text" id="telefono" name="telefono"><br><br>
          <input type="hidden" name="numeroOrden" value="${numeroOrden}">
          <input type="submit" value="Confirmar">
        </form>
      </body>
    </html>
  `);
});

// Endpoint para enviar el mensaje de plantilla
app.post('/enviar-mensaje', async (req, res) => {
  const { telefono, numeroOrden } = req.body;

  try {
    // Enviar el mensaje de plantilla al cliente
    await sendTemplateMessage(telefono);

    // Asociar el número de cliente con su número de orden
    ordenesClientes[numeroOrden] = telefono;

    res.send(
      '¡Gracias! Te hemos enviado un mensaje de confirmación en WhatsApp.'
    );
  } catch (error) {
    console.error(
      'Error al enviar el mensaje de plantilla:',
      error.response ? error.response.data : error.message
    );
    res.status(500).send('Ocurrió un error al procesar tu solicitud.');
  }
});

// Función para enviar el mensaje de plantilla
async function sendTemplateMessage(to) {
  const res = await axios({
    url: `https://graph.facebook.com/v17.0/${process.env.PHONE_NUMBER_ID}/messages`,
    method: 'post',
    headers: {
      Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json',
    },
    data: {
      messaging_product: 'whatsapp',
      to: to,
      type: 'template',
      template: {
        name: 'hello_world',
        language: {
          code: 'en_US',
        },
      },
    },
  });
  console.log(res.data);
}

io.on('connection', (socket) => {
  // Enviar listas actualizadas al conectarse
  socket.emit('nuevaListaOrdenes', ordenes);
  socket.emit('nuevaListaOrdenesPendientesDeCobro', ordenesPendientesDeCobro);
  socket.emit('nuevaListaOrdenesParaRetirar', ordenesParaRetirar);

  // Evento para crear una nueva orden pendiente de cobro
  socket.on('nuevaOrdenACobrar', () => {
    const nuevoNumeroOrden = `A${numeroActual}`;
    numeroActual = numeroActual < 5 ? numeroActual + 1 : 1;

    if (numeroActual === 1) {
      io.emit('reiniciarPedidosSonados');
    }

    ordenesPendientesDeCobro.push(nuevoNumeroOrden);
    io.emit('nuevaListaOrdenesPendientesDeCobro', ordenesPendientesDeCobro);

    // Generar enlace y código QR
    const enlaceQR = generarEnlaceQR(nuevoNumeroOrden);
    const qrCodeImage = generarCodigoQR(enlaceQR);

    // Enviar el código QR al frontend
    socket.emit('codigoQR', {
      numeroOrden: nuevoNumeroOrden,
      qrCodeImage: qrCodeImage.toString('base64'),
    });

    console.log(
      `Nueva orden ${nuevoNumeroOrden} añadida a pendientes de cobro`
    );
  });

  // Evento para crear una nueva orden directamente en preparación
  socket.on('ordenCobrada', () => {
    const nuevoNumeroOrden = `A${numeroActual}`;
    numeroActual = numeroActual < 5 ? numeroActual + 1 : 1;

    if (numeroActual === 1) {
      io.emit('reiniciarPedidosSonados');
    }

    ordenes.push(nuevoNumeroOrden);
    io.emit('nuevaListaOrdenes', ordenes);

    // Generar enlace y código QR
    const enlaceQR = generarEnlaceQR(nuevoNumeroOrden);
    const qrCodeImage = generarCodigoQR(enlaceQR);

    // Enviar el código QR al frontend
    socket.emit('codigoQR', {
      numeroOrden: nuevoNumeroOrden,
      qrCodeImage: qrCodeImage.toString('base64'),
    });

    console.log(`Nueva orden ${nuevoNumeroOrden} añadida a en preparación`);
  });

  // El resto de los eventos de Socket.IO se pueden mantener o ajustar según tus necesidades
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
