import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-light">
      <Header />
      
      {/* Privacy Policy Section */}
      <section className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-heading-2-desktop text-black">Privacy Policy</h1>
          </div>

          {/* Content */}
          <div className="border-t border-black">
            <div className="py-6 space-y-10">
              {/* Effective Date */}
              <p className="text-body-large text-black">
                Effective Date: Aug 29, 2025
              </p>

              {/* Introduction */}
              <p className="text-body-large text-black">
                Track&Tread ("we", "our", or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, and protect the data you provide when using our website, services, or interacting with us in any way.
              </p>

              {/* What We Collect */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">What We Collect</h2>
                <p className="text-body-large text-black whitespace-pre-line">
                  {`When you visit or make a purchase on our website, we may collect:
	• Personal Information: Your name, email address, shipping address, billing address, payment details, and phone number.
	• Order Information: Products ordered, order date, delivery preferences.
	• Device Information: IP address, browser type, operating system, referring URLs.
	• Usage Data: How you interact with our website, including pages viewed and actions taken.`}
                </p>
              </div>

              {/* How We Use Your Information */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">How We Use Your Information</h2>
                <p className="text-body-large text-black whitespace-pre-line">
                  {`We use your information to:
	• Fulfill and manage your orders.
	• Communicate with you about your purchase or customer service inquiries.
	• Provide personalized product recommendations and marketing.
	• Improve our website, products, and user experience.
	• Detect and prevent fraud or misuse of our services.
	• Comply with legal obligations.`}
                </p>
              </div>

              {/* Sharing Your Information */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">Sharing Your Information</h2>
                <p className="text-body-large text-black whitespace-pre-line">
                  {`We never sell your personal information.
However, we may share your data with:
	• Third-party service providers (e.g., payment gateways, shipping carriers, marketing platforms) to help us run our business efficiently.
	• Legal authorities if required by law or to protect our rights.

All partners are obligated to keep your data secure and confidential.`}
                </p>
              </div>

              {/* Cookies & Tracking Technologies */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">Cookies & Tracking Technologies</h2>
                <p className="text-body-large text-black whitespace-pre-line">
                  {`We use cookies and similar tools to:
	• Keep you logged in
	• Remember your cart
	• Analyze traffic and site usage
	• Show you relevant ads

You can manage or disable cookies through your browser settings.`}
                </p>
              </div>

              {/* Your Rights */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">Your Rights</h2>
                <p className="text-body-large text-black whitespace-pre-line">
                  {`Depending on your location, you may have the right to:
	• Access, correct, or delete your personal data
	• Opt out of email marketing
	• Request a copy of the data we hold
	• File a complaint with your data protection authority

To exercise any of these rights, email us at support@trackandtread.com.`}
                </p>
              </div>

              {/* Data Security */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">Data Security</h2>
                <p className="text-body-large text-black">
                  We use SSL encryption and follow industry best practices to protect your data. While no system is 100% secure, we take every reasonable step to safeguard your information.
                </p>
              </div>

              {/* Data Retention */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">Data Retention</h2>
                <p className="text-body-large text-black whitespace-pre-line">
                  {`We keep your personal information only as long as necessary:
	• For legal and tax purposes
	• To complete your order and provide support
	• Or until you ask us to delete it`}
                </p>
              </div>

              {/* International Users */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">International Users</h2>
                <p className="text-body-large text-black">
                  If you are accessing our site from outside the United States, your information may be transferred to, stored, and processed in the U.S. By using our services, you consent to this transfer.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">Children's Privacy</h2>
                <p className="text-body-large text-black">
                  Our website is not intended for children under the age of 18. We do not knowingly collect personal information from minors.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">Changes to This Policy</h2>
                <p className="text-body-large text-black">
                  We may update this Privacy Policy occasionally. Any changes will be posted here with an updated date. Your continued use of our website means you agree to the new terms.
                </p>
              </div>

              {/* Contact Us */}
              <div className="space-y-2">
                <h2 className="text-heading-5-desktop text-black font-medium">Contact Us</h2>
                <p className="text-body-large text-black whitespace-pre-line">
                  {`Have questions or concerns about your privacy?

Email: support@trackandtread.com
Phone number: 1-222-123-4567`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
