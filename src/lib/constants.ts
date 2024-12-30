export const ROUTES = [
  { name: "home", path: "/" },
  { name: "about", path: import.meta.env.VITE_ABOUT_ROUTE },
  { name: "services", path: import.meta.env.VITE_SERVICES_ROUTE },
  { name: "projects", path: import.meta.env.VITE_PROJECTS_ROUTE },
  { name: "contact", path: import.meta.env.VITE_CONTACT_ROUTE },
];
