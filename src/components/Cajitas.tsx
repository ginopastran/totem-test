// Novedades.tsx

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { menuData } from "../../menuData";
import ProductCard from "./ProductCard";

const Cajitas = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto text-center">
      <Tabs defaultValue="1" className="w-full font-rubik">
        {/* Lista de pestañas */}
        <TabsList className="bg-white/20 rounded-full px-4 py-10 w-full items-center flex border-gray-200 border-2">
          <TabsTrigger
            value="1"
            className="data-[state=active]:bg-white rounded-full min-h-14 max-h-14 py-6 px-4 text-lg flex items-center justify-center data-[state=active]:shadow-md"
          >
            Todo
          </TabsTrigger>
        </TabsList>

        {/* Contenido de la pestaña "Todo" */}
        <TabsContent value="1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {menuData.boxes.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Cajitas;
