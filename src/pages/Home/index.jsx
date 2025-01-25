import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const HomePage = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div className=" h-screen flex flex-col justify-between items-center">
      <Header />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center my-8 md:my-12 lg:my-20 md:flex-row-reverse">
          {/* Right Image Column */}
          <div className=" md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
            <img src={Logo} alt="Logo" className="w-48 sm:w-56 md:w-64" />
          </div>
          {/* Text */}
          <div className="md:w-1/2 flex flex-col items-center my-4 md:my-6 lg:my-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center max-w-lg">
              Let's split the bills not the friendships.
            </h1>
            <p className="text-center mt-2 md:mt-3 lg:mt-6 text-sm sm:text-base md:text-lg">
              We organize your bills, so you can chill.
            </p>
            <div className="mt-4 md:mt-5 lg:mt-8">
              <Link to={isLoggedIn ? "/dashboard" : "/register"}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium px-4 sm:px-5 md:px-6 py-2 rounded-md transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
