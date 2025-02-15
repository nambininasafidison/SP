export const ROUTES = [
  { name: "home", path: "/" },
  { name: "about", path: import.meta.env.VITE_ABOUT_ROUTE },
  { name: "services", path: import.meta.env.VITE_SERVICES_ROUTE },
  { name: "projects", path: import.meta.env.VITE_PROJECTS_ROUTE },
  { name: "contact", path: import.meta.env.VITE_CONTACT_ROUTE },
];

export const metaConfigs = {
  home: {
    title: "Full Stack Developer | Innovative Digital Solutions",
    description:
      "Transforming ideas into powerful web and mobile applications. Explore my projects and services.",
    keywords:
      "Full Stack Developer, Digital Solutions, Web Development, Mobile Development, Desktop Applications, API Development, Innovative Projects, Modern Developer",
  },
  about: {
    title: "About Me | Full Stack Developer",
    description:
      "Learn about my journey, skills, and values as a Full Stack Developer specializing in modern technologies.",
    keywords:
      "About Me, Full Stack Developer, Web Development, Mobile Development, JavaScript, React, Node.js, Experience, Values, Skills, Cloud Deployment",
  },
  services: {
    title: "My Services | Digital Solutions",
    description:
      "Offering top-notch services in web, mobile, desktop, and API development to meet your digital needs.",
    keywords:
      "Web Development, Mobile Development, Desktop Applications, Backend Development, API Development, Responsive Design, Cross-Platform Development, Scalable Systems",
  },
  projects: {
    title: "My Projects | Recent Innovations",
    description:
      "Explore my portfolio of recent projects, including web, mobile, and desktop applications.",
    keywords:
      "Portfolio, Web Projects, Mobile Applications, Desktop Software, Astrogen, DataViz Dashboard, Innovative Projects, Creative Solutions, Recent Projects",
  },
  contact: {
    title: "Contact Me | Let's Build Together",
    description:
      "Reach out to discuss your project ideas and bring them to life with my expertise.",
    keywords:
      "Contact, Full Stack Developer, Project Ideas, Web Development, Mobile Applications, Email, Collaboration, Build Together",
  },
  notFound: {
    title: "404 | Page Not Found",
    description:
      "The page you are looking for doesn't exist or has been moved. Return to the homepage.",
    keywords: "404, Page Not Found, Missing Page, Error, React",
  },
};
