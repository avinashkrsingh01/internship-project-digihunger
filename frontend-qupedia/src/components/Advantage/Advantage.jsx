import React from 'react';
import './Advantage.css';

const Advantage = () => {
  const features = [
    {
      image: '/src/components/Advantage/adv1.png', // Replace with actual image paths
      title: 'Conceptual clarity through visualisation',
    },
    {
      image: '/src/components/Advantage/adv2.png',
      title: 'Conceptual clarity through visualisation',
    },
    {
      image: '/src/components/Advantage/adv3.png',
      title: 'Conceptual clarity through visualisation',
    },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>
          Get the <span className="highlight">advantage</span>
        </h1>
      </header>

      {/* Features Section */}
      <section className="features-section">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="image-container">
              <img src={feature.image} alt={feature.title} />
            </div>
            <p className="feature-title">{feature.title}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Advantage;
