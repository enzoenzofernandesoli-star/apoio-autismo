import { CalendarCheck, TriangleAlert } from "lucide-react";

const ROUTINE = [
  { time: "07:00", label: "Acordar", done: true },
  { time: "07:30", label: "Café da manhã", done: true },
  { time: "08:00", label: "Escola", done: true },
  { time: "08:30", label: "Português", done: false, current: true },
  { time: "09:30", label: "Matemática", done: false },
  { time: "10:30", label: "Reforçador", done: false },
];

function RoutineTimeline() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between bg-bg-dark px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Rotina</p>
          <p className="text-sm font-bold text-text-light">Linha do tempo · Hoje</p>
        </div>
        <CalendarCheck className="size-5 text-text-light/70" aria-hidden="true" />
      </div>

      <div className="flex items-center gap-2 bg-primary-blue/10 px-4 py-2.5 text-xs font-semibold text-primary-blue-dark">
        <TriangleAlert className="size-4" aria-hidden="true" />
        Atenção! A rotina mudou.
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto bg-bg-light p-4">
        {ROUTINE.map((item) => (
          <div
            key={item.time}
            className={`flex items-center gap-3 rounded-xl p-3 shadow-sm ${
              item.current ? "bg-primary-blue text-text-light" : "bg-white"
            }`}
          >
            <span className={`font-mono text-xs font-bold ${item.current ? "text-text-light/80" : "text-text-muted"}`}>
              {item.time}
            </span>
            <span className={`flex-1 text-sm font-semibold ${item.current ? "text-text-light" : "text-text-dark"}`}>
              {item.label}
            </span>
            {item.done && (
              <span className="size-2.5 rounded-full bg-primary-blue" aria-hidden="true" />
            )}
            {item.current && (
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold">agora</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { RoutineTimeline };
