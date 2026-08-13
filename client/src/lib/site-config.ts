export const WHATSAPP_NUMBER = "5561996301406";

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const NAV_LINKS = [
  { label: "Nossa história", href: "#historia" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Cases", href: "#cases" },
  { label: "FAQ", href: "#faq" },
] as const;

export const INSTAGRAM_URL =
  "https://www.instagram.com/medgrowthmkt/?utm_source=ig_web_button_share_sheet";

export const CONTACT_EMAIL = "contato@medgrowthmkt.com";
