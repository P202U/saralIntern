export interface Internship {
  id: string;
  title: string;
  organization: string;
  location: string;
  duration: string;
  stipend: string;
  matchPercentage: number;
  sector: string;
  requirements: string[];
}

export interface UserProfile {
  education: string;
  skills: string[];
  sectors: string[];
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  internshipTitle: string;
  quote: string;
  avatar: string;
}