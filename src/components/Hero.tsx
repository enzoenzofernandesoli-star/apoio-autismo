import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MessageCircle, Wind, CalendarCheck, Trophy, Volume2, Droplet, Apple, BedDouble, HandHelping } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/PhoneMockup";

const FLOATING_ITEMS = [
  { icon: MessageCircle, label: "Comunicação", className: "-left-6 top-16 lg:-left-14" },
  { icon: Wind, label: "Modo Calma", className: "-right-4 top-8 lg:-right-10" },
  { icon: CalendarCheck, label: "Rotina", className: "-left-8 bottom-40 lg:-left-16" },
  { icon: Trophy, label: "Missões", className: "-right-6 bottom-24 lg:-right-14" },
];

const PICTOGRAMS = [
  { label: "Quero água", icon: Droplet },
  { label: "Estou com fome", icon: Apple },
  { label: "Quero descansar", icon: BedDouble },
  { label: "Preciso de ajuda", icon: HandHelping },
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -80]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-bg-dark pb-24 pt-32 lg:pb-32 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          style={{ y: blobY1 }}
          className="absolute -left-32 top-0 size-[420px] rounded-full bg-primary-blue/25 blur-[110px]"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="absolute right-0 top-40 size-[380px] rounded-full bg-accent-purple/25 blur-[110px]"
        />
        <div className="absolute bottom-0 left-1/3 size-[320px] rounded-full bg-accent-cyan/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Eyebrow tone="light">Tecnologia para mais autonomia</Eyebrow>
          <h1 className="mt-5 text-4xl font-black leading-[1.08] text-text-light sm:text-5xl lg:text-[3.4rem]">
            Mais comunicação. Mais previsibilidade.{" "}
            <span className="bg-gradient-to-r from-primary-blue via-accent-cyan to-accent-lavender bg-clip-text text-transparent">
              Mais autonomia.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-light/75">
            Um aplicativo pensado para apoiar pessoas autistas na comunicação, na rotina, na
            regulação sensorial e na conquista de autonomia — junto de quem está ao seu lado.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href="#funcionalidades">Conhecer o aplicativo</a>
            </Button>
            <Button size="lg" variant="outlineLight" asChild>
              <a href="#como-funciona">Ver como funciona</a>
            </Button>
          </div>

          <p className="mt-8 text-sm font-medium text-text-light/50">
            Para pessoas autistas, famílias, escolas e profissionais.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex justify-center"
        >
          <div className="absolute -left-6 top-10 w-[260px] -rotate-6 scale-90 rounded-[2.5rem] border-[10px] border-bg-panel bg-bg-panel opacity-60 lg:-left-10">
            <div className="h-[540px] rounded-[2rem] bg-bg-dark-deep" />
          </div>
          <div className="absolute -right-6 top-16 w-[260px] rotate-6 scale-90 rounded-[2.5rem] border-[10px] border-bg-panel bg-bg-panel opacity-60 lg:-right-10">
            <div className="h-[540px] rounded-[2rem] bg-bg-dark-deep" />
          </div>

          <div className="relative">
            <PhoneMockup>
              <div className="flex items-center justify-between bg-bg-dark px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                    Comunicação
                  </p>
                  <p className="text-sm font-bold text-text-light">Prancha · Casa</p>
                </div>
                <span className="flex size-9 items-center justify-center rounded-full bg-white/10 text-text-light">
                  <Volume2 className="size-4" />
                </span>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-3 bg-bg-light p-4">
                {PICTOGRAMS.map((p) => (
                  <div
                    key={p.label}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 text-center shadow-sm"
                  >
                    <p.icon className="size-7 text-primary-blue" aria-hidden="true" />
                    <span className="text-xs font-semibold text-text-dark">{p.label}</span>
                  </div>
                ))}
              </div>
            </PhoneMockup>

            {FLOATING_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                className={`absolute z-10 hidden items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-lg sm:flex ${item.className}`}
              >
                <item.icon className="size-4 text-primary-blue" />
                <span className="text-xs font-bold text-text-dark">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export { Hero };
