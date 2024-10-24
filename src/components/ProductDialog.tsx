import { useState } from "react";
import { MenuItem } from "../../menuData";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

interface ProductDialogProps {
  item: MenuItem;
  onClose: () => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({ item, onClose }) => {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(item, quantity);
    onClose(); // Cerrar el diálogo después de agregar al carrito
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <DialogContent className="sm:max-w-[540px] font-rubik rounded-2xl">
      <div className="flex flex-col items-center gap-10 py-4">
        <img src={item.imageUrl} alt={item.name} className="w-80 rounded-md" />
        <div className="flex flex-col gap-4 items-center">
          <p className="text-3xl font-semibold">{item.name}</p>
          <p className="text-xl font-normal text-center">{item.description}</p>
          <p className="text-3xl font-semibold">${item.price.toFixed(2)}</p>
          {/* Controles de Cantidad */}
          <div className="flex items-center gap-4 mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="text-2xl">{quantity}</span>
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-4">
        <Button
          type="button"
          size="lg"
          className="text-lg bg-red-500 text-white rounded-full border-2 border-red-600 hover:bg-red-600"
          // Aquí podrías añadir un manejador para "Modificar ingredientes"
          // onClick={handleModifyIngredients}
        >
          Modificar ingredientes
        </Button>
        <Button
          type="button"
          size="lg"
          className="text-lg bg-yellow-400 text-black rounded-full border-2 border-yellow-500 hover:bg-yellow-500"
          onClick={handleAddToCart}
        >
          Añadir al Carrito
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ProductDialog;
