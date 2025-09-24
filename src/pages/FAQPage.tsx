import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('shipping');

  const faqData = {
    shipping: [
      {
        question: "What are the shipping options available?",
        answer: "We offer several shipping options to suit your needs:\n • Standard Shipping: 5-7 business days\n • Express Shipping: 2-3 business days\n • Overnight Shipping: 1 business day"
      },
      {
        question: "How much does shipping cost?",
        answer: "Shipping costs vary based on the shipping method selected and the destination:\n • Standard Shipping: $5.99 or free for orders over $50\n • Express Shipping: $14.99\n • Overnight Shipping: $24.99"
      },
      {
        question: "Do you offer international shipping?",
        answer: "Yes, we offer international shipping to selected countries. Shipping costs and delivery times vary based on the destination. Please check our international shipping rates at checkout."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number on our website or the carrier's website to track your order."
      },
      {
        question: "What should I do if my order hasn't arrived?",
        answer: "If your order hasn't arrived within the expected delivery time, please contact our customer service team at support@trackandtread.com with your order number. We will investigate the issue and provide you with an update as soon as possible."
      },
      {
        question: "Can I change my shipping address after placing an order?",
        answer: "If you need to change your shipping address, please contact our customer service team immediately. We will do our best to update your address if the order has not yet been shipped."
      },
      {
        question: "What happens if I'm not home to receive my order?",
        answer: "For Standard and Express shipping, the carrier will leave a notice with instructions on how to retrieve your package or schedule a redelivery. For Overnight shipping, a signature may be required upon delivery."
      },
      {
        question: "Do you offer free shipping?",
        answer: "Yes, we offer free Standard Shipping on all orders over $100 within the continental US."
      },
      {
        question: "What is your return policy for shipped items?",
        answer: "We accept returns within 30 days of purchase. Items must be in their original condition and packaging. Please visit our Returns & Exchanges page for more details and to initiate a return."
      },
      {
        question: "How do I contact customer service for shipping issues?",
        answer: "You can contact our customer service team at support@trackandtread.com or call us at 1-222-123-4567. Our team is available Monday to Friday, 9 AM to 5 PM EST."
      }
    ],
    ordering: [
      {
        question: "How do I place an order?",
        answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide your shipping information and payment details."
      },
      {
        question: "Can I modify or cancel my order?",
        answer: "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer service team immediately as your order may already be in processing."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay."
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, we use industry-standard encryption to protect your payment information. We never store your full credit card details on our servers."
      }
    ],
    products: [
      {
        question: "What sizes are available?",
        answer: "Our products are available in a wide range of sizes. Please check the product page for specific size availability and sizing charts."
      },
      {
        question: "Do you offer custom sizing?",
        answer: "Currently, we don't offer custom sizing, but we're working on introducing this feature in the future. Please sign up for our newsletter to be notified when it becomes available."
      },
      {
        question: "What materials are used in your products?",
        answer: "We use high-quality, sustainable materials including organic cotton, recycled polyester, and other eco-friendly fabrics. Each product page lists the specific materials used."
      },
      {
        question: "Are your products ethically made?",
        answer: "Yes, we are committed to ethical manufacturing practices. All our products are made in facilities that meet strict labor and environmental standards."
      }
    ],
    billing: [
      {
        question: "When will I be charged?",
        answer: "You will be charged immediately when you place your order. The charge will appear on your statement within 1-2 business days."
      },
      {
        question: "Can I get a refund?",
        answer: "Yes, we offer refunds for eligible items within 30 days of purchase. Items must be in their original condition and packaging."
      },
      {
        question: "How long do refunds take?",
        answer: "Refunds are typically processed within 5-7 business days after we receive your returned item. The refund will appear on your original payment method."
      },
      {
        question: "Do you offer store credit?",
        answer: "Yes, we offer store credit as an alternative to refunds. Store credit never expires and can be used for future purchases."
      }
    ],
    returns: [
      {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase. Items must be in their original condition with tags attached and original packaging."
      },
      {
        question: "How do I start a return?",
        answer: "You can start a return by visiting our Returns & Exchanges page or contacting our customer service team. We'll provide you with a return label and instructions."
      },
      {
        question: "Who pays for return shipping?",
        answer: "We provide free return shipping for defective items or our error. For other returns, return shipping costs are the responsibility of the customer."
      },
      {
        question: "Can I exchange an item instead of returning it?",
        answer: "Yes, we offer exchanges for different sizes or colors. Please contact our customer service team to arrange an exchange."
      }
    ]
  };

  const tabs = [
    { id: 'shipping', label: 'Shipping' },
    { id: 'ordering', label: 'Ordering' },
    { id: 'products', label: 'Products' },
    { id: 'billing', label: 'Billing' },
    { id: 'returns', label: 'Returns' }
  ];

  return (
    <div className="min-h-screen bg-gray-light">
      <Header />
      
      {/* FAQ Section */}
      <section className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-heading-2-desktop text-black">FAQs</h1>
          </div>

          {/* Container */}
          <div className="border-t border-black">
        <div className="flex">
          {/* Left Tabs */}
          <div className="w-1/4 border-r border-black">
            <div className="p-6">
              <div className="flex flex-col gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-left text-body-xl font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'text-purple-brand'
                        : 'text-black hover:opacity-70'
                    }`}
                    style={activeTab === tab.id ? { color: '#623CEA' } : {}}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 p-6">
            <div className="space-y-10">
              {faqData[activeTab as keyof typeof faqData].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-heading-5-desktop text-black font-medium">
                    {faq.question}
                  </h3>
                  <p className="text-body-large text-black whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-black">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-heading-2-desktop text-black">
              Didn't find your answer?<br />
              Contact us for assistance!
            </h2>
          </div>

          {/* Container */}
          <div className="border-t border-black">
            <div className="flex">
              {/* Call Tile */}
              <div className="flex-1 border-r border-black p-6">
                <div className="flex flex-col gap-14">
                  <div className="space-y-4">
                    <h3 className="text-heading-6-desktop text-gray-medium">Call</h3>
                    <p className="text-heading-5-desktop text-black">1-222-123-4567</p>
                    <p className="text-body-xl text-black">Monday to Friday: 9 AM - 5 PM EST</p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 w-fit">
                    <span className="text-body-large font-medium">Call Us</span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.78 3.16C4.35 2.73 3.7 2.73 3.27 3.16L2.34 4.09C1.91 4.52 1.91 5.17 2.34 5.6L4.78 8.04C5.21 8.47 5.86 8.47 6.29 8.04L7.22 7.11C7.65 6.68 7.65 6.03 7.22 5.6L4.78 3.16Z" fill="currentColor"/>
                      <path d="M8.04 6.29C7.61 5.86 6.96 5.86 6.53 6.29L5.6 7.22C5.17 7.65 5.17 8.3 5.6 8.73L8.04 11.17C8.47 11.6 9.12 11.6 9.55 11.17L10.48 10.24C10.91 9.81 10.91 9.16 10.48 8.73L8.04 6.29Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Email Tile */}
              <div className="flex-1 p-6">
                <div className="flex flex-col justify-between h-full gap-14">
                  <div className="space-y-4">
                    <h3 className="text-heading-6-desktop text-gray-medium">Email</h3>
                    <p className="text-heading-5-desktop text-black">support@trackandtread.com</p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-black bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 w-fit">
                    <span className="text-body-large font-medium">Email Us</span>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.29 4.13H19.71C20.42 4.13 21 4.71 21 5.42V16.58C21 17.29 20.42 17.87 19.71 17.87H2.29C1.58 17.87 1 17.29 1 16.58V5.42C1 4.71 1.58 4.13 2.29 4.13Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M21 5.42L11 11.5L1 5.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
