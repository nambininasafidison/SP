import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 min-h-screen flex flex-col justify-evenly">
        <motion.div
          className="bg-muted rounded-lg p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Contactez-moi dès aujourd'hui pour discuter de vos idées et les
            transformer en réalité.
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-accent-hover transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer un projet <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
