import { Trophy, CircleCheck, Puzzle } from "lucide-react";

function MissionCard() {
  return (
    <div className="flex h-full flex-col">
      <div className="bg-bg-dark px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">Missões</p>
        <p className="text-sm font-bold text-text-light">Conquistas de hoje</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto bg-bg-light p-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-bg-soft-blue text-primary-blue">
              <CircleCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-text-dark">Atividade de Português</p>
              <p className="text-xs text-text-muted">20 minutos · concluída</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-dashed border-accent-purple/40 bg-accent-purple/5 p-4 text-center">
          <Trophy className="mx-auto size-8 text-accent-purple" aria-hidden="true" />
          <p className="mt-2 text-sm font-bold text-text-dark">Reforçador desbloqueado</p>
          <p className="text-xs text-text-muted">10 minutos de LEGO</p>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-text-muted">
            Escolher reforçador
          </p>
          <div className="grid grid-cols-3 gap-2">
            {["LEGO", "Desenho", "Música"].map((r) => (
              <div
                key={r}
                className="flex flex-col items-center gap-1.5 rounded-xl bg-white p-2.5 text-center shadow-sm"
              >
                <Puzzle className="size-4 text-accent-purple" aria-hidden="true" />
                <span className="text-[10px] font-semibold text-text-dark">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MissionCard };
