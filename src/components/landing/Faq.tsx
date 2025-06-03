import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqAccordion: React.FC<{ faqList: FaqItem[] }> = ({ faqList }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqList.map((item, index) => (
        <motion.div 
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-lg">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-primary flex-shrink-0" />
            ) : (
              <ChevronDown className="text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 pb-4 text-gray-600"
            >
              <p>{item.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

const Faq: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "How does the AI tutoring actually work?",
      answer: "Our AI tutors use natural language processing and machine learning to understand student questions and provide contextually relevant answers. The system learns from each interaction to become more personalized over time, adapting to each student's learning style and pace."
    },
    {
      question: "Is TechoEasy suitable for all subjects?",
      answer: "Yes! TechoEasy works across disciplines from STEM to humanities. The platform is particularly strong in subjects with clear right/wrong answers like math and science, but also performs exceptionally well with language learning, history, and other humanities subjects through sophisticated NLP capabilities."
    },
    {
      question: "Do I need technical expertise to implement TechoEasy?",
      answer: "Not at all. Our platform is designed with educators in mind, not technologists. The interface is intuitive and user-friendly. We also provide comprehensive onboarding support and training to ensure a smooth implementation."
    },
    {
      question: "How secure is student data on the platform?",
      answer: "Security is our top priority. TechoEasy offers self-hosted options for institutions with strict data policies. We're fully FERPA and GDPR compliant, use end-to-end encryption, and never sell student data. You maintain complete ownership of all your data."
    },
    {
      question: "Can TechoEasy integrate with our existing LMS?",
      answer: "Absolutely. We provide robust APIs and pre-built integrations for popular LMS platforms like Canvas, Blackboard, Moodle, and more. The integration process is straightforward and our team provides technical support throughout."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide multi-tiered support including comprehensive documentation, video tutorials, email support, and live chat. Professional and Enterprise plans include priority support and dedicated account managers to ensure your success."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for,
            reach out to our team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion faqList={faqs} />
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;