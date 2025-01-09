import MetaHelmet from "@/components/meta-helmet";
import { Layout } from "@/components/sections/layout";
import { SwitchLanguage } from "@/components/swicth-language";
import { Switch } from "@/components/ui/switch";
import { metaConfigs, ROUTES } from "@/lib/constants";
import { Globe, Milestone, Moon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SettingsPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const { t } = useTranslation();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      <MetaHelmet {...metaConfigs.settings} />
      <Layout>
        <div className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              {" "}
              {t("pages.settings.title")}
            </h1>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Moon className="h-6 w-6" />
                  <span className="text-lg">{t("pages.settings.theme")}</span>
                </div>
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={toggleTheme}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Globe className="h-6 w-6" />
                  <span className="text-lg">
                    {t("pages.settings.language")}
                  </span>
                </div>
                <SwitchLanguage />
              </div>

              <div className="md:hidden">
                <h2 className="text-2xl font-semibold mb-4">
                  {t("pages.settings.navigation")}
                </h2>
                <nav className="space-y-2">
                  {ROUTES.map((route) => (
                    <Link
                      key={route.path}
                      to={route.path}
                      className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    >
                      <Milestone />
                      {t(`routes.${route.name}`)}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
