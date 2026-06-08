export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface QuickFact {
  icon: string;
  text: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  tech: string[];
  links: { label: string; url: string }[];
  badge?: string;
  featured?: boolean;
}

export interface ResearchItem {
  category: string;
  title: string;
  objective: string;
  method: string;
  tools: string[];
  status: "Completed" | "In Progress" | "Published";
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
