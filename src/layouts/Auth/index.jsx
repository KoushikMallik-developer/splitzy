import React, { Children } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        {/* Left side - Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(src/assets/AuthCover.jpg)`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </div>
          <div className="relative z-10 text-white p-12 flex flex-col justify-end">
            <h2 className="text-4xl font-bold mb-2">Simple and Seamless.</h2>
            <p className="text-xl opacity-90">Frictionless Performance</p>
          </div>
        </div>

        {/* Right side - Form */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
