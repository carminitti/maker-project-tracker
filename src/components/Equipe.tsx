import { equipe, identidade } from "@/data/projeto";
import { SectionTitle } from "./SectionTitle";

function iniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

export function Equipe() {
  return (
    <section id="grupo" className="scroll-mt-24 border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          eyebrow="O grupo"
          title={`${identidade.nomeGrupo} • ${identidade.nomeFantasia}`}
          description="Conheça os integrantes responsáveis pelo desenvolvimento do projeto."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {equipe.map((p, i) => (
            <article
              key={p.nome}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {p.foto ? (
                <img
                  src={p.foto}
                  alt={`Foto de ${p.nome}`}
                  loading="lazy"
                  className="mx-auto size-20 rounded-full object-cover"
                />
              ) : (
                <div
                  className={`mx-auto grid size-20 place-items-center rounded-full font-display text-2xl font-bold text-primary-foreground ${
                    i % 2 === 0
                      ? "bg-gradient-to-br from-primary to-accent"
                      : "bg-gradient-to-br from-accent to-primary"
                  }`}
                >
                  {iniciais(p.nome)}
                </div>
              )}
              <h3 className="mt-4 text-base font-bold">{p.nome}</h3>
              <p className="mt-1 text-xs font-medium text-primary">{p.funcao}</p>
              {p.email ? (
                <a
                  href={`mailto:${p.email}`}
                  className="mt-3 inline-block break-all text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {p.email}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
