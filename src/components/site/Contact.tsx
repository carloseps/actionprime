import { MapPin, MessageCircle, Instagram, Clock } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contato"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.14 0 0)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Localização & Contato
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-black text-balance">
            Venha nos <span className="text-primary">visitar</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info */}
          <div className="reveal space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/15 text-primary p-3 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Endereço
                  </div>
                  <div className="mt-2 font-display font-bold text-lg leading-tight">
                    Av. Doutor Heráclito Vilar
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Em frente à Escola Dr. Severiano <br />
                    Macaíba/RN
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/15 text-primary p-3 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Funcionamento
                  </div>
                  <div className="mt-2 font-display font-bold text-lg">
                    Horário Livre / Flexível
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Treine no seu ritmo, no seu tempo.
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/5584987538101"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl bg-primary px-6 py-5 text-primary-foreground hover:shadow-glow hover:scale-[1.02] transition-all"
              >
                <MessageCircle size={24} />
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-wider opacity-70">
                    WhatsApp
                  </div>
                  <div className="font-display font-bold">
                    (84) 98753-8101
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com/actionprimeacademia"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 hover:border-primary hover:scale-[1.02] transition-all"
              >
                <Instagram size={24} className="text-primary" />
                <div className="text-left">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Instagram
                  </div>
                  <div className="font-display font-bold">@actionprimeacademia</div>
                </div>
              </a>
            </div>
          </div>

          {/* Functional Google Maps iframe */}
          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden border border-border h-full min-h-[420px] bg-card">
              <iframe
                src="https://www.google.com/maps?q=Action+Prime+R.+Dr.+Her%C3%A1clito+Vilar,+SN,+Maca%C3%ADba+-+RN,+59280-000&output=embed"
                title="Action Prime Macaíba"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                <div className="max-w-xs rounded-2xl bg-background/90 border border-border p-4 text-sm text-foreground">
                  <div className="font-bold">Action Prime</div>
                  <div className="mt-1 text-muted-foreground">
                    R. Dr. Heráclito Vilar, SN, Macaíba - RN, 59280-000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
