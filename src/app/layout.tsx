/* eslint-env node */
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Viewport } from "next";
import "nextra-theme-docs/style.css";
import Image from "next/image";
import { JetBrains_Mono as FontMono, Poppins } from "next/font/google";

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
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    site: "https://www.chirpier.co",
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
    <html lang="en">
      <body>
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
        </Layout>
      </body>
    </html>
  );
}
