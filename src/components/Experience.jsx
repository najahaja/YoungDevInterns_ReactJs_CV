import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Experience = ({ experience }) => {
  return (
    <div className='experience'>
      <div className='title'>
        <FontAwesomeIcon icon={faBriefcase} />
        <h2>Experience</h2>
      </div>
      {experience.map((item, index) => (
        <div key={index} className='item'>
          <h3>{item.jobTitle} at {item.company}</h3>
          <span>{item.startDate} - {item.endDate}</span>
          <p>{item.jobDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
