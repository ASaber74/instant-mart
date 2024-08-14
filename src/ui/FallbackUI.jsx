import React from 'react';

const FallbackUI = () => (
  <div className="flex min-h-screen flex-col items-center justify-center text-brand-6">
    <div className="spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4"></div>
    <h2 className="mt-4 text-xl font-bold">Loading...</h2>
    <p className="text-grey-4">Please wait while the content is loading.</p>
  </div>
);

export default FallbackUI;
