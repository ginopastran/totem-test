import React from "react";

const MenuPrincipal = () => {
  return (
    <div className="   w-full h-full flex flex-col">
      <div className="flex flex-col rounded-2xl bg-black w-full text-white shadow-lg items-center">
        <img
          src="/hamburguesas.jpg"
          alt=""
          className=" rounded-tr-2xl rounded-tl-2xl"
        />
        <div className="flex py-4 px-4 font-rubik gap-3 justify-between">
          <div className=" bg-white flex flex-col text-black items-center rounded-2xl py-4 gap-3 px-2">
            <img src="/hamburguesa-1.png" alt="" className=" w-36" />
            <div className="flex flex-col px-2 gap-3">
              <h3 className=" font-bold text-lg leading-5">Grand Tasty</h3>
              <span className=" font-medium">30$</span>
            </div>
          </div>
          <div className=" bg-white flex flex-col text-black items-center rounded-2xl py-4 gap-3 px-2">
            <img src="/hamburguesa-1.png" alt="" className=" w-36" />
            <div className="flex flex-col px-2 gap-3">
              <h3 className=" font-bold text-lg leading-5">Grand Tasty</h3>
              <span className=" font-medium">30$</span>
            </div>
          </div>
          <div className=" bg-white flex flex-col text-black items-center rounded-2xl py-4 gap-3 px-2">
            <img src="/hamburguesa-1.png" alt="" className=" w-36" />
            <div className="flex flex-col px-2 gap-3">
              <h3 className=" font-bold text-lg leading-5">Grand Tasty</h3>
              <span className=" font-medium">30$</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 font-rubik mt-4 gap-4">
        <div className="flex bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between">
          <h3 className=" font-bold text-lg">Menús</h3>
          <img src="/hamburguesa-1.png" alt="" className="w-[5.5rem]" />
        </div>
        <div className="flex bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between">
          <h3 className=" font-bold text-lg">Delicias y salsas</h3>
          <img src="/papas-1.png" alt="" className="w-16" />
        </div>
        <div className="flex bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between">
          <h3 className=" font-bold text-lg">Cajita feliz</h3>
          <img src="/caja-1.png" alt="" className="w-[5rem]" />
        </div>
        <div className="flex bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between">
          <h3 className=" font-bold text-lg">Helados</h3>
          <img src="/helado-1.png" alt="" className=" w-[5rem]" />
        </div>
      </div>
    </div>
  );
};

export default MenuPrincipal;
