import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { CTAButton } from "@/components/custom/cta-button";
import { SectionWrapper } from "@/components/custom/section-wrapper";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with zwik for partnerships, support, and brand inquiries.",
  path: "/contact",
  keywords: ["contact page", "brand inquiries"]
});

export default function ContactPage() {
  return (
    <SectionWrapper className="pt-10 md:pt-14">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          <span className="eyebrow">Contact</span>
          <h1 className="section-title font-[family-name:var(--font-display)]">
            Let’s talk about retail, gifting, or your next purchase.
          </h1>
          <p className="section-copy">
            Whether you need product support, collaboration details, or a quick introduction to the collection, this page keeps the path simple.
          </p>
          <div className="space-y-4">
            <div className="surface-panel flex items-start gap-4 p-5">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">hello@zwikatelier.com</p>
                <p className="text-sm text-muted-foreground">Customer care and partnership inquiries</p>
              </div>
            </div>
            <div className="surface-panel flex items-start gap-4 p-5">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">+91 98765 43210</p>
                <p className="text-sm text-muted-foreground">Mon to Sat, 10 AM to 6 PM IST</p>
              </div>
            </div>
            <div className="surface-panel flex items-start gap-4 p-5">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">New Delhi, India</p>
                <p className="text-sm text-muted-foreground">Serving customers through an Amazon-first model</p>
              </div>
            </div>
          </div>
        </div>

        <div className="surface-panel p-6 md:p-8">
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className="h-12 w-full rounded-2xl border border-border bg-white/80 px-4 outline-none transition focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-2xl border border-border bg-white/80 px-4 outline-none transition focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us how we can help."
                className="w-full rounded-3xl border border-border bg-white/80 px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href="mailto:hello@zwikatelier.com" size="lg">
                Send via email
              </CTAButton>
              <CTAButton href="https://www.amazon.in/" external variant="outline" size="lg">
                Visit Amazon
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
