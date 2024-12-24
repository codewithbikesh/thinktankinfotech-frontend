import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Service_Hero = ({ title, text, image, contactLink, buttonText2 }) => {
  return (
    <section className="flex flex-col-reverse sm:flex-row justify-between items-center p-6 sm:p-12 mt-[57px] bg-gray-200">
      <div className="text-left flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4 sm:mb-5">{title}</h1>
        <p className="text-base sm:text-lg text-gray-500 mb-4 sm:mb-5 text-justify">{text}</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <Link to={contactLink} className="px-6 py-3 bg-green-700 text-white rounded-lg cursor-pointer w-full sm:w-auto">
            {buttonText2}
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center mt-6 sm:mt-0">
        <img
          src={image}
          alt="Hero Image"
          className="max-w-full h-auto rounded-lg"
          data-aos="zoom-in-left"
        />
      </div>
    </section>
  );
};
export default Service_Hero;
