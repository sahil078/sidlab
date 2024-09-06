import React from 'react';
import '../styles/MissionSection.css';
import ai from '../image/ai.jpg';
import robotic from '../image/robotic.jpg';

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-content">
        <h2 className="mission-title">Our Mission</h2>
        <h3 className="mission-subtitle">
          ELEVATING HUMANITY THROUGH INNOVATION AND TECHNOLOGY IS OUR MISSION.
        </h3>
        <p className="mission-text">
          Our vision is to reduce the gap in harnessing technology, towards human evolution! We believe that every technological solution should be purposeful and aligned with the unique needs of the user. One-size-fits-all approaches are outdated; instead, we advocate for solutions that are tailored, intuitive, and genuinely enhance the human experience.
        </p>
      </div>
      <div className="mission-images">
        <img src={ai} alt="AI Technology" className="mission-image" />
        <img src={robotic} alt="Robotic Hand" className="mission-image small-image" />
      </div>
    </section>
  );
};

export default MissionSection;
