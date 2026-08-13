import { methodologySteps } from "@/lib/landing-data";
import { MgButton } from "./buttons";
import { Eyebrow, Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

export default function MethodologySection() {
  return (
    <SectionContainer id="metodologia" dark className="mg-method-section">
      <Reveal className="mg-text-center">
        <Eyebrow>Metodologia</Eyebrow>
        <SectionTitle>Processo claro. Resultado consistente.</SectionTitle>
        <SectionLead className="mg-on-dark mg-mx-auto">
          Quatro etapas que transformam diagnóstico em crescimento mensurável.
        </SectionLead>
      </Reveal>

      <div className="mg-steps">
        {methodologySteps.map((step, i) => (
          <Reveal key={step.num} className="mg-step" delay={i * 90}>
            <span className="mg-step-num">{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mg-text-center mg-mt-10" delay={200}>
        <MgButton href="#contato">Quero entender meu próximo passo</MgButton>
      </Reveal>
    </SectionContainer>
  );
}
