import { solutions } from "@/lib/landing-data";
import { MgButton } from "./buttons";
import { Eyebrow, Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

export default function SolutionsSection() {
  return (
    <SectionContainer id="solucoes" className="mg-section--cream">
      <Reveal>
        <Eyebrow>Soluções</Eyebrow>
        <SectionTitle>Um ecossistema integrado — não um cardápio solto.</SectionTitle>
        <SectionLead>
          Três pilares conectados por estratégia, execução e tecnologia aplicada à medicina.
        </SectionLead>
      </Reveal>

      <div className="mg-solutions-grid">
        {solutions.map((sol, i) => (
          <Reveal key={sol.title} className="mg-solution-card" delay={i * 80}>
            <h3>{sol.title}</h3>
            <p className="mg-solution-summary">{sol.summary}</p>
            <ul>
              {sol.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <MgButton variant="ghost" href="#contato">
              Conversar com um especialista
            </MgButton>
          </Reveal>
        ))}
      </div>

      <Reveal className="mg-product-360" delay={200}>
        <div>
          <p className="mg-eyebrow">Produto 360 Médico</p>
          <h3>Tudo conectado: posicionamento, aquisição e tecnologia em uma operação só.</h3>
          <p>
            Para quem quer crescer com consistência — do conteúdo ao tráfego, do site à IA — sem fragmentar fornecedores.
          </p>
        </div>
        <MgButton whatsappMessage="Olá! Quero saber mais sobre o Produto 360 Médico.">
          Solicitar diagnóstico
        </MgButton>
      </Reveal>
    </SectionContainer>
  );
}
