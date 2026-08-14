import { ScanEye, Volume2, Lightbulb, Users, DoorOpen } from "lucide-react";

const SIGNALS = [
  { icon: Volume2, label: "Nível de ruído elevado" },
  { icon: Lightbulb, label: "Iluminação intensa" },
  { icon: Users, label: "Ambiente movimentado" },
  { icon: DoorOpen, label: "Rota de saída identificada" },
];

function EnvironmentScan() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-bg-dark px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Análise do Ambiente</p>
        <p className="text-sm font-bold text-text-light">Leitura do espaço</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 bg-bg-dark-deep py-8">
        <div className="relative flex size-20 items-center justify-center rounded-2xl border-2 border-accent-cyan/50">
          <ScanEye className="size-8 text-accent-cyan" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold text-text-light/70">Escaneando estímulos do ambiente…</p>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto bg-bg-light p-4">
        {SIGNALS.map((s) => (
          <div key={s.label} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
            <s.icon className="size-4 text-primary-blue" aria-hidden="true" />
            <span className="text-sm font-semibold text-text-dark">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { EnvironmentScan };
