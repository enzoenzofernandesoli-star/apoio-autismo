import { MessageCircle, CalendarCheck, Wind, Utensils, Trophy, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/Eyebrow";

const PILLARS = [
  { icon: MessageCircle, label: "Comunicação" },
  { icon: CalendarCheck, label: "Rotina" },
  { icon: Wind, label: "Regulação" },
  { icon: Utensils, label: "Alimentação" },
  { icon: Trophy, label: "Missões" },
  { icon: LineChart, label: "Acompanhamento" },
];

function DifferentiatorSection() {
  return (
    <section className="bg-bg-light px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow tone="dark" className="mx-auto w-fit">
          Diferencial
        </Eyebrow>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black leading-tight text-text-dark sm:text-4xl">
          Não é apenas uma prancha de comunicação.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-text-muted">
          É um ecossistema de apoio que reúne comunicação, rotina, regulação, alimentação,
          missões e acompanhamento em um único lugar.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="flex flex-col items-center gap-2.5 rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-bg-soft-blue text-primary-blue">
              <p.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-xs font-bold text-text-dark">{p.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export { DifferentiatorSection };
