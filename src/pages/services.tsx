import { ContactCTA } from "@/components/sections/contact-cta";
import { Layout } from "@/components/sections/layout";
import { ServicesSection } from "@/components/sections/services-section";

export default function ServicesPage() {
  return (
    <Layout>
      <div className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Mes Services
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Je propose une gamme complète de services de développement pour
            répondre à tous vos besoins digitaux.
          </p>
        </div>
      </div>
      <ServicesSection />
      <ContactCTA />
    </Layout>
  );
}
