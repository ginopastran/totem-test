import { MenuItem } from "../../menuData";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProductDialog from "./ProductDialog";
// import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  item: MenuItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  // const { items } = useCart();
  // const isInCart = items.some((cartItem) => cartItem.id === item.id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white flex flex-col text-black items-center rounded-2xl py-4 gap-3 px-2 cursor-pointer justify-between max-h-[18rem]">
          <img src={item.imageUrl} alt={item.name} className="w-36" />
          <div className="flex flex-col px-2 gap-3">
            <h3 className="font-bold text-lg leading-5">{item.name}</h3>
            <span className="font-medium">${item.price.toFixed(2)}</span>
            {/* {isInCart && (
              <span className="text-green-500 text-sm">En el carrito</span>
            )} */}
          </div>
        </div>
      </DialogTrigger>
      <ProductDialog item={item} />
    </Dialog>
  );
};

export default ProductCard;
