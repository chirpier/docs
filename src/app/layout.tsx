/* eslint-env node */
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Viewport } from "next";
import "nextra-theme-docs/style.css";
import Image from "next/image";
import { JetBrains_Mono as FontMono, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
};

export async function generateStaticParams() {
  return [{ locale: "en-US" }, { locale: "en-GB" }, { locale: "en" }];
}

export const metadata = {
  metadataBase: new URL("https://docs.chirpier.co/docs"),
  title: {
    template: "%s - Chirpier",
  },
  description: "Chirpier - the easiest way to visualize your data in real-time",
  applicationName: "Chirpier",
  appleWebApp: {
    title: "Chirpier",
  },
  other: {
    "msapplication-TileImage": "/favicon.ico",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://www.chirpier.co",
  },
  icons: {
    icon: "/favicon.ico",
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
              color: "#4E6884",
              fontSize: "16px",
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
      className={`min-h-[100vh] w-full antialiased ${fontSans.variable} font-sans`}
      style={{
        fontFamily: "var(--font-sans), var(--font-mono)",
      }}
    >
      <Head
        backgroundColor={{
          light: "rgb(255, 255, 255)",
          dark: "rgb(255, 255, 255)",
        }}
      />
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans [&_pre]:font-mono antialiased`}
        style={{ fontFamily: "var(--font-sans), var(--font-mono)" }}
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
          sidebar={{ defaultMenuCollapseLevel: 2 }}
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
