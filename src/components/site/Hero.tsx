import heroImg from "@/assets/hero-gym.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const MATRICULA_URL =
  "/planos";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
    >
      <img
        src={heroImg}
        alt="Interior do complexo Action Prime"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "oklch(0.18 0 0 / 0.65)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, oklch(0.4 0 0 / 0.2), transparent 10%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] tracking-tight text-balance">
          O maior <span className="text-primary">complexo lifestyle</span>
          <br />
          de Macaíba chegou.
        </h1>

        <p className="mt-8 text-base md:text-xl text-foreground/85 max-w-2xl mx-auto text-balance">
          Mais de <strong className="text-primary">2.400m²</strong> de estrutura
          Prime para alta performance. Treinos, conveniência e tecnologia em um
          só lugar.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={MATRICULA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base md:text-lg font-bold text-primary-foreground hover:shadow-glow hover:scale-105 transition-all"
          >
            Venha ser Prime
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#modalidades"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-8 py-4 text-base md:text-lg font-semibold text-foreground hover:border-primary hover:text-primary transition-all"
          >
            Ver Modalidades
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
          {[
            { n: "2.400m²", l: "Estrutura" },
            { n: "200+", l: "Equipamentos" },
            { n: "24/7", l: "Horário Flexível" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl md:text-4xl font-black text-primary">
                {s.n}
              </div>
              <div className="text-xs md:text-sm text-foreground/70 mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-primary animate-pulse" />
    </section>
  );
}
