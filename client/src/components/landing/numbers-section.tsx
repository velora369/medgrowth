import { companyNumbers } from "@/lib/landing-data";
import { useCounter } from "@/hooks/use-counter";
import { Eyebrow, Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

function MetricCounter({
  target,
  prefix,
  suffix,
  format,
  label,
  sub,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
  label: string;
  sub: string;
}) {
  const { ref, display } = useCounter({ target, prefix, suffix, format });

  return (
    <div className="mg-num-item">
      <strong ref={ref}>{display}</strong>
      <span className="mg-num-label">{label}</span>
      <span className="mg-num-sub">{sub}</span>
    </div>
  );
}

export default function NumbersSection() {
  return (
    <SectionContainer id="numeros" dark>
      <div className="mg-numbers-head">
        <Reveal>
          <Eyebrow>Nossos números</Eyebrow>
          <SectionTitle>Prova que sustenta cada promessa.</SectionTitle>
        </Reveal>
        <Reveal delay={100}>
          <SectionLead className="mg-on-dark">
            Resultados reais de médicos e clínicas — com contexto, período e autorização.
          </SectionLead>
        </Reveal>
      </div>
      <div className="mg-numbers-row">
        {companyNumbers.map((n, i) => (
          <Reveal key={n.label + n.sub} delay={i * 80}>
            <MetricCounter
              target={n.target}
              prefix={n.prefix}
              suffix={n.suffix}
              format={"format" in n ? n.format : undefined}
              label={n.label}
              sub={n.sub}
            />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
