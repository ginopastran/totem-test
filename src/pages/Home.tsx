import { useState } from "react";
import LeftSide from "@/components/LeftSide";
import MenuPrincipal from "@/components/MenuPrincipal";
import Novedades from "@/components/Novedades";
import Hamburguesas from "@/components/Hamburguesas";
import DeliciasSalsas from "@/components/DeliciasSalsas";
import Cajitas from "@/components/Cajitas";
import Bebidas from "@/components/Bebidas";
import Ensaladas from "@/components/Ensaladas";
import Helados from "@/components/Helados";
import Cafes from "@/components/Cafes";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("menu");

  return (
    <div className="flex">
      <LeftSide selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <div className="flex p-4 pt-8 w-full">
        {selectedTab === "menu" && (
          <MenuPrincipal onTabChange={setSelectedTab} />
        )}
        {selectedTab === "promotions" && <Novedades />}
        {selectedTab === "menus" && <Hamburguesas />}
        {selectedTab === "sauce" && <DeliciasSalsas />}
        {selectedTab === "happy" && <Cajitas />}
        {selectedTab === "soda" && <Bebidas />}
        {selectedTab === "salad" && <Ensaladas />}
        {selectedTab === "icecream" && <Helados />}
        {selectedTab === "coffee" && <Cafes />}
        {/* Agrega los demás componentes según sea necesario */}
      </div>
    </div>
  );
};

export default Home;
