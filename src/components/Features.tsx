import React from 'react';
import { Brain, Smartphone, Globe, Users, Award, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description:
        'AI technology understands your skills and interests to suggest perfect internships.',
      color: 'text-purple-600 bg-purple-100',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description:
        'Can be used easily on any smartphone. Simple and user-friendly interface.',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      icon: Globe,
      title: 'Regional Language Support',
      description:
        'Complete information is available in Hindi and other regional languages.',
      color: 'text-green-600 bg-green-100',
    },
    {
      icon: Users,
      title: 'Community Support',
      description:
        'Connect with other interns and share experiences. You get peer support',
      color: 'text-orange-600 bg-orange-100',
    },
    {
      icon: Award,
      title: 'Government Verified',
      description:
        'All internships are government-verified. Safe and legitimate opportunities.',
      color: 'text-red-600 bg-red-100',
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description:
        'Your personal information remains completely secure. Data privacy is our priority.',
      color: 'text-teal-600 bg-teal-100',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've designed this platform specially for Indian youth. It's
            simple, accessible, and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`inline-flex p-3 rounded-xl ${feature.color} mb-4`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-green-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Platform Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">50,000+</div>
              <div className="text-orange-100">Successful Placements</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">1,000+</div>
              <div className="text-orange-100">Partner Organizations</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">28</div>
              <div className="text-orange-100">States & UTs Covered</div>
            </div>
            <div className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-orange-100">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
