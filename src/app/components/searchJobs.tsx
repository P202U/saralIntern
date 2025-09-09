'use client';

import { useState, useEffect } from 'react';
import { Job } from '../../types';
import JobCard from './JobCard';

// Location synonyms
const isSameLocation = (jobLocation: string, searchTerm: string): boolean => {
  const normalizedJobLocation = jobLocation.toLowerCase();
  const normalizedSearchTerm = searchTerm.toLowerCase();

  const cityAliases: { [key: string]: string[] } = {
    delhi: ['delhi', 'new delhi'],
    mumbai: ['mumbai', 'bombay'],
    bengaluru: ['bengaluru', 'bangalore'],
    kolkata: ['kolkata', 'calcutta'],
    chennai: ['chennai', 'madras'],
  };

  for (const alias in cityAliases) {
    if (cityAliases[alias].includes(normalizedSearchTerm)) {
      return cityAliases[alias].includes(normalizedJobLocation);
    }
  }

  return normalizedJobLocation.includes(normalizedSearchTerm);
};

export default function SearchJobs({ jobs }: { jobs: Job[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    const results = jobs.filter(job => {
      const jobTitle = job.job_title.toLowerCase();
      const jobLocation = job.location.city.toLowerCase();
      const search = searchTerm.toLowerCase();

      const titleMatch = jobTitle.includes(search);

      const locationMatch = isSameLocation(job.location.city, search);

      return titleMatch || locationMatch;
    });

    setFilteredJobs(results);
  }, [searchTerm, jobs]);

  return (
    <div>
      {/* Search Input Field */}
      <div className="flex justify-center my-8">
        <input
          type="text"
          placeholder="Search for jobs or locations..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-3 text-lg border-2 border-gray-700 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 placeholder:text-gray-400 bg-gray-800 text-white"
        />
      </div>

      {/* Display Filtered Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No jobs found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
