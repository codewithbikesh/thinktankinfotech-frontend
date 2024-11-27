import React from "react";

const Team = () => {
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
    }
  ];

  return (
    <section id="meet-team-977">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Our Team</span>
          <h2 className="cs-title">Our Expert Team Members</h2>
          <p className="cs-text">
            At Stitch Salon Service, we strive to give the best experience and
            service to every client that walks in the door. Meet the team members
            that make it all possible.
          </p>
        </div>
        <ul className="cs-card-group">
          {teamMembers.map((member, index) => (
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
        </ul>
      </div>
    </section>
  );
};
