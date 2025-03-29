
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Con YonY reducimos un 40% el tiempo de gestión de inventario y mejoramos la precisión de nuestras predicciones de demanda.",
    author: "María Rodríguez",
    position: "Directora de Operaciones",
    company: "TechSoluciones",
    image: "/lovable-uploads/689296b0-3d61-462e-93c9-07a56c96f81b.png" // Using the uploaded image
  },
  {
    quote: "La automatización de nuestro servicio al cliente con los agentes de YonY incrementó la satisfacción del cliente en un 35% mientras reducíamos costos operativos.",
    author: "Carlos Mendoza",
    position: "Director de Innovación",
    company: "Grupo Innova",
    image: "/photo-1581092795360-fd1ca04f0952.jpg" // Stock photo of a man in business attire
  },
  {
    quote: "Los agentes personalizados de YonY transformaron nuestros procesos de facturación, eliminando errores y liberando a nuestro equipo para tareas de mayor valor.",
    author: "Ana Gómez",
    position: "CFO",
    company: "Finanzas Globales",
    image: "/photo-1649972904349-6e44c42644a7.jpg" // Stock photo of a woman
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 -z-10"></div>
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
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary opacity-60" />
                <p className="text-gray-700 mb-6 italic text-lg relative z-10">"{testimonial.quote}"</p>
                <div className="mt-auto flex items-center">
                  <div className="flex-shrink-0">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage 
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
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
