/* eslint-env node */
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Viewport } from "next";
import "nextra-theme-docs/style.css";
import "./globals.css";
import Image from "next/image";
import { Fira_Code as FontMono, Lora, Nunito_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const fontSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const fontDisplay = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
};

export async function generateStaticParams() {
  return [{ locale: "en-US" }, { locale: "en-GB" }, { locale: "en" }];
}

export const metadata = {
  metadataBase: new URL("https://docs.chirpier.co"),
  title: {
    default: "Chirpier Docs",
    template: "%s - Chirpier",
  },
  description:
    "Documentation for Chirpier, including product guides, OpenClaw integration, SDK usage, charts, alerts, and practical use cases.",
  applicationName: "Chirpier Docs",
  keywords: [
    "Chirpier",
    "OpenClaw",
    "docs",
    "monitoring",
    "alerts",
    "charts",
    "telemetry",
    "SDK",
  ],
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    title: "Chirpier Docs",
  },
  openGraph: {
    type: "website",
    url: "https://docs.chirpier.co/",
    siteName: "Chirpier Docs",
    title: "Chirpier Docs",
    description:
      "Product docs and OpenClaw integration guides for Chirpier.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Chirpier Docs",
      },
    ],
  },
  other: {
    "msapplication-TileImage": "/favicon.ico",
    "msapplication-TileColor": "#16324a",
  },
  twitter: {
    card: "summary",
    site: "@chirpier",
    title: "Chirpier Docs",
    description:
      "Product docs and OpenClaw integration guides for Chirpier.",
    images: ["/icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "960x960" },
    ],
    apple: "/favicon/android-chrome-192x192.png",
    shortcut: "/favicon.ico",
  },
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <>
          <span
            style={{
              gap: "0.75rem",
              fontWeight: 600,
              paddingTop: "0.5rem",
              paddingBottom: "0.5rem",
              userSelect: "none",
              display: "flex",
              alignItems: "center",
              color: "black",
              fontSize: "16px",
              letterSpacing: "-0.01em",
              fontFamily: "Fira Code"
            }}
            title={`Chirpier`}
          >
            <Image src="/icon.png" alt="Chirpier" width={32} height={32} />
            Chirpier
          </span>
        </>
      }
      logoLink="https://www.chirpier.co"
      projectLink={"https://github.com/chirpier/docs"}
    ></Navbar>
  );

  return (
    <html
        lang="en"
        dir="ltr"
        suppressHydrationWarning
        className={`min-h-[100vh] w-full antialiased ${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} font-sans`}
        style={{
          fontFamily: "var(--font-sans), sans-serif",
        }}
      >
      <Head
        backgroundColor={{
          light: "rgb(255, 255, 255)",
          dark: "rgb(255, 255, 255)",
        }}
      />
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontDisplay.variable} font-sans [&_pre]:font-mono antialiased`}
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        <Layout
          navbar={navbar}
          footer={
            <Footer
              style={{
                fontSize: "13px",
                fontWeight: "300",
                fontFamily: "var(--font-sans)",
              }}
            >
              {new Date().getFullYear()} ©{" "}
              <a href="https://www.chirpier.co" target="_blank">
                Chirpier
              </a>
              .
            </Footer>
          }
          darkMode={false}
          nextThemes={{ defaultTheme: "light" }}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/chirpier/docs"
          feedback={{
            content: "Feedback",
            labels: "feedback",
          }}
          sidebar={{ defaultMenuCollapseLevel: 2, toggleButton: false }}
          pageMap={await getPageMap()}
        >
          {children}
          <SpeedInsights />
          <Analytics />
        </Layout>
      </body>
    </html>
  );
}
