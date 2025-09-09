import { Job } from '../types';
import {
  BriefcaseIcon,
  MapPinIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

export default function JobCard({ job }: { job: Job }) {
  const formatSalary = (salary: {
    min: number;
    max: number;
    currency: string;
  }) => {
    const min = salary.min.toLocaleString('en-IN');
    const max = salary.max.toLocaleString('en-IN');
    const currency =
      salary.currency === 'INR_monthly' ? '₹ (Monthly)' : '₹ (LPA)';
    return `${currency} ${min} - ${max}`;
  };

  return (
    <div
      className="
      bg-white 
      rounded-2xl 
      shadow-md 
      p-6 
      flex flex-col 
      h-full
      transition-all duration-300
      transform 
      hover:scale-[1.02] 
      hover:shadow-lg
      border border-gray-100
      hover:border-blue-300
    "
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">
            {job.job_title}
          </h2>
          <h3 className="text-sm text-gray-600 font-medium mt-1">
            {job.company}
          </h3>
        </div>
        <span
          className="
          bg-blue-100 
          text-blue-600 
          text-xs 
          font-bold 
          px-3 py-1 
          rounded-full 
          whitespace-nowrap 
          shadow-sm
        "
        >
          {job.job_type}
        </span>
      </div>

      {/* Salary & Location Section with Icons */}
      <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
        <p className="flex items-center">
          <MapPinIcon className="h-4 w-4 text-gray-400 mr-2" />
          {job.location.is_remote
            ? 'Remote'
            : `${job.location.city}, ${
                job.location.state ? `${job.location.state}, ` : ''
              }${job.location.country}`}
        </p>
        {job.salary_range && (
          <p className="text-green-600 font-semibold">
            {formatSalary(job.salary_range)}
          </p>
        )}
      </div>

      {/* Tech Stack Section */}
      <div className="mt-2">
        <p className="text-gray-700 font-semibold mb-2">Skills:</p>
        <div className="flex flex-wrap gap-2">
          {job.tech_stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description Section */}
      <p className="text-sm text-gray-500 mt-4 line-clamp-3">
        {job.description}
      </p>

      {/* Footer/Details Section */}
      <div className="mt-auto pt-6 flex flex-col gap-2 text-sm text-gray-500 border-t border-gray-100 mt-6">
        <p className="flex items-center">
          <BriefcaseIcon className="h-4 w-4 text-gray-400 mr-2" />
          <span className="font-semibold">Seniority:</span>{' '}
          {job.seniority_level}
        </p>
        <p className="flex items-center">
          <UsersIcon className="h-4 w-4 text-gray-400 mr-2" />
          <span className="font-semibold">Applicants:</span> {job.applicants}
        </p>
        <p>
          <span className="font-semibold">Posted:</span> {job.posted_date}
        </p>
      </div>
    </div>
  );
}
