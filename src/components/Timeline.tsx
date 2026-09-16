import { Check, Circle, Loader } from "lucide-react";
import { etapas, type Etapa } from "@/data/projeto";
import { SectionTitle } from "./SectionTitle";

const selos: Record<Etapa["status"], { rotulo: string; classes: string }> = {
  concluida: {
    rotulo: "Concluída",
    classes: "border-accent/50 bg-accent/10 text-accent-foreground",
  },
  andamento: {
    rotulo: "Em andamento",
    classes: "border-primary/50 bg-primary/10 text-primary",
  },
  planejada: {
    rotulo: "Planejada",
    classes: "border-border bg-secondary text-muted-foreground",
  },
};

function Marcador({ status }: { status: Etapa["status"] }) {
  if (status === "concluida")
    return (
      <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground">
        <Check className="size-4" />
      </span>
    );
  if (status === "andamento")
    return (
      <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground">
        <Loader className="size-4 animate-spin" />
      </span>
    );
  return (
    <span className="grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground">
      <Circle className="size-4" />
    </span>
  );
}

export function Timeline() {
  return (
    <section id="etapas" className="scroll-mt-24 border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Acompanhamento"
          title="Etapas do projeto"
          description="O desenvolvimento dividido em 6 etapas, da proposta até a apresentação na feira."
        />

        <ol className="relative mt-12 space-y-6 border-l-2 border-border pl-8 sm:pl-10">
          {etapas.map((etapa) => {
            const selo = selos[etapa.status];
            return (
              <li key={etapa.numero} className="relative">
                <div className="absolute -left-[3.28rem] top-1 sm:-left-[3.78rem]">
                  <Marcador status={etapa.status} />
                </div>
                <article className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-sm font-bold text-muted-foreground">
                      Etapa {etapa.numero}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${selo.classes}`}
                    >
                      {selo.rotulo}
                    </span>
                    {etapa.data && (
                      <span className="text-xs text-muted-foreground">{etapa.data}</span>
                    )}
                  </div>
                  <h3 className="mt-2 text-lg font-bold">{etapa.titulo}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {etapa.resumo}
                  </p>
                  {etapa.checklist && (
                    <ul className="mt-4 grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
                      {etapa.checklist.map((c) => (
                        <li key={c.item} className="flex items-center gap-2 text-sm">
                          <span
                            className={`grid size-5 shrink-0 place-items-center rounded-full ${
                              c.feito
                                ? "bg-accent text-accent-foreground"
                                : "border border-border text-muted-foreground"
                            }`}
                          >
                            {c.feito && <Check className="size-3" />}
                          </span>
                          <span className={c.feito ? "" : "text-muted-foreground"}>{c.item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
