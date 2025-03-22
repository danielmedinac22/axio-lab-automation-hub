
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Bot, Zap } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-axio-100 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-axio-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <RevealOnScroll>
              <div className="inline-flex items-center rounded-full bg-axio-50 px-3 py-1 text-sm font-medium text-axio-600 mb-6">
                <Zap className="h-4 w-4 mr-1" />
                <span>Tecnología de punta para tu empresa</span>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
                Automatiza tus procesos con agentes de IA personalizados
              </h1>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Desarrollamos agentes de IA a medida que optimizan tus flujos de trabajo, ahorran tiempo y aumentan la eficiencia en todas tus operaciones empresariales.
              </p>
            </RevealOnScroll>
            
            <RevealOnScroll delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className={cn(
                    "bg-axio-600 hover:bg-axio-700 text-white",
                    "rounded-md font-medium transition-all duration-300 text-base px-8"
                  )}
                >
                  Solicita una Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-md font-medium border-gray-300 hover:bg-gray-100 transition-all duration-300 text-base px-8"
                >
                  Más información
                </Button>
              </div>
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll direction="left" delay={200}>
            <div className="relative">
              <div className="absolute inset-0 bg-axio-600 rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
              <div className="glass-effect rounded-2xl p-1 shadow-xl relative">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="bg-gradient-to-br from-axio-800 to-axio-900 p-8 clip-path-slant">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div className="rounded-full bg-white/10 p-3">
                          <Bot className="h-8 w-8 text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-white font-semibold text-xl">Axio Virtual Assistant</h3>
                          <p className="text-axio-200 text-sm">Agente IA Empresarial</p>
                        </div>
                      </div>
                      <div className="rounded-full bg-green-500 h-4 w-4 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-600 text-sm">¿Cómo puedo ayudarte con tus procesos de negocio hoy?</p>
                      </div>
                      <div className="ml-auto bg-axio-600 text-white rounded-lg p-4 max-w-xs">
                        <p className="text-sm">Necesito automatizar el proceso de adquisición de clientes</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-gray-600 text-sm">Puedo crear un flujo de trabajo automatizado que capture leads, califique prospectos y programe seguimientos, todo integrado con tu CRM existente.</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">Axio Agent está escribiendo...</div>
                        <div className="flex space-x-2">
                          <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse"></div>
                          <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse delay-100"></div>
                          <div className="h-2 w-2 rounded-full bg-gray-300 animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
