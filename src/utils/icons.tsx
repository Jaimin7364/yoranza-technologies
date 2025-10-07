import { 
  Users, 
  TrendingUp, 
  Star, 
  Award, 
  GraduationCap,
  Code,
  Lightbulb,
  Target,
  LucideIcon
} from 'lucide-react';

// Utility function to get icon components by name
export const getIcon = (iconName: string, className: string = "w-6 h-6") => {
  const icons: { [key: string]: LucideIcon } = {
    Users: Users,
    TrendingUp: TrendingUp,
    Star: Star,
    Award: Award,
    GraduationCap: GraduationCap,
    Code: Code,
    Lightbulb: Lightbulb,
    Target: Target
  };

  const IconComponent = icons[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};