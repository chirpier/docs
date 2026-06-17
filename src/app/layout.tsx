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
  metadataBase: new URL("https://docs.chirrop.com"),
  title: {
    default: "ChirrOp Docs",
    template: "%s - ChirrOp",
  },
  description:
    "Documentation for ChirrOp, including product guides, OpenClaw integration, SDK usage, charts, alerts, and practical use cases.",
  applicationName: "ChirrOp Docs",
  keywords: [
    "ChirrOp",
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
    title: "ChirrOp Docs",
  },
  openGraph: {
    type: "website",
    url: "https://docs.chirrop.com/",
    siteName: "ChirrOp Docs",
    title: "ChirrOp Docs",
    description:
      "Product docs and OpenClaw integration guides for ChirrOp.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "ChirrOp Docs",
      },
    ],
  },
  other: {
    "msapplication-TileImage": "/favicon.ico",
    "msapplication-TileColor": "#16324a",
  },
  twitter: {
    card: "summary",
    site: "@chirrop",
    title: "ChirrOp Docs",
    description:
      "Product docs and OpenClaw integration guides for ChirrOp.",
    images: ["/icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "960x960" },
    ],
    apple: "/android-chrome-192x192.png",
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
            title={`ChirrOp`}
          >
            <Image src="/icon.png" alt="ChirrOp" width={32} height={32} />
            ChirrOp
          </span>
        </>
      }
      logoLink="https://www.chirrop.com"
      projectLink={"https://github.com/chirrop/docs"}
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
              <a href="https://www.chirrop.com" target="_blank">
                ChirrOp
              </a>
              .
            </Footer>
          }
          darkMode={false}
          nextThemes={{ defaultTheme: "light" }}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/chirrop/docs"
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
