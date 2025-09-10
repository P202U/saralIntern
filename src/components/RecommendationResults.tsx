import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import InternshipCard from './InternshipCard';
import { sampleInternships } from '../data/internships';

interface RecommendationResultsProps {
  isVisible: boolean;
  onBack: () => void;
}

const RecommendationResults: React.FC<RecommendationResultsProps> = ({ isVisible, onBack }) => {
  if (!isVisible) return null;

  return (
    <section className="py-12 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-6 py-3 rounded-full text-lg font-medium mb-6">
            <CheckCircle className="h-6 w-6 mr-2" />
            AI Analysis Complete!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Perfect Matches
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            हमारी AI ने आपके skills और interests के according <span className="font-semibold text-orange-600">5 best internships</span> find की हैं। 
            सबसे high match percentage वाली opportunities सबसे पहले show हो रही हैं।
          </p>
          
          <button 
            onClick={onBack}
            className="text-orange-600 hover:text-orange-700 font-medium mb-8 underline"
          >
            ← Change Preferences
          </button>
        </div>

        {/* AI Matching Info */}
        <div className="bg-white rounded-2xl p-6 md:p-8 mb-12 shadow-md border border-orange-200">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-orange-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">AI Matching Algorithm</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">Skills Match</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">88%</div>
              <p className="text-gray-600">Location Preference</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
              <p className="text-gray-600">Sector Interest</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <span className="font-semibold text-orange-600">AI Analysis:</span> Based on your profile, 
              you have excellent chances in Government and Technology sectors. 
              आपके skills perfect match कर रहे हैं!
            </p>
          </div>
        </div>

        {/* Recommended Internships */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {sampleInternships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>

        {/* Next Steps */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Next Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Review & Select</h4>
              <p className="text-gray-600 text-sm">अपने favorite internships review करें और best options select करें।</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Apply Online</h4>
              <p className="text-gray-600 text-sm">Simple online application process के through apply करें।</p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Start Journey</h4>
              <p className="text-gray-600 text-sm">Selection के बाद अपनी internship journey start करें!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationResults;