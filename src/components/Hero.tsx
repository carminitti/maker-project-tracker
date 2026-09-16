import { Activity, ArrowDown, Bell, Droplets, Fan, Thermometer } from "lucide-react";
import { destaques, identidade, painel } from "@/data/projeto";

export function Hero() {
  return (
    <section id="topo" className="dark relative overflow-hidden border-b border-border bg-background text-foreground">
      <div className="absolute inset-0 grid-tech opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 glow-hero" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            {identidade.disciplina}
          </p>
          <h1 className="mt-4 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            {identidade.nomeFantasia}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {identidade.subtitulo}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proposta"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver a proposta
              <ArrowDown className="size-4" />
            </a>
            <a
              href="#etapas"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold transition-colors hover:bg-secondary"
            >
              Acompanhar etapas
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {destaques.map((d) => (
              <div
                key={d.rotulo}
                className="rounded-2xl border border-border bg-card/60 px-4 py-3 backdrop-blur"
              >
                <dt className="font-display text-xl font-bold text-primary">{d.valor}</dt>
                <dd className="mt-0.5 text-xs text-muted-foreground">{d.rotulo}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Painel simulado do dispositivo */}
        <div className="animate-fade-up rounded-3xl border border-border bg-card/70 p-6 shadow-2xl backdrop-blur [animation-delay:150ms]">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Painel do dispositivo
            </p>
            <span className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[11px] font-bold text-accent">
              <span className="size-1.5 rounded-full bg-accent" />
              Online
            </span>
          </div>

          <div className="mt-5 rounded-2xl border border-border bg-background/60 p-5 text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Índice de qualidade do ar
            </p>
            <p className="mt-1 font-display text-6xl font-bold text-accent">{painel.aqi}</p>
            <p className="mt-1 text-sm font-semibold text-accent">{painel.aqiRotulo}</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3.5">
              <Thermometer className="size-5 shrink-0 text-primary" />
              <div>
                <p className="text-[11px] text-muted-foreground">Temperatura</p>
                <p className="text-sm font-bold">{painel.temperatura}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3.5">
              <Droplets className="size-5 shrink-0 text-primary" />
              <div>
                <p className="text-[11px] text-muted-foreground">Umidade</p>
                <p className="text-sm font-bold">{painel.umidade}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3.5">
              <Fan className="size-5 shrink-0 text-primary" />
              <div>
                <p className="text-[11px] text-muted-foreground">Ventoinha</p>
                <p className="text-sm font-bold">{painel.ventoinha}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3.5">
              <Bell className="size-5 shrink-0 text-primary" />
              <div>
                <p className="text-[11px] text-muted-foreground">Alarme</p>
                <p className="text-sm font-bold">{painel.alarme}</p>
              </div>
            </div>
          </div>

          <p className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground">
            <Activity className="size-3.5 text-accent" />
            Leituras atualizadas a cada 2 s pelo ESP32
          </p>
        </div>
      </div>
    </section>
  );
}
