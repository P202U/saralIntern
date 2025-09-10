import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">PM Internship Scheme</h3>
                <p className="text-sm text-gray-400">AI Recommendation System</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Indian youth through AI-powered internship matching. 
              सभी के लिए equal opportunities।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#internships" className="text-gray-300 hover:text-orange-400 transition-colors">Find Internships</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-orange-400 transition-colors">About Scheme</a></li>
              <li><a href="#guidelines" className="text-gray-300 hover:text-orange-400 transition-colors">Guidelines</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-orange-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="text-gray-300 hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#tutorial" className="text-gray-300 hover:text-orange-400 transition-colors">How to Apply</a></li>
              <li><a href="#mobile" className="text-gray-300 hover:text-orange-400 transition-colors">Mobile App</a></li>
              <li><a href="#languages" className="text-gray-300 hover:text-orange-400 transition-colors">Regional Languages</a></li>
              <li><a href="#accessibility" className="text-gray-300 hover:text-orange-400 transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-400" />
                <span className="text-gray-300">1800-XXX-XXXX (Toll Free)</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-gray-300">help@pminternship.gov.in</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-blue-400 mt-0.5" />
                <span className="text-gray-300">
                  Ministry of Skill Development<br />
                  New Delhi, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Government Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm mb-6">
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
              Gov.in <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
              Digital India <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
              MyGov <ExternalLink className="h-3 w-3 ml-1" />
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors flex items-center">
              Skill India <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">
              © 2025 PM Internship Scheme AI Recommendation System. All rights reserved.
            </p>
            <p>
              Government of India Initiative | 
              <a href="#privacy" className="text-orange-400 hover:underline ml-1">Privacy Policy</a> |
              <a href="#terms" className="text-orange-400 hover:underline ml-1">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;