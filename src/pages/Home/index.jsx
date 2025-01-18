import React from "react";
import profilepic from "../../assets/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  const isloggedIn = false;
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center my-8 md:my-12 lg:my-20">
        {/* Left Content Column */}
        <div className="md:w-1/2 flex flex-col items-center my-4 md:my-6 lg:my-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-lg">
            Let's split the bills not the friendships.
          </h1>
          <p className="text-center mt-2 md:mt-3 lg:mt-6 text-sm sm:text-base md:text-lg">
            We organize your bills, so you can chill.
          </p>
          <div className="mt-4 md:mt-5 lg:mt-8">
            <Link to={isloggedIn ? "/dashboard" : "/register"}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-4 sm:px-5 md:px-6 py-2 rounded-md transition-colors">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="md:w-1/2 flex justify-center items-center my-4 md:my-6 lg:my-12">
          <img
            src={profilepic}
            alt="Logo"
            className="w-48 sm:w-56 md:w-64 lg:w-100 h-auto my-4 md:my-6 lg:my-12"
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
