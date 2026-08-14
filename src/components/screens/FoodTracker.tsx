import { CheckCircle2, CircleHelp, XCircle } from "lucide-react";

const FOODS = [
  { name: "Banana", status: "Aceitei" },
  { name: "Brócolis", status: "Experimentei" },
  { name: "Cenoura", status: "Não aceitei" },
  { name: "Pão integral", status: "Aceitei" },
];

const STATUS_STYLE: Record<string, { icon: typeof CheckCircle2; color: string }> = {
  Aceitei: { icon: CheckCircle2, color: "text-primary-blue" },
  Experimentei: { icon: CircleHelp, color: "text-accent-purple" },
  "Não aceitei": { icon: XCircle, color: "text-text-muted" },
};

function FoodTracker() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-bg-dark px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Alimentação</p>
        <p className="text-sm font-bold text-text-light">Histórico de experiências</p>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto bg-bg-light p-4">
        <span className="mb-1 inline-block rounded-full bg-bg-soft-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-blue-dark">
          Exemplo ilustrativo
        </span>
        {FOODS.map((f) => {
          const s = STATUS_STYLE[f.status];
          return (
            <div key={f.name} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
              <s.icon className={`size-5 ${s.color}`} aria-hidden="true" />
              <span className="flex-1 text-sm font-semibold text-text-dark">{f.name}</span>
              <span className="text-xs font-medium text-text-muted">{f.status}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { FoodTracker };
