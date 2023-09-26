import React from 'react';
//import './Sponsors.css';
import Image from "next/image";
const Sponsors = () => {
  const sponsors = [
    {
      name: 'Sponsor 1',
      logo: 'sponsor1.png',
      website: 'https://www.sponsor1.com',
    },
    {
      name: 'Sponsor 2',
      logo: 'sponsor2.png',
      website: 'https://www.sponsor2.com',
    },
  ];

  return (
    <div className="sponsors-container">
      <h2>Our Sponsors</h2>
      <div className="sponsor-grid">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="sponsor">
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <Image width={200} height={200} src={sponsor.logo} alt={sponsor.name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

