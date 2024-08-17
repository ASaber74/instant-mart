import React from 'react';

function FAQ() {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days. Expedited shipping options are available at checkout for faster delivery."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to many countries worldwide. Shipping costs and delivery times vary depending on the destination."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Books must be in their original condition. Please see our Returns page for full details."
    },
    {
      question: "Do you sell e-books?",
      answer: "Yes, we offer a wide selection of e-books compatible with most e-readers and devices."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order ships, you'll receive a tracking number via email to monitor your package's progress."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer gift wrapping services for a small additional fee. You can select this option during checkout."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can reach our customer service team via email at support@instantmart.com or by phone at 01020499854 during our business hours."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-grey-8 mb-6">Frequently Asked Questions</h1>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-grey-2 pb-4">
            <h2 className="text-xl font-semibold text-grey-7 mb-2">{faq.question}</h2>
            <p className="text-grey-6">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-grey-6">
          Can't find the answer you're looking for? 
          <a href="/contact" className="text-blue-600 hover:text-blue-800 ml-1">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
}

export default FAQ;