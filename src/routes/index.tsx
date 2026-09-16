import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Proposta } from "@/components/Proposta";
import { Equipe } from "@/components/Equipe";
import { Arquitetura } from "@/components/Arquitetura";
import { Timeline } from "@/components/Timeline";
import { Materiais } from "@/components/Materiais";
import { Documentacao } from "@/components/Documentacao";
import { SiteFooter } from "@/components/SiteFooter";
import { identidade } from "@/data/projeto";

const titulo = `${identidade.nomeFantasia} — Monitor de qualidade do ar | ${identidade.nomeGrupo}`;
const descricao =
  "AirGuard: monitor de qualidade do ar com exaustão automática. Detecta gás, fumaça e calor, aciona a ventoinha e dispara alarmes. Projeto do Grupo 03 para a Feira de Projetos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <Proposta />
        <Equipe />
        <Arquitetura />
        <Timeline />
        <Materiais />
        <Documentacao />
      </main>
      <SiteFooter />
    </div>
  );
}
