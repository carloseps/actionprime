import lifestyleImg from "@/assets/lifestyle.jpg";
import {
  Car,
  Baby,
  Sofa,
  ShoppingBag,
  Coffee,
  Scissors,
  Smartphone,
} from "lucide-react";

const services = [
  { icon: Car, name: "Estacionamento Próprio" },
  { icon: Baby, name: "Espaço Kids" },
  { icon: Sofa, name: "Lounge de Convivência" },
  { icon: ShoppingBag, name: "Loja de Suplementos" },
  { icon: Coffee, name: "Café & Vestuário" },
  { icon: Scissors, name: "Barbearia & Estética" },
];

export function Structure() {
  return (
    <section id="estrutura" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "oklch(0.85 0.18 85)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Diferenciais Prime
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-black text-balance leading-tight">
              Muito mais que uma{" "}
              <span className="text-primary">academia.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Um centro de conveniência completo para o seu lifestyle. Tudo o
              que você precisa, em um só lugar.
            </p>

            <div className="mt-10 relative rounded-3xl overflow-hidden">
              <img
                src={lifestyleImg}
                alt="Lounge e área de conveniência"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4">
                <div className="rounded-2xl bg-primary p-3">
                  <Smartphone size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg">
                    App Exclusivo
                  </div>
                  <div className="text-sm text-foreground/70">
                    Tecnologia para seus treinos
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 reveal">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon size={22} />
                </div>
                <div className="font-display font-bold text-base">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
