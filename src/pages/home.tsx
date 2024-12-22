import { ContactCTA } from "@/components/sections/contact-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { Layout } from "@/components/sections/layout";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactCTA />
    </Layout>
  );
}
