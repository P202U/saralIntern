import React from 'react';
import { Globe, Menu } from 'lucide-react';
import FlashingHeader from './FlashingHeader';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b-2 border-orange-400">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PM</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">
                PM Internship Scheme
              </h1>
              <p className="text-sm text-gray-600">AI Recommendation System</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline text-sm">हिंदी/EN</span>
            </button>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <nav className="hidden md:flex mt-4 space-x-6">
            <a
              href="#home"
              className="text-orange-600 font-medium border-b-2 border-orange-400 pb-1"
            >
              Home
            </a>
            <a
              href="#internships"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              Find Internships
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              About Scheme
            </a>
            <a
              href="#help"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              Help
            </a>
          </nav>
          <FlashingHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
