export interface Job {
  id: string;
  job_title: string;
  company: string;
  location: {
    city: string;
    state?: string;
    country?: string;
    is_remote: boolean;
  };
  seniority_level: string;
  job_type: string;
  salary_range: {
    min: number;
    max: number;
    currency: string;
  } | null;
  tech_stack: string[];
  description: string;
  posted_date: string;
  applicants: number;
}
