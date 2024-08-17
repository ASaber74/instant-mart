import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-grey-8 mb-6">Privacy Policy</h1>
      
      <div className="space-y-6 text-grey-6">
        <p>
          At InstantMart, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
        </p>
        
        <h2 className="text-2xl font-semibold text-grey-7 mt-4">Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our customer service. This may include your name, email address, shipping address, and payment information.
        </p>
        
        <h2 className="text-2xl font-semibold text-grey-7 mt-4">How We Use Your Information</h2>
        <p>
          We use your information to process orders, provide customer service, and improve our services. We may also use your information to send you updates about our products and services.
        </p>
        
        <h2 className="text-2xl font-semibold text-grey-7 mt-4">Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
        </p>
        
        <h2 className="text-2xl font-semibold text-grey-7 mt-4">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. If you would like to exercise these rights, please contact us at privacy@instantmart.com.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;