import { Hand, Volume2, DoorOpen, Droplet, HeartHandshake, BedDouble, HandHelping } from "lucide-react";

const QUICK_OPTIONS = [
  { icon: Volume2, label: "Quero silêncio" },
  { icon: DoorOpen, label: "Quero sair" },
  { icon: Droplet, label: "Quero água" },
  { icon: HeartHandshake, label: "Quero meu responsável" },
  { icon: BedDouble, label: "Quero descansar" },
  { icon: HandHelping, label: "Preciso de ajuda" },
];

function HelpButtonScreen() {
  return (
    <div className="flex h-full flex-col bg-bg-dark-deep">
      <div className="px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Botão de Ajuda</p>
        <p className="text-sm font-bold text-text-light">Quando falar é difícil</p>
      </div>

      <div className="flex flex-1 flex-col items-center gap-5 px-5 pb-5">
        <button
          type="button"
          className="flex size-28 flex-col items-center justify-center gap-1.5 rounded-full bg-destructive text-text-light shadow-lg shadow-destructive/30"
        >
          <Hand className="size-8" aria-hidden="true" />
          <span className="text-xs font-bold leading-tight">Estou sobrecarregado</span>
        </button>

        <div className="grid w-full grid-cols-2 gap-2.5">
          {QUICK_OPTIONS.map((o) => (
            <div
              key={o.label}
              className="flex items-center gap-2 rounded-xl bg-white/8 p-2.5 text-left"
            >
              <o.icon className="size-4 shrink-0 text-accent-cyan" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-text-light/90">{o.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { HelpButtonScreen };
