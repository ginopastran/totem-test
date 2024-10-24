import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";
import { MenuItem } from "../../menuData";

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: MenuItem, quantity?: number) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: MenuItem, quantity: number = 1) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          // Incrementa la cantidad
          const updatedItems = currentItems.map((item) =>
            item.id === data.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
          set({ items: updatedItems });
        } else {
          // Agrega el nuevo producto con la cantidad especificada
          set({ items: [...currentItems, { ...data, quantity }] });
        }
        toast.success("Producto agregado al carrito");
      },
      removeItem: (id: number) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === id);

        if (!existingItem) return;

        if (existingItem.quantity > 1) {
          // Disminuye la cantidad
          const updatedItems = currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
          set({ items: updatedItems });
          toast.success("Cantidad actualizada en el carrito");
        } else {
          // Elimina el producto
          set({ items: currentItems.filter((item) => item.id !== id) });
          toast.success("Producto eliminado del carrito");
        }
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("Carrito vaciado");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
