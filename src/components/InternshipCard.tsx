import React from 'react';
import { MapPin, Clock, IndianRupee, Building, Star } from 'lucide-react';
import { Internship } from '../types';

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600 bg-green-100';
    if (percentage >= 80) return 'text-orange-600 bg-orange-100';
    return 'text-blue-600 bg-blue-100';
  };

  const getMatchStars = (percentage: number) => {
    return Math.floor(percentage / 20);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Match Indicator */}
      <div className="bg-gradient-to-r from-orange-500 to-green-500 p-3">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center">
            {[...Array(getMatchStars(internship.matchPercentage))].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-2 font-semibold">{internship.matchPercentage}% Match</span>
          </div>
          <span className="text-sm opacity-90">Perfect Fit!</span>
        </div>
      </div>

      <div className="p-6">
        {/* Title and Organization */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <Building className="h-4 w-4 mr-2" />
            <span className="font-medium">{internship.organization}</span>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-purple-500" />
            <span>{internship.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-blue-500" />
            <span>{internship.duration}</span>
          </div>
          <div className="flex items-center text-gray-600 col-span-1 sm:col-span-2">
            <IndianRupee className="h-4 w-4 mr-2 text-green-500" />
            <span className="font-semibold text-green-700">{internship.stipend}</span>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
          <div className="flex flex-wrap gap-2">
            {internship.requirements.map((req, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {req}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors min-h-[48px]">
            Apply Now
          </button>
          <button className="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors min-h-[48px]">
            Save for Later
          </button>
        </div>

        {/* Sector Tag */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getMatchColor(internship.matchPercentage)}`}>
            {internship.sector}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InternshipCard;