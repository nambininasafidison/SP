import { ROUTES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ToggleTheme } from "../ToggleTheme";
import { Button } from "../ui/button";
import { SDropdownMenu } from "../SDropdownMenu";

export function NavBar() {
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
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="flex gap-2">
          <ToggleTheme className="lg:flex hidden" />
          <Button className="px-4 py-2 lg:block hidden">Contactez-moi</Button>
          <SDropdownMenu className="lg:hidden block" />
        </div>
      </nav>
    </motion.header>
  );
}
