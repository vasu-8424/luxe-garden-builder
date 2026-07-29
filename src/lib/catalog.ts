import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import pIndoor from "@/assets/p-indoor.jpg";
import pOutdoor from "@/assets/p-outdoor.jpg";
import pCeramic from "@/assets/p-ceramic.jpg";
import pStands from "@/assets/p-stands.jpg";
import sIndoor from "@/assets/s-indoor.jpg";
import sLandscape from "@/assets/s-landscape.jpg";
import sTerrace from "@/assets/s-terrace.jpg";
import sMaintenance from "@/assets/s-maintenance.jpg";
import cta from "@/assets/cta.jpg";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";

export const IMG = {
  hero,
  about,
  pIndoor,
  pOutdoor,
  pCeramic,
  pStands,
  sIndoor,
  sLandscape,
  sTerrace,
  sMaintenance,
  cta,
  before,
  after,
  g1,
  g2,
  g3,
  g4,
  g5,
  g6,
};

export type Product = {
  title: string;
  copy: string;
  image: string;
  span?: "wide" | "tall";
};

export const PRODUCTS: Product[] = [
  {
    title: "Indoor Plants",
    copy: "Sculptural foliage selected for Indian interiors and low-light rooms.",
    image: pIndoor,
    span: "tall",
  },
  {
    title: "Outdoor Plants",
    copy: "Palms, ornamentals and hedging grown for Bengaluru's climate.",
    image: pOutdoor,
  },
  {
    title: "Ceramic Pots",
    copy: "Hand-glazed planters in cream, olive and stone finishes.",
    image: pCeramic,
  },
  {
    title: "Plastic Pots",
    copy: "Lightweight, UV-stable planters for terraces and balconies.",
    image: g3,
  },
  {
    title: "Granite Fibre Pots",
    copy: "Stone-textured, weather-proof planters at architectural scale.",
    image: g2,
    span: "wide",
  },
  {
    title: "Decorative Plant Stands",
    copy: "Teak and blackened-metal stands that lift greenery into the room.",
    image: pStands,
  },
  {
    title: "Hanging Pots",
    copy: "Suspended planting for balconies, courtyards and atria.",
    image: g1,
    span: "tall",
  },
  {
    title: "Organic Manure",
    copy: "Vermicompost and enriched blends for long-term soil health.",
    image: sMaintenance,
  },
  {
    title: "Cocopeat",
    copy: "Graded, washed cocopeat blocks for potting and propagation.",
    image: g6,
  },
  {
    title: "Organic Plant Protection",
    copy: "Neem-based and biological solutions — effective, chemical-light.",
    image: g5,
  },
];

export type Service = {
  title: string;
  copy: string;
  image: string;
  points: string[];
};

export const SERVICES: Service[] = [
  {
    title: "Indoor Garden Setup",
    copy: "Living walls, atrium planting and statement foliage composed around your interior palette, with light mapping and irrigation planned before a single pot is placed.",
    image: sIndoor,
    points: ["Light & humidity study", "Planter specification", "Installation & styling"],
  },
  {
    title: "Outdoor Garden Setup",
    copy: "Driveways, entrances and lawns planted with structure and restraint, using species that hold their form through Bengaluru's monsoon and dry months alike.",
    image: pOutdoor,
    points: ["Soil preparation", "Species layering", "Drainage & irrigation"],
  },
  {
    title: "Garden Design",
    copy: "Considered drawings before construction — circulation, sightlines, planting rhythm and lighting resolved on paper so the finished garden feels inevitable.",
    image: sLandscape,
    points: ["Concept & masterplan", "Planting palette", "Lighting design"],
  },
  {
    title: "Landscaping",
    copy: "Full-scope execution of hardscape and softscape: paving, retaining, water features, lawns and mature planting, delivered by our own site teams.",
    image: after,
    points: ["Hardscape & paving", "Lawn & turf", "Water features"],
  },
  {
    title: "Garden Maintenance",
    copy: "Contracted upkeep with documented schedules — pruning cycles, feeding, pest management and seasonal replanting that keep a garden at its intended peak.",
    image: sMaintenance,
    points: ["Monthly & annual plans", "Seasonal replanting", "Site reporting"],
  },
  {
    title: "Plant Maintenance",
    copy: "Care programmes for indoor collections in homes, offices and hotels, including rotation, cleaning, feeding and immediate replacement of underperformers.",
    image: g5,
    points: ["Rotation & cleaning", "Nutrition programme", "Free replacements"],
  },
  {
    title: "Re-potting",
    copy: "Root inspection, medium refresh and planter upgrades handled on site with clean sheeting, correct substrate and zero disruption to your space.",
    image: sTerrace,
    points: ["Root health check", "Substrate refresh", "Planter upgrade"],
  },
  {
    title: "Organic Solutions",
    copy: "Soil-first gardening using vermicompost, cocopeat and biological plant protection, so your garden stays safe for children, pets and pollinators.",
    image: g6,
    points: ["Compost programme", "Bio pest control", "Soil testing"],
  },
];

export type GalleryItem = {
  image: string;
  title: string;
  category: string;
  ratio: "tall" | "square" | "wide";
};

export const GALLERY: GalleryItem[] = [
  { image: hero, title: "Nursery Walk, Rajarajeshwari Nagar", category: "Outdoor", ratio: "wide" },
  { image: g1, title: "Balcony Grass Garden", category: "Terrace", ratio: "tall" },
  { image: g2, title: "Villa Entrance Planting", category: "Luxury Villas", ratio: "square" },
  { image: g3, title: "Corporate Lobby Installation", category: "Commercial", ratio: "tall" },
  { image: sTerrace, title: "Rooftop Terrace Deck", category: "Terrace", ratio: "wide" },
  { image: sIndoor, title: "Living Wall, Private Residence", category: "Indoor", ratio: "wide" },
  { image: g4, title: "Resort Poolside Landscape", category: "Commercial", ratio: "wide" },
  { image: g5, title: "Botanical Study", category: "Indoor", ratio: "tall" },
  { image: after, title: "Backyard Transformation", category: "Residential", ratio: "wide" },
  { image: g6, title: "Courtyard Zen Garden", category: "Residential", ratio: "square" },
  { image: sLandscape, title: "Formal Courtyard, Luxury Villa", category: "Luxury Villas", ratio: "wide" },
  { image: pOutdoor, title: "Driveway Palm Avenue", category: "Outdoor", ratio: "tall" },
];

export const GALLERY_CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Terrace",
  "Indoor",
  "Outdoor",
  "Luxury Villas",
];

export const PROJECTS = [
  {
    title: "Aranya Villa",
    location: "Kanakapura Road, Bengaluru",
    scope: "Landscape masterplan · 6,200 sq ft",
    image: sLandscape,
    year: "2024",
  },
  {
    title: "Skyline Terrace Residences",
    location: "Rajarajeshwari Nagar",
    scope: "Rooftop garden · 2,400 sq ft",
    image: sTerrace,
    year: "2024",
  },
  {
    title: "Meridian Tech Park",
    location: "Mysore Road, Bengaluru",
    scope: "Lobby & atrium planting",
    image: g3,
    year: "2023",
  },
  {
    title: "The Grove Resort",
    location: "Nandi Hills",
    scope: "Poolside landscape · 1.2 acres",
    image: g4,
    year: "2023",
  },
  {
    title: "Casa Verde",
    location: "Kengeri, Bengaluru",
    scope: "Backyard transformation",
    image: after,
    year: "2022",
  },
  {
    title: "Nivas Courtyard Home",
    location: "Banashankari",
    scope: "Internal courtyard garden",
    image: g6,
    year: "2022",
  },
];
