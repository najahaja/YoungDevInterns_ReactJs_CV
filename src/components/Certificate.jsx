import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Certificate = ({ certificate }) => {
  return (
    <div className='certificate'>
      <div className='title'>
        <FontAwesomeIcon icon={faCertificate} />
        <h2>Certificates</h2>
      </div>
      {certificate.map((item, index) => (
        <div key={index} className='item'>
          <h3>{item.name} from {item.institution}</h3>
          <span>{item.date}</span>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Certificate;
