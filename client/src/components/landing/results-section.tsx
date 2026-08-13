import { doctorResults } from "@/lib/landing-data";
import { ResultEvolutionDialog } from "./result-evolution-dialog";
import { Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

export default function ResultsSection() {
  return (
    <SectionContainer id="cases" className="mg-section--white">
      <Reveal>
        <SectionTitle>Resultados por cliente</SectionTitle>
        <SectionLead>
          Diferentes especialidades, objetivos e prazos — mesma metodologia aplicada com rigor.
        </SectionLead>
      </Reveal>

      <div className="mg-results-grid">
        {doctorResults.map((doc, i) => (
          <Reveal key={doc.name} className="mg-result-card" delay={i * 90}>
            <div className="mg-result-media">
              <img src={doc.image} alt={`Perfil Instagram — ${doc.name}`} loading="lazy" />
            </div>
            <div className="mg-result-body">
              <h3>{doc.name}</h3>
              <p className="mg-result-specialty">{doc.specialty}</p>
              <p className="mg-result-goal">{doc.goal}</p>
              <div className="mg-result-metrics">
                <div>
                  <strong>{doc.metric}</strong>
                  <span>seguidores / {doc.period}</span>
                </div>
                <div>
                  <strong>{doc.views}</strong>
                  <span>alcance orgânico</span>
                </div>
              </div>
              <ResultEvolutionDialog doctor={doc} />
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
