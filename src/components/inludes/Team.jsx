import React from "react";
import '../../css/Team.css'
import { useEffect } from "react";
import { useState } from "react";
import {EmailListBlock} from './../aboutus/Aboutus'


export const Team = () => {
  const teamMembers = [
    {
      name: "Esther Howard",
      job: "Hair Expert",
      imageUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist1.jpg",
      socialLinks: {
        linkedin: "",
        twitter: "",
        instagram: "",
        youtube: ""
      }
    },
    {
      name: "Jenny Wilson",
      job: "Hair Expert",
      imageUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist2.jpg",
      socialLinks: {
        linkedin: "",
        twitter: "",
        instagram: "",
        youtube: ""
      }
    },
    {
      name: "Leslie Alexander",
      job: "Hair Expert",
      imageUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist3.jpg",
      socialLinks: {
        linkedin: "",
        twitter: "",
        instagram: "",
        youtube: ""
      }
    },
    {
      name: "Jane Cooper",
      job: "Hair Expert",
      imageUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist4.jpg",
      socialLinks: {
        linkedin: "",
        twitter: "",
        instagram: "",
        youtube: ""
      }
    },
        {
      name: "Esther Howard",
      job: "Hair Expert",
      imageUrl: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/stylist1.jpg",
      socialLinks: {
        linkedin: "",
        twitter: "",
        instagram: "",
        youtube: ""
      }
    },
  ];
  // Fisher-Yates shuffle algorithm
  const shuffleArray = (arr) => {
    const shuffledArray = [...arr]; // Create a copy of the array to avoid mutating the original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  // Shuffle the team members when the component mounts
  const [shuffledMembers, setShuffledMembers] = useState([]);

  useEffect(() => {
    setShuffledMembers(shuffleArray(teamMembers));
  }, []); // Only run on initial mount


  return (
    <section id="meet-team-977">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Our Team</span>
          <h2 className="cs-title">Our Expert Team Members</h2>
          <p className="cs-text">
    Our expert team specializes in web development with technologies like ReactJS, Redux Toolkit, JavaScript, Laravel, Node.js, and more, delivering high-quality, scalable, and innovative solutions to meet your business needs.
          </p>
        </div>
        <ul className="cs-card-group teamPageWrapper">
          {shuffledMembers.map((member, index) => (
            <li className="cs-item" key={index}>
              <picture className="cs-picture">
                {/* Mobile Image */}
                <source media="(max-width: 600px)" srcSet={member.imageUrl} />
                {/* Tablet and above Image */}
                <source media="(min-width: 601px)" srcSet={member.imageUrl} />
                <img
                  loading="lazy"
                  decoding="async"
                  src={member.imageUrl}
                  alt={member.name}
                  width="320"
                  height="400"
                />
              </picture>
              <div className="cs-info">
                <span className="cs-name">{member.name}</span>
                <span className="cs-job">{member.job}</span>
                <div className="cs-social-group">
                  {Object.keys(member.socialLinks).map((socialKey) => (
                    <a
                      key={socialKey}
                      href={member.socialLinks[socialKey]}
                      className="cs-link"
                      aria-label={`visit ${socialKey}`}
                    >
                      <img
                        className="cs-icon"
                        loading="lazy"
                        decoding="async"
                        src={`https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/${socialKey}-gold.svg`}
                        alt={socialKey}
                        width="12"
                        height="12"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
<div className="w-[75%] grid items-center teamRes">
      <EmailListBlock></EmailListBlock>
</div>
        </ul>
      </div>

    </section>
  );
};
