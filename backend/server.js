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

// Configurar CORS para Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Permitir el origen de Vite
    methods: ["GET", "POST"], // Métodos permitidos
  },
});

// Ruta simple para comprobar que el servidor funciona
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// Almacenar el número de orden actual
let ordenes = [];

// Configurar evento de conexión de clientes a Socket.IO
io.on("connection", (socket) => {
  //   console.log("Un cliente se ha conectado");

  socket.emit("nuevaListaOrdenes", ordenes);

  // Escuchar el evento 'nuevaOrden' del cliente
  socket.on("nuevaOrden", (numeroOrden) => {
    console.log("numeroOrden:", numeroOrden);
    ordenes.push(numeroOrden);
    // Enviar el nuevo número de orden a todos los clientes conectados
    io.emit("nuevaListaOrdenes", ordenes);
    console.log("Lista de ordenes actualizada:", ordenes);
  });

  socket.on("callNextOrder", (nextOrderCalled) => {
    console.log("nextOrderCalled:", nextOrderCalled);
    ordenes = ordenes.filter((o) => o !== nextOrderCalled);
    // Enviar el nuevo número de orden a todos los clientes conectados
    io.emit("nuevaListaOrdenes", ordenes);
    io.emit("nuevaOrdenLLamada", nextOrderCalled);
    //   console.log("Lista de ordenes actualizada:", ordenes);
  });

  // Desconexión de clientes
  socket.on("disconnect", () => {
    // console.log("Un cliente se ha desconectado");
  });
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
