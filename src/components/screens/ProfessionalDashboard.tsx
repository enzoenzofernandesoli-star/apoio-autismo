import { TrendingUp, Stethoscope } from "lucide-react";

const AREAS = ["Psicologia", "Terapia ocupacional", "Fonoaudiologia", "Nutrição"];

function ProfessionalDashboard() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-bg-dark px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Área dos Profissionais</p>
        <p className="text-sm font-bold text-text-light">Histórico e evolução</p>
      </div>

      <div className="flex-1 space-y-3 overflow-y-auto bg-bg-light p-4">
        <span className="inline-block rounded-full bg-bg-soft-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-blue-dark">
          Dados de exemplo
        </span>
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="size-4 text-primary-blue" aria-hidden="true" />
            <p className="text-xs font-bold text-text-dark">Evolução na comunicação</p>
          </div>
          <div className="flex h-16 items-end gap-1.5">
            {[40, 55, 50, 70, 65, 80].map((v, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-primary-blue/70" style={{ height: `${v}%` }} />
            ))}
          </div>
        </div>

        {AREAS.map((area) => (
          <div key={area} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
            <Stethoscope className="size-4 text-accent-purple" aria-hidden="true" />
            <span className="text-sm font-semibold text-text-dark">{area}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ProfessionalDashboard };
