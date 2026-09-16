import { Check, Circle, Dot } from "lucide-react";
import { etapas } from "@/data/projeto";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section id="etapas" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
      <SectionTitle
        eyebrow="Acompanhamento"
        title="Etapas do desenvolvimento"
        description="Cada etapa recebe sua documentação ao longo do semestre. A Etapa 01 está publicada abaixo."
      />

      <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {etapas.map((etapa) => {
          const atual = etapa.status === "atual";
          const futura = etapa.status === "futura";
          return (
            <li
              key={etapa.numero}
              className={cn(
                "relative rounded-2xl border border-border bg-card p-5 transition-colors",
                atual && "border-primary/60 bg-surface-2 shadow-lg",
                futura && "opacity-70",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-muted-foreground">
                  {etapa.numero}
                </span>
                {etapa.status === "concluida" ? (
                  <Check className="size-4 text-primary" />
                ) : atual ? (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                    Atual
                  </span>
                ) : (
                  <Circle className="size-4 text-muted-foreground" />
                )}
              </div>
              <h3 className="mt-3 text-sm font-bold">{etapa.titulo}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{etapa.resumo}</p>
              {etapa.entregas && (
                <ul className="mt-3 space-y-1">
                  {etapa.entregas.map((item) => (
                    <li key={item} className="flex gap-1 text-xs text-muted-foreground">
                      <Dot className="size-3.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {futura && (
                <p className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                  Aguardando documentação
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
