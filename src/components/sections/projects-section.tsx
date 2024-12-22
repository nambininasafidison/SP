import dashboard from "@/assets/dashboard.png";
import mobile from "@/assets/mobile.png";
import social from "@/assets/social.png";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Social Network",
    category: "Web Development",
    image: social,
    link: "#",
  },
  {
    title: "FitTrack Pro",
    category: "Mobile App",
    image: mobile,
    link: "#",
  },
  {
    title: "DataViz Dashboard",
    category: "Desktop Application",
    image: dashboard,
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 bg-background ">
      <div className="container mx-auto px-6 min-h-screen flex flex-col justify-evenly">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projets Récents
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-primary/75 mb-4">{project.category}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-secondary-foreground hover:text-muted transition-colors"
                >
                  Voir le projet <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
