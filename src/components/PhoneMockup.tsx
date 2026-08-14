import { cn } from "@/lib/utils";

function PhoneMockup({
  children,
  className,
  frameClassName,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  frameClassName?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[280px] rounded-[2.75rem] border-[10px] p-2 shadow-2xl",
        dark ? "border-bg-dark-deep bg-bg-dark-deep" : "border-text-dark bg-text-dark",
        frameClassName,
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full",
          dark ? "bg-bg-dark-deep" : "bg-text-dark",
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative flex h-[560px] flex-col overflow-hidden rounded-[2rem] bg-bg-light",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export { PhoneMockup };
