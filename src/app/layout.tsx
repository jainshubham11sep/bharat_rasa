import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
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
  metadataBase: new URL("https://bharat-innovations.com"),
  title: "Bharat Innovations - Digital Marketing Agency",
  description:
    "Bharat Innovations is a Performance marketing agency for D2C and eCommerce brands. We specialize in SEO, website development, and paid advertising.",
  keywords: [
    "digital marketing agency",
    "SEO",
    "paid advertising",
    "DTC marketing",
    "ecommerce growth",
    "Bharat Innovations",
  ],
  openGraph: {
    title: "Bharat Innovations - Digital Marketing Agency",
    description:
      "One Dashboard. All the Growth You Need. Ad audits, SEO strategy, content ideas, and a clear monthly growth plan.",
    url: "https://bharat-innovations.com/",
    siteName: "Bharat Innovations",
    images: [{ url: "/images/MARKETING-agency-2.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Innovations - Digital Marketing Agency",
    description:
      "Performance marketing agency for D2C & eCommerce brands.",
    images: ["/images/MARKETING-agency-2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <FloatButton />
      </body>
    </html>
  );
}
