const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

// Configurar CORS para Express
app.use(
  cors({
    origin: "http://localhost:5173", // Permitir solicitudes solo desde tu frontend (Vite)
  })
);

// Instancia de Socket.IO con CORS configurado
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Permitir el origen de Vite
    methods: ["GET", "POST"], // Métodos permitidos
  },
});

// Inicializar listas de órdenes
let numeroActual = 1;
let ordenes = []; // En preparación
let ordenesPendientesDeCobro = []; // Para cobrar
let ordenesParaRetirar = []; // Para retirar

io.on("connection", (socket) => {
  // Enviar listas actualizadas al conectarse
  socket.emit("nuevaListaOrdenes", ordenes);
  socket.emit("nuevaListaOrdenesPendientesDeCobro", ordenesPendientesDeCobro);
  socket.emit("nuevaListaOrdenesParaRetirar", ordenesParaRetirar);

  // Evento para crear una nueva orden pendiente de cobro
  socket.on("nuevaOrdenACobrar", () => {
    const nuevoNumeroOrden = `A${numeroActual}`;
    numeroActual = numeroActual < 5 ? numeroActual + 1 : 1; // Incrementar el número de orden

    if (numeroActual === 1) {
      io.emit("reiniciarPedidosSonados"); // Notificar al frontend para limpiar pedidos sonados
    }

    ordenesPendientesDeCobro.push(nuevoNumeroOrden); // Añadir a la lista de pendientes de cobro
    io.emit("nuevaListaOrdenesPendientesDeCobro", ordenesPendientesDeCobro); // Emitir lista actualizada

    console.log(
      `Nueva orden ${nuevoNumeroOrden} añadida a pendientes de cobro`
    );
  });

  // Evento para crear una nueva orden directamente en preparación
  socket.on("ordenCobrada", () => {
    const nuevoNumeroOrden = `A${numeroActual}`;
    numeroActual = numeroActual < 5 ? numeroActual + 1 : 1; // Incrementar el número de orden

    if (numeroActual === 1) {
      io.emit("reiniciarPedidosSonados"); // Notificar al frontend para limpiar pedidos sonados
    }

    ordenes.push(nuevoNumeroOrden); // Añadir a la lista de "en preparación"
    io.emit("nuevaListaOrdenes", ordenes); // Emitir lista actualizada

    console.log(`Nueva orden ${nuevoNumeroOrden} añadida a en preparación`);
  });

  // Transición de "pendientes de cobro" a "en preparación"
  socket.on("moverACobrado", (numeroOrden) => {
    ordenesPendientesDeCobro = ordenesPendientesDeCobro.filter(
      (o) => o !== numeroOrden
    );
    ordenes.push(numeroOrden); // Mover a la lista de "en preparación"

    io.emit("nuevaListaOrdenes", ordenes);
    io.emit("nuevaListaOrdenesPendientesDeCobro", ordenesPendientesDeCobro);

    console.log(
      `Orden ${numeroOrden} movida de pendiente de cobro a en preparación`
    );
  });

  // Transición de "en preparación" a "para retirar"
  socket.on("moverAParaRetirar", (numeroOrden) => {
    ordenes = ordenes.filter((o) => o !== numeroOrden);
    ordenesParaRetirar.push(numeroOrden); // Mover a la lista de "para retirar"

    io.emit("nuevaListaOrdenes", ordenes);
    io.emit("nuevaListaOrdenesParaRetirar", ordenesParaRetirar);

    console.log(`Orden ${numeroOrden} movida de en preparación a para retirar`);
  });

  // Eliminar orden de "para retirar" (último estado)
  socket.on("eliminarOrden", (numeroOrden) => {
    ordenesParaRetirar = ordenesParaRetirar.filter((o) => o !== numeroOrden);

    io.emit("nuevaListaOrdenesParaRetirar", ordenesParaRetirar);
    console.log(`Orden ${numeroOrden} eliminada (retirada)`);
  });

  // Desconexión de clientes
  socket.on("disconnect", () => {
    console.log("Un cliente se ha desconectado");
  });
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
