import Link from "next/link";
import { Logo } from "@/components/landing/logo";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-sidebar/70 px-6 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" aria-label="Sentrio home" className="inline-flex">
              <Logo />
            </Link>
            <p className="max-w-sm text-balance text-muted-foreground text-sm">
              All you need. Nothing you don&apos;t.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="font-medium">Product</p>
            <a
              className="block text-muted-foreground transition-colors hover:text-foreground"
              href="https://sentrio.ansalprojects.dpdns.org"
            >
              Cloud
            </a>
            <Link
              className="block text-muted-foreground transition-colors hover:text-foreground"
              href="/pricing"
            >
              Pricing
            </Link>
          </div>

          <div className="space-y-3 text-sm">
            <p className="font-medium">Company & Legal</p>
            <a
              className="block text-muted-foreground transition-colors hover:text-foreground"
              href="https://github.com/usesentrio/sentrio"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <Link
              className="block text-muted-foreground transition-colors hover:text-foreground"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="block text-muted-foreground transition-colors hover:text-foreground"
              href="/terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center sm:text-left text-sm text-muted-foreground">
          <p>
            Built with ❤️ by{" "}
            <a
              href="https://linkedin.com/in/ansalpandey"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Ansal Pandey
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/anuragkumar80/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Anurag Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}