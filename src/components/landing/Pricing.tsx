import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

type PlanType = 'monthly' | 'annual';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: PlanFeature[];
  highlighted?: boolean;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<PlanType>('monthly');

  const plans: PricingPlan[] = [
    {
      name: "Starter",
      description: "Perfect for small schools or individual educators",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        { text: "Up to 50 students", included: true },
        { text: "Basic AI tutor", included: true },
        { text: "Standard analytics", included: true },
        { text: "Email support", included: true },
        { text: "Advanced sentiment tracking", included: false },
        { text: "Custom branding", included: false },
        { text: "API access", included: false }
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing schools and departments",
      monthlyPrice: 99,
      annualPrice: 89,
      highlighted: true,
      features: [
        { text: "Up to 500 students", included: true },
        { text: "Advanced AI tutor", included: true },
        { text: "Comprehensive analytics", included: true },
        { text: "Priority support", included: true },
        { text: "Advanced sentiment tracking", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: false }
      ]
    },
    {
      name: "Enterprise",
      description: "For institutions with complex requirements",
      monthlyPrice: 249,
      annualPrice: 219,
      features: [
        { text: "Unlimited students", included: true },
        { text: "Premium AI tutor", included: true },
        { text: "Advanced analytics & exports", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Advanced sentiment tracking", included: true },
        { text: "Custom branding", included: true },
        { text: "API access", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that's right for your institution. All plans include core AI features.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${billingCycle === 'monthly' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              className="relative w-16 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            >
              <div 
                className={`absolute left-1 top-1 bg-primary w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                  billingCycle === 'annual' ? 'translate-x-8' : ''
                }`} 
              />
            </button>
            <span className={`ml-3 flex items-center ${billingCycle === 'annual' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 bg-accent/20 text-accent text-xs px-2 py-0.5 rounded">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden border ${
                plan.highlighted ? 'border-primary' : 'border-gray-100'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlighted && (
                <div className="bg-primary text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                
                <a 
                  href="/#contact"
                  className={`block text-center w-full py-3 rounded-lg font-medium transition-colors mb-6 ${
                    plan.highlighted 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Get Started
                </a>
                
                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      {feature.included ? (
                        <Check size={18} className="text-accent mr-2 flex-shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600">
            Need a custom solution? <a href="/#contact" className="text-primary font-medium">Contact us</a> for tailored pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
