import { ArrowRight, Cpu, ToggleRight, Zap } from "lucide-react";
import { arquitetura } from "@/data/projeto";
import { SectionTitle } from "./SectionTitle";

const icones = [ToggleRight, Cpu, Zap];

export function Arquitetura() {
  return (
    <section id="arquitetura" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Arquitetura técnica"
          title="Entrada → Processamento → Saída"
          description="O fluxo do sistema segue o ciclo clássico dos sistemas embarcados."
        />

        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {arquitetura.map((bloco, i) => {
            const Icone = icones[i] ?? Cpu;
            const destaque = bloco.etiqueta === "Processamento";
            return (
              <div key={bloco.titulo} className="contents">
                <article
                  className={`rounded-3xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                    destaque
                      ? "dark border-border bg-background text-foreground"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary">
                      <Icone className="size-5 text-primary" />
                    </div>
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
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
                    <ArrowRight className="size-6 rotate-90 text-primary lg:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
