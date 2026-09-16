import { ArrowUpRight, CircuitBoard, FileText, Code2 } from "lucide-react";
import { documentos } from "@/data/projeto";
import { SectionTitle } from "./SectionTitle";

const icones = [FileText, CircuitBoard, Code2];

export function Documentacao() {
  return (
    <section id="documentacao" className="scroll-mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Documentação"
          title="Materiais do projeto"
          description="Acesse a proposta, o esquema elétrico e o código-fonte do firmware."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {documentos.map((d, i) => {
            const Icone = icones[i] ?? FileText;
            return (
              <a
                key={d.titulo}
                href={d.href}
                className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="grid size-11 place-items-center rounded-xl bg-secondary">
                    <Icone className="size-5 text-primary" />
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mt-4 text-base font-bold">{d.titulo}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.descricao}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
