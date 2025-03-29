
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Con YonY reducimos un 40% el tiempo de gestión de inventario y mejoramos la precisión de nuestras predicciones de demanda.",
    author: "María Rodríguez",
    position: "Directora de Operaciones",
    company: "TechSoluciones",
    image: "/placeholder.svg"
  },
  {
    quote: "La automatización de nuestro servicio al cliente con los agentes de YonY incrementó la satisfacción del cliente en un 35% mientras reducíamos costos operativos.",
    author: "Carlos Mendoza",
    position: "Director de Innovación",
    company: "Grupo Innova",
    image: "/placeholder.svg"
  },
  {
    quote: "Los agentes personalizados de YonY transformaron nuestros procesos de facturación, eliminando errores y liberando a nuestro equipo para tareas de mayor valor.",
    author: "Ana Gómez",
    position: "CFO",
    company: "Finanzas Globales",
    image: "/placeholder.svg"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-axio-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que nuestros clientes dicen
            </h2>
            <p className="text-xl text-gray-600">
              Empresas que ya transformaron sus operaciones con nuestros agentes de IA.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll key={index} delay={150 * index}>
              <div className="bg-white rounded-xl p-8 shadow-md relative h-full flex flex-col">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-axio-100 opacity-60" />
                <p className="text-gray-700 mb-6 italic text-lg relative z-10">"{testimonial.quote}"</p>
                <div className="mt-auto flex items-center">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="h-12 w-12 rounded-full object-cover border-2 border-axio-200"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
