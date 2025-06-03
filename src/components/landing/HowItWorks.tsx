import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  BookOpen, 
  MessageCircle, 
  Award 
} from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  delay: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, step, delay }) => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row items-start md:items-center mb-16 relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Step Number */}
      <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-6 z-10">
        {step}
      </div>
      
      {/* Connection Line */}
      {step < 4 && (
        <div className="absolute left-8 top-16 w-0.5 h-24 bg-primary/30 hidden md:block" />
      )}
      
      {/* Content */}
      <div className="md:ml-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 max-w-lg">{description}</p>
      </div>
    </motion.div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus size={24} className="text-primary" />,
      title: "Enroll",
      description: "Register and complete a brief AI assessment to determine your learning style, preferences, and existing knowledge levels.",
      step: 1,
      delay: 0.1
    },
    {
      icon: <BookOpen size={24} className="text-primary" />,
      title: "Learn",
      description: "Access personalized content optimized for your learning style with adaptive difficulty based on your progress.",
      step: 2,
      delay: 0.2
    },
    {
      icon: <MessageCircle size={24} className="text-primary" />,
      title: "Interact with AI",
      description: "Engage with AI tutors for instant feedback, clarification, and deeper exploration of complex topics.",
      step: 3,
      delay: 0.3
    },
    {
      icon: <Award size={24} className="text-primary" />,
      title: "Get Certified",
      description: "Earn blockchain-verified certificates and badges as you master competencies and complete courses.",
      step: 4,
      delay: 0.4
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How TechoEasy Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes learning with AI simple and effective,
            from your first enrollment to final certification.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={step.step}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;