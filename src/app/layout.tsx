import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatButton from "@/components/ui/FloatButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bharatinnovations.co"),
  title: {
    default: "Bharat Innovations — AI-Powered Performance Marketing Agency for D2C & eCommerce Brands",
    template: "%s | Bharat Innovations",
  },
  description:
    "Bharat Innovations is India's leading AI-powered performance marketing agency helping D2C and eCommerce brands achieve 6x–8x ROAS. We specialize in Paid Advertising (Meta & Google), Social Media Growth, Web Development, SEO, AI Automation, Influencer Marketing, and Creative Strategy using our proprietary RASA Framework.",
  keywords: [
    "Bharat Innovations",
    "AI marketing agency India",
    "performance marketing agency",
    "D2C marketing agency",
    "eCommerce marketing agency",
    "paid advertising agency India",
    "Meta ads agency",
    "Google ads agency",
    "ROAS optimization",
    "social media marketing agency",
    "Shopify marketing agency",
    "influencer marketing India",
    "SEO agency India",
    "AI automation marketing",
    "creative strategy agency",
    "ecommerce growth agency",
    "RASA Framework",
    "jewellery brand marketing",
    "fashion brand marketing",
    "D2C growth agency India",
  ],
  authors: [{ name: "Bharat Innovations" }],
  creator: "Bharat Innovations",
  publisher: "Bharat Innovations",
  openGraph: {
    title: "Bharat Innovations — AI-Powered Performance Marketing for D2C & eCommerce",
    description:
      "Struggling with poor ROAS and inconsistent sales? Bharat Innovations' RASA Framework delivers 6x–8x ROAS and 50%+ order growth for D2C and eCommerce brands across India. Paid Ads, SEO, Web Dev, AI Automation — all under one roof.",
    url: "https://bharatinnovations.co/",
    siteName: "Bharat Innovations",
    images: [
      {
        url: "/images/MARKETING-agency-2.png",
        width: 1200,
        height: 630,
        alt: "Bharat Innovations — AI-Powered Performance Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Innovations — 6x–8x ROAS for D2C & eCommerce Brands",
    description:
      "India's AI-powered performance marketing agency. Meta & Google Ads, SEO, Social Media, Web Dev & AI Automation — powered by the RASA Framework.",
    images: ["/images/MARKETING-agency-2.png"],
    creator: "@bharatinnovations",
  },
  alternates: {
    canonical: "https://bharatinnovations.co",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Marketing Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NF7KKVL0WX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NF7KKVL0WX');
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <FloatButton />
      </body>
    </html>
  );
}
