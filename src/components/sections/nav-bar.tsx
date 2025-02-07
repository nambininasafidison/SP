import { ROUTES } from "@/lib/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { SwitchLanguage } from "../swicth-language";
import { ToggleTheme } from "../ToggleTheme";
import { NavSheet } from "./nav-sheet";

export function NavBar() {
  const { t } = useTranslation();
  const pathname = useLocation().pathname;
  console.log(pathname);
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-muted/50 backdrop-blur-md"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-foreground">
          <span className="text-primary">&lt;</span>
          Safidison
          <span className="text-primary">/&gt;</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {ROUTES.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`text-muted-foreground hover:text-foreground transition-colors ${
                  pathname === route.path
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {t(`routes.${route.name}`)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="flex gap-2">
          <ToggleTheme className="lg:flex hidden" />
          <SwitchLanguage className="lg:flex hidden" />
          <NavSheet />
        </div>
      </nav>
    </motion.header>
  );
}
