export interface ProfileStats {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  location: string;
  github: string;
  linkedin: string;
  bio: string[];
  stats: ProfileStats[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | null;
  tech: string[];
  github: string;
  demo: string | null;
  status: string;
  year: number;
}

export interface ExperiencePeriod {
  start: string;
  end: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: ExperiencePeriod;
  location: string;
  description: string[];
  tech: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: ExperiencePeriod;
  location: string;
  description: string;
  gpa: string | null;
}

export interface Certification {
  id: number;
  title: string;
  institution: string;
  period: ExperiencePeriod;
}
