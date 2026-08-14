import { MessageCircle, CalendarCheck, Wind, Trophy, Utensils, Hand } from "lucide-react";

const MODULES = [
  { icon: MessageCircle, label: "Comunicação" },
  { icon: CalendarCheck, label: "Rotina" },
  { icon: Wind, label: "Modo Calma" },
  { icon: Trophy, label: "Missões" },
  { icon: Utensils, label: "Alimentação" },
  { icon: Hand, label: "Ajuda" },
];

function AppHome() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-bg-dark px-5 pb-5 pt-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
          Olá!
        </p>
        <p className="text-lg font-bold text-text-light">O que vamos fazer agora?</p>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-3.5 bg-bg-light p-5">
        {MODULES.map((m) => (
          <div
            key={m.label}
            className="flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-white p-5 text-center shadow-sm"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-bg-soft-blue text-primary-blue">
              <m.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-xs font-bold text-text-dark">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { AppHome };
