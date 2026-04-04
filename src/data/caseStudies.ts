import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "plus-size-kurti",
    logo: "",
    title: "Plus Size Kurti",
    description:
      "Built a brand entirely from <strong class='gg-bold gg-green'>zero</strong> — no website, no social media, no history. Scaled to <strong class='gg-bold gg-green'>₹8.5L/month</strong> in 90 days.",
    link: "/case-studies/plus-size-kurti",
    kpis: [
      { value: "8.97x", label: "Peak ROAS", color: "green" },
      { value: "₹8.5L", label: "Revenue / mo", color: "blue" },
      { value: "90 days", label: "To profit", color: "blue-soft" },
    ],
  },
  {
    id: "sbs-jaipur",
    logo: "/images/client_logo/sbs.jpeg",
    title: "SBS Jaipur",
    description:
      "Turned a loss-making brand spending <strong class='gg-bold gg-green'>₹2L/month</strong> into a <strong class='gg-bold gg-green'>₹15L/month</strong> profitable business — with 40% less ad spend.",
    link: "/case-studies/sbs-jaipur",
    kpis: [
      { value: "15x", label: "Avg ROAS", color: "green" },
      { value: "₹15L", label: "Monthly rev", color: "blue" },
      { value: "32K", label: "New followers", color: "blue-soft" },
    ],
  },
  {
    id: "silver-house-by-rj",
    logo: "/images/client_logo/silver-house-by-rj.jpeg",
    title: "Silver House by RJ",
    description:
      "Grew from <strong class='gg-bold gg-green'>₹10K/month</strong> ad spend to <strong class='gg-bold gg-green'>₹25L/month</strong> revenue — with a consistent 5x ROAS and 400% offline footfall increase.",
    link: "/case-studies/silver-house-by-rj",
    kpis: [
      { value: "5x", label: "Consistent ROAS", color: "green" },
      { value: "₹25L+", label: "Monthly rev", color: "blue" },
      { value: "400%", label: "Offline footfall", color: "blue-soft" },
    ],
  },
];
