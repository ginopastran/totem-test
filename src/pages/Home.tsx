import { useState } from "react";
import LeftSide from "@/components/LeftSide";
import MenuPrincipal from "@/components/MenuPrincipal";
import Novedades from "@/components/Novedades";
// Importa los demás componentes según sea necesario

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("menu");

  return (
    <div className="flex h-[70vh]">
      <LeftSide selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <div className="flex p-4 pt-8 w-full">
        {selectedTab === "menu" && (
          <MenuPrincipal onTabChange={setSelectedTab} />
        )}
        {selectedTab === "promotions" && <Novedades />}
        {selectedTab === "menus" && <Novedades />}
        {selectedTab === "sauce" && <Novedades />}
        {selectedTab === "happy" && <Novedades />}
        {selectedTab === "icecream" && <Novedades />}
        {/* Agrega los demás componentes según sea necesario */}
      </div>
    </div>
  );
};

export default Home;
