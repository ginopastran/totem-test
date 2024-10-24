import socket from "@/lib/socket";
import React, { useEffect, useState } from "react";

const Visor = () => {
  const [numberCalled, setNumberCalled] = useState(null);

  useEffect(() => {
    // Escuchar la lista actualizada de órdenes
    socket.on("nuevaOrdenLLamada", (orden) => {
      console.log("nuevaOrdenLLamada:", orden);
      setNumberCalled(orden); // Actualizar la lista en el estado
    });

    // Cleanup para evitar múltiples listeners
    return () => {
      socket.off("nuevaOrdenLLamada");
    };
  }, []);

  return (
    <div className="flex flex-col mx-40 mt-12 gap-12">
      <h2 className="text-center text-5xl font-magical">Acercate a retirar!</h2>
      {numberCalled && (
        <div className="flex bg-white rounded-2xl items-center px-4 py-4 w-40 h-40 m-auto shadow-lg gap-2 justify-center cursor-pointer">
          <h3 className="font-bold text-4xl">{numberCalled}</h3>
        </div>
      )}
    </div>
  );
};

export default Visor;
