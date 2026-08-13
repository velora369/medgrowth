import { cn } from "@/lib/utils";

const LOGO_SRC = "/logos/medgrowth-logo.png";

type LogoProps = {
  className?: string;
  variant?: "amber" | "navy";
  showWordmark?: boolean;
};

export function MedGrowthLogo({ className }: LogoProps) {
  return (
    <img
      src={LOGO_SRC}
      alt="Med Growth"
      width={640}
      height={128}
      className={cn("mg-brand-logo", className)}
      decoding="async"
    />
  );
}
