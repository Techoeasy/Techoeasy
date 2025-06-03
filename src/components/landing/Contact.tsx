import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const payload = {
      ...formData,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const response = await fetch("https://formspree.io/f/mrbkzeej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setRecaptchaToken(null);
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 flex items-center justify-center px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden"
      >
        {/* Left column */}
        <div className="bg-gray-900 text-white p-10 space-y-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#2262EE]">
              Get in Touch
            </h2>

            <div className="space-y-4 text-sm mb-6">
              <div className="flex gap-3 items-center">
                <Phone size={24} color="#2262EE" /> 0759988776
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={24} color="#2262EE" /> support@techoeasy.com
              </div>
              <div className="flex gap-3 items-center">
                <MapPin size={24} color="#2262EE" /> 120 Kandy Road, Kiribathgoda, Gampaha, Sri Lanka.
              </div>
            </div>

            <div className="flex gap-4 mt-6 text-gray-300">
              <a
                href="https://www.facebook.com/people/TechoEasy/61576326405324/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/f.svg"
                  alt="Facebook"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/techo-easy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/l.svg"
                  alt="LinkedIn"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
              <a
                href="https://x.com/TechoEasy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/x.svg"
                  alt="Twitter"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
              <a
                href="https://www.youtube.com/@Techo_Easy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/y.svg"
                  alt="YouTube"
                  className="w-8 h-8 cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3099532003307!2d79.9176229!3d6.972711399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2581d1626f18f%3A0x99f56d8185ac6d2f!2s120%20Kandy%20Rd%2C%20Dalugama%2011300!5e0!3m2!1sen!2slk!4v1748595886767!5m2!1sen!2slk"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Right column (Form) */}
        <form className="p-10 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              type="text"
              placeholder="First name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg h-28"
          />

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LeDClArAAAAAG6fCxHBBw-Hk2AjxdFAHvligR62"
              onChange={(token) => setRecaptchaToken(token)}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-[#2262EE] text-white font-semibold py-3 px-6 rounded-lg transition w-full"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
