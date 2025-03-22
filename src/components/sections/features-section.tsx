
import { Brain, Workflow, Clock, Headset } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Personalización total",
    description: "Agentes de IA diseñados específicamente para tus necesidades empresariales y flujos de trabajo únicos."
  },
  {
    icon: <Workflow className="h-8 w-8" />,
    title: "Integración sencilla",
    description: "Implementación sin fricciones con tus sistemas existentes, minimizando interrupciones operativas."
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Automatización 24/7",
    description: "Operaciones continuas y consistentes que trabajan sin descanso optimizando tu productividad."
  },
  {
    icon: <Headset className="h-8 w-8" />,
    title: "Soporte técnico experto",
    description: "Asistencia especializada para garantizar el rendimiento óptimo de tus agentes inteligentes."
  }
];

export function FeaturesSection() {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-white"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características destacadas
            </h2>
            <p className="text-xl text-gray-600">
              Nuestros agentes de IA ofrecen capacidades avanzadas diseñadas para transformar tus operaciones empresariales.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <RevealOnScroll key={index} delay={100 * index}>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className={cn(
                  "rounded-lg p-4 inline-flex",
                  "bg-axio-50 text-axio-600 mb-4"
                )}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 flex-grow">{feature.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
