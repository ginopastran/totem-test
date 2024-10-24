import { useNavigate } from "react-router-dom";
import { ChevronLeft, CircleAlert, X } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import { io } from "socket.io-client";
import { useState } from "react";
import socket from "@/lib/socket";

type PaymentOption = "totem" | "mostrador";

const PaymentOptionsPage = () => {
  const [nextNumber, setNextNumber] = useState(1);
  const navigate = useNavigate();
  const { items, removeAll } = useCart();

  const handleCancelClick = () => {
    removeAll();
    navigate("/");
  };

  const handlePaymentOption = (option: PaymentOption) => {
    if (items.length === 0) {
      toast.error("Tu carrito está vacío.");
      return;
    }

    if (option === "totem") {
      navigate("/payment/totem");
    } else if (option === "mostrador") {
      const siguienteNumero = `A${nextNumber}`;
      socket.emit("nuevaOrden", siguienteNumero);
      setNextNumber((prev) => prev + 1);
      console.log("socket", socket);
      // navigate("/payment/mostrador");
    }
  };

  const handleBack = () => {
    navigate("/pay");
  };

  return (
    <div className="w-full px-8 py-10 pt-20 items-center justify-center flex flex-col">
      <img src="/mcdonalds-logo.png" alt="" className="w-28 h-28" />
      <div className="flex text-center mt-10 w-full justify-between items-center">
        <ChevronLeft className="w-12 h-12" onClick={handleBack} />
        <div>
          <h1 className="font-magical text-5xl text-stone-800 max-w-xl">
            ¿Dónde te gustaría pagar?
          </h1>
        </div>
        <CircleAlert className="w-12 h-12" />
      </div>

      {/* Opciones de pago */}
      <div className="flex mt-20 gap-8 px-4">
        <div
          className="bg-white px-8 py-20 rounded-3xl shadow-lg flex flex-col items-center justify-center gap-8 cursor-pointer hover:shadow-xl transition min-w-[20rem]  max-w-[20rem]"
          onClick={() => handlePaymentOption("totem")}
        >
          <img src="/totem-1.png" alt="" className="w-52" />
          <h3 className="font-magical text-3xl text-stone-800">En tótem</h3>
        </div>
        <div
          className="bg-white px-8 py-20 rounded-3xl shadow-lg flex flex-col items-center justify-center gap-8 cursor-pointer hover:shadow-xl transition min-w-[20rem]  max-w-[20rem]"
          onClick={() => handlePaymentOption("mostrador")}
        >
          <img src="/mostrador-1.png" alt="" className="w-72" />
          <h3 className="font-magical text-3xl text-stone-800">En mostrador</h3>
        </div>
      </div>

      {/* Botón de cancelar */}
      <div className="relative inline-block h-24 w-24 mt-20">
        <button
          className="absolute h-24 w-24 opacity-0 z-10 cursor-pointer"
          onClick={handleCancelClick}
        ></button>
        <span className="absolute top-1/2 left-1/2 h-[80px] w-[80px] rounded-full bg-gray-100 transform -translate-x-1/2 -translate-y-1/2 shadow transition-all duration-300 ease-in-out"></span>
        <span className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-black opacity-90 transition-colors duration-300 ease-out">
          <X className="w-10 h-10 text-red-500/80" />
        </span>
      </div>
    </div>
  );
};

export default PaymentOptionsPage;
