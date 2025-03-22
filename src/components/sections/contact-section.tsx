
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío de formulario
    setTimeout(() => {
      toast({
        title: "Formulario enviado",
        description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-axio-100 rounded-full blur-3xl opacity-30 -z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-xl text-gray-600">
              Contáctanos hoy y descubre cómo nuestros agentes de IA pueden optimizar tus operaciones.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <RevealOnScroll className="lg:col-span-3" delay={100}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contáctanos</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nombre completo
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-md border-gray-300 focus:border-axio-500 focus:ring-axio-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Correo electrónico
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-md border-gray-300 focus:border-axio-500 focus:ring-axio-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-700">
                    Empresa
                  </label>
                  <Input 
                    id="company"
                    name="company"
                    placeholder="Nombre de tu empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="rounded-md border-gray-300 focus:border-axio-500 focus:ring-axio-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="¿Cómo podemos ayudarte?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="rounded-md border-gray-300 focus:border-axio-500 focus:ring-axio-500"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-axio-600 hover:bg-axio-700 text-white rounded-md font-medium py-3"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"} 
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll className="lg:col-span-2" direction="left" delay={200}>
            <div className="bg-gradient-to-br from-axio-800 to-axio-900 rounded-xl shadow-md p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-axio-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="mt-1 text-axio-200">contacto@axiolab.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-axio-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Teléfono</h4>
                    <p className="mt-1 text-axio-200">+34 91 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-axio-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Ubicación</h4>
                    <p className="mt-1 text-axio-200">
                      Calle de la Innovación, 42<br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-axio-700">
                <h4 className="text-lg font-medium mb-4">Horario de atención</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-axio-200">Lunes - Viernes</div>
                  <div className="text-white">9:00 - 18:00</div>
                  <div className="text-axio-200">Sábado</div>
                  <div className="text-white">10:00 - 14:00</div>
                  <div className="text-axio-200">Domingo</div>
                  <div className="text-white">Cerrado</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
