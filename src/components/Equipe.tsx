import { Mail } from "lucide-react";
import { equipe } from "@/data/projeto";
import { SectionTitle } from "./Timeline";

function iniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

export function Equipe() {
  return (
    <section id="equipe" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
      <SectionTitle
        eyebrow="Etapa 01"
        title="Integrantes do grupo"
        description="Cada integrante com sua função no projeto. Substitua fotos, nomes e contatos no arquivo de dados."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {equipe.map((p) => (
          <article
            key={p.nome}
            className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex min-w-0 items-center gap-4">
              {p.foto ? (
                <img
                  src={p.foto}
                  alt={`Foto de ${p.nome}`}
                  loading="lazy"
                  className="size-14 shrink-0 rounded-full object-cover"
                />
              ) : (
                <div className="grid size-14 shrink-0 place-items-center rounded-full bg-secondary font-display text-lg font-bold text-primary">
                  {iniciais(p.nome)}
                </div>
              )}
              <div className="min-w-0">
                <h3 className="truncate text-base font-bold">{p.nome}</h3>
                <p className="truncate text-xs font-medium text-primary">{p.funcao}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
            <a
              href={`mailto:${p.contato}`}
              className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-3.5" />
              <span className="truncate">{p.contato}</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
