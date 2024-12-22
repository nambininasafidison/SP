import { motion } from "framer-motion";
import { Code, Database, Monitor, Smartphone } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-[#3b82f6]" />,
    title: "Développement Web",
    description:
      "Création de sites web et d'applications web responsives et performantes.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-[#10b981]" />,
    title: "Développement Mobile",
    description: "Conception d'applications mobiles natives et cross-platform.",
  },
  {
    icon: <Monitor className="h-8 w-8 text-[#8b5cf6]" />,
    title: "Applications Desktop",
    description:
      "Développement de logiciels de bureau pour Windows, macOS et Linux.",
  },
  {
    icon: <Database className="h-8 w-8 text-[#f59e0b]" />,
    title: "Backend & API",
    description: "Création d'APIs robustes et de systèmes backend évolutifs.",
  },
];

export function ServicesSection() {
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
          Mes Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-muted p-6 rounded-lg hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
