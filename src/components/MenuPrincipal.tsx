import { menuData } from "../../menuData";
import ProductCard from "./ProductCard";

interface MenuPrincipalProps {
  onTabChange: (tab: string) => void;
}

// Seleccionamos 3 hamburguesas de la data
const burger1 = menuData.beefBurgers[1];
const burger2 = menuData.beefBurgers[2];
const burger3 = menuData.beefBurgers[4];

const MenuPrincipal: React.FC<MenuPrincipalProps> = ({ onTabChange }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col rounded-2xl bg-black w-full text-white shadow-lg items-center">
        <img
          src="/hamburguesas.jpg"
          alt="Hamburguesas"
          className="rounded-tr-2xl rounded-tl-2xl"
        />
        <div className="flex py-4 px-4 font-rubik gap-3 justify-between">
          <ProductCard item={burger1} />
          <ProductCard item={burger2} />
          <ProductCard item={burger3} />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 font-rubik mt-4 gap-4">
        <div
          className="flex bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between cursor-pointer"
          onClick={() => onTabChange("menus")}
        >
          <h3 className="font-bold text-lg">Menús</h3>
          <img src="/hamburguesa-1.png" alt="Menús" className="w-[5.5rem]" />
        </div>
        <div
          className="flex bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between cursor-pointer"
          onClick={() => onTabChange("sauce")}
        >
          <h3 className="font-bold text-lg">Delicias y salsas</h3>
          <img src="/papas-1.png" alt="Delicias y salsas" className="w-16" />
        </div>
        <div
          className="flex bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between cursor-pointer"
          onClick={() => onTabChange("happy")}
        >
          <h3 className="font-bold text-lg">Cajita feliz</h3>
          <img src="/caja-1.png" alt="Cajita feliz" className="w-[5rem]" />
        </div>
        <div
          className="flex bg-white rounded-2xl items-center px-4 py-4 shadow-lg gap-2 justify-between cursor-pointer"
          onClick={() => onTabChange("icecream")}
        >
          <h3 className="font-bold text-lg">Helados</h3>
          <img src="/helado-1.png" alt="Helados" className="w-[5rem]" />
        </div>
      </div>
    </div>
  );
};

export default MenuPrincipal;
