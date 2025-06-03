import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: (
        <img
          src="/f1.svg"
          alt="AI Tutoring Icon"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "AI Tutoring",
      description: "Personalized AI tutors provide custom learning paths and real-time assistance for each student.",
      delay: 0.1
    },
    {
      icon: (
        <img
          src="/f2.svg"
          alt="Smart Quizzes Icon"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Smart Quizzes",
      description: "AI-generated questions adapt to student knowledge levels for optimal learning progression.",
      delay: 0.2
    },
    {
      icon: (
        <img
          src="/f3.svg"
          alt="Sentiment Tracking Icon"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Sentiment Tracking",
      description: "NLP algorithms analyze student responses to identify confusion or frustration points.",
      delay: 0.3
    },
    {
      icon: (
        <img
          src="/f4.svg"
          alt="Self-Hosted Security Icon"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Self-Hosted Security",
      description: "Keep your educational data secure with on-premises deployment options.",
      delay: 0.4
    },
    {
      icon: (
        <img
          src="/f5.svg"
          alt="Advanced Analytics Icon"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Advanced Analytics",
      description: "Comprehensive insights into student performance with predictive learning outcomes.",
      delay: 0.5
    },
    {
      icon: (
        <img
          src="/f6.svg"
          alt="Interactive Forums Icon"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Interactive Forums",
      description: "AI-moderated discussion boards ensure quality engagement and highlight key insights.",
      delay: 0.6
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered Features
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge artificial intelligence with 
            proven educational methodologies to create a truly personalized 
            learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
