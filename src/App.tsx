import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import PageNotFound from "./pages/PageNotFound";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ProjectsPage from "./pages/projects";
import ServicesPage from "./pages/services";

const Home = lazy(() => import("@/pages/home"));

export default function App() {
  const aboutRoute = import.meta.env.VITE_ABOUT_ROUTE;
  const servicesRoute = import.meta.env.VITE_SERVICES_ROUTE;
  const contactRoute = import.meta.env.VITE_CONTACT_ROUTE;
  const projectsRoute = import.meta.env.VITE_PROJECTS_ROUTE;
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={aboutRoute} element={<AboutPage />} />
        <Route path={servicesRoute} element={<ServicesPage />} />
        <Route path={contactRoute} element={<ContactPage />} />
        <Route path={projectsRoute} element={<ProjectsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
