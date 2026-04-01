"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { CTAButton } from "@/components/custom/cta-button";
import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const isScrolled = useScrollThreshold(24);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-6">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300",
          isScrolled
            ? "border-white/70 bg-white/82 shadow-[0_18px_50px_-26px_rgba(48,41,36,0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            Z
          </div>
          <div>
            <p className="font-[family-name:var(--font-display)] text-base font-semibold">
              zwik
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              premium gifting
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {siteConfig.navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="inline-flex h-10 items-center rounded-full px-4 text-sm font-medium text-muted-foreground transition hover:bg-white/70 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <CTAButton href="/products" size="sm">
            Explore products
          </CTAButton>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/80 text-foreground shadow-sm"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col">
            <SheetHeader>
              <SheetTitle>Navigate zwik</SheetTitle>
            </SheetHeader>
            <nav className="mt-10 flex flex-col gap-3">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-white/70 bg-white/60 px-4 py-3 text-base font-medium text-foreground transition hover:bg-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-6">
              <CTAButton href="/products" className="w-full justify-center" size="lg">
                Shop the collection
              </CTAButton>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
