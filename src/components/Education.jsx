import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Education = ({ education }) => {
  return (
    <div className='education'>
      <div className='title'>
        <FontAwesomeIcon icon={faGraduationCap} />
        <h2>Education</h2>
      </div>
      {education.map((item, index) => (
        <div key={index} className='item'>
          <h3>{item.degree} from {item.institution}</h3>
          <span>{item.startDate} - {item.endDate}</span>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
