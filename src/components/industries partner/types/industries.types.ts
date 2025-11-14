export type Series = "Closure" | "Private" | "Secluded" | "Mute";

export type IndustrySlug =
  | "business"
  | "education"
  | "healthcare-medical"
  | "military"
  | "government"
  | "hospitality"
  | "home-usage"
  | "kitchen";

export type IndustryItem = {
  slug: IndustrySlug;
  title: string;
  subtitle?: string;
  cardImage: string;          // thumbnail del grid
  hero: {
    title: string;            // “Business Partition Walls Made Simple”
    ctaLabel?: string;        // “Instant Estimate”
    ctaHref?: string;         // /estimate o lo que tengas
    background: string;       // imagen de fondo del hero
  };
  body: {
    heading: string;          // “Business Operable Wall System”
    paragraphs: string[];
    sideImage?: string;       // imagen de brochure/guide si aplica
    sideCtaLabel?: string;
    sideCtaHref?: string;
  };
  keyFeatures: { label: string; text: string }[];
  recommendations: {
    series: Series;
    image: string;
    estimateHref?: string;
    readMoreHref?: string;
    badges?: string[];        // urls de iconos si quieres mostrarlos
  }[];
  completedSystems: string[]; // urls de imágenes del carrusel
  keyAccounts: { name: string; logo: string }[];
};
