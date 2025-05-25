import React from 'react';
import { useNavigate } from 'react-router';
import { FiBriefcase } from 'react-icons/fi';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      <img
        src="/images/hero-office.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Find Your Dream Job
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Take the next step in your career journey with us.
        </p>
        <button
          onClick={() => navigate('/applyjob')}
          className="flex items-center justify-center bg-amber-700 hover:bg-amber-500 text-white text-lg font-medium py-3 px-8 rounded-2xl transition-colors duration-300 shadow-lg"
        >
          <FiBriefcase className="mr-2" />
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Home;
