import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../styles/skills.css'

const SkillBar = ({ label, value }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // %20 görünür olunca başlasın
  });

  return (
    <div className="skills-animation" ref={ref}>
      <div className="label">{label}</div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={value}
          style={{ width: inView ? `${value}%` : '0%' }}
        >
          {value}%
        </div>
      </div>
    </div>
  );
};

export default SkillBar;