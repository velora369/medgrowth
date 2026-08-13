import { clientLogos } from "@/lib/landing-data";
import { Reveal, SectionContainer } from "./ui";

function ClientLogoMark({ logo }: { logo: (typeof clientLogos)[number] }) {
  if (logo.image) {
    return (
      <img
        src={logo.image}
        alt={logo.name}
        loading="lazy"
        className={logo.imageClass}
      />
    );
  }

  return <span className="mg-logo-wordmark">{logo.wordmark ?? logo.name}</span>;
}

export default function ClientsSection() {
  const marqueeLogos = [...clientLogos, ...clientLogos];

  return (
    <SectionContainer id="clientes" className="mg-section--white mg-clients-strip">
      <Reveal>
        <p className="mg-clients-label">Estratégia aplicada a médicos e clínicas como</p>
      </Reveal>

      <div className="mg-logo-row" aria-label="Logos de clientes">
        {clientLogos.map((logo) => (
          <div key={logo.name} className="mg-logo-chip">
            <ClientLogoMark logo={logo} />
          </div>
        ))}
      </div>

      <div className="mg-logo-marquee" aria-hidden="true">
        <div className="mg-logo-track">
          {marqueeLogos.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="mg-logo-chip">
              <ClientLogoMark logo={logo} />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
