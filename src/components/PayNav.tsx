import { ChevronRight, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCart from "@/hooks/use-cart";

const PayNav = () => {
  const navigate = useNavigate();
  const { items } = useCart();

  // Calculamos el número total de artículos y el precio total considerando las cantidades
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayClick = () => {
    navigate("/pay");
  };

  return (
    <div className="mx-4 rounded-2xl bg-white py-2 border-2 border-gray-100 shadow">
      <div className="flex w-full px-2 gap-8 justify-between">
        <div className="flex gap-8">
          <div className="transition group flex h-20 w-48 items-center justify-center rounded-xl bg-gradient-to-r from-red-300 via-pink-200 to-purple-200 p-[2px] text-black duration-300">
            <div className="flex h-full w-full items-center justify-center rounded-xl bg-white px-3 gap-2">
              <img src="/qr-code.svg" alt="" className="w-16 h-16" />
              <p className="text-xs font-bold font-rubik">
                Lorem ipsum dolor, sit amet.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex gap-7 items-center">
              <div className="relative">
                <ShoppingBag className="w-10 h-10" />
                <div className="absolute bg-red-700 rounded-full h-6 w-6 -top-2 -right-2 flex items-center justify-center">
                  <span className="font-rubik text-white text-sm">
                    {totalItems}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-rubik text-xl">Tu orden:</p>
                <span className="font-rubik font-bold text-xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="flex items-center bg-yellow-400 px-6 rounded-full border-yellow-500/80 border-2 h-14 gap-2 justify-center cursor-pointer"
            onClick={handlePayClick}
          >
            <p className="font-rubik font-semibold">Pagar</p>
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNav;
