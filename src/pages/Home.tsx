import { useState } from "react";
import LeftSide from "@/components/LeftSide";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("menu");

  return (
    <div className="flex">
      <LeftSide selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <div className="flex-1 p-4">
        {selectedTab === "menu" && (
          <div>
            <h1>Menú Principal</h1>
          </div>
        )}
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
      </div>
    </div>
  );
};

export default Home;
