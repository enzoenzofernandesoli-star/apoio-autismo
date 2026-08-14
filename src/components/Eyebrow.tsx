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
    <div className={cn("flex items-center", className)}>
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
