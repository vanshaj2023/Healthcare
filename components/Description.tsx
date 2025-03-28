import React from 'react';

const FeatureDescription: React.FC = () => {
  // Features Array
  const features = [
    {
      title: 'Real-time Metrics',
      description:
        'Track vital signs such as heart rate and blood pressure, visualized as Quidditch player stats. With IoT integration, you receive real-time updates.',
      image: '/images/realtime.png', // Replace with the actual image path
    },
    {
      title: 'Machine Learning Predictions',
      description:
        'AI algorithms analyze patterns to predict health risks, ensuring proactive care. For instance, "Chaser congestion" may indicate respiratory issues.',
      image: '/images/ml.png', // Replace with the actual image path
    },
    {
      title: 'Blockchain Secure Storage',
      description:
        'Your medical history is securely stored using blockchain, represented as "Player Trading Cards" for privacy and easy access.',
      image: '/images/blockchain-storage.png', // Replace with the actual image path
    },
    {
      title: 'AR Health Alerts',
      description:
        'Get critical health notifications as interactive 3D holographic snitches, brought to life using augmented reality.',
      image: '/images/ar-alerts.png', // Replace with the actual image path
    },
    {
      title: 'Dynamic Treatment Plans',
      description:
        'Receive adaptive treatment plans that evolve dynamically, just like strategies in a Quidditch match, based on your health data.',
      image: '/images/dynamic-treatment.png', 
    },
  ];

  return (
    <div className="bg-gradient-to-r justify-center bg-black py-16 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Discover Our Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center align-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>

              {/* Description Section */}
              <div className="lg:w-1/2 px-4">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="mt-4 text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureDescription;