import { CircleCheck, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { GlowButton } from "@/components/ui/moving-border";

const INCLUDED = [
  "Comunicação, rotina, Modo Calma e missões",
  "Análise do ambiente, alimentação e botão de ajuda",
  "Convide escola e profissionais autorizados sem custo extra",
  "Personalização completa por pessoa",
];

function PricingSection() {
  return (
    <section id="planos" className="bg-bg-light px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow tone="dark" className="mx-auto w-fit">
          Planos e preços
        </Eyebrow>
        <h2 className="mx-auto mt-4 max-w-xl text-3xl font-black leading-tight text-text-dark sm:text-4xl">
          Um plano simples, pensado para a família.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-text-muted">
          A família assina e decide quem mais participa — escola e profissionais entram como
          convidados autorizados, sem custo adicional.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-md rounded-3xl border border-border bg-card p-8 shadow-lg shadow-primary-blue/5">
        <div className="mx-auto flex w-fit items-center gap-1.5 rounded-full bg-bg-soft-blue px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-blue-dark">
          <Sparkles className="size-3.5" aria-hidden="true" />
          14 dias grátis
        </div>

        <div className="mt-5 text-center">
          <p className="font-heading text-lg font-bold text-text-dark">Plano Família</p>
          <p className="mt-2 flex items-baseline justify-center gap-1">
            <span className="font-mono text-5xl font-black text-text-dark">R$ 49,99</span>
            <span className="font-mono text-sm font-semibold text-text-muted">/mês</span>
          </p>
          <p className="mt-1 text-xs text-text-muted">após o período de teste gratuito</p>
        </div>

        <ul className="mt-7 space-y-3 text-left">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary-blue" aria-hidden="true" />
              <span className="text-sm text-text-dark">{item}</span>
            </li>
          ))}
        </ul>

        <GlowButton as="a" href="#interesse" containerClassName="mt-8 w-full" className="w-full">
          Quero começar meu teste grátis
        </GlowButton>

        <p className="mt-4 text-center text-xs leading-relaxed text-text-muted">
          O aplicativo está em fase de pré-lançamento — as assinaturas ainda não estão abertas.
          Deixe seu contato para ser avisado assim que o teste grátis começar.
        </p>
      </div>
    </section>
  );
}

export { PricingSection };
