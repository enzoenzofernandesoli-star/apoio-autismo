import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  tone = "light",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "rounded-2xl p-6",
        tone === "dark"
          ? "border border-white/10 bg-bg-panel"
          : "border border-border bg-card shadow-sm",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-11 items-center justify-center rounded-xl",
          tone === "dark" ? "bg-primary-blue/20 text-accent-cyan" : "bg-bg-soft-blue text-primary-blue",
        )}
      >
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3
        className={cn(
          "mt-4 text-lg font-bold",
          tone === "dark" ? "text-text-light" : "text-text-dark",
        )}
      >
        {title}
      </h3>
      <p className={cn("mt-2 text-sm leading-relaxed", tone === "dark" ? "text-text-light/65" : "text-text-muted")}>
        {description}
      </p>
    </motion.div>
  );
}

export { FeatureCard };
