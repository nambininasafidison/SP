import { ContactCTA } from "@/components/sections/contact-cta";
import { Layout } from "@/components/sections/layout";
import { ServicesSection } from "@/components/sections/services-section";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            {t("pages.services.title")}
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            {t("pages.services.description")}
          </p>
        </div>
      </div>
      <ServicesSection isTitleNecessary={false} />
      <ContactCTA />
    </Layout>
  );
}
