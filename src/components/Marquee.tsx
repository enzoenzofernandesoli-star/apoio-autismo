const BENEFITS = [
  "Comunicação",
  "Rotina visual",
  "Modo Calma",
  "Reforçadores",
  "Alimentação",
  "Família",
  "Escola",
  "Profissionais",
];

function Marquee() {
  const items = [...BENEFITS, ...BENEFITS];

  return (
    <div className="group relative overflow-hidden border-y border-white/10 bg-bg-dark-deep py-4">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-light/60">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-accent-cyan/60" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}

export { Marquee };
