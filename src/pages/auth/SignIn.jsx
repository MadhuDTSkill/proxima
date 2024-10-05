import React, { useState } from 'react';
import {ReactTyped} from 'react-typed'; // Correct import for Typed
import Title from '../../Title'
import { apiCall } from '../../Functions/Axios';
import { setData } from '../../Functions/LocalStorage';
import { ImSpinner9 } from "react-icons/im";

const Signin = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let url = 'users/login/'
    let body = formData;
    let method = 'post';
    let loadingState = setIsLoading
    const onSuccess = (data) => {
      setData('accessToken', data.token)
      window.location.href = '/'
    }
    const onError = (error) => {
      console.log(error)
    }
    apiCall(url, body, method, loadingState, onSuccess, onError)
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side with Welcome Content */}
      <div className="hidden md:flex w-1/2 flex-col justify-center items-center bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-main mb-4">Welcome to <Title/></h1>
        <ReactTyped
          strings={[
            'Engage with cutting-edge AI models.',
            'Chat with open-source language models in real-time.',
            'Sign in and explore the world of intelligent conversations!',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-xl text-main"
        />
        <p className="mt-6 text-gray-600">
          Step into a world of endless discussions with state-of-the-art AI. We're excited to have you!
        </p>
      </div>

      {/* Right Side with Sign-in Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-main mb-6">Sign In</h2>

          {/* Sign-in Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-main">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="Enter your email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-main">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-main text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                {isLoading ? (
                  <ImSpinner9 className="animate-spin text-white mx-auto" />
                ) : (
                  'Sign In'
                )}
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?
              <a href="/signup" className="text-main font-bold hover:underline ml-1">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
