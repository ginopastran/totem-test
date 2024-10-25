import socket from "@/lib/socket";
import React, { useCallback } from "react";

const useNextOrder = (type: "ordenCobrada" | "nuevaOrdenACobrar") => {
  // Usar useCallback para memorizar la función
  const nextNumberFunction = useCallback(() => {
    socket.emit(type); // Emitir al servidor sin número, el servidor lo gestiona
  }, [type]); // Dependiendo del tipo de orden

  return {
    nextNumberFunction,
  };
};

export default useNextOrder;
