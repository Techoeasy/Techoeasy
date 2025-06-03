import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
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
          <h1 className="text-4xl font-bold text-[#2262EE] mb-4">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: May 29, 2025</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">1. Introduction</h2>
              <p>
                These Terms and Conditions govern your use of our website located at TechoEasy.com (the "Service").
                By accessing or using the Service, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, we own the intellectual property rights in the Service and material on the Service.
                You may view, download for caching purposes only, and print pages from the Service for your own personal use,
                subject to the restrictions set out below and elsewhere in these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">3. Restrictions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must not republish material from the Service (including republication on another website).</li>
                <li>You must not sell, rent or sub-license material from the Service.</li>
                <li>You must not reproduce, duplicate, copy or otherwise exploit material on our Service for a commercial purpose.</li>
                <li>You must not edit or otherwise modify any material on the Service.</li>
                <li>You must not redistribute material from this Service except for content specifically and expressly made available for redistribution.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">4. User Content</h2>
              <p>
                In these Terms, “Your User Content” means material (including without limitation text, images, audio material, video material and audio-visual material)
                that you submit to this Service, for whatever purpose.
              </p>
              <p>
                You grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute Your User Content
                in any existing or future media. You also grant to us the right to sub-license these rights, and the right to bring an action for infringement of these rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">5. Limitation of Liability</h2>
              <p>
                The Service is provided “as is” without any representations or warranties, express or implied.
                We make no representations or warranties in relation to the Service or the information and materials provided on the Service.
                To the extent permitted by law, we exclude all warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">6. Indemnity</h2>
              <p>
                You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs,
                liabilities and expenses (including without limitation legal expenses and any amounts paid by us to a third party in settlement of a claim or dispute)
                incurred or suffered by us arising out of any breach by you of any provision of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">7. Variation</h2>
              <p>
                We may revise these Terms from time-to-time. Revised Terms will apply to the use of this Service from the date of publication.
                Please check this page regularly to ensure you are familiar with the current version.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#5A85F7] mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, You can contact us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
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

export default TermsConditions;
