import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Personalized.</span>
              <span className="block">Intelligent.</span>
              <span className="block">Self-Hosted.</span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome to AI-first Learning
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Transform education with TechoEasy's AI-powered learning platform. 
              Personalized learning paths, intelligent tutoring, and real-time 
              sentiment tracking for exceptional educational outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="/#contact"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ChevronRight size={20} className="ml-2" />
              </motion.a>
              
              <motion.a
                href="/dashboard"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-medium px-6 py-3 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right Side Image */}
          <motion.div 
            className="md:w-1/2 relative flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/Heroq.svg" 
              alt="AI Learning Illustration" 
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
