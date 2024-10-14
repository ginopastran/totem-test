import { useState } from "react";
import LeftSide from "@/components/LeftSide";
import MenuPrincipal from "@/components/MenuPrincipal";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("menu");

  return (
    <div className="flex h-[70vh]">
      <LeftSide selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <div className="flex p-4 pt-8 w-full">
        {selectedTab === "menu" && <MenuPrincipal />}
        {selectedTab === "promotions" && (
          <div>
            <h1>Promociones</h1>
          </div>
        )}
        {selectedTab === "menus" && (
          <div>
            <h1>Platos y Menus</h1>
          </div>
        )}
        {selectedTab === "sauce" && (
          <div>
            <h1>sauce</h1>
          </div>
        )}
        {selectedTab === "happy" && (
          <div>
            <h1>happy</h1>
          </div>
        )}
        {selectedTab === "soda" && (
          <div>
            <h1>soda</h1>
          </div>
        )}
        {selectedTab === "salad" && (
          <div>
            <h1>salad</h1>
          </div>
        )}
        {selectedTab === "icecream" && (
          <div>
            <h1>icecream</h1>
          </div>
        )}
        {selectedTab === "coffee" && (
          <div>
            <h1>coffee</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
