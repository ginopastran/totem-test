import { io } from "socket.io-client";

// Crea una única instancia de socket que será compartida
const socket = io("http://localhost:3000", {
  transports: ["websocket"], // Asegura que se use WebSocket, evitando fallbacks innecesarios
});

export default socket;
