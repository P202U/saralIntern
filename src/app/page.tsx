import { Job } from '../types';
import { jobsData } from '@/dummt';
import Image from 'next/image';
import SearchJobs from '@/components/searchJobs';

export default async function HomePage() {
  const jobs: Job[] = jobsData;
  const PmModiImage = '/Modi.jpg';

  return (
    <main className="container mx-auto px-4 md:px-8 lg:px-12">
      <div className="relative w-full h-80 md:h-96 lg:h-[480px] overflow-hidden rounded-lg shadow-lg mb-8">
        <Image
          src={PmModiImage}
          alt="PM Modi"
          fill
          style={{ objectFit: 'contain', objectPosition: 'center' }}
          className="rounded-lg"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center my-8 md:my-12 lg:my-16 text-gray-900">
        Caliber: Unlock Your Potential
      </h1>

      <SearchJobs jobs={jobs} />
    </main>
  );
}
