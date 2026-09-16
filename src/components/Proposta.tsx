import { AlertTriangle, CheckCircle2, Lightbulb, Factory, Home, Store } from "lucide-react";
import { aplicacoes, proposta } from "@/data/projeto";
import { SectionTitle } from "./SectionTitle";

const pilares = [
  { icone: AlertTriangle, titulo: "O problema", texto: proposta.problema },
  { icone: Lightbulb, titulo: "A solução", texto: proposta.solucao },
  { icone: CheckCircle2, titulo: "O resultado", texto: proposta.resultado },
];

const iconesAplicacao = [Factory, Home, Store];

export function Proposta() {
  return (
    <section id="proposta" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Proposta do projeto"
          title="Segurança do ar, de forma automática"
          description="Um sistema embarcado de baixo custo que vigia o ambiente e reage sozinho quando algo sai do normal."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pilares.map((p) => (
            <article
              key={p.titulo}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="grid size-11 place-items-center rounded-xl bg-secondary">
                <p.icone className="size-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
            </article>
          ))}
        </div>

        <h3 className="mt-14 text-xl font-bold tracking-tight">Aplicações práticas</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {aplicacoes.map((a, i) => {
            const Icone = iconesAplicacao[i] ?? Home;
            return (
              <article
                key={a.contexto}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10">
                    <Icone className="size-5 text-primary" />
                  </div>
                  <h4 className="text-base font-bold">{a.contexto}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.descricao}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
