import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  specialty: z.string().min(1, "Especialidade é obrigatória"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      
      // In a real application, this would save to database and/or send email
      console.log("Contact form submission:", validatedData);
      
      // For now, just return success
      res.json({ 
        success: true, 
        message: "Formulário enviado com sucesso! Entraremos em contato em até 24 horas." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Erro interno do servidor" 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
