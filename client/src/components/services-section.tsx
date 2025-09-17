import { Globe, Instagram, Megaphone, Palette, Bot, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
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
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-medgrowth-dark leading-tight" data-testid="services-title">
            Soluções Digitais que Geram<br />
            <span className="bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark bg-clip-text text-transparent">Resultados Reais</span>
          </h2>
        </div>

        {/* Featured Service - 360 Medical Package */}
        <div className="max-w-4xl mx-auto mb-16 fade-in-up-delay-1">
          <div className="bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark p-8 md:p-12 rounded-3xl text-white text-center service-card shadow-2xl" data-testid="featured-service">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Globe className="text-medgrowth-cyan w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Produto 360 Médico</h3>
            <p className="text-lg mb-6 text-gray-100">
              Pacote completo: identidade visual, site, redes sociais, tráfego pago, branding, I.A, automações, suporte contínuo e muito mais
            </p>
            <a
              href="https://wa.me/5561996301406?text=Olá%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20o%20360%20médico"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Dialog>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 service-card group fade-in-up-delay-2 border border-medgrowth-cyan/10" data-testid="service-social-media">
              <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Instagram className="text-medgrowth-cyan w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Gestão de Redes Sociais</h3>
              <p className="text-muted-foreground text-sm mb-4">Engaje pacientes e construa autoridade digital de forma consistente e ética</p>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white border-none hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs py-2.5 px-3" 
                  data-testid="learn-more-social"
                >
                  <span>Ver estratégias</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-w-md bg-white border border-medgrowth-cyan/20 shadow-xl">
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
              <DialogTitle className="sr-only">{serviceDetails.social.title}</DialogTitle>
              <DialogDescription className="sr-only">{serviceDetails.social.description}</DialogDescription>
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center">
                    <Instagram className="text-medgrowth-cyan w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-medgrowth-dark">{serviceDetails.social.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{serviceDetails.social.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-medgrowth-dark mb-3">Principais benefícios:</h4>
                  <div className="space-y-2">
                    {serviceDetails.social.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-medgrowth-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="https://wa.me/5561996301406?text=Olá! Gostaria de saber mais sobre Gestão de Redes Sociais para médicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-medgrowth-cyan text-white px-6 py-4 rounded-lg font-semibold hover:bg-medgrowth-dark transition-colors w-full text-base min-h-[48px]"
                  data-testid="social-media-whatsapp-cta"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 service-card group fade-in-up-delay-3 border border-medgrowth-cyan/10" data-testid="service-paid-traffic">
              <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Megaphone className="text-medgrowth-cyan w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Tráfego Pago</h3>
              <p className="text-muted-foreground text-sm mb-4">Atraia pacientes qualificados imediatamente com campanhas otimizadas</p>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white border-none hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs py-2.5 px-3" 
                  data-testid="learn-more-traffic"
                >
                  <span>Ver campanhas</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-w-md bg-white border border-medgrowth-cyan/20 shadow-xl">
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
              <DialogTitle className="sr-only">{serviceDetails.traffic.title}</DialogTitle>
              <DialogDescription className="sr-only">{serviceDetails.traffic.description}</DialogDescription>
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center">
                    <Megaphone className="text-medgrowth-cyan w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-medgrowth-dark">{serviceDetails.traffic.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{serviceDetails.traffic.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-medgrowth-dark mb-3">Principais benefícios:</h4>
                  <div className="space-y-2">
                    {serviceDetails.traffic.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-medgrowth-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="https://wa.me/5561996301406?text=Olá! Gostaria de saber mais sobre Tráfego Pago para médicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-medgrowth-cyan text-white px-6 py-4 rounded-lg font-semibold hover:bg-medgrowth-dark transition-colors w-full text-base min-h-[48px]"
                  data-testid="traffic-whatsapp-cta"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 service-card group fade-in-up-delay-4 border border-medgrowth-cyan/10" data-testid="service-branding">
              <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="text-medgrowth-cyan w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Branding e Identidade</h3>
              <p className="text-muted-foreground text-sm mb-4">Torne-se memorável no digital com identidade visual profissional</p>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white border-none hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs py-2.5 px-3" 
                  data-testid="learn-more-branding"
                >
                  <span>Conhecer identidade</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-w-md bg-white border border-medgrowth-cyan/20 shadow-xl">
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
              <DialogTitle className="sr-only">{serviceDetails.branding.title}</DialogTitle>
              <DialogDescription className="sr-only">{serviceDetails.branding.description}</DialogDescription>
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center">
                    <Palette className="text-medgrowth-cyan w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-medgrowth-dark">{serviceDetails.branding.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{serviceDetails.branding.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-medgrowth-dark mb-3">Principais benefícios:</h4>
                  <div className="space-y-2">
                    {serviceDetails.branding.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-medgrowth-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="https://wa.me/5561996301406?text=Olá! Gostaria de saber mais sobre Branding e Identidade para médicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-medgrowth-cyan text-white px-6 py-4 rounded-lg font-semibold hover:bg-medgrowth-dark transition-colors w-full text-base min-h-[48px]"
                  data-testid="branding-whatsapp-cta"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 service-card group fade-in-up-delay-5 border border-medgrowth-cyan/10" data-testid="service-ai-automation">
              <div className="w-12 h-12 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="text-medgrowth-cyan w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-medgrowth-dark">Automações com IA</h3>
              <p className="text-muted-foreground text-sm mb-4">Ganhe tempo com processos inteligentes e atendimento automatizado</p>
              <DialogTrigger asChild>
                <Button 
                  className="w-full bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white border-none hover:shadow-lg hover:scale-105 transition-all duration-300 text-xs py-2.5 px-3" 
                  data-testid="learn-more-ai"
                >
                  <span>Descobrir automações</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="max-w-md bg-white border border-medgrowth-cyan/20 shadow-xl">
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
              <DialogTitle className="sr-only">{serviceDetails.ai.title}</DialogTitle>
              <DialogDescription className="sr-only">{serviceDetails.ai.description}</DialogDescription>
              <div className="p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-medgrowth-cyan/10 rounded-lg flex items-center justify-center">
                    <Bot className="text-medgrowth-cyan w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-medgrowth-dark">{serviceDetails.ai.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{serviceDetails.ai.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-medgrowth-dark mb-3">Principais benefícios:</h4>
                  <div className="space-y-2">
                    {serviceDetails.ai.benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-4 h-4 bg-medgrowth-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href="https://wa.me/5561996301406?text=Olá! Gostaria de saber mais sobre Automações com IA para médicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-medgrowth-cyan text-white px-6 py-4 rounded-lg font-semibold hover:bg-medgrowth-dark transition-colors w-full text-base min-h-[48px]"
                  data-testid="ai-whatsapp-cta"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="text-center mt-16 fade-in-up">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Escolha a solução ideal para o seu consultório ou opte pelo pacote completo 360 Médico
          </p>
          <a
            href="https://wa.me/5561996301406"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 md:space-x-3 bg-gradient-to-r from-medgrowth-cyan to-medgrowth-dark text-white px-6 md:px-8 py-4 rounded-xl text-base md:text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            data-testid="services-cta-button"
          >
            <span className="whitespace-nowrap">Quero Minha Análise Gratuita</span>
          </a>
        </div>
      </div>
    </section>
  );
}
