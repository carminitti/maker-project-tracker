import { materiais, moeda, totalMateriais } from "@/data/projeto";
import { SectionTitle } from "./SectionTitle";

export function Materiais() {
  return (
    <section id="materiais" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 sm:py-20">
      <SectionTitle
        eyebrow="Orçamento"
        title="Lista de materiais"
        description="Componentes do protótipo com função, quantidade e custo estimado."
      />

      <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface text-xs uppercase tracking-widest text-muted-foreground">
                <th className="px-5 py-3.5 font-bold">Componente</th>
                <th className="px-5 py-3.5 font-bold">Função</th>
                <th className="px-5 py-3.5 text-center font-bold">Qtd.</th>
                <th className="px-5 py-3.5 text-right font-bold">Custo</th>
              </tr>
            </thead>
            <tbody>
              {materiais.map((m) => (
                <tr
                  key={m.componente}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-surface"
                >
                  <td className="px-5 py-3.5 font-semibold">{m.componente}</td>
                  <td className="px-5 py-3.5 text-muted-foreground">{m.funcao}</td>
                  <td className="px-5 py-3.5 text-center text-muted-foreground">{m.quantidade}</td>
                  <td className="px-5 py-3.5 text-right font-medium">{moeda(m.custo)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-primary/10">
                <td
                  colSpan={3}
                  className="px-5 py-4 font-display text-base font-bold uppercase tracking-widest text-primary"
                >
                  Total estimado
                </td>
                <td className="px-5 py-4 text-right font-display text-xl font-bold text-primary">
                  {moeda(totalMateriais)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
