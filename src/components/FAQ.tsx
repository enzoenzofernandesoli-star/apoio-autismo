import { Eyebrow } from "@/components/Eyebrow";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/faq";

function FAQ() {
  return (
    <section id="faq" className="bg-bg-light px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <Eyebrow tone="dark" className="mx-auto w-fit">
            Perguntas frequentes
          </Eyebrow>
          <h2 className="mx-auto mt-4 text-3xl font-black leading-tight text-text-dark sm:text-4xl">
            Dúvidas comuns, respostas claras.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export { FAQ };
