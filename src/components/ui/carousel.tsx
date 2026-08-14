import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type EmblaApi = UseEmblaCarouselType[1];

type CarouselContextValue = {
  emblaRef: UseEmblaCarouselType[0];
  api: EmblaApi;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
};

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const ctx = useContext(CarouselContext);
  if (!ctx) throw new Error("useCarousel deve ser usado dentro de <Carousel>");
  return ctx;
}

function Carousel({
  className,
  children,
  options,
}: {
  className?: string;
  children: React.ReactNode;
  options?: Parameters<typeof useEmblaCarousel>[0];
}) {
  const emblaOptions = useMemo(() => ({ loop: false, align: "start" as const, ...options }), [options]);
  const [emblaRef, api] = useEmblaCarousel(emblaOptions);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((emblaApi: EmblaApi) => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect).on("reInit", onSelect);
  }, [api, onSelect]);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  return (
    <CarouselContext.Provider value={{ emblaRef, api, canScrollPrev, canScrollNext, scrollPrev, scrollNext }}>
      <div className={cn("relative", className)}>{children}</div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { emblaRef } = useCarousel();
  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className={cn("flex gap-5", className)} {...props} />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("min-w-0 shrink-0 grow-0 basis-4/5 sm:basis-1/2 lg:basis-1/3", className)} {...props} />;
}

function CarouselPrevious({ className }: { className?: string }) {
  const { scrollPrev, canScrollPrev } = useCarousel();
  return (
    <button
      type="button"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label="Anterior"
      className={cn(
        "flex size-11 items-center justify-center rounded-full border border-border bg-white text-text-dark shadow-sm transition-opacity disabled:opacity-30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue",
        className,
      )}
    >
      <ChevronLeft className="size-5" />
    </button>
  );
}

function CarouselNext({ className }: { className?: string }) {
  const { scrollNext, canScrollNext } = useCarousel();
  return (
    <button
      type="button"
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label="Próximo"
      className={cn(
        "flex size-11 items-center justify-center rounded-full border border-border bg-white text-text-dark shadow-sm transition-opacity disabled:opacity-30",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue",
        className,
      )}
    >
      <ChevronRight className="size-5" />
    </button>
  );
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
