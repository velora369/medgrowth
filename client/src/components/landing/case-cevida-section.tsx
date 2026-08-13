import { cevidaMetrics } from "@/lib/landing-data";
import CaseCevidaChart from "./case-cevida-chart";
import { MgButton } from "./buttons";
import { Eyebrow, Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

export default function CaseCevidaSection() {
  return (
    <SectionContainer id="case-cevida" className="mg-section--cream">
      <Reveal>
        <Eyebrow>Case em destaque</Eyebrow>
        <SectionTitle>Resultado não é opinião. É número com contexto.</SectionTitle>
        <SectionLead>
          Campanha de aquisição para Cevida Diagnósticos — tráfego qualificado convertido em conversas reais no WhatsApp.
        </SectionLead>
      </Reveal>

      <div className="mg-case-grid">
        <Reveal className="mg-case-visual" delay={100}>
          <CaseCevidaChart />
        </Reveal>

        <Reveal className="mg-case-content" delay={180}>
          <p className="mg-case-kicker">Cevida Diagnósticos</p>
          <h3 className="mg-case-heading">
            De investimento enxuto a conversas qualificadas todos os dias.
          </h3>
          <p className="mg-case-text">
            Estratégia de tráfego pago com landing otimizada e funil de WhatsApp — prova de que marketing médico gera demanda mensurável.
          </p>
          <div className="mg-metrics-grid">
            {cevidaMetrics.map((m) => (
              <div key={m.label} className="mg-metric">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
          <MgButton href="#contato" className="mg-mt-6">
            Quero resultados com estratégia
          </MgButton>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
