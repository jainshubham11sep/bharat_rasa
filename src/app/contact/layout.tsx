import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call | Bharat Innovations",
  description: "Ready to scale your D2C brand? Book a free strategy call with Bharat Innovations. Get a custom growth plan, ROAS audit & actionable roadmap — completely free.",
  keywords: ["book a strategy call", "free marketing consultation India", "D2C brand consultation", "ROAS audit free", "Bharat Innovations contact"],
  openGraph: {
    title: "Book a Free Strategy Call | Bharat Innovations",
    description: "Fill out our form and get a custom growth plan for your D2C brand — free strategy call with Bharat Innovations' AI marketing experts.",
    url: "https://bharatinnovations.co/contact",
    images: [{ url: "/images/MARKETING-agency-2.png", width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
