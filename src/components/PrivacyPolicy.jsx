import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText, Users, Database, Globe } from 'lucide-react';
import logo from '../assets/Logof.png';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Update or add robots meta tag with noindex, nofollow
    let robotsMeta = document.querySelector('meta[name="robots"]');
    
    // Store original content before updating
    const originalContent = robotsMeta ? robotsMeta.getAttribute('content') || 'index, follow' : 'index, follow';
    
    if (robotsMeta) {
      // Update existing robots meta tag
      robotsMeta.content = 'noindex, nofollow';
    } else {
      // Create new robots meta tag if it doesn't exist
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'noindex, nofollow';
      document.head.appendChild(robotsMeta);
    }

    // Cleanup function to restore original robots meta tag when component unmounts
    return () => {
      const existingRobots = document.querySelector('meta[name="robots"]');
      if (existingRobots) {
        existingRobots.content = originalContent;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#0e2a47] to-[#1f4773] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Pawna Lake Villas Logo"
                className="h-16 w-auto"
              />
            </Link>
            <Link
              to="/"
              className="flex items-center text-white hover:text-blue-300 transition-colors duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0a4384] to-[#6392bf] rounded-full mb-6">
              <Shield className="text-white" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#00274d] mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              At Pawna Lake Villas, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <Database className="text-[#0a4384] mr-3" size={28} />
              <h2 className="text-3xl font-bold text-[#00274d]">Information We Collect</h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-[#00274d] mb-4">Personal Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0a4384] mr-2 font-bold">•</span>
                  <span><strong>Name:</strong> We collect your full name when you submit an enquiry or schedule a site visit.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a4384] mr-2 font-bold">•</span>
                  <span><strong>Contact Information:</strong> We collect your phone number and email address to communicate with you about our villas and services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a4384] mr-2 font-bold">•</span>
                  <span><strong>Messages:</strong> Any messages or queries you send through our contact forms.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#00274d] mb-4">Automatically Collected Information</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#0a4384] mr-2 font-bold">•</span>
                  <span><strong>Device Information:</strong> Browser type, operating system, and device identifiers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a4384] mr-2 font-bold">•</span>
                  <span><strong>Usage Data:</strong> Pages visited, time spent on pages, and interaction patterns.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0a4384] mr-2 font-bold">•</span>
                  <span><strong>Location Data:</strong> General location information based on your IP address.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <Eye className="text-[#0a4384] mr-3" size={28} />
              <h2 className="text-3xl font-bold text-[#00274d]">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#00274d] mb-2">Service Delivery</h3>
                <p>We use your information to respond to your enquiries, schedule site visits, and provide information about our villas and services.</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#00274d] mb-2">Communication</h3>
                <p>We may contact you via phone, email, or WhatsApp to follow up on your enquiries and provide updates about our properties.</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#00274d] mb-2">Marketing</h3>
                <p>With your consent, we may send you promotional materials, property updates, and special offers related to Pawna Lake Villas.</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#00274d] mb-2">Analytics</h3>
                <p>We analyze usage data to improve our website, enhance user experience, and understand visitor preferences.</p>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <Users className="text-[#0a4384] mr-3" size={28} />
              <h2 className="text-3xl font-bold text-[#00274d]">Information Sharing and Disclosure</h2>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#0a4384] mr-2 font-bold">•</span>
                <span><strong>Service Providers:</strong> We may share information with trusted service providers who assist us in operating our website and conducting business, such as hosting providers and analytics services.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a4384] mr-2 font-bold">•</span>
                <span><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#0a4384] mr-2 font-bold">•</span>
                <span><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</span>
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <Lock className="text-[#0a4384] mr-3" size={28} />
              <h2 className="text-3xl font-bold text-[#00274d]">Data Security</h2>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span>Encrypted data transmission (HTTPS/SSL)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span>Secure server infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span>Regular security assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">✓</span>
                  <span>Access controls and authentication</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <FileText className="text-[#0a4384] mr-3" size={28} />
              <h2 className="text-3xl font-bold text-[#00274d]">Your Rights</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#00274d] mb-2">Access</h3>
                <p className="text-gray-700 text-sm">You have the right to request access to your personal information.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#00274d] mb-2">Correction</h3>
                <p className="text-gray-700 text-sm">You can request correction of inaccurate or incomplete information.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#00274d] mb-2">Deletion</h3>
                <p className="text-gray-700 text-sm">You may request deletion of your personal information, subject to legal obligations.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#00274d] mb-2">Opt-Out</h3>
                <p className="text-gray-700 text-sm">You can opt-out of marketing communications at any time.</p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <div className="flex items-center mb-6">
              <Globe className="text-[#0a4384] mr-3" size={28} />
              <h2 className="text-3xl font-bold text-[#00274d]">Cookies and Tracking Technologies</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie preferences through your browser settings.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Types of cookies we use:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand website usage</li>
                  <li>Marketing cookies to deliver relevant content</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#00274d] mb-6">Third-Party Links</h2>
            <div className="bg-orange-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites, such as Google Maps. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#00274d] mb-6">Children's Privacy</h2>
            <div className="bg-purple-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>
            </div>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#00274d] mb-6">Changes to This Privacy Policy</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-[#00274d] mb-6">Contact Us</h2>
            <div className="bg-gradient-to-br from-[#0a4384] to-[#6392bf] rounded-lg p-8 text-white">
              <p className="mb-6 text-lg">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-4">
                <div>
                  <strong className="block mb-1">Email:</strong>
                  <a href="mailto:info@pawnalakevillas.com" className="hover:text-blue-200 underline">
                    info@pawnalakevillas.com
                  </a>
                </div>
                <div>
                  <strong className="block mb-1">Phone:</strong>
                  <a href="tel:7410008984" className="hover:text-blue-200 underline">
                    +91 74 100 08 984
                  </a>
                </div>
                <div>
                  <strong className="block mb-1">Address:</strong>
                  <p>Pawna Lake, Lonavala, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </section>

          {/* Consent Acknowledgment */}
          <section className="mt-12 pt-8 border-t-2 border-gray-200">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <p className="text-gray-700 leading-relaxed">
                By using our website and submitting your information, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
              </p>
            </div>
          </section>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-[#0a4384] to-[#6392bf] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-[#0a4384]/30 transform hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Pawna Lake Villas. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

