import { ShieldCheck } from "lucide-react";

const REGISTER = [
  { label: "Atividade realizada", value: "Português · 20 min" },
  { label: "Comunicação utilizada", value: "Prancha · Escola" },
  { label: "Reforçador", value: "Desenho livre" },
  { label: "Alteração de rotina", value: "Nenhuma" },
];

function SchoolDashboard() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-bg-dark px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Área da Escola</p>
        <p className="text-sm font-bold text-text-light">Registro do professor</p>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto bg-bg-light p-4">
        <span className="inline-block rounded-full bg-bg-soft-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-blue-dark">
          Dados de exemplo
        </span>
        {REGISTER.map((item) => (
          <div key={item.label} className="rounded-xl bg-white p-3 shadow-sm">
            <p className="text-[11px] font-semibold text-text-muted">{item.label}</p>
            <p className="text-sm font-bold text-text-dark">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 bg-white px-4 py-3 text-[11px] font-semibold text-text-muted">
        <ShieldCheck className="size-4 text-primary-blue" aria-hidden="true" />
        Somente informações autorizadas pela família
      </div>
    </div>
  );
}

export { SchoolDashboard };
