import { Globe, Instagram, Megaphone, Palette, Bot, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-medgrowth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-medgrowth-dark" data-testid="services-title">
            Soluções Digitais que Geram Resultados Reais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-subtitle">
            Estratégias sob medida para médicos que buscam crescimento sustentável e autoridade digital
          </p>
        </div>

        {/* Featured Service - 360 Medical Package */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark p-8 rounded-2xl text-white text-center service-card" data-testid="featured-service">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Globe className="text-medgrowth-cyan w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Produto 360 Médico</h3>
            <p className="text-lg mb-6 opacity-90">
              Pacote completo: identidade visual, site, redes sociais, tráfego pago, branding e suporte contínuo
            </p>
            <a
              href="https://wa.me/5561996301406"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-medgrowth-cyan px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
              data-testid="featured-service-cta"
            >
              <span>Conhecer o 360 Médico</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all service-card" data-testid="service-social-media">
            <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <Instagram className="text-medgrowth-cyan w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Gestão de Redes Sociais</h3>
            <p className="text-muted-foreground text-sm">Engaje pacientes e construa autoridade digital de forma consistente e ética</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all service-card" data-testid="service-paid-traffic">
            <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <Megaphone className="text-medgrowth-cyan w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Tráfego Pago</h3>
            <p className="text-muted-foreground text-sm">Atraia pacientes qualificados imediatamente com campanhas otimizadas</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all service-card" data-testid="service-branding">
            <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <Palette className="text-medgrowth-cyan w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Branding e Identidade</h3>
            <p className="text-muted-foreground text-sm">Torne-se memorável no digital com identidade visual profissional</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all service-card" data-testid="service-ai-automation">
            <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
              <Bot className="text-medgrowth-cyan w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Automações com IA</h3>
            <p className="text-muted-foreground text-sm">Ganhe tempo com processos inteligentes e atendimento automatizado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
