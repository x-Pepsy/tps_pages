import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://PsyMan47.github.io/tps-pages'), // Update with your actual URL
  title: {
    default: "The Perfect Sound - Professional Audio Equalizer for Android",
    template: "%s | The Perfect Sound"
  },
  description: "Transform your Android audio with The Perfect Sound - 5 professional equalizers, AutoEQ profiles for 1000+ headphones, multiband compressor, and advanced audio processing. Download now on Google Play Store.",
  keywords: [
    "audio equalizer",
    "Android equalizer",
    "music equalizer",
    "sound enhancement",
    "AutoEQ",
    "parametric equalizer",
    "graphic equalizer",
    "bass boost",
    "audio compressor",
    "sound quality",
    "headphone equalizer",
    "speaker optimization",
    "audio effects",
    "music app",
    "sound customization",
    "TPS equalizer",
    "professional audio",
    "Android audio app"
  ],
  authors: [{ name: "The Perfect Sound Team" }],
  creator: "The Perfect Sound",
  publisher: "The Perfect Sound",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://PsyMan47.github.io/tps-pages",
    title: "The Perfect Sound - Professional Audio Equalizer for Android",
    description: "5 professional equalizers, AutoEQ profiles for 1000+ headphones, and advanced audio controls. Transform your Android audio experience.",
    siteName: "The Perfect Sound",
    images: [
      {
        url: "/og-image.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "The Perfect Sound - Audio Equalizer App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Perfect Sound - Professional Audio Equalizer for Android",
    description: "5 professional equalizers, AutoEQ profiles for 1000+ headphones. Transform your Android audio.",
    images: ["/og-image.png"],
    creator: "@theperfectsound", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/tps_pages/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/tps_pages/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/tps_pages/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/tps_pages/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/tps_pages/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/tps_pages/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/tps_pages/site.webmanifest",
  alternates: {
    canonical: "https://PsyMan47.github.io/tps-pages",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
