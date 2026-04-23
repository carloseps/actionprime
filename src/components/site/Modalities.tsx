import musculacaoImg from "@/assets/musculacao.jpg";
import { Dumbbell, Zap, Music, Bike, ArrowUp, Disc3 } from "lucide-react";

const aulas = [
  {
    icon: Zap,
    name: "Rit Box",
    desc: "Artes marciais + música. Alta queima calórica.",
  },
  {
    icon: Music,
    name: "Fit Dance",
    desc: "Coreografias dos sucessos atuais. Diversão e condicionamento.",
  },
  {
    icon: Bike,
    name: "Spinning",
    desc: "Ciclismo indoor de alta intensidade.",
  },
  {
    icon: ArrowUp,
    name: "Jump",
    desc: "Exercícios em mini trampolins. Cardio explosivo.",
  },
  {
    icon: Disc3,
    name: "Mistura de Ritmos",
    desc: "Dinâmica com vários estilos musicais.",
  },
];

export function Modalities() {
  return (
    <section id="modalidades" className="py-24 md:py-32 bg-surface text-surface-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground/60">
            Modalidades
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-black text-balance">
            <span className="text-primary-foreground/50">Treinos de</span> Alta Performance
          </h2>
          <p className="mt-4 text-lg text-surface-foreground/70 max-w-2xl mx-auto">
            Do clássico ao high-tech. Encontre seu treino, supere seus limites.
          </p>
        </div>

        {/* Featured card */}
        <div className="reveal grid lg:grid-cols-5 gap-6 mb-8">
          <div className="lg:col-span-3 relative overflow-hidden rounded-3xl group min-h-[360px]">
            <img
              src={musculacaoImg}
              alt="Sala de musculação Action Prime"
              loading="lazy"
              width={1280}
              height={960}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-end">
              <div className="inline-flex w-fit items-center justify-center rounded-2xl bg-primary p-3 mb-4">
                <Dumbbell size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-black text-foreground">
                Musculação
              </h3>
              <p className="mt-3 text-foreground/80 max-w-md">
                Mais de <strong className="text-primary">200 máquinas</strong>{" "}
                exclusivas de última geração. O maior parque de equipamentos de
                Macaíba.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aulas.slice(0, 2).map((a) => (
              <ModalityCard key={a.name} {...a} />
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {aulas.slice(2).map((a) => (
            <ModalityCard key={a.name} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModalityCard({
  icon: Icon,
  name,
  desc,
}: {
  icon: typeof Dumbbell;
  name: string;
  desc: string;
}) {
  return (
    <div className="group relative bg-background text-foreground rounded-2xl p-6 shadow-card border-t-4 border-transparent hover:border-primary hover:-translate-y-1 transition-all duration-300">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon size={24} />
      </div>
      <h3 className="font-display text-xl font-bold">{name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
