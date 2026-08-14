import { cn } from "@/lib/utils";

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-xl border border-border bg-white px-4 text-text-dark placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/40",
        className,
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-xl border border-border bg-white px-4 py-3 text-text-dark placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue",
        className,
      )}
      {...props}
    />
  );
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-semibold text-text-dark", className)}
      {...props}
    />
  );
}

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "flex h-12 w-full rounded-xl border border-border bg-white px-4 text-text-dark",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue",
        className,
      )}
      {...props}
    />
  );
}

export { Input, Textarea, Label, Select };
