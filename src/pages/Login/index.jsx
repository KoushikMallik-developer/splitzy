// src/components/auth/Login.jsx
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye, FaGoogle, FaFacebook } from "react-icons/fa";
import profilepic from "../../assets/logo.png";
// import { loginStart, loginSuccess, loginFailure } from '../../store/slices/authSlice';

const Login = () => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { loading, error } = useSelector((state) => state.auth);
  console.log("Login page");
  const error = false;
  const [showPassword, setShowPassword] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(loginStart());
  //   try {
  //     // Replace with actual API call
  //     const response = await fetch('/api/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await response.json();
  //     dispatch(loginSuccess(data));
  //     navigate('/dashboard');
  //   } catch (error) {
  //     dispatch(loginFailure(error.message));
  //   }
  // };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <img
              className="absolute w-full h-full object-contain"
              src={profilepic}
            />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-8 text-center">
          Welcome to Splitzy
        </h1>

        {/* {children} */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="h-5 w-5" />
                ) : (
                  <FaRegEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">OR</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 flex items-center justify-center space-x-2 mb-3">
            <FaGoogle size={20} />
            <span>Sign in with Google </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
