import { Footer } from "./footer";
import { NavBar } from "./nav-bar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
