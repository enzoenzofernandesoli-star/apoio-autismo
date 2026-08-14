import { MessageCircle, CalendarCheck, Utensils, Trophy } from "lucide-react";

const ITEMS = [
  { icon: MessageCircle, label: "Solicitações de comunicação", value: "6 hoje" },
  { icon: CalendarCheck, label: "Atividades concluídas", value: "4 de 6" },
  { icon: Utensils, label: "Alimentos aceitos", value: "2 novos" },
  { icon: Trophy, label: "Reforçadores usados", value: "LEGO, Música" },
];

function FamilyDashboard() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-bg-dark px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Área da Família</p>
        <p className="text-sm font-bold text-text-light">Painel do dia</p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto bg-bg-light p-4">
        <span className="inline-block rounded-full bg-bg-soft-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-blue-dark">
          Dados de exemplo
        </span>
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
            <span className="flex size-9 items-center justify-center rounded-lg bg-bg-soft-blue text-primary-blue">
              <item.icon className="size-4" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="text-xs font-semibold text-text-dark">{item.label}</p>
              <p className="text-[11px] text-text-muted">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FamilyDashboard };
