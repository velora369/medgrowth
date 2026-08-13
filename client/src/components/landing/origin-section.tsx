import { MgButton } from "./buttons";
import { Eyebrow, Reveal, SectionContainer, SectionTitle } from "./ui";

const timeline = [
  { year: "Origem", title: "Dentro da medicina", text: "Fundadores crescem no universo médico — como família, formação e vocação." },
  { year: "O gap", title: "Excelência invisível", text: "Médicos excepcionais, mas sem presença digital à altura da prática clínica." },
  { year: "A solução", title: "Med Growth nasce", text: "Unir rigor científico ao marketing estratégico, com linguagem que o médico entende." },
  { year: "Hoje", title: "Posicionamento · Conteúdo · IA", text: "Estratégia integrada para médicos, clínicas e instituições em crescimento." },
];

export default function OriginSection() {
  return (
    <SectionContainer id="historia" className="mg-section--cream">
      <Reveal>
        <Eyebrow>Feito por quem cresceu dentro da medicina</Eyebrow>
        <SectionTitle>
          A gente entende a rotina médica antes mesmo de falar de marketing.
        </SectionTitle>
      </Reveal>
      <Reveal delay={100}>
        <p className="mg-body-text">
          A Med Growth não surgiu de uma agência genérica. Surgiu de dentro dos consultórios, das faculdades de medicina e da rotina de quem viveu a medicina de perto.
        </p>
        <p className="mg-body-text">
          Percebemos que os melhores médicos do Brasil — tecnicamente impecáveis — eram invisíveis no digital. Criamos a Med Growth para traduzir excelência clínica em autoridade online.
        </p>
      </Reveal>
      <Reveal delay={180}>
        <div className="mg-timeline">
          {timeline.map((item) => (
            <div key={item.year} className="mg-timeline-item">
              <span className="mg-timeline-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal delay={240}>
        <MgButton variant="ghost" href="#metodologia">
          Conhecer nosso método
        </MgButton>
      </Reveal>
    </SectionContainer>
  );
}
