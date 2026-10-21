export interface Project {
  slug: string;
  title: string;
  year: number;
  industry: string;
  service:
    | "website"
    | "app"
    | "ui-ux-design"
    | "brand-identity"
    | "social-media-marketing"
    | "product-design"
    | "graphic-design"
    | "ai-automations"
    | "custom-projects";
  summary: string;
  client: string;
  role: string;
  timeline: string;
  liveUrl: string;
  demo: { type: "iframe" | "video" | "gallery"; src?: string };
  challenge: string;
  approach: string;
  solution: string;
  results: string[];
  seed: string;
  coverImage: string;
  keyImpact: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  seed: string;
  iconName?: string;
}

export interface Industry {
  slug: string;
  name: string;
  description: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  initials: string;
  seed: string;
  image: string;
  bio: string;
  linkedIn?: string;
}
