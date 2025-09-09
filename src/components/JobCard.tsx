import { Job } from '../types';

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
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">{job.job_title}</h2>
        <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {job.job_type}
        </span>
      </div>
      <h3 className="text-lg text-gray-700 font-semibold">{job.company}</h3>
      <p className="text-gray-500 mt-1">
        {job.location.is_remote
          ? 'Remote'
          : `${job.location.city}, ${job.location.country}`}
      </p>

      {job.salary_range && (
        <p className="text-green-600 font-semibold mt-2">
          {formatSalary(job.salary_range)}
        </p>
      )}

      <div className="mt-4">
        <p className="text-gray-600 font-medium">Tech Stack:</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {job.tech_stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4 line-clamp-3">
        {job.description}
      </p>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          <span className="font-semibold">Seniority:</span>{' '}
          {job.seniority_level}
        </p>
        <p>
          <span className="font-semibold">Applicants:</span> {job.applicants}
        </p>
        <p>
          <span className="font-semibold">Posted:</span> {job.posted_date}
        </p>
      </div>
    </div>
  );
}
