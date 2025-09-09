'use client';

import { useParams } from 'next/navigation';
import { Job } from '@/types';
import {
  BriefcaseIcon,
  MapPinIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { jobsData } from '@/dummt';

const jobs: Job[] = jobsData;

export default function JobDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const job = jobs.find(j => j.id === id);

  if (!job) {
    return <div>Job not found.</div>;
  }

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
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* Job Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {job.job_title}
            </h1>
            <h2 className="text-lg text-gray-600 font-medium mt-2">
              {job.company}
            </h2>
          </div>
          <span className="bg-blue-100 text-blue-600 text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-sm mt-4 md:mt-0">
            {job.job_type}
          </span>
        </div>

        {/* Salary & Location */}
        <div className="flex flex-wrap gap-4 text-gray-500 mb-6 border-b border-gray-200 pb-6">
          <p className="flex items-center text-base">
            <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
            {job.location.is_remote
              ? 'Remote'
              : `${job.location.city}, ${
                  job.location.state ? `${job.location.state}, ` : ''
                }${job.location.country}`}
          </p>
          {job.salary_range && (
            <p className="text-green-600 font-semibold text-base">
              {formatSalary(job.salary_range)}
            </p>
          )}
        </div>

        {/* Job Description */}
        <div className="prose max-w-none text-gray-700 leading-relaxed mb-6">
          <h3 className="text-xl font-semibold mb-4">Job Description</h3>
          <p>{job.description}</p>
        </div>

        {/* Skills & Requirements */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Skills & Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {job.tech_stack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* More Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-500 mb-8 border-t border-gray-200 pt-6">
          <p className="flex items-center">
            <BriefcaseIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-semibold">Seniority:</span>{' '}
            {job.seniority_level}
          </p>
          <p className="flex items-center">
            <UsersIcon className="h-5 w-5 text-gray-400 mr-2" />
            <span className="font-semibold">Applicants:</span> {job.applicants}
          </p>
          <p>
            <span className="font-semibold">Posted:</span> {job.posted_date}
          </p>
        </div>

        {/* Apply Button */}
        <div className="text-center">
          <a
            href={job.apply_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
