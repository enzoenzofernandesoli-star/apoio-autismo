import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Eyebrow } from "@/components/Eyebrow";
import { AppHome } from "@/components/screens/AppHome";

function ScrollShowcase() {
  return (
    <div className="overflow-hidden bg-bg-light">
      <ContainerScroll
        titleComponent={
          <>
            <Eyebrow tone="dark" className="mx-auto w-fit">
              O aplicativo, na sua mão
            </Eyebrow>
            <h2 className="mt-4 text-3xl font-black leading-tight text-text-dark sm:text-4xl">
              Toda a rotina, a um toque de distância.
            </h2>
          </>
        }
      >
        <AppHome />
      </ContainerScroll>
    </div>
  );
}

export { ScrollShowcase };
