import { useState } from "react";
import { Clock, UserCheck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Formulário enviado com sucesso!",
          description: "Entraremos em contato em até 24 horas.",
        });
        
        // Redirect to WhatsApp as well
        const whatsappMessage = encodeURIComponent(
          `Olá! Acabei de solicitar uma análise gratuita através do site. Meus dados: Nome: ${formData.name}, Email: ${formData.email}, Telefone: ${formData.phone}, Especialidade: ${formData.specialty}`
        );
        window.open(`https://wa.me/5561996301406?text=${whatsappMessage}`, "_blank");
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", specialty: "" });
      } else {
        throw new Error("Erro ao enviar formulário");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-medgrowth-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="final-cta-title">
            Não Deixe Seu Potencial Digital Esperar. Fale Conosco!
          </h2>

          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto" data-testid="final-cta-description">
            Sua rotina é corrida. Deixe que especialistas cuidem da sua presença online enquanto você cuida dos pacientes.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="flex items-start space-x-4" data-testid="benefit-analysis">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Análise Gratuita em 24h</h3>
                  <p className="text-sm opacity-80">Avaliamos sua presença digital atual e identificamos oportunidades de crescimento</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="benefit-consulting">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Consultoria Especializada</h3>
                  <p className="text-sm opacity-80">Equipe dedicada com experiência em marketing médico e regulamentações do CFM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="benefit-ethics">
                <div className="w-12 h-12 bg-medgrowth-cyan rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">100% Ético e Regulamentado</h3>
                  <p className="text-sm opacity-80">Todas nossas estratégias respeitam as diretrizes do Conselho Federal de Medicina</p>
                </div>
              </div>
            </div>

            <div className="bg-white text-medgrowth-dark p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-center" data-testid="contact-form-title">Solicite Sua Análise Gratuita</h3>

              <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  data-testid="input-name"
                />
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  data-testid="input-email"
                />
                <Input
                  type="tel"
                  placeholder="WhatsApp (DDD) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  data-testid="input-phone"
                />
                <Select
                  value={formData.specialty}
                  onValueChange={(value) => handleInputChange("specialty", value)}
                  required
                >
                  <SelectTrigger data-testid="select-specialty">
                    <SelectValue placeholder="Sua especialidade médica" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiologia">Cardiologia</SelectItem>
                    <SelectItem value="dermatologia">Dermatologia</SelectItem>
                    <SelectItem value="ginecologia">Ginecologia e Obstetrícia</SelectItem>
                    <SelectItem value="ortopedia">Ortopedia</SelectItem>
                    <SelectItem value="pediatria">Pediatria</SelectItem>
                    <SelectItem value="psiquiatria">Psiquiatria</SelectItem>
                    <SelectItem value="outras">Outras</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  type="submit"
                  className="w-full bg-medgrowth-cyan text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all cta-button"
                  disabled={isSubmitting}
                  data-testid="button-submit-form"
                >
                  {isSubmitting ? "Enviando..." : "Quero Minha Análise Gratuita"}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Ou fale conosco diretamente:</p>
                <a
                  href="https://wa.me/5561996301406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-medgrowth-cyan font-semibold hover:underline"
                  data-testid="direct-whatsapp-link"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>(61) 99630-1406</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
