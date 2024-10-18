// Novedades.tsx

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { menuData, MenuItem } from "../../menuData";
import ProductCard from "./ProductCard";

const Novedades = () => {
  // Combinar todas las categorías en un solo array para la pestaña "Todo"
  const allItems: MenuItem[] = [
    ...menuData.beefBurgers,
    ...menuData.chickenBurgers,
    ...menuData.fries,
    ...menuData.drinks,
  ];

  // Limitar a 9 elementos para la pestaña "Todo"
  const limitedItems = allItems.slice(0, 9);

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
          <TabsTrigger
            value="2"
            className="data-[state=active]:bg-white rounded-full min-h-14 max-h-14 py-6 px-4 text-lg flex items-center justify-center data-[state=active]:shadow-md"
          >
            Carne
          </TabsTrigger>
          <TabsTrigger
            value="3"
            className="data-[state=active]:bg-white rounded-full min-h-14 max-h-14 py-6 px-4 text-lg flex items-center justify-center data-[state=active]:shadow-md"
          >
            Pollo
          </TabsTrigger>
          <TabsTrigger
            value="4"
            className="data-[state=active]:bg-white rounded-full min-h-14 max-h-14 py-6 px-4 text-lg flex items-center justify-center data-[state=active]:shadow-md"
          >
            Otros
          </TabsTrigger>
        </TabsList>

        {/* Contenido de la pestaña "Todo" */}
        <TabsContent value="1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {limitedItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        {/* Pestaña "Carne" */}
        <TabsContent value="2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {menuData.beefBurgers.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        {/* Pestaña "Pollo" */}
        <TabsContent value="3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {menuData.chickenBurgers.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        {/* Pestaña "Otros" */}
        <TabsContent value="4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {[...menuData.fries, ...menuData.drinks].map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Novedades;
