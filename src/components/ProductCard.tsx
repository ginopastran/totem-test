import { useState } from "react";
import { MenuItem } from "../../menuData";
import { Dialog } from "@/components/ui/dialog";
import ProductDialog from "./ProductDialog";
// import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  item: MenuItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  // const { items } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  // const cartItem = items.find((cartItem) => cartItem.id === item.id);
  // const quantity = cartItem ? cartItem.quantity : 0;

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div
        className="bg-white flex flex-col text-black items-center rounded-2xl py-4 gap-3 px-2 cursor-pointer justify-between max-h-[18rem] max-w-[9rem]"
        onClick={handleOpen}
      >
        <img src={item.imageUrl} alt={item.name} className="w-36" />
        <div className="flex flex-col px-2 gap-3 items-center">
          <h3 className="font-bold text-lg leading-5 text-center">
            {item.name}
          </h3>
          <span className="font-medium">${item.price.toFixed(2)}</span>
          {/* {quantity > 0 && (
            <span className="text-green-500 text-sm">
              En el carrito: {quantity}
            </span>
          )} */}
        </div>
      </div>
      <ProductDialog item={item} onClose={handleClose} />
    </Dialog>
  );
};

export default ProductCard;
