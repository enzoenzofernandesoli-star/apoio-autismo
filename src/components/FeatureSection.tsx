import { motion } from "framer-motion";
import { Eyebrow } from "@/components/Eyebrow";
import { cn } from "@/lib/utils";

function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  tone = "light",
  className,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-20 lg:px-8 lg:py-28",
        tone === "dark" ? "bg-bg-dark text-text-light" : "bg-bg-light text-text-dark",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <Eyebrow tone={tone === "dark" ? "light" : "dark"}>{eyebrow}</Eyebrow>
          <h2
            className={cn(
              "mt-4 text-3xl font-black leading-tight sm:text-4xl",
              tone === "dark" ? "text-text-light" : "text-text-dark",
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "mt-4 text-lg leading-relaxed",
                tone === "dark" ? "text-text-light/70" : "text-text-muted",
              )}
            >
              {description}
            </p>
          )}
        </motion.div>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export { FeatureSection };
