import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { LOCAL_BUSINESS_SCHEMA, ORGANIZATION_SCHEMA, FAQ_SCHEMA } from "@/lib/seo-metadata"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Premium Wedding Turbans in Mumbai | Safawala Mumbai Safa & Pagdi Services | Expert Service",
  description:
    "Safawala Mumbai - Mumbai's most trusted wedding turban specialists since 2004. Expert safa, pagdi, feta & sehra tying. Master specialists, same-day service, all Mumbai areas. Free consultation. Book now: +91-9725295692",
  keywords:
    "wedding turban Mumbai, safa Mumbai, pagdi tying service Mumbai, groom turban Mumbai, wedding safa Mumbai, turban tying Mumbai, best turban service Mumbai, safa tying service Mumbai, pagdi design Mumbai, feta tying Mumbai, sehra Mumbai, barati safa Mumbai, groom styling Mumbai, turban specialist Mumbai, traditional turban Mumbai, custom wedding turban Mumbai, turban tying near me Mumbai, wedding turban price Mumbai, turban on rent Mumbai, destination wedding turban Mumbai, turban booking Mumbai, same day turban service Mumbai",
  authors: [{ name: "Safawala Mumbai Wedding Turbans" }],
  creator: "Safawala Mumbai Wedding Turbans",
  publisher: "Safawala Mumbai Wedding Turbans",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://safawalamumbai.com"),
  alternates: {
    canonical: "https://safawalamumbai.com",
    languages: {
      "hi-IN": "https://safawalamumbai.com/hi",
      "en-IN": "https://safawalamumbai.com/en",
      "mr-IN": "https://safawalamumbai.com/mr",
    },
  },
  openGraph: {
    title: "Premium Wedding Turbans in Mumbai | Safawala Mumbai Professional Service",
    description:
      "Expert safa, pagdi, feta & sehra tying for grooms, baraatis & destination weddings. Master specialists, same-day service, all Mumbai areas covered.",
    url: "https://safawalamumbai.com",
    siteName: "Safawala Mumbai Wedding Turbans",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://safawalamumbai.com/SAFAWALA%20LOGO.png",
        width: 1200,
        height: 630,
        alt: "Safawala Mumbai - Premium Wedding Turbans & Safa Service in Mumbai",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safawala Mumbai - Wedding Turbans Mumbai | Expert Safa & Pagdi Service",
    description: "20+ years of heritage. Master specialists, same-day service, premium quality, all Mumbai areas.",
    images: ["https://safawalamumbai.com/SAFAWALA%20LOGO.png"],
    creator: "@safawalamumbai",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Wedding Services",
  classification: "Wedding Turban & Safa Service Mumbai",
  applicationName: "Safawala Mumbai Wedding Turbans",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Safawala Mumbai Wedding Turbans",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#8b1a1a" />
        
        {/* Google Search Console & Analytics */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        
        {/* Local Business Structured Data */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
        
        {/* Organization Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        
        {/* FAQ Structured Data */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
