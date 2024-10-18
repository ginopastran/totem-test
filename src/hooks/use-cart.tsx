import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import { MenuItem } from "../../menuData"; // Asegúrate de que la interfaz MenuItem está exportada desde aquí

interface CartStore {
  items: MenuItem[];
  addItem: (data: MenuItem) => void;
  removeItem: (id: number) => void; // Cambié id a number
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: MenuItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("El producto ya está en el carrito");
        }

        set({ items: [...get().items, data] });
        toast.success("Producto agregado al carrito");
      },
      removeItem: (id: number) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Producto eliminado del carrito");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
