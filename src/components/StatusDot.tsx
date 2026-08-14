import { cn } from "@/lib/utils";

function StatusDot({
  label,
  tone = "light",
  className,
}: {
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em]",
        tone === "light" ? "text-accent-cyan" : "text-primary-blue-dark",
        className,
      )}
    >
      <span className="relative flex size-1.5" aria-hidden="true">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
            tone === "light" ? "bg-accent-cyan" : "bg-primary-blue",
          )}
        />
        <span
          className={cn(
            "relative inline-flex size-1.5 rounded-full",
            tone === "light" ? "bg-accent-cyan" : "bg-primary-blue",
          )}
        />
      </span>
      {label}
    </span>
  );
}

export { StatusDot };
