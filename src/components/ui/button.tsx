import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-primary-blue text-text-light shadow-lg shadow-primary-blue/25 hover:bg-primary-blue-dark",
        secondary: "bg-white text-text-dark border border-border hover:border-primary-blue/50",
        outlineLight: "border border-white/30 text-text-light hover:bg-white/10",
        ghost: "text-text-dark hover:bg-muted",
      },
      size: {
        default: "h-12 px-6",
        lg: "h-14 px-8 text-base",
        sm: "h-10 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
