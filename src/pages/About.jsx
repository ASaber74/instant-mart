// import UnderConstruction from '../ui/UnderConstruction';

// function About() {
//   return <UnderConstruction />;
// }

// export default About;

import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8 mt-6 mb-9">
      <h1 className="text-4xl font-bold text-grey-8 mb-6">About InstantMart</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-grey-7 mb-4">Our Story</h2>
        <p className="text-grey-6 leading-relaxed">
          InstantMart was founded in 2024 with a simple mission: to connect book lovers with their next great read. We believe that books have the power to inspire, educate, and transform lives. Our platform is designed to make discovering and purchasing books as easy and enjoyable as reading them.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-grey-7 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-grey-6 leading-relaxed">
          <li>A vast selection of books across all genres</li>
          <li>Competitive prices and regular discounts</li>
          <li>Expert recommendations and curated collections</li>
          <li>Fast and reliable shipping</li>
          <li>Easy returns and excellent customer service</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold text-grey-7 mb-4">Our Commitment</h2>
        <p className="text-grey-6 leading-relaxed">
          At InstantMart, we're committed to fostering a love for reading and supporting the literary community. We partner with publishers, authors, and literacy organizations to promote reading and make books accessible to all. Our team is passionate about books and dedicated to providing the best possible experience for our customers.
        </p>
      </section>
    </div>
  );
}

export default About;