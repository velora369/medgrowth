import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MedGrowthLogo } from "@/components/landing/logo";
import { MgButton, scrollTo } from "@/components/landing/buttons";
import { NAV_LINKS } from "@/lib/site-config";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const go = (href: string) => {
    scrollTo(href);
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`mg-header ${scrolled ? "mg-header--scrolled" : "mg-header--top"}`}>
        <div className="mg-container mg-header-inner">
          <button type="button" onClick={() => go("#hero")} aria-label="Med Growth — início">
            <MedGrowthLogo variant="amber" />
          </button>

          <nav className="mg-nav-desktop" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <button key={link.href} type="button" className="mg-nav-link" onClick={() => go(link.href)}>
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mg-header-actions">
            <MgButton className="mg-btn--primary mg-header-cta-desktop" href="#contato">
              Fale com a gente
            </MgButton>
            <button type="button" className="mg-menu-btn md:hidden" onClick={() => setMobileOpen(true)} aria-label="Abrir menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mg-mobile-menu ${mobileOpen ? "mg-mobile-menu--open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mg-mobile-menu-head">
          <MedGrowthLogo variant="amber" />
          <button type="button" className="mg-menu-btn" onClick={() => setMobileOpen(false)} aria-label="Fechar menu">
            <X size={24} />
          </button>
        </div>
        <nav className="mg-mobile-nav">
          {NAV_LINKS.map((link) => (
            <button key={link.href} type="button" onClick={() => go(link.href)}>
              {link.label}
            </button>
          ))}
        </nav>
        <div className="mg-mt-10">
          <MgButton className="mg-btn--block" href="#contato">
            Solicitar diagnóstico
          </MgButton>
        </div>
      </div>
    </>
  );
}
