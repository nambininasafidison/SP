import { ROUTES } from "@/lib/constants";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-foreground">
              <span className="text-primary">&lt;</span>
              Safidison
              <span className="text-primary">/&gt;</span>
            </Link>
            <p className="mt-4 text-muted-foreground">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t(`routes.${route.name}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {t("footer.follow")}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nambininasafidison"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/safidison-raherizo-441213289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/safidisonrah?t=trR8ae5Xyl-0M08jBUv8tQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/nambininasafidison?igsh=MzNlNGNkZWQ4Mg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/safidison.raherizo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-muted-foreground text-center text-muted-foreground">
          <p>&copy; 2024 Safidison. {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
