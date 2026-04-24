import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Modalities } from "@/components/site/Modalities";
import { Structure } from "@/components/site/Structure";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Action Prime - O maior complexo lifestyle de Macaíba/RN",
      },
      {
        property: "og:title",
        content: "Action Prime — Complexo Lifestyle 2.400m²",
      },
      {
        property: "og:description",
        content:
          "Mais de 200 máquinas, aulas, café, kids e estética. Treine no seu ritmo em Macaíba/RN.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Modalities />
        <Structure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
