import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CirclePercent, Home } from "lucide-react";

interface LeftSideProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const LeftSide: React.FC<LeftSideProps> = ({ selectedTab, onTabChange }) => {
  return (
    <Tabs
      value={selectedTab}
      onValueChange={onTabChange}
      className="font-rubik ml-4 mr-2 h-[45rem] mt-8 border-2 border-gray-200 rounded-2xl  w-[50%]"
    >
      <TabsList className="flex-col h-full bg-white w-full items-start justify-center rounded-2xl">
        <TabsTrigger value="menu" className="gap-2">
          <img src="/home-1.png" alt="" className="w-14" /> Menú Principal
        </TabsTrigger>
        <TabsTrigger value="promotions" className="gap-2">
          <img src="/burgers-1.png" alt="" className="w-14 " />
          Novedades y promociones
        </TabsTrigger>
        <TabsTrigger value="menus" className="gap-2">
          <img src="/burger-1.png" alt="" className="w-14 " />
          Hamburguesas y menus
        </TabsTrigger>
        <TabsTrigger value="sauce" className="gap-4">
          <img src="/papas-1.png" alt="" className="w-12 " />
          Delicias y salsas
        </TabsTrigger>
        <TabsTrigger value="happy" className="gap-2">
          <img src="/burger-1.png" alt="" className="w-14 " />
          Cajita feliz
        </TabsTrigger>
        <TabsTrigger value="soda" className="gap-2">
          <img src="/burger-1.png" alt="" className="w-14" />
          Bebidas
        </TabsTrigger>
        <TabsTrigger value="salad" className="gap-2">
          <img src="/burger-1.png" alt="" className="w-14 " />
          Ensaladas
        </TabsTrigger>
        <TabsTrigger value="icecream" className="gap-2">
          <img src="/burger-1.png" alt="" className="w-14 " />
          Helados y postres
        </TabsTrigger>
        <TabsTrigger value="coffee" className="gap-2">
          <img src="/burger-1.png" alt="" className="w-14 " />
          McCafé
        </TabsTrigger>

        {/* Agrega más TabsTrigger según sea necesario */}
      </TabsList>
    </Tabs>
  );
};

export default LeftSide;
