import socket from "@/lib/socket";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentMethods = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/finisher");
  };

  return (
    <div className="flex flex-col max-w-[30rem] m-auto pt-12 align-center gap-12">
      <h1 className="font-magical text-5xl text-stone-800 max-w-xl text-center">
        Métodos de pago
      </h1>
      <ul className="space-y-4">
        <div
          className="flex h-24 bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between cursor-pointer"
          onClick={handleNext}
        >
          <h3 className="font-bold text-lg">Mercado Pago</h3>
          <img src="/logos/mp.png" alt="Mercado Pago" className="w-[7rem]" />
        </div>
        <div
          className="flex h-24 bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between cursor-pointer"
          onClick={handleNext}
        >
          <h3 className="font-bold text-lg">Modo</h3>
          <img src="/logos/modo.webp" alt="Modo" className="w-[7rem]" />
        </div>
        <div
          className="flex h-24 bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between cursor-pointer"
          onClick={handleNext}
        >
          <h3 className="font-bold text-lg">Tarjeta de Crédito</h3>
          <img src="/logos/visa.png" alt="Visa" className="w-[7rem]" />
        </div>
        <div
          className="flex h-24 bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between cursor-pointer"
          onClick={handleNext}
        >
          <h3 className="font-bold text-lg">Tarjeta de Crédito</h3>
          <img src="/logos/master.png" alt="Master" className="w-[7rem]" />
        </div>
      </ul>
    </div>
  );
};

export default PaymentMethods;
