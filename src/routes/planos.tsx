import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos | Action Prime" },
      { name: "description", content: "Planos de assinatura do Action Prime." },
    ],
  }),
  component: Planos,
});

function Planos() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-primary shadow-lg border-b border-primary-foreground/10"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <span className={`font-display font-black text-xl md:text-2xl tracking-tight transition-colors ${
              scrolled ? "text-primary-foreground" : "text-foreground"
            }`}>
              ACTION
              <span className={scrolled ? "opacity-80" : "text-primary"}>PRIME</span>
            </span>
          </a>
        </div>
      </header>
      <main className="pt-16 md:pt-20"> 
        <div className="h-[20px] md:h-[40px] bg-white" />
        <iframe
          src="https://evo-totem.w12app.com.br/actionfitness/2/site/QhXXzoY7OMy%5BPLUS%5DFpULG15Wrw%5BEQUAL%5D%5BEQUAL%5D?utm_source=ig"
          title="Action Prime - Planos"
          className="h-[calc(100vh-84px)] w-full border-0"
        />
      </main>
    </div>
  );
}
