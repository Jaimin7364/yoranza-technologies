// Type definitions for interns data

export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export interface Intern {
  id: number;
  name: string;
  role: string;
  duration: string;
  location: string;
  university: string;
  profileImage: string;
  skills: string[];
  projects: Project[];
  achievements: string[];
  testimonial: string;
  rating: number;
  linkedIn?: string;
  github?: string;
  portfolio?: string;
}

export interface InternshipStat {
  number: string;
  label: string;
  iconName: string;
}

export interface FeaturedIntern {
  name: string;
  role: string;
  duration: string;
  achievement: string;
  rating: number;
}

export interface InternsData {
  internsData: Intern[];
  internshipStats: InternshipStat[];
  featuredInterns: FeaturedIntern[];
  internshipHighlights: InternshipStat[];
}