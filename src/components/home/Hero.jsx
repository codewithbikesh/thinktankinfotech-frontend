import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import banner  from '../../assets/images/hero_background.png';

const Hero = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // animation duration
      easing: 'ease-in-out', // easing function
      once: true, // animation runs only once
    });
  }, []); // Empty dependency array ensures it runs only once after the first render

  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between items-center p-6 sm:p-12 mt-[57px] bg-gray-200">
      <div className="text-left flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4 sm:mb-5">Transform Your Vision Into A</h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4 sm:mb-5">Digital Reality With The Best IT</h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4 sm:mb-5">Company In Nepal</h1>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <Link to="/services" className="px-6 py-3 bg-green-700 text-white rounded-lg cursor-pointer w-full sm:w-auto">Explore Services</Link>
          <Link to="/contact" className="px-6 py-3 bg-green-700 text-white rounded-lg cursor-pointer w-full sm:w-auto">Let's Get Started</Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-6 sm:mt-0">
        <img
          src={banner}
          alt="Team working together"
          className="max-w-full h-auto rounded-lg"
          data-aos="zoom-in-left"
        />
      </div>
    </section>
  );
};

export default Hero;
