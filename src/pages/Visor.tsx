import socket from "@/lib/socket";
import React, { useEffect, useState } from "react";

const Box = () => {
  const [listaOrdenes, setListaOrdenes] = useState([]);
  const [listaOrdenesParaRetirar, setListaOrdenesParaRetirar] = useState([]);

  useEffect(() => {
    // Escuchar la lista actualizada de órdenes en preparación
    socket.on("nuevaListaOrdenes", (ordenes) => {
      setListaOrdenes(ordenes);
    });

    // Escuchar la lista actualizada de órdenes para retirar
    socket.on("nuevaListaOrdenesParaRetirar", (ordenesParaRetirar) => {
      setListaOrdenesParaRetirar(ordenesParaRetirar);
    });

    // Cleanup para evitar múltiples listeners
    return () => {
      socket.off("nuevaListaOrdenes");
      socket.off("nuevaListaOrdenesPendientesDeCobro");
      socket.off("nuevaListaOrdenesParaRetirar");
    };
  }, []);

  // Mover orden de "en preparación" a "para retirar"
  const handlePrepararOrden = (numeroOrden) => {
    socket.emit("moverAParaRetirar", numeroOrden);
  };

  // Eliminar orden de "para retirar"
  const handleRetirarOrden = (numeroOrden) => {
    socket.emit("eliminarOrden", numeroOrden);
  };

  return (
    <div className="flex flex-col  gap-12">
      <div className="grid grid-cols-2">
        <div className="grid grid-rows-2 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-sky-200 via-purple-200 to-white to-90%">
          {/* Órdenes en preparación */}
          <div>
            <h2 className="text-center text-5xl font-magical py-12">
              En preparación:
            </h2>
            <ul className="flex justify-center gap-4 px-8">
              {listaOrdenes.map((orden) => (
                <button
                  key={orden}
                  // onClick={() => handlePrepararOrden(orden)}
                  className="flex bg-white rounded-2xl items-center px-4 py-4 w-40 h-40 shadow-lg gap-2 justify-center"
                >
                  <h3 className="font-bold text-4xl">{orden}</h3>
                </button>
              ))}
            </ul>
          </div>

          {/* Órdenes para retirar */}
          <div>
            <h2 className="text-center text-5xl font-magical py-12">
              A retirar:
            </h2>
            <ul className="flex justify-center gap-8 px-8">
              {listaOrdenesParaRetirar.map((ordenParaRetirar) => (
                <button
                  key={ordenParaRetirar}
                  // onClick={() => handleRetirarOrden(ordenParaRetirar)}
                  className="flex bg-white rounded-2xl items-center px-4 py-4 w-40 h-40  shadow-lg gap-2 justify-center"
                >
                  <h3 className="font-bold text-4xl">{ordenParaRetirar}</h3>
                </button>
              ))}
            </ul>
          </div>
        </div>
        <div className=" w-[50vw] h-[100vh]">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/mc-video.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Box;
