import FeatureDescription from '@/components/Description';
import Footer from '@/components/Footer';
import React from 'react';

const Page: React.FC = () => {
  return (
    <>
    <header className="bg-gradient-to-r bg-black h-max text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Predictive Healing Pavilion</h1>
        <p className="mt-4 text-lg md:text-xl">
          AI-driven healthcare reimagined with Quidditch metrics, real-time data, and futuristic technology.
        </p>
        <div className="mt-8">
          <a href="#features" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded hover:bg-yellow-600">
            Explore Features
          </a>
        </div>
      </div>
    </header>
      <FeatureDescription/>
      <Footer/>
      </>
  );
};

export default Page;