import React, { useState } from 'react';
import GoogleForm from './googleForm';

const faqData = [
  {
    question: "What types of products do you provide maintenance for?",
    answer: `We provide complete maintenance and servicing for all our products including Centrifugal Blowers, Dust Collectors, Air Diffusers, Grills, Dampers, and more.
Our trained technicians ensure timely servicing, part replacement, and performance optimization for all equipment.`
  },
  {
    question: "Do you offer on-site inspection and service support?",
    answer: `Yes, we provide on-site inspection and servicing for industrial and commercial sites.
Our technicians can visit your location, inspect the equipment, and suggest the right maintenance or repair actions.`
  },
  {
    question: "Can I schedule periodic maintenance for installed products?",
    answer: `Absolutely. We offer AMC (Annual Maintenance Contracts) and scheduled service plans to ensure your systems run efficiently throughout the year.
This reduces downtime and increases the lifespan of your equipment.`
  },
  {
    question: "How can I request a maintenance visit or support?",
    answer: `You can fill out the service request form provided on our website or contact us directly via phone or email.
Once received, our support team will get in touch within 24 hours to confirm the visit and details.`
  },
  {
    question: "What safety standards do your products and services follow?",
    answer: `All our products are manufactured under strict industrial safety and quality standards.
Our service team follows proper safety protocols while handling, installing, and maintaining equipment.`
  },
  {
    question: "Can I get customized ventilation solutions for my industry?",
    answer: `Yes, we specialize in customized air handling and ventilation systems as per your space, load, and environment.
From design to installation and servicing, we offer end-to-end tailored solutions.`
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div id="details" className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-8">
      
      {/* Left: FAQ Section */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">Frequently Asked Questions</h2>

        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-800 focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-2xl font-bold">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 whitespace-pre-line">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Right: Google Form Embed */}
      <div className="w-full md:w-1/2">
        <GoogleForm />
      </div>
    </div>
  );
};

export default FAQSection;
