import MetaHelmet from "@/components/meta-helmet";
import { Layout } from "@/components/sections/layout";
import { ProjectsSection } from "@/components/sections/projects-section";
import { metaConfigs } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <MetaHelmet {...metaConfigs.projects} />
      <Layout>
        <div className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
              {t("pages.projects.title")}
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              {t("pages.projects.description")}
            </p>
          </div>
        </div>
        <ProjectsSection />
      </Layout>
    </>
  );
}
