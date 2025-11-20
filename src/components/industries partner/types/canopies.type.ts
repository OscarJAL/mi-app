export type ProductCategory = "Canopies" | "Partition Walls" | "Pergolas";

export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  description: string;
  priceRange: string;
  startingSize: string;
  colors: string[]; // hex
  image: string;
};

export type GalleryItem = {
  id: number;
  image: string;
  alt: string;
};
