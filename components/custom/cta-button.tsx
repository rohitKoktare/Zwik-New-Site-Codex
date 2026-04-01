import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CTAButtonProps = ButtonProps & {
  href: string;
  external?: boolean;
  showArrow?: boolean;
};

export function CTAButton({
  href,
  external = false,
  showArrow = true,
  className,
  children,
  ...props
}: CTAButtonProps) {
  return (
    <Button asChild className={cn("group", className)} {...props}>
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
      >
        {children}
        {showArrow ? (
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
        ) : null}
      </Link>
    </Button>
  );
}
