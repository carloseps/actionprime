import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login | Action Prime" },
      { name: "description", content: "Login do Sistema da Action Prime." },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground overflow-hidden">
      <header className="w-full bg-primary shadow-lg border-b border-primary-foreground/10 flex-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <span className="font-display font-black text-xl md:text-2xl tracking-tight text-primary-foreground">
              ACTION
              <span className="opacity-80">PRIME</span>
            </span>
          </a>
        </div>
      </header>
      <main className="flex-1 mt-[1px] bg-background">
        <iframe
          src="https://evo-totem.w12app.com.br/actionfitness/2/site/landing-page/login"
          title="Action Prime Login"
          className="w-full h-full border-0"
        />
      </main>
    </div>
  );
}
