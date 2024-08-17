import React from 'react';

function HowItWorks() {
  const steps = [
    {
      title: "Browse our collection",
      description: "Explore our vast library of books across all genres and formats."
    },
    {
      title: "Add to cart",
      description: "Select the books you want and add them to your shopping cart."
    },
    {
      title: "Checkout",
      description: "Proceed to checkout, where you can review your order and enter shipping details."
    },
    {
      title: "Payment",
      description: "Choose your preferred payment method and complete your purchase securely."
    },
    {
      title: "Delivery",
      description: "We'll process your order and deliver it to your doorstep within the estimated timeframe."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-grey-8 mb-6">How It Works</h1>
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 bg-brand-5 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4">
              {index + 1}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-grey-7 mb-2">{step.title}</h2>
              <p className="text-grey-6">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;