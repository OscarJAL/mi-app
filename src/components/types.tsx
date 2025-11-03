export type ResourceItem = {
  title: string;
  href: string;
  category?: string;
};

export type ResourceSection = {
  id: string;
  title: string;
  items: ResourceItem[];
};
