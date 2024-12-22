import { motion } from "framer-motion";
import avatar from "@/assets/avatar.svg";
import avatar1 from "@/assets/avatar1.svg";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CEO, TechStart",
    content:
      "Un développeur exceptionnel qui a su transformer notre vision en réalité. Son expertise full stack a été cruciale pour notre projet.",
    avatar: avatar,
  },
  {
    name: "Thomas Martin",
    role: "CTO, InnovateCorp",
    content:
      "Sa capacité à gérer à la fois le frontend et le backend nous a permis de lancer notre produit plus rapidement que prévu. Un vrai atout pour notre équipe.",
    avatar: avatar1,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background/60">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ce que disent mes clients
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-muted p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground/55 mb-4">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-muted-foreground/95 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
