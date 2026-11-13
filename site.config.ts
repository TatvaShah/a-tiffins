import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "A Tiffins",
  tagline: "Kerala favourites and balanced meals, packed for your day.",
  category: "Kerala tiffin service",
  schemaType: "FoodEstablishment",
  area: "GTA, ON",
  siteUrl: "https://a-tiffins-ca.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#0c3c18" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "GTA tiffin box service",
    headline: "A little taste of home, packed for you",
    subhead: "Kerala favourites and balanced meals, Monday to Friday for lunch and dinner. Free delivery. Order on WhatsApp.",
    images: [
      { src: "/images/post-1.jpg", alt: "Chicken mandi rice with onion and lemon from A Tiffins" },
      { src: "/images/post-3.jpg", alt: "Kerala chicken fry from A Tiffins" },
      { src: "/images/post-4.jpg", alt: "Homestyle Kerala fish curry from A Tiffins" },
    ],
    primaryCta: { label: "Order on WhatsApp", href: "https://wa.me/14312789143" },
    secondaryCta: { label: "See the menu", href: "#menu" },
  },

  highlights: ["Kerala favourites", "Monday to Friday, lunch and dinner", "Free delivery", "Orders on WhatsApp"],

  about: {
    title: "Welcome to A Tiffins",
    body: [
      "A Tiffins is a GTA based, home-style tiffin service bringing Kerala favourites and balanced meals for busy workdays, late study sessions, and evenings when you would love a break from cooking.",
      "Lunch and dinner tiffin boxes are available Monday to Friday, with free delivery. Order by WhatsApp or Instagram DM.",
    ],
    image: { src: "/images/post-4.jpg", alt: "Homestyle Kerala fish curry from A Tiffins" },
  },

  menu: {
    label: "Menu",
    title: "What we cook",
    variant: "list",
    groups: [
      {
        title: "Kerala favourites",
        items: [
          { name: "Chicken mandi rice", description: "Seasoned chicken over mandi rice, with onion and lemon on the side." },
          { name: "Kerala fish curry", description: "Homestyle curry with aromatic spices and curry leaves." },
          { name: "Kerala chicken fry", description: "Crispy on the outside, juicy on the inside." },
          { name: "Egg puffs", description: "A complimentary treat for new customers." },
        ],
      },
    ],
    footnote: "A full menu, pricing and delivery areas will be shared as they are posted. Message to order.",
  },

  gallery: {
    title: "From the kitchen",
    items: [
      { src: "/images/post-1.jpg", alt: "Chicken mandi rice with onion and lemon from A Tiffins", caption: "Chicken mandi" },
      { src: "/images/post-3.jpg", alt: "Kerala chicken fry from A Tiffins", caption: "Chicken fry" },
      { src: "/images/post-4.jpg", alt: "Homestyle Kerala fish curry from A Tiffins", caption: "Fish curry" },
      { src: "/images/post-2.jpg", alt: "Egg puffs from A Tiffins", caption: "Egg puffs" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "a_tiffins_",
    embeds: [
      "https://www.instagram.com/p/DfnK57_RTPs/",
      "https://www.instagram.com/p/DfWDBD1tNiR/",
      "https://www.instagram.com/p/DfTETXCRdH5/",
    ],
  },

  order: {
    label: "How to order",
    title: "Order on WhatsApp",
    intro: "Tap the button to place an order on WhatsApp, or send a message on Instagram. Lunch and dinner tiffins are available Monday to Friday, with free delivery.",
    dmMessage: "Hi A Tiffins! I would like to order.\nLunch or dinner:\nDate needed:\nDelivery area:",
    headerCtaLabel: "DM to order",
    links: [{ label: "Order on WhatsApp", href: "https://wa.me/14312789143" }],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Order on WhatsApp at 431-278-9143, or send a message on Instagram." },
    { q: "Which days do you cook?", a: "Lunch and dinner tiffin boxes are available Monday to Friday." },
    { q: "Do you deliver?", a: "Yes. Delivery is free, as posted in the bio." },
  ],

  contact: {
    title: "Contact",
    area: "GTA, Ontario",
    phone: "431-278-9143",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/a_tiffins_/" }],
  },

  seo: {
    title: "A Tiffins | Kerala tiffin service in the GTA",
    description: "Home-style Kerala favourites and tiffin boxes in the GTA, Monday to Friday for lunch and dinner, with free delivery. Order on WhatsApp at 431-278-9143.",
    keywords: ["Kerala tiffin GTA", "tiffin box service", "A Tiffins"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
