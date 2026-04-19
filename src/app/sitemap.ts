import { MetadataRoute } from "next";

const BASE = "https://bharatinnovations.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Core pages ──
    { url: `${BASE}/`,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/contact`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/rasa-framework`,            lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Services ──
    { url: `${BASE}/services`,                  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services/performance-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/creative-strategy`,     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/ai-automation`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/influencer-marketing`,  lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/seo`,                   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/services/web-development`,       lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // ── Case Studies ──
    { url: `${BASE}/case-studies`,              lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/case-studies/plus-size-kurti`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/sbs-jaipur`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/silver-house-by-rj`,lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/arushi-arts`,       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/cashmagnet`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/jewelry-house`,     lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // ── Legal ──
    { url: `${BASE}/privacy-policy`,            lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`,      lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/refund-returns`,            lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ];
}
