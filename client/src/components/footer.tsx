import { MedGrowthLogo } from "@/components/landing/logo";
import { scrollTo } from "@/components/landing/buttons";
import { CONTACT_EMAIL, INSTAGRAM_URL, NAV_LINKS, whatsappUrl } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mg-footer">
      <div className="mg-container mg-footer-grid">
        <div>
          <MedGrowthLogo variant="amber" />
          <p className="mg-mt-6">
            Medicina no DNA. Marketing na estratégia. Especialistas em crescimento digital para médicos e clínicas.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button type="button" onClick={() => scrollTo(link.href)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Soluções</h4>
          <ul>
            <li>Posicionamento e Conteúdo</li>
            <li>Aquisição e Conversão</li>
            <li>Tecnologia e IA</li>
            <li>Produto 360 Médico</li>
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <ul>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mg-container mg-footer-bottom">
        <p>© {year} Med Growth. Todos os direitos reservados.</p>
        <p>Política de Privacidade · Termos de Uso</p>
      </div>
    </footer>
  );
}
