import React from 'react';
import './AnatomySection.css';
import bodyImg from '../../../assets/Human-body1.jpg';

function AnatomySection() {
  return (
    <div className="anatomy-container">
      <img src={bodyImg} alt="Human Body" className="human-body-image" />
      <div className="label heart"><span className="status green" /> Healthy Heart</div>
      <div className="label lungs"><span className="status red" /> Lungs</div>
      <div className="label teeth"><span className="status green" /> Teeth</div>
      <div className="label bone"><span className="status green" /> Bone</div>
    </div>
  );
}

export default AnatomySection;
