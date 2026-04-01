export type Product = {
  id: string;
  name: string;
  slug: string;
  images: string[];
  description: string;
  features: string[];
  amazonLink: string;
  rating: number;
  reviewsCount: number;
  video?: {
    title: string;
    caption: string;
    poster: string;
    mp4Src?: string;
    embedSrc?: string;
    autoplay?: boolean;
  };
};

export const products: Product[] = [
  {
    id: "aura-car-diffuser",
    name: "Aura Clip Diffuser",
    slug: "aura-clip-diffuser",
    images: [
      "/images/products/aura-diffuser-1.svg",
      "/images/products/aura-diffuser-2.svg"
    ],
    description:
      "A sculpted diffuser clip designed to elevate everyday drives with a calm visual rhythm and a refined scent ritual.",
    features: [
      "Soft-touch finish with satin metallic core",
      "Universal vent fit for compact and premium cars",
      "Designed for daily gifting and elevated unboxing",
      "Minimal form that blends into premium interiors"
    ],
    amazonLink: "https://www.amazon.in/",
    rating: 4.8,
    reviewsCount: 1284,
    video: {
      title: "Aura in motion",
      caption:
        "Use a 10 to 20 second close-up product film here to show finish, vent fit, and the premium texture story.",
      poster: "/images/products/aura-diffuser-1.svg"
    }
  },
  {
    id: "lune-gift-set",
    name: "Lune Gift Set",
    slug: "lune-gift-set",
    images: [
      "/images/products/lune-gift-set-1.svg",
      "/images/products/lune-gift-set-2.svg"
    ],
    description:
      "A ready-to-gift lifestyle set curated for festive moments, return gifts, and tasteful home accents.",
    features: [
      "Premium boxed presentation with soft cream palette",
      "Balanced for festive gifting, housewarmings, and weddings",
      "Compact footprint for easy display and shipping",
      "Story-led packaging that feels personal and polished"
    ],
    amazonLink: "https://www.amazon.in/",
    rating: 4.9,
    reviewsCount: 842,
    video: {
      title: "Gift reveal film",
      caption:
        "Ideal for a short top-down unboxing clip with warm natural light and tactile packaging moments.",
      poster: "/images/products/lune-gift-set-1.svg"
    }
  },
  {
    id: "halo-desk-totem",
    name: "Halo Desk Totem",
    slug: "halo-desk-totem",
    images: [
      "/images/products/halo-desk-totem-1.svg",
      "/images/products/halo-desk-totem-2.svg"
    ],
    description:
      "A compact decor accent that adds warmth to desks, entry consoles, and side tables without visual clutter.",
    features: [
      "Weighted base with smooth matte profile",
      "Built for desks, shelves, and hospitality corners",
      "Works as a premium impulse purchase and gift",
      "Modern silhouette inspired by gallery objects"
    ],
    amazonLink: "https://www.amazon.in/",
    rating: 4.7,
    reviewsCount: 563,
    video: {
      title: "Desk styling loop",
      caption:
        "Drop in an optimized MP4 or embed here to highlight scale, silhouette, and how the piece sits in a styled space.",
      poster: "/images/products/halo-desk-totem-1.svg"
    }
  }
];

export const featuredProducts = products.slice(0, 3);

export const reviews = [
  {
    id: "1",
    name: "Aarushi Mehta",
    title: "Feels way more premium than the price suggests",
    quote:
      "The packaging, finish, and overall presentation felt like a boutique brand. It was an instant gift win.",
    rating: 5
  },
  {
    id: "2",
    name: "Karan Bedi",
    title: "Perfect for my car and my workspace",
    quote:
      "I bought one for my car and came back for the desk piece. The details are subtle, but that is exactly why it looks elevated.",
    rating: 5
  },
  {
    id: "3",
    name: "Nisha Kapoor",
    title: "A rare Amazon find that looks thoughtful",
    quote:
      "Most products online feel generic. This one felt curated, calm, and polished from unboxing to everyday use.",
    rating: 5
  }
];

export const useCases = [
  {
    title: "Gift With Intent",
    description:
      "Designed to feel personal and elevated for birthdays, festive gifting, and return favors."
  },
  {
    title: "Car Interior Upgrade",
    description:
      "Adds softness and sophistication to daily drives without competing with your interior."
  },
  {
    title: "Desk And Shelf Styling",
    description:
      "Small-footprint accents that help your workspace or home feel finished, not crowded."
  }
];
