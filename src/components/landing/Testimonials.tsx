import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  imageUrl: string;
  delay: number;
}

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, position, imageUrl, delay }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Quote size={32} className="text-primary/20 mb-4" />
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "The AI sentiment tracking has revolutionized how I teach. I can now identify struggling students before they even come to me for help.",
      name: "Dr. Sarah Johnson",
      position: "Professor of Computer Science",
      imageUrl: "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=150",
      delay: 0.1
    },
    {
      quote: "TechoEasy's smart quiz builder saves me hours of work each week while generating challenging questions perfectly matched to my students' abilities.",
      name: "Michael Chen",
      position: "High School Math Teacher",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      delay: 0.2
    },
    {
      quote: "As an administrator, I appreciate how the analytics dashboard gives me a bird's-eye view of our entire institution's performance in real-time.",
      name: "Emily Rodriguez",
      position: "School Principal",
      imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Educators Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how TechoEasy is transforming education for
            instructors and institutions around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              position={testimonial.position}
              imageUrl={testimonial.imageUrl}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;