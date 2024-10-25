// menuData.ts

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const beefBurgers: MenuItem[] = [
  {
    id: 1,
    name: "Big Mac",
    description:
      "Dos jugosas carnes de res, salsa especial, lechuga crujiente, queso americano, pepinillos y cebolla en pan con semillas de sésamo.",
    price: 5.99,
    imageUrl: "/burgers/carne/doble-con-queso.png",
  },
  {
    id: 2,
    name: "Cuarto de Libra con Queso",
    description:
      "Carne de res de 113 gramos, queso derretido, cebolla fresca, pepinillos y mostaza en pan clásico.",
    price: 6.49,
    imageUrl: "/burgers/carne/cuarto-de-libra.png",
  },
  {
    id: 3,
    name: "Hamburguesa Doble con Queso",
    description:
      "Dos carnes de res sazonadas, queso derretido, pepinillos, cebolla picada, ketchup y mostaza.",
    price: 4.99,
    imageUrl: "/burgers/carne/doble-con-queso.png",
  },
  {
    id: 4,
    name: "McDouble",
    description:
      "Dos carnes de res, una rebanada de queso, pepinillos, cebolla, ketchup y mostaza.",
    price: 3.99,
    imageUrl: "/burgers/carne/cuarto-de-libra.png",
  },
  {
    id: 5,
    name: "Hamburguesa Simple",
    description:
      "Carne de res sazonada, pepinillos, cebolla picada, ketchup y mostaza en pan suave.",
    price: 2.49,
    imageUrl: "/burgers/carne/simple.png",
  },
];

export const chickenBurgers: MenuItem[] = [
  {
    id: 6,
    name: "McChicken",
    description:
      "Filete de pollo empanizado, lechuga fresca y mayonesa en pan tostado.",
    price: 4.49,
    imageUrl: "/burgers/pollo/mcchicken.png",
  },
  {
    id: 7,
    name: "McCrispy",
    description:
      "Pollo crujiente, lechuga fresca y mayonesa en pan brioche tostado.",
    price: 5.49,
    imageUrl: "/burgers/pollo/mccrispy.png",
  },
  {
    id: 8,
    name: "Chicken McNuggets (10 piezas)",
    description:
      "Tiernos trozos de pollo empanizados y fritos hasta quedar dorados.",
    price: 5.99,
    imageUrl: "/burgers/pollo/mcnuggets.png",
  },

  {
    id: 10,
    name: "Chicken Deluxe",
    description:
      "Pechuga de pollo empanizada, tomate, lechuga y mayonesa en pan artesanal.",
    price: 6.49,
    imageUrl: "/burgers/pollo/chickendeluxe.png",
  },
];

export const fries: MenuItem[] = [
  {
    id: 11,
    name: "Papas Fritas Pequeñas",
    description: "Clásicas papas fritas doradas y crujientes.",
    price: 1.99,
    imageUrl: "/papas.png",
  },
  {
    id: 12,
    name: "Papas Fritas Medianas",
    description: "Papas fritas doradas y crujientes en tamaño mediano.",
    price: 2.49,
    imageUrl: "/papas.png",
  },
  {
    id: 13,
    name: "Papas Fritas Grandes",
    description: "Nuestra porción más grande de papas fritas crujientes.",
    price: 2.99,
    imageUrl: "/papas.png",
  },
  // {
  //   id: 14,
  //   name: "Papas Deluxe",
  //   description: "Papas cortadas en gajos sazonadas con especias.",
  //   price: 3.49,
  //   imageUrl: "/hamburguesa-1.png",
  // },
];

export const drinks: MenuItem[] = [
  {
    id: 15,
    name: "Coca-Cola",
    description: "Refresco clásico disponible en diferentes tamaños.",
    price: 1.49,
    imageUrl: "/bebidas/coca.png",
  },
  {
    id: 16,
    name: "Fanta Naranja",
    description: "Refresco sabor naranja, dulce y burbujeante.",
    price: 1.49,
    imageUrl: "/bebidas/fanta.png",
  },
  {
    id: 17,
    name: "Sprite",
    description: "Refresco limón-lima refrescante.",
    price: 1.49,
    imageUrl: "/bebidas/sprite.png",
  },
];

export const boxes: MenuItem[] = [
  {
    id: 20,
    name: "Cajita feliz grande",
    description:
      "Nuestra Cajita Feliz en tamaño grande con más de tus favoritos.",
    price: 2.99,
    imageUrl: "/cajitas/cajita-feliz-grande.png",
  },
  {
    id: 21,
    name: "Cajita feliz Opt 2",
    description:
      "Una opción alternativa de Cajita Feliz con deliciosas selecciones.",
    price: 2.99,
    imageUrl: "/cajitas/cajita-feliz-op-2.png",
  },
  {
    id: 22,
    name: "Cajita feliz juguete",
    description: "Incluye un juguete especial junto con una deliciosa comida.",
    price: 3.99,
    imageUrl: "/cajitas/cajita-feliz-mas-juguete.png",
  },
];

export const salads: MenuItem[] = [
  {
    id: 23,
    name: "Ensalada de lechuga",
    description:
      "Fresca ensalada de lechuga crujiente para una opción ligera y saludable.",
    price: 2.99,
    imageUrl: "/ensaladas/lechuga.png",
  },
  {
    id: 24,
    name: "Ensalada de tomate",
    description:
      "Deliciosa ensalada de tomates jugosos, ideal como acompañamiento.",
    price: 2.99,
    imageUrl: "/ensaladas/tomate.png",
  },
];

export const icecreams: MenuItem[] = [
  {
    id: 25,
    name: "Sundae",
    description:
      "Delicioso helado Sundae con cobertura de chocolate o caramelo.",
    price: 2.99,
    imageUrl: "/helados/helado.png",
  },
  {
    id: 26,
    name: "McFlurry",
    description: "Cremoso McFlurry mezclado con tus dulces favoritos.",
    price: 2.99,
    imageUrl: "/helados/mcflurry.png",
  },
];

export const coffee: MenuItem[] = [
  {
    id: 27,
    name: "Café Premium Roast",
    description: "Café caliente recién hecho, 100% arábica.",
    price: 1.99,
    imageUrl: "/mccafe1.png",
  },
];

export const menuData = {
  beefBurgers,
  chickenBurgers,
  fries,
  drinks,
  boxes,
  salads,
  icecreams,
  coffee,
};
