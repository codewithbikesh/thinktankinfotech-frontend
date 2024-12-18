import React from 'react';
// import { Cloud, Shield, Code, Database, Users, Cpu } from 'lucide-react';
import Content_Creator from '../../assets/images/services/content_writting.svg';
import Web_Development from '../../assets/images/services/web_development.svg';
import Design_Feedback from '../../assets/images/services/designer.svg';
import Mobile_Application from '../../assets/images/services/mobile_development.svg';
import Online_add from '../../assets/images/services/seo.svg';
import Web_Design  from '../../assets/images/services/graphic_designer.svg';
import Software_Development  from '../../assets/images/services/software_development.svg';
import SMM  from '../../assets/images/services/smm.svg';


const services = [
  {
    icon: Web_Development,
    title: 'Web Development',
    description: 'Highly functional & visually appealing website designed to meet your need.',
  },
  {
    icon: Content_Creator,
    title: 'Content Writing',
    description: 'Engaging and meaningful content to connect with your audience',
  },
  {
    icon: Mobile_Application,
    title: 'App Development',
    description: 'Tailored software solutions designed to meet your specific requirements.',
  },
  {
    icon: Design_Feedback,
    title: 'UI/UX',
    description: 'Design eye-catching UI/UX interfaces for effortless user interaction',
  },

  {
    icon: Online_add,
    title: 'Search Engine Optimization (SEO)',
    description: 'Custom SEO solutions for enhanced search engine visibility and growth',
  },
  {
    icon: Web_Design,
    title: 'Graphic Design',
    description: 'Designs that Speak Your Brand’s Narrative and Connect with Your Audience.',
  },
  {
    icon: Software_Development,
    title: 'System/Software Development',
    description: 'System/software developed according to your business needs.',
  },
  {
    icon: SMM,
    title: 'Social Media Marketing (SMM)',
    description: 'Build a strong online presence and engage with your targeted audience',
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              {/* <service.icon className="h-12 w-12 text-blue-600 mb-6" /> */}
              <img src={service.icon} alt="" width={100} height={100} />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;