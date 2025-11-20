import { GalleryItem, Product, ProductCategory } from "../types/canopies.type";


export const CATEGORIES: ProductCategory[] = [
  "Canopies",
  "Partition Walls",
  "Pergolas",
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Modulux C6SR00",
    category: "Canopies",
    description:
      'Aluminum canopy 6" profile 1 color, hanger rods, single insulated roof',
    priceRange: "$749.00 – $2,399.00",
    startingSize: "Starting at (2'x2' – 10'x20')",
    colors: ["#4B4B4B", "#FF5100", "#D0D0D0", "#777777", "#B8860B"],
    image:
      "https://images.pexels.com/photos/434645/pexels-photo-434645.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    name: "Modulux C6SR01",
    category: "Canopies",
    description:
      'Aluminum canopy 6" profile 2 colors, hanger rods, single insulated roof',
    priceRange: "$899.00 – $2,899.00",
    startingSize: "Starting at (2'x2' – 10'x20')",
    colors: ["#FF5100", "#F4B000", "#4B4B4B", "#D0D0D0"],
    image:
      "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Modulux C6SR02",
    category: "Canopies",
    description:
      'Aluminum canopy 6" profile open bottom, hanger rods, single insulated roof',
    priceRange: "$999.00 – $3,199.00",
    startingSize: "Starting at (2'x2' – 10'x20')",
    colors: ["#4B4B4B", "#C0C0C0", "#FF5100"],
    image:
      "https://images.pexels.com/photos/277630/pexels-photo-277630.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/373548/pexels-photo-373548.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Canopy project 1",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Canopy project 2",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/373549/pexels-photo-373549.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Canopy project 3",
  },
];
