import React, { useState } from "react";

const CareerPage  = () => {
  // const [jobOpenings, setJobOpenings] = useState([

  //   {
  //     id: 1,
  //     title: "Product Manager",
  //     department: "Product",
  //     location: "New York, NY",
  //     description:
  //       "As a Product Manager, you will be responsible for leading product development from ideation to execution, working closely with engineers, designers, and business stakeholders.",
  //     requirements: [
  //       "Experience in product management or project management.",
  //       "Strong understanding of agile methodologies.",
  //       "Excellent communication and leadership skills.",
  //       "Experience with data-driven decision-making.",
  //     ],
  //     applyLink: "#", // Link to apply
  //   },
 
  // ]);

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Career Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-green-900 mb-4">
          Join Our Team at Think Tank Info Tech
        </h1>
        <p className="text-xl text-gray-600">
          We're always looking for talented, passionate individuals who share
          our vision for innovation and technology. At Think Tank Info Tech, we
          foster a collaborative and inclusive work environment where your ideas
          are valued, and your skills are put to the test.
        </p>
      </header>

      {/* Company Culture */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-900 mb-4">Our Company Culture</h2>
        <p className="text-lg text-gray-700">
          At Think Tank Info Tech Pvt. Ltd., we believe in empowering our employees to
          reach their full potential. We support continuous learning, open
          communication, and a work-life balance that nurtures creativity and
          productivity. Whether you’re in the office or working remotely, you’ll
          find an inclusive and supportive team culture focused on collaboration
          and growth.
        </p>
      </section>

      {/* Job Openings */}
      <section>
        <h2 className="text-3xl font-semibold text-green-900 mb-6">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* {jobOpenings.length === 0 ? ( */}
    {/* // Fallback message if there are no job openings */}
    <div className="col-span-full text-center py-12">
      <p className="text-xl text-gray-600">
        Sorry, there are no job openings available at the moment. Please check back later!
      </p>
    </div>
  {/* ) : (
    // Job openings list if there are available jobs
    jobOpenings.map((job) => (
      <div
        key={job.id}
        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
      >
        <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
        <p className="text-gray-600 mt-2">
          <strong>Department:</strong> {job.department}
        </p>
        <p className="text-gray-600 mt-2">
          <strong>Location:</strong> {job.location}
        </p>
        <p className="mt-4 text-gray-700">{job.description}</p>
        <ul className="mt-4 list-disc pl-5 space-y-1 text-gray-600">
          <strong>Requirements:</strong>
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
        <a
          href={job.applyLink}
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </a>
      </div>
    ))
  )} */}
</div>

      </section>

      {/* Benefits Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-green-900 mb-4">Why Work With Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Competitive Salary & Performance Bonuses</li>
          <li>Health, Dental, and Vision Benefits</li>
          <li>Flexible Work Hours and Remote Options</li>
          <li>Professional Development Opportunities</li>
          <li>Collaborative, Supportive Work Environment</li>
          <li>Generous Paid Time Off (PTO) and Holidays</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-green-900 mb-4">Ready to take the next step in your career?</h3>
        <p className="text-lg text-gray-600">
          If you’re passionate about technology, innovation, and creating
          meaningful solutions, we want to hear from you. Apply for one of our
          open positions or reach out to learn more about life at Think Tank Info
          Tech!
        </p>
      </footer>
    </div>
  );
};

export default CareerPage;
