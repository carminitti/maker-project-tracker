import { Wind } from "lucide-react";
import { equipe, identidade, navLinks } from "@/data/projeto";

export function SiteFooter() {
  return (
    <footer className="dark border-t border-border bg-background text-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Wind className="size-5" />
            </div>
            <div>
              <p className="font-display text-base font-bold leading-tight">
                {identidade.nomeFantasia}
              </p>
              <p className="text-xs text-muted-foreground">{identidade.nomeGrupo}</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {identidade.subtitulo}
          </p>
        </div>

        <nav>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Navegação
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Equipe
          </p>
          <ul className="mt-4 space-y-2.5">
            {equipe.map((p) => (
              <li key={p.nome} className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{p.nome}</span> — {p.funcao}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-5">
          <p className="text-xs text-muted-foreground">
            {identidade.nomeFantasia} • {identidade.nomeGrupo}
          </p>
          <p className="text-xs text-muted-foreground">{identidade.disciplina}</p>
        </div>
      </div>
    </footer>
  );
}
