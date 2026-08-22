import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

const baseUrl = "https://sentrio.ansalprojects.dpdns.org";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Sentrio - All you need. Nothing you don't.",
    template: "%s | Sentrio",
  },
  description:
    "All you need. Nothing you don't. Open source project management that works for you, not against you.",
  keywords: [
    "sentrio",
    "project management",
    "open source",
    "kanban",
    "task management",
    "self-hosted",
    "team collaboration",
  ],
  applicationName: "Sentrio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Sentrio",
    title: "Sentrio - All you need. Nothing you don't.",
    description:
      "Open source project management that works for you, not against you. Self-hosted, simple, and powerful.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Sentrio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentrio - All you need. Nothing you don't.",
    description:
      "Open source project management that works for you, not against you. Self-hosted, simple, and powerful.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/sentrio.svg",
    shortcut: "/sentrio.svg",
    apple: "/sentrio.svg",
  },
  category: "productivity",
  creator: "Sentrio",
  publisher: "Sentrio",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sentrio",
    url: baseUrl,
    logo: `${baseUrl}/logo-512.png`,
    sameAs: ["https://github.com/usesentrio/sentrio"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sentrio",
    url: baseUrl,
    inLanguage: "en",
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sentrio",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Linux, macOS, Windows",
    description:
      "Open source project management that works for you, not against you. Self-hosted, simple, and powerful.",
    url: baseUrl,
    image: `${baseUrl}/images/hero.png`,
    license: "https://github.com/usesentrio/sentrio/blob/main/LICENSE",
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: This is necessary to apply the user's preferred color scheme before React hydration to prevent a flash of incorrect theme.
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var media = window.matchMedia('(prefers-color-scheme: dark)');
                  function applyTheme(isDark) {
                    document.documentElement.classList.toggle('dark', isDark);
                    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                  }
                  applyTheme(media.matches);
                  if (media.addEventListener) {
                    media.addEventListener('change', function(e) { applyTheme(e.matches); });
                  } else if (media.addListener) {
                    media.addListener(function(e) { applyTheme(e.matches); });
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data must be inlined as a script tag for search engines to parse.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          defer
          data-domain="sentrio.ansalprojects.dpdns.org"
          src="https://plausible.sentrio.ansalprojects.dpdns.org/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {
            "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"
          }
        </Script>
      </body>
    </html>
  );
}