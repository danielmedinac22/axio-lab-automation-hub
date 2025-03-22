import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { ArrowRight } from "lucide-react";
export function CTASection() {
  return <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-axio-900 to-axio-800 -z-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-axio-700 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-axio-700 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Potencia tu empresa con la automatización inteligente
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <p className="text-xl mb-10 text-slate-700">
              Únete a las empresas líderes que ya están revolucionando sus operaciones con nuestros agentes de IA personalizados.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={200}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-axio-900 hover:bg-gray-100 rounded-md font-medium px-8">
                Solicita una Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 rounded-md font-medium px-8 text-gray-900 bg-slate-400 hover:bg-slate-300">
                Conoce más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>;
}