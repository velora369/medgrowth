import { audienceProfiles } from "@/lib/landing-data";
import { Reveal, SectionContainer, SectionLead, SectionTitle } from "./ui";

export default function AudienceSection() {
  return (
    <SectionContainer id="para-quem" className="mg-section--white">
      <Reveal>
        <SectionTitle>Para quem é a Med Growth</SectionTitle>
        <SectionLead>
          Se você se reconhece em um desses perfis, a conversa começa aqui.
        </SectionLead>
      </Reveal>

      <div className="mg-audience-grid">
        {audienceProfiles.map((profile, i) => (
          <Reveal key={profile.title} className="mg-audience-card" delay={i * 60}>
            <h3>{profile.title}</h3>
            <p>{profile.need}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mg-audience-close" delay={200}>
        <p>
          Se você quer crescer sem terceirizar sua identidade, a conversa começa aqui.
        </p>
      </Reveal>
    </SectionContainer>
  );
}
