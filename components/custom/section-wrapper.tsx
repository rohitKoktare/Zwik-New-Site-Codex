import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionWrapper({
  id,
  className,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("px-4 py-10 md:px-6 md:py-16 lg:py-20", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
