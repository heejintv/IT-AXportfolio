export interface KeyMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  badge?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    details: string;
  }[];
}

export interface Certification {
  name: string;
  organization: string;
  date: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  serviceOverview?: string;
  badges: string[];
  techStack: string[];
  coreImplementations: {
    category?: string;
    title: string;
    description?: string;
    points?: string[];
  }[];
  axLinkage: string;
  paperDownloadAvailable?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization?: string;
  period?: string;
  keyAchievements: string[];
  axLinkage: string;
}

