import { portfolioItems } from "@/lib/landing-data";
import { ExternalLink } from "lucide-react";
import { Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

export default function LandingPortfolio() {
  return (
    <SectionContainer id="portfolio" className="mg-section--cream">
      <Reveal>
        <SectionTitle>Portfólio</SectionTitle>
        <SectionLead>
          Sites e identidades digitais que traduzem autoridade médica em experiência premium.
        </SectionLead>
      </Reveal>

      <div className="mg-portfolio-grid">
        {portfolioItems.map((item, i) => (
          <Reveal key={item.title} className="mg-portfolio-card" delay={i * 70}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="mg-portfolio-image">
              <img src={item.image} alt={`Site ${item.title}`} loading="lazy" />
              <span className="mg-portfolio-hover">
                Ver projeto <ExternalLink size={16} />
              </span>
            </a>
            <div className="mg-portfolio-body">
              <h3>{item.title}</h3>
              <p className="mg-portfolio-tag">{item.specialty}</p>
              <p>{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
