/* eslint-env node */
import { Footer, Layout, LocaleSwitch, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Viewport } from "next";
import { getLocale, getMessages } from "next-intl/server";
import "nextra-theme-docs/style.css";
import Image from "next/image";
import { JetBrains_Mono as FontMono, Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./global.css";

// Function to get messages with fallback
async function getMessagesWithFallback(locale: string) {
  try {
    // First try to load the specific locale (e.g. en-US)
    const messages = await getMessages({ locale });
    return messages;
  } catch (error) {
    // If specific locale fails, try the base locale (e.g. 'en' from 'en-US')
    const baseLocale = locale.split("-")[0];
    try {
      console.warn(
        `Translations for locale "${locale}" not found. Trying base locale "${baseLocale}".`
      );
      return await getMessages({ locale: baseLocale });
    } catch (baseError) {
      // If base locale also fails, fall back to 'en'
      console.warn(
        `Translations for base locale "${baseLocale}" not found. Falling back to "en".`
      );
      return await getMessages({ locale: "en" });
    }
  }
}

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontSans = Poppins({
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
  metadataBase: new URL("https://docs.chirpier.co"),
  title: {
    template: "%s - Chirpier",
  },
  description: "Chirpier: the easiest way to visualize your data in real-time",
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
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessagesWithFallback(locale);

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
    >
      <LocaleSwitch />
    </Navbar>
  );

  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`min-h-[100vh] w-full antialiased ${fontSans.variable}`}
    >
      <Head faviconGlyph="✦" />
      <body
        className={`${fontSans.variable} ${fontMono.variable} bg-white font-sans [&_pre]:font-mono antialiased`}
        style={{
          fontFamily: "var(--font-sans)",
        }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout
            navbar={navbar}
            footer={<div />}
            darkMode={false}
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
            <Footer style={{ fontSize: "12px", fontWeight: "300", fontFamily: "var(--font-sans)" }}>
              MIT {new Date().getFullYear()} ©{" "}
              <a href="https://www.chirpier.co" target="_blank">
                Chirpier
              </a>
              .
            </Footer>
          </Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
