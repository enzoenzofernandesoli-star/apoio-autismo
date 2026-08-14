import { Button } from "@/components/ui/button";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-bg-dark-deep px-5 py-24 text-center text-text-light lg:px-8">
      <div
        className="pointer-events-none absolute left-1/2 top-0 size-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary-blue/20 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl">
          Mais comunicação. Mais autonomia. Mais possibilidades.
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-text-light/70">
          Estamos construindo uma tecnologia pensada para apoiar pessoas autistas e quem está ao
          seu lado.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#planos">Quero começar meu teste grátis</a>
          </Button>
          <Button size="lg" variant="outlineLight" asChild>
            <a href="#interesse">Quero acompanhar o projeto</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export { CTA };
