export type WorkMedia =
  | { type: "image"; src: string }
  | { type: "video"; src: string }

export type WorkProject = {
  id: string
  title: string
  subtitle: string
  category: "Brand Identity" | "Visual Design" | "Packaging Design"
  year: string
  client: string
  role: string
  summary: string
  challenge: string
  solution: string
  highlights: string[]
  media: WorkMedia | WorkMedia[]
  color: string
}

export const works: WorkProject[] = [
  {
    id: "ancient-history-buff",
    title: "Ancient History Buff",
    subtitle: "Educational brand identity",
    category: "Brand Identity",
    year: "2024",
    client: "Jane (YouTube) — Upwork 5-star",
    role: "Brand & visual designer",
    summary:
      "A bold identity for an education-focused brand that makes history feel current, curious, and shareable.",
    challenge:
      "The brand needed to feel scholarly without looking dated, and work across social thumbnails, course graphics, and promo layouts.",
    solution:
      "Built a flexible mark, warm typographic hierarchy, and a graphic system inspired by archival textures and modern editorial layout.",
    highlights: [
      "Logo suite for digital and print",
      "Social-ready brand templates",
      "Cohesive color and type system",
      "5-star Upwork rating from Jane (YouTube)",
    ],
    media: {
      type: "image",
      src: "/services/brand-identity/ancient-history-buff.png",
    },
    color: "from-amber-500/20 to-orange-600/20",
  },
  {
    id: "cafe-day",
    title: "Cafe Day",
    subtitle: "Hospitality branding",
    category: "Brand Identity",
    year: "2024",
    client: "Cafe Day",
    role: "Brand designer",
    summary:
      "Friendly, inviting brand visuals for a cafe concept built around everyday comfort and strong recall.",
    challenge:
      "Stand out in a crowded coffee category while keeping the identity approachable for menus, signage, and packaging.",
    solution:
      "Developed a rounded visual language, appetizing color palette, and layouts that read clearly at a glance.",
    highlights: [
      "Logo and brand mark exploration",
      "Menu and promo applications",
      "Warm, hospitality-led art direction",
    ],
    media: { type: "image", src: "/services/brand-identity/cafe-day.png" },
    color: "from-rose-500/20 to-amber-500/20",
  },
  {
    id: "smartlayers",
    title: "SmartLayers",
    subtitle: "Tech brand identity",
    category: "Brand Identity",
    year: "2024",
    client: "SmartLayers",
    role: "Visual identity designer",
    summary:
      "Clean, product-led branding for a technology brand that values clarity, structure, and modern simplicity.",
    challenge:
      "Communicate innovation and reliability in a visual system that scales from app UI to marketing decks.",
    solution:
      "Created a geometric logo direction, disciplined grid-based layouts, and a cool-toned palette with sharp contrast.",
    highlights: [
      "Scalable logo system",
      "Deck and UI-ready templates",
      "Minimal, product-first aesthetic",
    ],
    media: { type: "image", src: "/services/brand-identity/smartlayers.png" },
    color: "from-sky-500/20 to-indigo-500/20",
  },
  {
    id: "yardvis",
    title: "Yardvis",
    subtitle: "Outdoor lifestyle brand",
    category: "Brand Identity",
    year: "2024",
    client: "Yardvis",
    role: "Brand designer",
    summary:
      "Fresh identity for an outdoor lifestyle brand balancing nature, utility, and contemporary retail appeal.",
    challenge:
      "Capture an active, outdoorsy spirit while keeping the brand polished enough for ecommerce and packaging.",
    solution:
      "Used organic shapes, confident typography, and versatile patterns that work on tags, ads, and social content.",
    highlights: [
      "Retail-ready brand lockups",
      "Pattern and icon support",
      "Campaign-friendly layouts",
    ],
    media: [
      { type: "image", src: "https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2F1b7a700119d345e0ab0360d4dd002d6f?format=webp&width=800&height=1200" },
      { type: "image", src: "/services/brand-identity/yardvis.png" },
      { type: "image", src: "https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2F432d6f8de25b4e488b501234e044a375?format=webp&width=800&height=1200" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "social-media",
    title: "Social Media",
    subtitle: "Reels & feed creative",
    category: "Visual Design",
    year: "2024",
    client: "Brand campaigns",
    role: "Social & visual designer",
    summary:
      "Short-form social content built for feeds and reels—bold visuals, fast pacing, and brand consistency across posts.",
    challenge:
      "Capture attention in the first second while keeping messaging clear across Instagram, reels, and paid social placements.",
    solution:
      "Designed motion-led frames with strong hooks, readable type, and a visual rhythm tuned for vertical and square formats.",
    highlights: [
      "Reel-ready motion content",
      "Feed-optimized layouts",
      "On-brand social templates",
    ],
    media: [
      { type: "video", src: "/api/visual-media/explore-01.mp4" },
      { type: "image", src: "https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2F48ffba7a155f48f1b02298ed6bd8306b?format=webp&width=800&height=1200" },
    ],
    color: "from-primary/25 to-accent/20",
  },
  {
    id: "visual-campaign-one",
    title: "Visual Campaign I",
    subtitle: "Motion graphics",
    category: "Visual Design",
    year: "2024",
    client: "Campaign concept",
    role: "Motion designer",
    summary:
      "Dynamic motion graphics built for digital campaigns—focused on impact, clarity, and scroll-stopping frames.",
    challenge:
      "Deliver a polished motion piece that feels premium on mobile feeds and widescreen placements alike.",
    solution:
      "Combined layered compositions, subtle camera moves, and brand accents timed to a quick, confident beat.",
    highlights: [
      "Keyframe animation",
      "Campaign-ready exports",
      "Mobile-first framing",
    ],
    media: { type: "video", src: "/api/visual-media/visual-project-1.mp4" },
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    id: "solera-hair-masque",
    title: "Solera Hair Masque",
    subtitle: "Beauty packaging",
    category: "Packaging Design",
    year: "2024",
    client: "Solera",
    role: "Packaging designer",
    summary:
      "Luxury hair care packaging that feels spa-grade on shelf and trustworthy in hand.",
    challenge:
      "Balance premium cues with legible product claims and a distinctive silhouette among beauty competitors.",
    solution:
      "Refined typography, soft tactile color story, and a layout that highlights benefits without clutter.",
    highlights: [
      "Primary pack design",
      "Shelf-forward hierarchy",
      "Beauty-led color story",
    ],
    media: [
      { type: "image", src: "/services/product-design/solera-hair-masque.png" },
      { type: "image", src: "https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2F501c8ac19d814437af14fff68d6f5240?format=webp&width=800&height=1200" },
    ],
    color: "from-stone-500/20 to-amber-600/20",
  },
  {
    id: "aya-body-butter",
    title: "aya. Body Butter",
    subtitle: "Skincare packaging",
    category: "Packaging Design",
    year: "2024",
    client: "aya.",
    role: "Packaging designer",
    summary:
      "Minimal skincare packaging with a calm, botanical personality and clean retail presence.",
    challenge:
      "Create a soft, modern look that still reads clearly in ecommerce thumbnails and in-store aisles.",
    solution:
      "Used generous whitespace, gentle type, and a restrained palette to signal nourishment and simplicity.",
    highlights: [
      "Label architecture",
      "Soft minimal art direction",
      "DTC-ready pack shots",
    ],
    media: [
      { type: "image", src: "/services/product-design/aya-body-butter.png" },
      { type: "image", src: "https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2F60b362eb3765456bbabf3cc918e9a00c?format=webp&width=800&height=1200" },
    ],
    color: "from-lime-500/20 to-emerald-500/20",
  },
  {
    id: "lumora-perfume",
    title: "Lumora Perfume",
    subtitle: "Fragrance packaging",
    category: "Packaging Design",
    year: "2024",
    client: "Lumora",
    role: "Packaging designer",
    summary:
      "Elegant fragrance packaging designed to feel luminous, refined, and gift-worthy.",
    challenge:
      "Convey luxury and mystery while keeping brand name and variant information instantly readable.",
    solution:
      "Layered finishes, serif-accented typography, and a composition that plays with light and depth.",
    highlights: [
      "Premium pack structure",
      "Giftable unboxing feel",
      "High-contrast typography",
    ],
    media: [
      { type: "image", src: "/services/product-design/lumora-perfume.png" },
      { type: "image", src: "https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2Fe923362137e846448b84701f9389268d?format=webp&width=800&height=1200" },
    ],
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    id: "livora-vitamins",
    title: "Livora Vitamins",
    subtitle: "Wellness packaging",
    category: "Packaging Design",
    year: "2024",
    client: "Livora",
    role: "Packaging designer",
    summary:
      "Trust-forward supplement packaging that balances clinical credibility with approachable wellness branding.",
    challenge:
      "Meet regulatory clarity needs while still feeling lifestyle-friendly on shelf and online.",
    solution:
      "Structured information hierarchy, confident sans-serif type, and a fresh health palette with clear iconography.",
    highlights: [
      "Compliance-friendly layout",
      "SKU-ready design system",
      "Wellness retail positioning",
    ],
    media: [
      { type: "image", src: "/services/product-design/livora-vitamins.png" },
      { type: "image", src: "https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2F4c9dd6625f2d40b3a47e301ed458ec00?format=webp&width=800&height=1200" },
    ],
    color: "from-green-500/20 to-teal-500/20",
  },
]

export function getWorkBySlug(slug: string): WorkProject | undefined {
  return works.find((w) => w.id === slug)
}

export function getNextWork(slug: string): WorkProject | null {
  const index = works.findIndex((w) => w.id === slug)
  if (index === -1) return null
  return works[(index + 1) % works.length]
}

export const worksByCategory = {
  "Brand Identity": works.filter((w) => w.category === "Brand Identity"),
  "Visual Design": works.filter((w) => w.category === "Visual Design"),
  "Packaging Design": works.filter((w) => w.category === "Packaging Design"),
} as const
