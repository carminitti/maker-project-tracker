import { Home, AlertTriangle, Lightbulb } from "lucide-react";
import { proposta } from "@/data/projeto";
import { SectionTitle } from "./Timeline";

export function Proposta() {
  return (
    <section id="proposta" className="scroll-mt-24 border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <SectionTitle
          eyebrow="Etapa 01"
          title="Proposta do projeto"
          description={proposta.resumo}
        />

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5">
          <Home className="size-3.5 text-primary" />
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Aplicação: {proposta.aplicacao}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold">{proposta.titulo}</h3>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="size-4 text-primary" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Problema</h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{proposta.problema}</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4 text-primary" />
              <h4 className="text-sm font-bold uppercase tracking-widest">Justificativa</h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {proposta.justificativa}
            </p>
          </article>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {proposta.destaques.map((d) => (
            <div key={d.rotulo} className="rounded-2xl border border-border bg-card p-5">
              <dt className="font-display text-2xl font-bold text-primary">{d.valor}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{d.rotulo}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
