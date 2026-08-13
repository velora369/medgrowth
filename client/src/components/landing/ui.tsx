import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={cn("mg-reveal", visible && "mg-reveal--visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionContainer({
  children,
  className,
  id,
  dark,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("mg-section", dark ? "mg-section--dark" : "mg-section--light", className)}
    >
      <div className="mg-container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mg-eyebrow">{children}</p>;
}

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("mg-section-title", className)}>{children}</h2>;
}

export function SectionLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mg-section-lead", className)}>{children}</p>;
}
