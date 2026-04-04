export interface CaseStudy {
  id: string;
  logo: string;
  title: string;
  description: string;
  link: string;
  kpis: { value: string; label: string; color: "green" | "blue" | "blue-soft" }[];
}

export interface Service {
  title: string;
  description: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Client {
  name: string;
  logo: string;
  href: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stats: string;
  videoUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}
