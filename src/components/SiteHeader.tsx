import { CircuitBoard } from "lucide-react";
import { identidade, etapas } from "@/data/projeto";

const links = [
  { href: "#etapas", label: "Etapas" },
  { href: "#equipe", label: "Equipe" },
  { href: "#proposta", label: "Proposta" },
  { href: "#arquitetura", label: "Arquitetura" },
];

export function SiteHeader() {
  const concluidas = etapas.filter((e) => e.status !== "futura").length;
  const progresso = Math.round((concluidas / etapas.length) * 100);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 sm:flex sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <CircuitBoard className="size-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-base font-bold leading-tight">
              {identidade.nomeFantasia}
            </p>
            <p className="truncate text-xs text-muted-foreground">{identidade.nomeGrupo}</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Progresso</p>
            <p className="font-display text-sm font-bold">{progresso}%</p>
          </div>
          <div className="h-1.5 w-20 overflow-hidden rounded-full bg-secondary sm:w-28">
            <div className="h-full rounded-full bg-primary" style={{ width: `${progresso}%` }} />
          </div>
        </div>
      </div>
    </header>
  );
}
