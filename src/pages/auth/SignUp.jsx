import React, { useState } from 'react';
import {ReactTyped} from 'react-typed';
import Title from '../../Title'
import { apiCall } from '../../Functions/Axios';
import { setData } from '../../Functions/localStorage';
import { ImSpinner9 } from "react-icons/im";

const Signup = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    let url = 'users/register/'
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

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
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
            'Sign up and explore the world of intelligent conversations!',
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-xl text-main"
        />
        <p className="mt-6 text-gray-600">
          Create your account and dive into exciting discussions with AI. We're thrilled to have you!
        </p>
      </div>

      {/* Right Side with Sign-up Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-main mb-6">Sign Up</h2>

          {/* Sign-up Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-main">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="Enter your name"
              />
            </div>

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
            <div className="mb-4">
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

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-main">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="Confirm your password"
              />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-main text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                {
                  isLoading ? (
                    <ImSpinner9 className="animate-spin text-white text-2xl" />
                  ) : (
                    <span>Sign Up</span>
                  )
                }
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account? 
              <a href="/signin" className="text-main font-bold hover:underline ml-1">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
