import { cn } from "@/lib/utils";

type BadgeVariant = "solid" | "soft" | "outline";

function Badge({
  className,
  variant = "soft",
  ...props
}: React.ComponentProps<"span"> & { variant?: BadgeVariant }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        variant === "solid" && "bg-primary-blue text-text-light",
        variant === "soft" && "bg-bg-soft-blue text-primary-blue-dark",
        variant === "outline" && "border border-border text-text-dark",
        className,
      )}
      {...props}
    />
  );
}

function Chip({
  className,
  active,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue",
        active
          ? "border-primary-blue bg-primary-blue text-text-light"
          : "border-border bg-white text-text-dark hover:border-primary-blue/50",
        className,
      )}
      {...props}
    />
  );
}

export { Badge, Chip };
