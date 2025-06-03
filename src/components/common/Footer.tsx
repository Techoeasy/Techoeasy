import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img src="/Logo.svg" alt="TechoEasy Logo" className="w-60 h-50 mr-2" />
              
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming education through AI-powered personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/TechoEasy/61576326405324/" target="_blank" rel="noopener noreferrer">
                <img src="/f.svg" alt="Facebook" className="w-8 h-8 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/techo-easy/" target="_blank" rel="noopener noreferrer">
                <img src="/l.svg" alt="LinkedIn" className="w-8 h-8 cursor-pointer" />
              </a>
              <a href="https://x.com/TechoEasy" target="_blank" rel="noopener noreferrer">
                <img src="/x.svg" alt="Instagram" className="w-8 h-8 cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@Techo_Easy" target="_blank" rel="noopener noreferrer">
                <img src="/y.svg" alt="Instagram" className="w-8 h-8 cursor-pointer" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                
                <Link to="/#features" className="text-gray-400 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-gray-400 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="text-gray-400 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              
              <li>
                <Link to="/#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Knowledge Base */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-400 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
             
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={18} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">support@techoeasy.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">0759988776</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">120 Kandy Road, Kiribathgoda, Gampaha, Sri Lanka.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
         <div className="flex flex-col md:flex-row justify-center items-center">
  <p className="text-gray-500 mb-4 md:mb-0 text-center">
  &copy; {new Date().getFullYear()}{" "}
  <a href="https://techoeasy.com/" className="text-blue-500 hover:underline">
    TechoEasy Inc.
  </a>{" "}
  All rights reserved.
</p>

</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
