import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-[#2262EE] mb-8 hover:text-[#159FA1] transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto bg-white shadow-lg p-8 rounded-2xl border border-[#5A85F7]">
          <h1 className="text-4xl font-bold text-[#2262EE] mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: May 29, 2025</p>

          <div className="space-y-8 text-gray-700">
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>

            <p>
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">Interpretation and Definitions</h2>
              <h3 className="text-xl font-semibold text-[#2262EE] mb-3">Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-[#2262EE] mb-3">Definitions</h3>
              <p className="mb-4">For the purposes of this Privacy Policy:</p>
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  <strong className="text-[#159FA1]">Account</strong> means a unique account created for You to access our Service or parts of our Service.
                </li>
                <li>
                  <strong className="text-[#159FA1]">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to TechoEasy, 120 Kandy Road, Kiribathgoda, Gampaha ,Sri Lanka.
                </li>
                <li>
                  <strong className="text-[#159FA1]">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                </li>
                {/* Add all other definitions similarly */}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">2. How We Use Your Information</h2>
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Providing and improving our services</li>
                <li>Processing your transactions</li>
                <li>Communicating with you</li>
                <li>Analyzing service usage</li>
                <li>Legal compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">3. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Service providers and partners</li>
                <li>Legal authorities when required</li>
                <li>Business transfers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your information, including:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Access controls</li>
                <li>Secure data storage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">Contact Us</h2>
              <p className="mb-4 text-gray-700">If you have any questions about this Privacy Policy, You can contact us:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>By email: <a href="mailto:support@techoeasy.com" className="text-[#159FA1] hover:text-[#2262EE] transition-colors">support@techoeasy.com</a></li>
                <li>
                  By visiting this page on our website:{" "}
                  <a
                    href="https://techoeasy.com/"
                    className="text-[#159FA1] hover:text-[#2262EE] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://techoeasy.com
                  </a>
                </li>
                <li>By phone number: 0759988776</li>
                <li>By mail: 120 Kandy Road, Kiribathgoda, Gampaha ,Sri Lanka.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
