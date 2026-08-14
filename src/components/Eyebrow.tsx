import { cn } from "@/lib/utils";

function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "h-px w-10",
          tone === "light" ? "bg-accent-cyan" : "bg-primary-blue",
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-[0.28em]",
          tone === "light" ? "text-accent-cyan" : "text-primary-blue-dark",
        )}
      >
        {children}
      </span>
    </div>
  );
}

export { Eyebrow };
