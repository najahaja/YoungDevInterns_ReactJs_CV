import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Skills = ({ skills }) => {
  return (
    <div className='skills'>
      <div className='title'>
        <FontAwesomeIcon icon={faStar} />
        <h2>Skills</h2>
      </div>
      {skills.map((skill, index) => (
        <div key={index} className='skill'>
          <span>{skill.name}</span>
          <div className='progress-bar'>
            <div className='progress animate' style={{ width: skill.percentage }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
