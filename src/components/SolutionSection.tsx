import { motion } from "framer-motion";
import { MessageCircle, ListChecks, PlayCircle, Wind, LineChart, CalendarCheck } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { PhoneMockup } from "@/components/PhoneMockup";

const FLOW = [
  { icon: MessageCircle, title: "Comunicar", description: "Expressar necessidades com prancha personalizada e áudio." },
  { icon: ListChecks, title: "Organizar", description: "Visualizar a rotina do dia de forma clara e previsível." },
  { icon: PlayCircle, title: "Realizar", description: "Cumprir atividades e missões em um ritmo próprio." },
  { icon: Wind, title: "Regular", description: "Acessar o Modo Calma quando o ambiente pede uma pausa." },
  { icon: LineChart, title: "Acompanhar", description: "Compartilhar o progresso com quem está autorizado." },
];

function SolutionSection() {
  return (
    <section id="como-funciona" className="bg-bg-light px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <Eyebrow tone="dark">A solução</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight text-text-dark sm:text-4xl">
            Um ecossistema de apoio para o dia a dia.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-text-muted">
            Cada ferramenta foi pensada para se conectar com a próxima — do primeiro pedido até o
            acompanhamento de quem cuida.
          </p>

          <ol className="relative mt-10 flex flex-col gap-8">
            <div className="absolute bottom-6 left-5 top-6 w-px bg-border" aria-hidden="true" />
            {FLOW.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-4"
              >
                <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-blue text-text-light shadow-md shadow-primary-blue/30">
                  <step.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading font-bold text-text-dark">{step.title}</p>
                  <p className="mt-0.5 text-sm text-text-muted">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
        >
          <PhoneMockup statusTone="dark">
            <div className="flex items-center justify-between bg-bg-dark px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                  Rotina
                </p>
                <p className="text-sm font-bold text-text-light">Hoje · Quinta-feira</p>
              </div>
              <CalendarCheck className="size-5 text-text-light/70" aria-hidden="true" />
            </div>
            <div className="flex-1 space-y-3 overflow-hidden bg-bg-light p-4">
              {[
                { time: "07:30", label: "Café da manhã", done: true },
                { time: "08:00", label: "Escola", done: true },
                { time: "09:30", label: "Matemática", done: false },
                { time: "10:30", label: "Reforçador", done: false },
              ].map((item) => (
                <div
                  key={item.time}
                  className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
                >
                  <span className="font-mono text-xs font-bold text-text-muted">{item.time}</span>
                  <span className="flex-1 text-sm font-semibold text-text-dark">{item.label}</span>
                  <span
                    className={`size-2.5 rounded-full ${item.done ? "bg-primary-blue" : "bg-border"}`}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  );
}

export { SolutionSection };
