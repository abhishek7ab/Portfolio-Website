import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishekbadave.dev"),
  title: "Abhishek Badave | Full-Stack Developer & AI Enthusiast",
  description:
    "Personal portfolio of Abhishek Badave — B.Tech CSE student at Vishwakarma University. Full-Stack Developer specializing in React, Node.js, Python, and AI/ML. Building scalable web applications and AI-powered solutions.",
  keywords: [
    "Abhishek Badave",
    "Full-Stack Developer",
    "React Developer",
    "Node.js",
    "Python",
    "Machine Learning",
    "Vishwakarma University",
    "Portfolio",
    "CSE Student",
    "AI Developer",
  ],
  authors: [{ name: "Abhishek Badave" }],
  creator: "Abhishek Badave",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abhishekbadave.dev",
    title: "Abhishek Badave | Full-Stack Developer & AI Enthusiast",
    description:
      "Explore the portfolio of Abhishek Badave — building scalable full-stack applications and AI-powered solutions.",
    siteName: "Abhishek Badave Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Badave Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Badave | Full-Stack Developer",
    description:
      "Full-Stack Developer & AI Enthusiast. Check out my projects, skills, and achievements.",
    creator: "@abhishekbadave",
    images: ["/images/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://abhishekbadave.dev" />
        <JsonLd />
        <Script
          id="unregister-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (let registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} font-sans dark relative antialiased selection:bg-[var(--accent)] selection:text-white`}>
        <div className="animated-bg" />
        <div className="grain-overlay" />
        <CustomCursor />
        <ScrollProgress />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
