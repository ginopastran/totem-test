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
      className="font-rubik mx-8 h-full mt-8 border-2 border-gray-200 rounded-2xl max-w-56"
    >
      <TabsList className="flex-col h-full bg-white w-full items-start justify-center rounded-2xl max-w-56">
        <TabsTrigger value="menu" className="gap-2">
          <img src="/burger-1.svg" alt="" className="w-14 h-14" /> Menú
          Principal
        </TabsTrigger>
        <TabsTrigger value="promotions" className="gap-2">
          <CirclePercent className=" w-7 h-7 flex-none" />
          Novedades y promociones
        </TabsTrigger>
        <TabsTrigger value="menus" className="gap-2">
          Platos y menus
        </TabsTrigger>
        {/* Agrega más TabsTrigger según sea necesario */}
      </TabsList>
    </Tabs>
  );
};

export default LeftSide;
