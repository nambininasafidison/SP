import work from "@/assets/work.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center bg-background overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Texte et boutons */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Développeur Full Stack
            <span className="block text-primary">
              Créateur de Solutions Digitales
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Je transforme des idées en applications web et mobiles performantes
            et élégantes.
          </p>
          <motion.div
            className="flex gap-4 flex-col lg:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link
              to={import.meta.env.VITE_PROJECTS_ROUTE}
              className="px-6 py-3 bg-primary text-background rounded-md hover:bg-primary/90 transition-colors flex items-center"
            >
              Voir mes projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to={import.meta.env.VITE_CONTACT_ROUTE}
              className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-background transition-colors"
            >
              En savoir plus
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] md:h-[600px]"
        >
          <img
            src={work}
            alt="Développeur au travail"
            className="object-cover rounded-lg h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
        </motion.div>
      </div>
    </div>
  );
}
