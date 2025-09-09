import { Job } from '../types';
import JobCard from '../components/JobCard';
import { jobsData } from '@/dummt';
import Image from 'next/image';

export default async function HomePage() {
  const jobs: Job[] = jobsData;
  const PmModiImage = '/Modi.jpg';

  return (
    <main className="container mx-auto p-4">
      <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full shadow-lg mb-8">
        <Image
          src={PmModiImage}
          alt="PM Modi"
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      <h1 className="text-5xl font-extrabold text-center my-12 text-gray-900">
        Caliber: Unlock Your Potential
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
