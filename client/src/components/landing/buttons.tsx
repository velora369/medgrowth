import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site-config";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  whatsappMessage?: string;
};

export function MgButton({
  children,
  className,
  variant = "primary",
  href,
  whatsappMessage,
  onClick,
  ...props
}: ButtonProps) {
  const isHash = href?.startsWith("#");
  const url = href ?? whatsappUrl(whatsappMessage);

  return (
    <a
      href={url}
      onClick={(e) => {
        if (isHash && href) {
          e.preventDefault();
          scrollTo(href);
        }
        onClick?.(e);
      }}
      target={!isHash && !href?.startsWith("mailto:") ? "_blank" : undefined}
      rel={!isHash ? "noopener noreferrer" : undefined}
      className={cn(
        "mg-btn",
        variant === "primary" && "mg-btn--primary",
        variant === "secondary" && "mg-btn--secondary",
        variant === "ghost" && "mg-btn--ghost",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({ top, behavior: "smooth" });
}
