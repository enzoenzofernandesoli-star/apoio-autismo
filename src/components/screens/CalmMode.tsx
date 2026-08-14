import { Headphones, Music, Wind, Eye } from "lucide-react";

const RESOURCES = [
  { icon: Headphones, label: "Sons calmantes" },
  { icon: Music, label: "Música" },
  { icon: Wind, label: "Respiração guiada" },
  { icon: Eye, label: "Interface simplificada" },
];

function CalmMode() {
  return (
    <div className="flex h-full flex-col bg-bg-dark-deep">
      <div className="px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Modo Calma</p>
        <p className="text-sm font-bold text-text-light">Um espaço para desacelerar</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
        <div className="relative flex size-32 items-center justify-center rounded-full bg-accent-purple/20">
          <div className="absolute inset-3 rounded-full bg-accent-purple/25" />
          <Wind className="relative size-10 text-accent-lavender" aria-hidden="true" />
        </div>
        <p className="text-center text-sm font-medium text-text-light/70">
          Respire devagar. Você está em um espaço seguro.
        </p>

        <div className="grid w-full grid-cols-2 gap-3">
          {RESOURCES.map((r) => (
            <div
              key={r.label}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 p-3 text-center"
            >
              <r.icon className="size-5 text-accent-cyan" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-text-light/85">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { CalmMode };
