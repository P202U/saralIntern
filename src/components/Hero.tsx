import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStartMatching: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartMatching }) => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-green-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              AI-Powered Matching
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect
              <span className="text-orange-600"> Internship</span> with
              <span className="text-green-600"> AI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              सरकारी internships आसानी से find करें। AI technology आपके skills और interests के according best opportunities suggest करती है।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onStartMatching}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center min-h-[56px]"
              >
                Start Finding Internships
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors min-h-[56px]">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                50,000+ Interns Placed
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                1000+ Organizations
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Diverse Indian youth using technology for career growth"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-orange-600">95%</div>
              <div className="text-sm text-gray-600">Match Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;