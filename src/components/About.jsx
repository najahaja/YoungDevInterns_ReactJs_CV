import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const About = ({ avatar, name, profession, bio, address, social }) => {
  const iconMap = {
    Instagram: faInstagram,
    Facebook: faFacebook,
    Github: faGithub,
    LinkedIn: faLinkedin,
  };

  return (
    <div className='bio'>
      <div className='avatar'>
        <img src={avatar} alt='Avatar' />
      </div>
      
        <div className="name"><h1>{name}</h1> </div>
         <div className="profession"><h2>{profession}</h2></div>
      
      <div className='desc'>
        <p>{bio}</p>
        <p>{address}</p>
      </div>
      <div className='social'>
        {social.map((item) => (
          <a key={item.name} href={item.url} target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={iconMap[item.name]} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
