import useCart from '@/hooks/use-cart';
import useNextOrder from '@/hooks/useNextOrder';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Counter = () => {
  const { nextNumberFunction } = useNextOrder('nuevaOrdenACobrar');
  const navigate = useNavigate();
  const { removeAll } = useCart();
  const hasEmitted = useRef(false);

  useEffect(() => {
    if (!hasEmitted.current) {
      nextNumberFunction(); // Emitir solo una vez
      hasEmitted.current = true; // Actualizar la referencia
    }
  }, []);

  useEffect(() => {
    removeAll();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 30000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex flex-col max-w-[30rem] m-auto pt-12 align-center gap-12">
      <h1 className="font-magical text-5xl text-stone-800 max-w-xl text-center">
        Listo!
      </h1>
      <h2 className="text-2xl text-stone-800 max-w-xl text-center">
        El cajero ya tiene tu orden para que puedas pagarla en la caja, arrimate
        por favor.
      </h2>
      <h2 className="text-2xl text-stone-800 max-w-xl text-center">
        También escaneá éste qr:
      </h2>
      <img src="/qr.png" alt="QR" />
    </div>
  );
};

export default Counter;
