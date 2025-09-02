import { Globe, Instagram, Megaphone, Palette, Bot, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const serviceDetails = {
    social: {
      title: "Gestão de Redes Sociais",
      description: "Transforme suas redes sociais em uma poderosa ferramenta de captação de pacientes e construção de autoridade médica.",
      benefits: [
        "Conteúdo educativo e profissional personalizado",
        "Estratégia de engajamento ético e responsável",
        "Gerenciamento completo de Instagram, Facebook e LinkedIn",
        "Relatórios mensais de performance e crescimento",
        "Calendário editorial médico especializado"
      ]
    },
    traffic: {
      title: "Tráfego Pago",
      description: "Atraia pacientes qualificados através de campanhas direcionadas que respeitam as diretrizes do CFM.",
      benefits: [
        "Campanhas no Google Ads e Facebook Ads",
        "Segmentação por localização e especialidade",
        "Landing pages otimizadas para conversão",
        "Monitoramento de ROI e custo por paciente",
        "Conformidade total com regulamentações médicas"
      ]
    },
    branding: {
      title: "Branding e Identidade",
      description: "Desenvolva uma marca médica forte e confiável que destaque sua expertise e inspire confiança nos pacientes.",
      benefits: [
        "Identidade visual profissional completa",
        "Logotipo e materiais gráficos personalizados",
        "Manual de marca e aplicações",
        "Posicionamento estratégico no mercado",
        "Diferenciação da concorrência"
      ]
    },
    ai: {
      title: "Automações com IA",
      description: "Otimize seu tempo e melhore o atendimento com automações inteligentes que respeitam a relação médico-paciente.",
      benefits: [
        "Chatbots para agendamento e dúvidas básicas",
        "Automação de follow-up pós-consulta",
        "Sistema de lembretes automáticos",
        "Análise de sentimento em feedbacks",
        "Relatórios automáticos de satisfação"
      ]
    }
  };

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
          <Dialog>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all service-card" data-testid="service-social-media">
              <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Instagram className="text-medgrowth-cyan w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Gestão de Redes Sociais</h3>
              <p className="text-muted-foreground text-sm mb-4">Engaje pacientes e construa autoridade digital de forma consistente e ética</p>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full" data-testid="learn-more-social">
                  Saiba Mais
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-w-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center">
                      <Instagram className="text-medgrowth-cyan w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-medgrowth-dark">{serviceDetails.social.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{serviceDetails.social.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-medgrowth-dark mb-4">O que está incluso:</h4>
                  <ul className="space-y-2">
                    {serviceDetails.social.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-medgrowth-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/5561996301406?text=Olá! Gostaria de saber mais sobre Gestão de Redes Sociais para médicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-medgrowth-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-full justify-center"
                  data-testid="social-media-whatsapp-cta"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all service-card" data-testid="service-paid-traffic">
              <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Megaphone className="text-medgrowth-cyan w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Tráfego Pago</h3>
              <p className="text-muted-foreground text-sm mb-4">Atraia pacientes qualificados imediatamente com campanhas otimizadas</p>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full" data-testid="learn-more-traffic">
                  Saiba Mais
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-w-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center">
                      <Megaphone className="text-medgrowth-cyan w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-medgrowth-dark">{serviceDetails.traffic.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{serviceDetails.traffic.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-medgrowth-dark mb-4">O que está incluso:</h4>
                  <ul className="space-y-2">
                    {serviceDetails.traffic.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-medgrowth-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/5561996301406?text=Olá! Gostaria de saber mais sobre Tráfego Pago para médicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-medgrowth-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-full justify-center"
                  data-testid="traffic-whatsapp-cta"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all service-card" data-testid="service-branding">
              <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="text-medgrowth-cyan w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Branding e Identidade</h3>
              <p className="text-muted-foreground text-sm mb-4">Torne-se memorável no digital com identidade visual profissional</p>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full" data-testid="learn-more-branding">
                  Saiba Mais
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-w-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center">
                      <Palette className="text-medgrowth-cyan w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-medgrowth-dark">{serviceDetails.branding.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{serviceDetails.branding.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-medgrowth-dark mb-4">O que está incluso:</h4>
                  <ul className="space-y-2">
                    {serviceDetails.branding.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-medgrowth-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/5561996301406?text=Olá! Gostaria de saber mais sobre Branding e Identidade para médicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-medgrowth-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-full justify-center"
                  data-testid="branding-whatsapp-cta"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all service-card" data-testid="service-ai-automation">
              <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="text-medgrowth-cyan w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Automações com IA</h3>
              <p className="text-muted-foreground text-sm mb-4">Ganhe tempo com processos inteligentes e atendimento automatizado</p>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="w-full" data-testid="learn-more-ai">
                  Saiba Mais
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-w-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center">
                      <Bot className="text-medgrowth-cyan w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-medgrowth-dark">{serviceDetails.ai.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{serviceDetails.ai.description}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-medgrowth-dark mb-4">O que está incluso:</h4>
                  <ul className="space-y-2">
                    {serviceDetails.ai.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-medgrowth-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://wa.me/5561996301406?text=Olá! Gostaria de saber mais sobre Automações com IA para médicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-medgrowth-cyan text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all w-full justify-center"
                  data-testid="ai-whatsapp-cta"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
