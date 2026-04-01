import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4 md:px-6 md:pb-10">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/70 bg-white/70 px-6 py-8 shadow-[0_18px_60px_-30px_rgba(48,41,36,0.28)] backdrop-blur">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold">
              zwik
            </p>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">
              Premium lifestyle accents designed to feel giftable, elegant, and easy to discover on Amazon.
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </p>
            {siteConfig.navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-foreground/80">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Follow
            </p>
            <Link href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer noopener">
              Instagram
            </Link>
            <Link href={siteConfig.socialLinks.amazon} target="_blank" rel="noreferrer noopener">
              Amazon Storefront
            </Link>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Designed for brand storytelling, discovery, and Amazon-first conversion.</p>
          <p>© 2026 zwik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
