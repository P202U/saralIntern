import { Job } from '../types';
import JobCard from '../components/JobCard';
import { jobsData } from '@/dummt';

export default async function HomePage() {
  const jobs: Job[] = jobsData;

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">
        Caliber: unlock your potential
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
