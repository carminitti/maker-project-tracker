import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { Timeline } from "@/components/Timeline";
import { Equipe } from "@/components/Equipe";
import { Proposta } from "@/components/Proposta";
import { Arquitetura } from "@/components/Arquitetura";
import { identidade, proposta } from "@/data/projeto";

const titulo = `${identidade.nomeFantasia} — ${identidade.nomeGrupo} | Feira de Projetos`;
const descricao =
  "Acompanhe as etapas do projeto da Feira de Projetos: equipe, proposta e arquitetura do sistema embarcado (entrada, processamento e saída).";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 grid-tech opacity-60" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              {identidade.disciplina}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl">
              {identidade.nomeFantasia}
              <span className="block text-muted-foreground">{identidade.subtitulo}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Projeto do <strong className="text-foreground">{identidade.nomeGrupo}</strong>. Este
              site reúne, etapa por etapa, o desenvolvimento de {proposta.titulo.toLowerCase()}.
            </p>
            <a
              href="#etapas"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver as etapas
              <ArrowDown className="size-4" />
            </a>
          </div>
        </section>

        <Timeline />
        <Equipe />
        <Proposta />
        <Arquitetura />
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-8 sm:flex sm:justify-between">
          <p className="min-w-0 text-sm text-muted-foreground">
            {identidade.nomeFantasia} • {identidade.nomeGrupo}
          </p>
          <p className="shrink-0 text-xs text-muted-foreground">{identidade.disciplina}</p>
        </div>
      </footer>
    </div>
  );
}
