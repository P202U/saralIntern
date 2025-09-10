import React, { useState } from 'react';
import { GraduationCap, MapPin, Briefcase, Code, CheckCircle } from 'lucide-react';
import { UserProfile } from '../types';

interface RecommendationFormProps {
  onSubmit: (profile: UserProfile) => void;
  isVisible: boolean;
}

const RecommendationForm: React.FC<RecommendationFormProps> = ({ onSubmit, isVisible }) => {
  const [profile, setProfile] = useState<UserProfile>({
    education: '',
    skills: [],
    sectors: [],
    location: ''
  });

  const educationLevels = [
    { value: '10th', label: '10th Pass', icon: '📚' },
    { value: '12th', label: '12th Pass', icon: '🎓' },
    { value: 'diploma', label: 'Diploma', icon: '📜' },
    { value: 'graduate', label: 'Graduate', icon: '🎓' },
    { value: 'postgraduate', label: 'Post Graduate', icon: '📖' }
  ];

  const skillOptions = [
    { value: 'computer', label: 'Computer Skills', icon: '💻' },
    { value: 'communication', label: 'Communication', icon: '🗣️' },
    { value: 'teaching', label: 'Teaching', icon: '👩‍🏫' },
    { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { value: 'agriculture', label: 'Agriculture', icon: '🌾' },
    { value: 'handicraft', label: 'Handicraft', icon: '🎨' }
  ];

  const sectorOptions = [
    { value: 'government', label: 'Government', icon: '🏛️' },
    { value: 'technology', label: 'Technology', icon: '💻' },
    { value: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { value: 'education', label: 'Education', icon: '🎓' },
    { value: 'rural', label: 'Rural Development', icon: '🌾' },
    { value: 'manufacturing', label: 'Manufacturing', icon: '🏭' }
  ];

  const states = [
    'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan',
    'Uttar Pradesh', 'Madhya Pradesh', 'West Bengal', 'Andhra Pradesh', 'Odisha'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.education && profile.skills.length > 0 && profile.sectors.length > 0 && profile.location) {
      onSubmit(profile);
    }
  };

  const toggleArrayItem = (array: string[], item: string, setter: (newArray: string[]) => void) => {
    if (array.includes(item)) {
      setter(array.filter(i => i !== item));
    } else {
      setter([...array, item]);
    }
  };

  if (!isVisible) return null;

  return (
    <section id="form" className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Match
          </h2>
          <p className="text-lg text-gray-600">
            अपनी जानकारी share करें और AI आपके लिए best internships find करेगी
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Education Level */}
            <div>
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Education Level</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {educationLevels.map((edu) => (
                  <button
                    key={edu.value}
                    type="button"
                    onClick={() => setProfile({ ...profile, education: edu.value })}
                    className={`p-4 rounded-xl border-2 transition-all text-left min-h-[60px] flex items-center ${
                      profile.education === edu.value
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <span className="text-2xl mr-3">{edu.icon}</span>
                    <span className="font-medium">{edu.label}</span>
                    {profile.education === edu.value && (
                      <CheckCircle className="h-5 w-5 ml-auto text-orange-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Your Skills</h3>
                <span className="ml-2 text-sm text-gray-500">(Select all that apply)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skillOptions.map((skill) => (
                  <button
                    key={skill.value}
                    type="button"
                    onClick={() => toggleArrayItem(profile.skills, skill.value, (newSkills) => 
                      setProfile({ ...profile, skills: newSkills })
                    )}
                    className={`p-4 rounded-xl border-2 transition-all text-left min-h-[60px] flex items-center ${
                      profile.skills.includes(skill.value)
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <span className="font-medium">{skill.label}</span>
                    {profile.skills.includes(skill.value) && (
                      <CheckCircle className="h-5 w-5 ml-auto text-green-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sectors */}
            <div>
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Interested Sectors</h3>
                <span className="ml-2 text-sm text-gray-500">(Select up to 3)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sectorOptions.map((sector) => (
                  <button
                    key={sector.value}
                    type="button"
                    onClick={() => toggleArrayItem(profile.sectors, sector.value, (newSectors) => 
                      setProfile({ ...profile, sectors: newSectors.slice(0, 3) })
                    )}
                    disabled={!profile.sectors.includes(sector.value) && profile.sectors.length >= 3}
                    className={`p-4 rounded-xl border-2 transition-all text-left min-h-[60px] flex items-center ${
                      profile.sectors.includes(sector.value)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : profile.sectors.length >= 3
                        ? 'border-gray-100 text-gray-400 cursor-not-allowed'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <span className="text-2xl mr-3">{sector.icon}</span>
                    <span className="font-medium">{sector.label}</span>
                    {profile.sectors.includes(sector.value) && (
                      <CheckCircle className="h-5 w-5 ml-auto text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Preferred Location</h3>
              </div>
              <select
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none text-lg min-h-[60px]"
              >
                <option value="">Select your preferred state</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={!profile.education || profile.skills.length === 0 || profile.sectors.length === 0 || !profile.location}
                className={`px-12 py-4 rounded-xl font-semibold text-lg transition-all transform min-h-[60px] ${
                  profile.education && profile.skills.length > 0 && profile.sectors.length > 0 && profile.location
                    ? 'bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-700 hover:to-green-700 text-white shadow-lg hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Get AI Recommendations ✨
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecommendationForm;