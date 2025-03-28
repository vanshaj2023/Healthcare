import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-bold">Healing Pavilion</h2>
          <p className="text-gray-400 text-sm mt-2">
            Revolutionizing healthcare with AI-powered insights.
          </p>
        </div>

        {/* Center Section: Quick Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#features" className="hover:text-yellow-400">Features</a>
          <a href="#iot" className="hover:text-yellow-400">Live Metrics</a>
          <a href="#ar-blockchain" className="hover:text-yellow-400">AR & Blockchain</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>

        {/* Right Section: Social Links */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i> {/* Font Awesome for icons */}
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-4 pt-4 text-center text-sm text-gray-400">
        <p>&copy; 2025 Predictive Healing Pavilion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;