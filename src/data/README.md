# Interns Data Structure

This document describes the structure of the interns data used in the Yoranza Technologies website.

## Files

- `src/data/interns.json` - Contains all intern data
- `src/types/interns.ts` - TypeScript interfaces for type safety
- `src/utils/icons.tsx` - Utility function to render icons from icon names

## Data Structure

### Intern Object
```typescript
interface Intern {
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
```

### Project Object
```typescript
interface Project {
  title: string;
  description: string;
  technologies: string[];
}
```

### Statistics Object
```typescript
interface InternshipStat {
  number: string;
  label: string;
  iconName: string;
}
```

### Available Icons
The following icon names can be used in the `iconName` field:
- `Users`
- `TrendingUp`
- `Star`
- `Award`
- `GraduationCap`
- `Code`
- `Lightbulb`
- `Target`

## Usage

### Adding a New Intern
1. Open `src/data/interns.json`
2. Add a new intern object to the `internsData` array
3. Follow the structure defined above
4. Ensure the `id` is unique
5. Use only available icon names for statistics

### Updating Statistics
1. Modify the `internshipStats`, `internshipHighlights`, or `featuredInterns` arrays in the JSON file
2. For icons, use only the names listed above

### Adding New Icons
1. Import the new icon in `src/utils/icons.tsx`
2. Add it to the `icons` object with a string key
3. Use the string key in your JSON data

## Components Using This Data

- `InternsScreen` - Full interns page
- `InternsSection` - Home page interns section

Both components automatically import and use the JSON data with full TypeScript support.