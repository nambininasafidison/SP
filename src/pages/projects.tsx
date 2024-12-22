import { Layout } from "@/components/sections/layout";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="py-24 bg-background min-h-screen flex flex-col justify-evenly">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Mes Projets
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Découvrez une sélection de mes projets les plus récents et
            innovants.
          </p>
        </div>
      </div>
      <ProjectsSection />
    </Layout>
  );
}
