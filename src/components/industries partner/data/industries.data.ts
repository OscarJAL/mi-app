import { IndustryItem } from "../types/industries.types";

export const INDUSTRIES: IndustryItem[] = [
  {
    slug: "business",
    title: "Business",
    cardImage: "/images/industries/business-thumb.jpg",
    hero: {
      title: "Business Partition Walls Made Simple",
      ctaLabel: "Instant Estimate",
      ctaHref: "/estimate",
      background: "/images/industries/business-hero.jpg",
    },
    body: {
      heading: "Business Operable Wall System",
      paragraphs: [
        "Why Businesses partner with Tudelü’s Operable Partition Walls In today’s fast-paced business environments, flexibility and adaptability are crucial. Whether it’s a startup optimizing a small office or a corporate HQ improving team collaboration, Tudelü’s operable wall systems deliver privacy, aesthetics and speed.",
        "These systems enable teams to quickly transform spaces, boosting productivity and supporting growth—without the cost or downtime of traditional construction."
      ],
      sideImage: "/images/industries/business-guide.jpg",
      sideCtaLabel: "Download The Guide",
      sideCtaHref: "/resources/business-guide.pdf",
    },
    keyFeatures: [
      { label: "Ease of Installation and Use", text: "Electric operation and intuitive controls minimize downtime and disruptions to your business operations." },
      { label: "Customizable Designs", text: "Choose finishes, colors and styles that complement your brand and interior decor." },
      { label: "Soundproofing Capabilities", text: "Systems like Mute are engineered for quiet, focus-driven environments and confidentiality." },
      { label: "Space Optimization", text: "Retractable solutions let you adapt rooms to fluctuating requirements within minutes." },
      { label: "Durability and Longevity", text: "Built with high-quality materials in the USA to perform for years to come." },
    ],
    recommendations: [
      { series: "Closure",  image: "/images/series/closure.png",  estimateHref: "/estimate?series=closure",  readMoreHref: "/products/closure" },
      { series: "Private",  image: "/images/series/private.png",  estimateHref: "/estimate?series=private",  readMoreHref: "/products/private" },
      { series: "Secluded", image: "/images/series/secluded.png", estimateHref: "/estimate?series=secluded", readMoreHref: "/products/secluded" },
    ],
    completedSystems: [
      "/images/completed/business-1.jpg",
      "/images/completed/business-2.jpg",
      "/images/completed/business-3.jpg",
      "/images/completed/business-4.jpg",
    ],
    keyAccounts: [
      { name: "Arizona DPS", logo: "/images/accounts/arizona-dps.png" },
      { name: "Michigan State University", logo: "/images/accounts/msu.png" },
      { name: "U.S. Army", logo: "/images/accounts/us-army.png" },
      { name: "U.S. Navy / Marines", logo: "/images/accounts/us-navy.png" },
      { name: "Holiday Inn Express", logo: "/images/accounts/holiday-inn.png" },
    ],
  },
]

 export const educationData: IndustryItem[] = [
 {
    slug: "education",
    title: "Education",
    cardImage: "/images/industries/education-thumb.jpg",
    hero: {
      title: "Education Spaces, Reconfigured Instantly",
      ctaLabel: "Instant Estimate",
      ctaHref: "/estimate",
      background: "/images/industries/education-hero.jpg",
    },
    body: {
      heading: "Education Operable Wall System",
      paragraphs: [
        "Adapt classrooms, libraries and multipurpose halls on demand, supporting group work, testing and events.",
        "Enhance focus with acoustic options while maintaining bright, modern aesthetics."
      ],
      sideImage: "/images/industries/education-guide.jpg",
      sideCtaLabel: "Download The Guide",
      sideCtaHref: "/resources/education-guide.pdf",
    },
    keyFeatures: [
      { label: "Fast Reconfiguration", text: "Switch layouts between classes in minutes, not days." },
      { label: "Acoustic Control", text: "Improve concentration during tests and lectures." },
      { label: "Brand & Wayfinding", text: "Colorways that match school identity." },
      { label: "Safety & Reliability", text: "Built for heavy daily use in high-traffic areas." },
      { label: "Facility Friendly", text: "Minimal impact to walls/ceilings, easy serviceability." },
    ],
    recommendations: [
      { series: "Private",  image: "/images/series/private.png",  estimateHref: "/estimate?series=private",  readMoreHref: "/products/private" },
      { series: "Mute",     image: "/images/series/mute.png",     estimateHref: "/estimate?series=mute",     readMoreHref: "/products/mute" },
      { series: "Closure",  image: "/images/series/closure.png",  estimateHref: "/estimate?series=closure",  readMoreHref: "/products/closure" },
    ],
    completedSystems: [
      "/images/completed/education-1.jpg",
      "/images/completed/education-2.jpg",
      "/images/completed/education-3.jpg",
    ],
    keyAccounts: [
      { name: "NYC DOE", logo: "/images/accounts/nyc-doe.png" },
      { name: "Harvard", logo: "/images/accounts/harvard.png" },
    ],
  },
]