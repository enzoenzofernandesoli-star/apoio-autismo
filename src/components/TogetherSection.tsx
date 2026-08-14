import { motion } from "framer-motion";
import { CalendarCheck, PlayCircle, Trophy, Wind, MessageCircle, Users } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";

const JOURNEY = [
  { icon: CalendarCheck, text: "A rotina avisa que é hora da próxima atividade." },
  { icon: PlayCircle, text: "A atividade começa, com apoio visual e sonoro." },
  { icon: Trophy, text: "A missão é concluída e um reforçador é desbloqueado." },
  { icon: Wind, text: "Se houver sobrecarga, o Modo Calma fica disponível na hora." },
  { icon: MessageCircle, text: "A prancha de comunicação está a um toque de distância." },
  { icon: Users, text: "A família acompanha o registro, sempre autorizado." },
];

function TogetherSection() {
  return (
    <section className="bg-bg-dark px-5 py-20 text-text-light lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Eyebrow tone="light" className="mx-auto w-fit">
          Uma jornada integrada
        </Eyebrow>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">
          Um ecossistema de apoio para o dia a dia.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {JOURNEY.map((step, i) => (
          <motion.div
            key={step.text}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-bg-panel p-5 text-left"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-blue/20 text-accent-cyan">
              <step.icon className="size-4" aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-text-light/85">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export { TogetherSection };
