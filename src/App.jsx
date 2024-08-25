import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';
import image from './assets/img.png';
import './index.css';

const person = {
  avatar: image,
  name: 'Ahamed Najah',
  profession: 'Computer Engineer | Undergraduate',
  bio: 'Front End Developer ❤ React Developer ❤ AI Enthusiast',
  address: 'Lahore, Punjab, Pakistan.',
  social: [
    { name: 'Instagram', url: 'https://www.instagram.com/najahahamed/profilecard/?igsh=dHhjMXNmdmd5Zzh4', icon: 'fa-brands fa-instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61553499026827&mibextid=kFxxJD', icon: 'fa-brands fa-facebook' },
    { name: 'Github', url: 'https://github.com/najahaja', icon: 'fa-brands fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahamed-najah-269011249/', icon: 'fa-brands fa-linkedin' }
  ],
  experience: [
    { jobTitle: 'IT Support Intern', company: 'The University of Lahore, Lahore', startDate: 'June 2024', endDate: 'Aug 2024', jobDescription: [ <ul> <li> <b>Data Management:</b> Worked with duplicates to streamline data across multiple systems, reducing redundancy and ensuring accuracy</li>
    <li> <b>Portal Monitoring:</b> Monitored and maintained various university portals, ensuring uninterrupted access for students and staff</li>
    <li> <b>Inventory Management:</b> Oversaw IT inventory management, ensuring accurate tracking and availability of essential resources</li></ul>
    ] }
    
  ],
  education: [
    { degree: 'Hafiz of the Quran', institution: 'East Ceylon Arabic College', startDate: 'Feb 2011', endDate: 'May 2016', description: 'Memorized the entire Quran, demonstrating exceptional dedication and proficiency in Islamic studies.' },
    { degree: 'BS in Computer Engineering', institution: 'The University of Lahore', startDate: 'Oct 2022', endDate: 'Present', description: 'CGPA 3.87/4.00' },
  ],
  certificate: [
    { name: 'React Basics', institution: 'Coursera', date: '2023 August', description: 'Certificate in React Basics.' },
    { name: 'Introduction to Front-End Development', institution: 'Coursera', date: '2023 August', description: 'Certificate in Introduction to Front-End Development' },
    { name: 'Advanced React', institution: 'Coursera', date: '2023 September', description: 'Certificate in Advanced React' },
    { name: 'Interactivity with JavaScript ', institution: 'Coursera', date: '2024 January', description: 'Certificate in Interactivity with JavaScript' },
    { name: 'Responsive Web Design', institution: 'freeCodeCamp', date: '2023 October', description: 'Certificate in Responsive Web Design' },
    { name: 'Legacy JavaScript Algorithms and Data Structures', institution: 'freeCodeCamp', date: '2024 April', description: 'Certificate in Legacy JavaScript Algorithms and Data Structures' },
    { name: 'Front End Development Libraries ', institution: 'freeCodeCamp', date: '2024 August', description: 'Certificate in Front End Development Libraries ' }
  ],
  skills: [
    { name: 'Web Development', percentage: '90%' },
    { name: 'HTML5', percentage: '95%' },
    { name: 'CSS', percentage: '90%' },
    { name: 'JavaScript', percentage: '75%' },
    { name: 'React', percentage: '80%' },
    {name:'Python',percentage:'60%' },
    {name:'C',percentage:'90%' },
    {name:'C++',percentage:'90%' },
    {name:'Java',percentage:'70%' },
    {name:'Bootstrap',percentage:'60%' },
    {name:'Git',percentage:'80%' },
    {name:'Communication Skills',percentage:'90%' },
    {name:'Visual Studio Code',percentage:'80%' }
  ]
};

function App() {
  return (
    <header>
      <div className='wrapper'>
        <div className='sidebar'>
          <About
            avatar={person.avatar}
            name={person.name}
            profession={person.profession}
            bio={person.bio}
            address={person.address}
            social={person.social}
          />
        </div>

        <div className='content-wrapper'>
          <div className='content'>
            <div className="summary"><i class="fas fa-file-alt"></i>


              <h1>Professional Summary</h1>
              <p>Motivated Computer Engineering student currently in the 5th semester, originally from Sri Lanka and studying in Pakistan. Proficient in
modern web development and AI technologies. Demonstrates strong communication skills and the ability to convey complex technical concepts
effectively. Known for quick learning and adaptability to new technologies. Committed to lifelong learning and professional development. As a
Hafiz of the Quran, brings a strong foundation of discipline, focus, and time management to academic and professional pursuits. Actively seeking
opportunities in Web Development and AI, with numerous certifications from Coursera, FreeCodeCamp, and SoloLearn.</p>
            </div>  <Education education={person.education} />
            <Experience experience={person.experience} />
          
            <Certificate certificate={person.certificate} />
            <Skills skills={person.skills} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
