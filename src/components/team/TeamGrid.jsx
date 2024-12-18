import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import bikesh  from '../../assets/images/team/bikesh.jpg';
import janam  from '../../assets/images/team/janam.jpeg';
import pradip  from '../../assets/images/team/pradip.jpg';
import dharmendra  from '../../assets/images/team/dharmendra.jpg';

const teamMembers = [
  {
    name: 'Janam Pandey',
    role: 'Managing Director (MD)',
    image: janam,
    linkedin: 'https://np.linkedin.com/in/janam-pandey-6bb571199',
    email: 'janam.pandey@thinktankinfotech.com',
  },
  {
    name: 'Pradip Timsina',
    role: 'CO-Founder',
    image: pradip,
    linkedin: '#',
    email: 'pradip.timsina@thinktankinfotech.com',
  },
  {
    name: 'Bikesh Gupta',
    role: 'CO-Founder',
    image: bikesh,
    linkedin: 'https://np.linkedin.com/in/bikesh-kumar-gupta-aa646b236',
    email: 'bikesh.gupta@thinktankinfotech.com',
  },
  {
    name: 'Dharmendra Thakur',
    role: 'CO-Founder',
    image: dharmendra,
    linkedin: '#',
    email: 'dharmendra.thakur@thinktankinfotech.com',
  },
];

const TeamGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            The brilliant minds behind our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;