import { useState } from "react";
import { motion } from "framer-motion";
import { User, Users, School, Stethoscope, Check, X, MousePointerClick } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { cn } from "@/lib/utils";

const NODES = [
  {
    id: "familia",
    icon: Users,
    label: "Família",
    className: "left-1/2 top-0 -translate-x-1/2",
    line: { x2: "160", y2: "30" },
    detail: "Acompanha comunicação, rotina, alimentação e reforçadores utilizados — sempre a partir de registros autorizados.",
  },
  {
    id: "escola",
    icon: School,
    label: "Escola",
    className: "left-0 bottom-6",
    line: { x2: "45", y2: "255" },
    detail: "Vê o painel do dia — atividades, comunicação utilizada e reforçador — apenas com autorização da família.",
  },
  {
    id: "profissionais",
    icon: Stethoscope,
    label: "Profissionais",
    className: "right-0 bottom-6",
    line: { x2: "275", y2: "255" },
    detail: "Acessa histórico e evolução para apoiar o acompanhamento — sem substituí-lo.",
  },
] as const;

const PERMISSIONS = [
  { id: "familia", label: "Família", allowed: true },
  { id: "escola", label: "Professor", allowed: true },
  { id: "profissionais", label: "Terapeuta", allowed: true },
  { id: null, label: "Outros", allowed: false },
] as const;

function ConnectionSection() {
  const [selected, setSelected] = useState<(typeof NODES)[number]["id"] | null>(null);
  const activeNode = NODES.find((n) => n.id === selected) ?? null;

  return (
    <section className="bg-bg-dark px-5 py-20 text-text-light lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow tone="light">Conexão entre pessoas</Eyebrow>
          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            Compartilhamento sempre autorizado.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-text-light/70">
            A pessoa autista está no centro. Família, escola e profissionais só acessam o que foi
            explicitamente autorizado.
          </p>

          <div className="mt-8 space-y-2.5">
            {PERMISSIONS.map((p) => (
              <button
                key={p.label}
                type="button"
                disabled={!p.id}
                onClick={() => setSelected((current) => (current === p.id ? null : p.id))}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-colors",
                  p.id
                    ? "cursor-pointer border-white/10 bg-bg-panel hover:border-primary-blue/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
                    : "cursor-default border-white/10 bg-bg-panel",
                  selected === p.id && p.id && "border-primary-blue/60 bg-primary-blue/10",
                )}
                aria-pressed={selected === p.id}
              >
                <span className="text-sm font-semibold text-text-light/90">{p.label}</span>
                {p.allowed ? (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-accent-cyan">
                    <Check className="size-4" aria-hidden="true" /> autorizado
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-text-light/40">
                    <X className="size-4" aria-hidden="true" /> não autorizado
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="relative mx-auto flex h-80 w-80 items-center justify-center">
            <svg className="absolute inset-0" viewBox="0 0 320 320" aria-hidden="true">
              {NODES.map((node) => (
                <motion.line
                  key={node.id}
                  x1="160"
                  y1="160"
                  x2={node.line.x2}
                  y2={node.line.y2}
                  stroke="currentColor"
                  strokeLinecap="round"
                  className={selected === node.id ? "text-accent-cyan" : "text-white/15"}
                  animate={{ strokeWidth: selected === node.id ? 3 : 1.5 }}
                  transition={{ duration: 0.25 }}
                />
              ))}
            </svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex size-24 flex-col items-center justify-center gap-1 rounded-full bg-primary-blue text-text-light shadow-lg shadow-primary-blue/30"
            >
              <User className="size-7" aria-hidden="true" />
              <span className="text-[10px] font-bold">Pessoa</span>
            </motion.div>

            {NODES.map((node, i) => (
              <motion.button
                key={node.id}
                type="button"
                onClick={() => setSelected((current) => (current === node.id ? null : node.id))}
                aria-pressed={selected === node.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  "absolute z-10 flex size-16 flex-col items-center justify-center gap-0.5 rounded-full text-text-light transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark",
                  selected === node.id ? "bg-primary-blue shadow-lg shadow-primary-blue/40" : "bg-bg-panel hover:bg-bg-panel/70",
                  node.className,
                )}
              >
                <node.icon
                  className={cn("size-5", selected === node.id ? "text-text-light" : "text-accent-cyan")}
                  aria-hidden="true"
                />
                <span className="text-[9px] font-bold">{node.label}</span>
              </motion.button>
            ))}
          </div>

          <div
            className="mt-6 min-h-[76px] rounded-xl border border-white/10 bg-bg-panel px-5 py-4 text-center"
            aria-live="polite"
          >
            {activeNode ? (
              <p className="text-sm leading-relaxed text-text-light/85">
                <span className="font-bold text-accent-cyan">{activeNode.label}: </span>
                {activeNode.detail}
              </p>
            ) : (
              <p className="flex items-center justify-center gap-2 text-sm text-text-light/50">
                <MousePointerClick className="size-4" aria-hidden="true" />
                Toque em uma pessoa para ver o que ela pode acompanhar.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ConnectionSection };
