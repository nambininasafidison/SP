export const COLORS = {
  background: "#0a0a0a",
  foreground: "#ffffff",
  primary: "#3b82f6",
  secondary: "#10b981",
  accent: "#8b5cf6",
  muted: "#374151",
};

export const ROUTES = [
  { name: "home", path: "/" },
  { name: "about", path: import.meta.env.VITE_ABOUT_ROUTE },
  { name: "services", path: import.meta.env.VITE_SERVICES_ROUTE },
  { name: "projects", path: import.meta.env.VITE_PROJECTS_ROUTE },
  { name: "contact", path: import.meta.env.VITE_CONTACT_ROUTE },
];
