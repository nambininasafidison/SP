import MetaHelmet from "@/components/meta-helmet";
import { ContactCTA } from "@/components/sections/contact-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { Layout } from "@/components/sections/layout";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { metaConfigs } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <MetaHelmet {...metaConfigs.home} />
      <Layout>
        <HeroSection />
        <ServicesSection isTitleNecessary={true} />
        <ProjectsSection />
        <ContactCTA />
      </Layout>
    </>
  );
}
