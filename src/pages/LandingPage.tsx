import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import Pricing from '../components/landing/Pricing';
import Testimonials from '../components/landing/Testimonials';
import Faq from '../components/landing/Faq';
import Cta from '../components/landing/CTA';
import Contact from '../components/landing/Contact';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ChatbotIcon from '../components/landing/ChatbotIcon';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta/>
        <Contact />
      </main>
      <ChatbotIcon />
      <Footer />
    </div>
  );
};

export default LandingPage;