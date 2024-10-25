import socket from "@/lib/socket";
import React, { useEffect, useState } from "react";

const Box = () => {
  const [listaOrdenes, setListaOrdenes] = useState([]);
  const [listaOrdenesPendientes, setListaOrdenesPendientes] = useState([]);
  const [listaOrdenesParaRetirar, setListaOrdenesParaRetirar] = useState([]);

  useEffect(() => {
    // Escuchar la lista actualizada de órdenes en preparación
    socket.on("nuevaListaOrdenes", (ordenes) => {
      setListaOrdenes(ordenes);
    });

    // Escuchar la lista actualizada de órdenes pendientes de cobro
    socket.on("nuevaListaOrdenesPendientesDeCobro", (ordenesPendientes) => {
      setListaOrdenesPendientes(ordenesPendientes);
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

  // Mover orden de "pendiente de cobro" a "en preparación"
  const handleCobrarOrden = (numeroOrden) => {
    socket.emit("moverACobrado", numeroOrden);
  };

  // Mover orden de "en preparación" a "para retirar"
  const handlePrepararOrden = (numeroOrden) => {
    socket.emit("moverAParaRetirar", numeroOrden);
  };

  // Eliminar orden de "para retirar"
  const handleRetirarOrden = (numeroOrden) => {
    socket.emit("eliminarOrden", numeroOrden);
  };

  return (
    <div className="flex flex-col gap-12 h-[100vh]">
      <div className="grid grid-cols-3 h-full py-12 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-sky-200 via-purple-200 to-white to-90%">
        {/* Órdenes pendientes de cobro */}
        <div>
          <h2 className="text-center text-5xl pb-20 font-magical">
            Pendientes de cobro:
          </h2>
          <ul className="flex flex-col gap-8">
            {listaOrdenesPendientes.map((ordenPendiente) => (
              <button
                key={ordenPendiente}
                onClick={() => handleCobrarOrden(ordenPendiente)}
                className="flex bg-white rounded-2xl items-center px-4 py-4 w-40 h-40 m-auto shadow-lg gap-2 justify-center cursor-pointer"
              >
                <h3 className="font-bold text-4xl">{ordenPendiente}</h3>
              </button>
            ))}
          </ul>
        </div>

        {/* Órdenes en preparación */}
        <div>
          <h2 className="text-center text-5xl font-magical pb-20">
            En preparación:
          </h2>
          <ul className="flex flex-col gap-8">
            {listaOrdenes.map((orden) => (
              <button
                key={orden}
                onClick={() => handlePrepararOrden(orden)}
                className="flex bg-white rounded-2xl items-center px-4 py-4 w-40 h-40 m-auto shadow-lg gap-2 justify-center cursor-pointer"
              >
                <h3 className="font-bold text-4xl">{orden}</h3>
              </button>
            ))}
          </ul>
        </div>

        {/* Órdenes para retirar */}
        <div>
          <h2 className="text-center text-5xl font-magical pb-20">
            A retirar:
          </h2>
          <ul className="flex flex-col gap-8">
            {listaOrdenesParaRetirar.map((ordenParaRetirar) => (
              <button
                key={ordenParaRetirar}
                onClick={() => handleRetirarOrden(ordenParaRetirar)}
                className="flex bg-white rounded-2xl items-center px-4 py-4 w-40 h-40 m-auto shadow-lg gap-2 justify-center cursor-pointer"
              >
                <h3 className="font-bold text-4xl">{ordenParaRetirar}</h3>
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Box;
