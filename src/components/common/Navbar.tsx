import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Scrollspy from 'react-scrollspy';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="/Logo.svg"
                  alt="TechoEasy Logo"
                  className="h-16 w-auto mr-2"
                />
              </motion.div>
            </Link>
          </div>

          {/* Scrollspy Navigation */}
          <Scrollspy
            items={['home', 'how-it-works', 'pricing', 'contact']}
            currentClassName="text-blue-600 font-semibold"
            className="hidden md:flex flex-1 justify-center items-center space-x-8"
            offset={-100}
          >
            <li className="list-none">
              <Link to="/#home" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li className="list-none">
              <Link to="/#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
                How it Works
              </Link>
            </li>
            <li className="list-none">
              <Link to="/#pricing" className="text-gray-700 hover:text-primary transition-colors">
                Pricing
              </Link>
            </li>
            <li className="list-none">
              <Link to="/#contact" className="text-gray-700 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
          </Scrollspy>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/dashboard" 
              className="text-primary border-2 border-primary hover:bg-primary/10 px-4 py-2 rounded-md transition-colors"
            >
              Log In
            </Link>
            
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/#home" 
              className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#how-it-works" 
              className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link 
              to="/#pricing" 
              className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/#contact" 
              className="text-gray-700 hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/dashboard" 
               className="text-primary border-2 border-primary hover:bg-primary/10 px-4 py-2 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </Link>
            
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
