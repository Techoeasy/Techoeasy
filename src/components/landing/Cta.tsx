import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20" style={{ backgroundColor: "#2262EE" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center bg-white bg-opacity-10 rounded-2xl shadow-lg p-10 backdrop-blur-sm"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="text-white text-lg mb-8">
          Discover how our AI-powered solutions can transform your customer relationships. Let's get started today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/#contact"
            aria-label="Book a Demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white text-white hover:bg-white hover:text-[#2262EE] px-6 py-3 rounded-lg text-sm font-medium transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-white/50 text-center"
          >
            Book a Demo
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
