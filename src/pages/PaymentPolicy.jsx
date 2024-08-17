import React from 'react';

function PaymentPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-grey-8 mb-6">Payment Policy</h1>
      
      <div className="space-y-6 text-grey-6">
        <h2 className="text-2xl font-semibold text-grey-7">Accepted Payment Methods</h2>
        <p>
          We accept the following payment methods:
        </p>
        <ul className="list-disc list-inside">
          <li>Credit Cards (Visa, MasterCard, American Express)</li>
          <li>PayPal</li>
          <li>Bank Transfer</li>
          <li>InstantMart Gift Cards</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-grey-7 mt-4">Payment Security</h2>
        <p>
          All payments are processed securely. We use industry-standard encryption to protect your payment information during transmission.
        </p>
        
        <h2 className="text-2xl font-semibold text-grey-7 mt-4">Billing</h2>
        <p>
          Your card will be charged at the time of purchase. For pre-orders, your card may be charged when the item ships.
        </p>
        
        <h2 className="text-2xl font-semibold text-grey-7 mt-4">Refunds</h2>
        <p>
          Refunds are processed to the original payment method used for the purchase. Please allow 5-10 business days for the refund to appear on your statement.
        </p>
        
        <h2 className="text-2xl font-semibold text-grey-7 mt-4">Currency</h2>
        <p>
          All prices are listed and charged in USD. For international orders, your bank may apply additional fees for currency conversion.
        </p>
      </div>
    </div>
  );
}

export default PaymentPolicy;