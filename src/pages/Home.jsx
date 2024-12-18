import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;