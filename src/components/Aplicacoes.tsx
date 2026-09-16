import { Factory, Home, Store } from "lucide-react";
import { aplicacoes } from "@/data/projeto";
import { SectionTitle } from "./Timeline";

const icones = [Factory, Home, Store];

export function Aplicacoes() {
  return (
    <section id="aplicacoes" className="scroll-mt-24 border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          eyebrow="Sobre o projeto"
          title="Onde o AirGuard atua"
          description="Uma aplicação aplicável no dia a dia: indústria, residência e comércio."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {aplicacoes.map((a, i) => {
            const Icone = icones[i] ?? Home;
            return (
              <article
                key={a.contexto}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-secondary">
                  <Icone className="size-5 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{a.contexto}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.descricao}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
