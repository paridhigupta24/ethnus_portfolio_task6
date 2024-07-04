import React, { useState } from 'react';
import './Leadership.css';

const Leadership = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpand = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const leadershipItems = [
    {
      organization: 'Apple Developers Group (ADGVIT)',
      location: 'VIT Vellore',
      position: 'Head of Events',
      date: 'Dec 2022 – Present',
      description: [
        '- Successfully managed a team of 60+ individuals and coordinated the participation of 100+ attendees during the flagship technical event, iosFusion, as part of the prestigious Gravitas fest.',
        '- Orchestrated and executed multiple events, showcasing exceptional leadership and collaboration skills, while ensuring the event\'s smooth operation with a large team and numerous participants.',
      ],
    },
    {
      organization: 'F.E.P.S.I NGO',
      location: 'VIT Vellore',
      position: 'Senior Core Member',
      date: 'Dec 2022 – Present',
      description: [
        '- Contributed to FEPSI\'s community outreach programs, demonstrating strong communication and interpersonal skills by effectively engaging with diverse groups of beneficiaries and stakeholders.',
        '- Collaborated with a dedicated team of 50+ to organize fundraising events, honing project management and teamwork abilities, which resulted in successfully raising funds to support the organization\'s initiatives.',
      ],
    },
    {
      organization: 'Riviera Cultural Fest',
      location: 'VIT Vellore',
      position: 'Guest Care Volunteer',
      date: 'Feb 2023',
      description: [
        '- Successfully collaborated with fellow volunteers to ensure the seamless execution of multiple cultural events, showcasing a strong ability to collaborate and contribute within a team environment.', 
'- Contributed to event planning and organization, demonstrating project management skills and attention to detail.'

      ],
    },
  ];

  return (
    <div className="leadership">
      {leadershipItems.map((item, index) => (
        <div className={`leadership-item ${expandedIndex === index ? 'expanded' : ''}`} key={index}>
          <div className="header" onClick={() => toggleExpand(index)}>
            <h3>{item.organization}</h3>
            <h4>{item.location}</h4>
            <h4>{item.position}</h4>
            <h4>{item.date}</h4>
            <div className="expand-icon">{expandedIndex === index ? '-' : '+'}</div>
          </div>
          <div className="description">
            {item.description.map((desc, descIndex) => (
              <p key={descIndex}>{desc}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leadership;
