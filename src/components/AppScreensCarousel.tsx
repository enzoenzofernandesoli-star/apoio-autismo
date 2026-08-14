import { Eyebrow } from "@/components/Eyebrow";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { FEATURE_CATEGORIES } from "@/data/features";

function AppScreensCarousel() {
  return (
    <section className="overflow-hidden bg-bg-dark px-5 py-20 text-text-light lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Eyebrow tone="light">Veja o app por dentro</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Cada tela pensada para um momento do dia.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-light/70">
            Arraste para o lado e conheça as dez frentes de apoio do aplicativo.
          </p>
        </div>

        <Carousel className="mt-12">
          <CarouselContent>
            {FEATURE_CATEGORIES.map((cat) => (
              <CarouselItem key={cat.id} className="basis-4/5 sm:basis-1/2 lg:basis-1/3">
                <div className="flex flex-col items-center gap-5">
                  <PhoneMockup statusLabel={cat.tabLabel.toUpperCase()}>
                    <cat.Screen />
                  </PhoneMockup>
                  <div className="max-w-[240px] text-center">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-cyan">
                      {cat.tabLabel}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-light/70">{cat.tagline}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex justify-center gap-3">
            <CarouselPrevious className="border-white/15 bg-white/5 text-text-light hover:border-primary-blue/50" />
            <CarouselNext className="border-white/15 bg-white/5 text-text-light hover:border-primary-blue/50" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export { AppScreensCarousel };
