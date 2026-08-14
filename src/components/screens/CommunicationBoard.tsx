import { Droplet, Apple, BedDouble, HandHelping, Bath, Volume2, TriangleAlert } from "lucide-react";
import { Chip } from "@/components/ui/badge";

const CONTEXTS = ["Casa", "Escola", "Terapia", "Alimentação", "Passeio"];

const PHRASES = [
  { icon: Bath, label: "Quero ir ao banheiro." },
  { icon: Droplet, label: "Quero beber água." },
  { icon: Apple, label: "Estou com fome." },
  { icon: BedDouble, label: "Quero descansar." },
  { icon: HandHelping, label: "Preciso de ajuda." },
];

function CommunicationBoard() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-bg-dark px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Comunicação</p>
        <p className="text-sm font-bold text-text-light">Prancha por contexto</p>
      </div>
      <div className="flex gap-2 overflow-x-auto px-4 py-3">
        {CONTEXTS.map((c, i) => (
          <Chip key={c} active={i === 0} className="shrink-0 px-3 py-1.5 text-xs">
            {c}
          </Chip>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-2 gap-3 overflow-y-auto bg-bg-light p-4">
        {PHRASES.map((p) => (
          <div
            key={p.label}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-3 text-center shadow-sm"
          >
            <p.icon className="size-6 text-primary-blue" aria-hidden="true" />
            <span className="text-[11px] font-semibold leading-tight text-text-dark">{p.label}</span>
          </div>
        ))}
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-3 text-center"
        >
          <TriangleAlert className="size-6 text-destructive" aria-hidden="true" />
          <span className="text-[11px] font-bold text-destructive">Emergência</span>
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 bg-white px-4 py-3 text-xs font-semibold text-text-muted">
        <Volume2 className="size-4" aria-hidden="true" />
        Toque na figura para ouvir a frase
      </div>
    </div>
  );
}

export { CommunicationBoard };
