import { useNavigate } from "react-router-dom";
import useCart from "@/hooks/use-cart";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";

const PayPage = () => {
  const navigate = useNavigate();
  const { items, removeItem, removeAll } = useCart();

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  const handleGoToPaymentOptions = () => {
    if (items.length === 0) {
      toast.error("Tu carrito está vacío.");
      return;
    }
    navigate("/payment-options");
  };

  const handleCancelClick = () => {
    removeAll();
    navigate("/");
  };

  return (
    <div className="w-full px-8 py-10 pt-20 flex flex-col items-center justify-center">
      <img
        src="/mcdonalds-logo.png"
        alt="Logo de McDonald's"
        className="w-28 h-28"
      />
      <h1 className="font-magical text-5xl text-stone-800 max-w-xl mt-10 text-center">
        Tu Orden
      </h1>

      {/* Resumen de la orden */}
      <div className="w-full max-w-3xl mt-10">
        {items.length === 0 ? (
          <p className="text-lg">Tu carrito está vacío.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Lista de productos en el carrito */}
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center py-4 bg-white shadow-md rounded-3xl px-8"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeItem(item.id)}
                  >
                    <X className="w-10 h-10" />
                  </button>
                </li>
              ))}
            </ul>
            {/* Total y botón "Ir a pagar" */}
            <div className="flex justify-between items-center mt-6">
              <h2 className="text-2xl font-bold">Total:</h2>
              <p className="text-2xl font-bold">${totalPrice.toFixed(2)}</p>
            </div>
            <button
              className="mt-4 px-6 py-3 bg-yellow-400 text-black rounded-full font-bold text-xl"
              onClick={handleGoToPaymentOptions}
            >
              Ir a pagar
            </button>
          </div>
        )}
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

export default PayPage;
