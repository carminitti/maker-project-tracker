import { ArrowRight, Cpu, ToggleRight, Zap } from "lucide-react";
import { arquitetura } from "@/data/projeto";
import { SectionTitle } from "./Timeline";

const icones = [ToggleRight, Cpu, Zap];

export function Arquitetura() {
  return (
    <section id="arquitetura" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
      <SectionTitle
        eyebrow="Etapa 01"
        title="Arquitetura técnica do sistema"
        description="O fluxo do sistema segue o ciclo entrada → processamento → saída."
      />

      <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {arquitetura.map((bloco, i) => {
          const Icone = icones[i] ?? Cpu;
          return (
            <div key={bloco.titulo} className="contents">
              <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <div className="flex items-center justify-between gap-3">
                  <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary">
                    <Icone className="size-5 text-primary" />
                  </div>
                  <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {bloco.etiqueta}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold">{bloco.titulo}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {bloco.descricao}
                </p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {bloco.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              {i < arquitetura.length - 1 && (
                <div className="flex items-center justify-center">
                  <ArrowRight className="size-5 rotate-90 text-primary lg:rotate-0" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
