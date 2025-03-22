
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { DollarSign, BarChart, Expand } from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="h-10 w-10" />,
    title: "Reduce costos operativos",
    description: "Minimiza gastos mediante la automatización de tareas repetitivas, reduciendo la necesidad de intervención manual y optimizando el uso de recursos."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Mejora la toma de decisiones",
    description: "Obtén insights valiosos y análisis en tiempo real que permiten decisiones más informadas y estratégicas para tu negocio."
  },
  {
    icon: <Expand className="h-10 w-10" />,
    title: "Escala sin complicaciones",
    description: "Adapta tus operaciones a cualquier volumen de trabajo sin incrementar proporcionalmente los costos o el personal requerido."
  }
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios para tu empresa
            </h2>
            <p className="text-xl text-gray-600">
              Más allá de la automatización, nuestros agentes de IA transforman fundamentalmente la manera en que opera tu negocio.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <RevealOnScroll key={index} delay={150 * index}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-axio-50 rounded-full p-5 mb-6 text-axio-600">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay={200}>
          <div className="mt-20 bg-gradient-to-r from-axio-900 to-axio-800 rounded-2xl p-10 text-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Transformación digital que impulsa resultados</h3>
                <p className="text-axio-100 mb-6">Nuestros clientes experimentan una mejora promedio del 35% en eficiencia operativa tras implementar nuestras soluciones de IA.</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">40%</div>
                    <div className="text-xs text-axio-200 mt-1">Reducción de costos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">60%</div>
                    <div className="text-xs text-axio-200 mt-1">Menos errores</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">3.5x</div>
                    <div className="text-xs text-axio-200 mt-1">ROI promedio</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-white/5 rounded-xl"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                      <div className="text-sm font-medium">Procesamiento automático de documentos</div>
                      <div className="ml-auto text-sm font-medium">+65%</div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                      <div className="text-sm font-medium">Gestión inteligente de clientes</div>
                      <div className="ml-auto text-sm font-medium">+82%</div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: "82%" }}></div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                      <div className="text-sm font-medium">Análisis predictivo de negocios</div>
                      <div className="ml-auto text-sm font-medium">+74%</div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: "74%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
