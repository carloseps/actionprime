export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-black text-lg">
          ACTION<span className="text-primary">PRIME</span>
        </div>
        <div className="text-xs text-muted-foreground text-center">
          Horário Livre / Flexível · Macaíba/RN
        </div>
        <div className="text-xs text-muted-foreground">
          © 2026 Action Prime. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
