import socket from "@/lib/socket";
import React, { useEffect, useState } from "react";

const Box = () => {
  const [listaOrdenes, setListaOrdenes] = useState([]);

  useEffect(() => {
    // Escuchar la lista actualizada de órdenes
    socket.on("nuevaListaOrdenes", (ordenes) => {
      console.log("Lista actualizada recibida:", ordenes);
      setListaOrdenes(ordenes); // Actualizar la lista en el estado
    });

    // Cleanup para evitar múltiples listeners
    return () => {
      socket.off("nuevaListaOrdenes");
      socket.off("nuevaOrdenLLamada");
    };
  }, []);

  const handleOrder = (nextNumber) => {
    console.log("nextNumber", nextNumber);
    socket.emit("callNextOrder", nextNumber);
  };

  return (
    <div className="flex flex-col mx-40 mt-12 gap-12">
      <h2 className="text-center text-5xl font-magical">Siguientes número:</h2>
      <ul className="flex flex-col gap-8">
        {listaOrdenes.map((orden) => (
          <button
            onClick={() => handleOrder(orden)}
            className="flex bg-white rounded-2xl items-center px-4 py-4 w-40 h-40 m-auto shadow-lg gap-2 justify-center cursor-pointer"
          >
            <h3 className="font-bold text-4xl">{orden}</h3>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Box;
