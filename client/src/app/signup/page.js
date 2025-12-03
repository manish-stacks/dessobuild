"use client";
import React, { useState } from 'react';

export default function SignUpPage() {
  const [userRole, setUserRole] = useState('client');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone1: '',
    emailOrPhone2: '',
    password: '',
    rePassword: '',
    sendEmails: true,
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.emailOrPhone1 || !formData.emailOrPhone2 || !formData.password || !formData.rePassword) {
      alert('Please fill all fields');
      return;
    }
    if (formData.password !== formData.rePassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to the Terms of Service');
      return;
    }
    console.log('Sign up data:', { ...formData, role: userRole });
    alert('Account created successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">DessoBuild</h1>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-base">
              Join as Consultant
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 text-base">
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Choose your role
          </h2>

          {/* Role Toggle */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-12">
            <button
              onClick={() => setUserRole('client')}
              className={`flex-1 py-3 px-6 rounded-full text-base font-medium transition-all ${
                userRole === 'client'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Join as client
            </button>
            <button
              onClick={() => setUserRole('consultant')}
              className={`flex-1 py-3 px-6 rounded-full text-base font-medium transition-all ${
                userRole === 'consultant'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Join as consultant
            </button>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          {/* Email/Phone 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email address / Phone Number
            </label>
            <input
              type="text"
              name="emailOrPhone1"
              value={formData.emailOrPhone1}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Email/Phone 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email address / Phone Number
            </label>
            <input
              type="text"
              name="emailOrPhone2"
              value={formData.emailOrPhone2}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Re-enter Password */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Re-enter Password
            </label>
            <input
              type="password"
              name="rePassword"
              value={formData.rePassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                name="sendEmails"
                checked={formData.sendEmails}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-3 text-sm text-gray-700">
                Send me emails with tips on how to find talent that fits my needs.
              </label>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-3 text-sm text-gray-700">
                Yes, I understand and agree to the{' '}
                <a href="#" className="text-gray-900 underline hover:text-blue-600">
                  DessoBuild Terms of Service
                </a>{' '}
                including the{' '}
                <a href="#" className="text-gray-900 underline hover:text-blue-600">
                  User Agreement
                </a>{' '}
                and{' '}
                <a href="#" className="text-gray-900 underline hover:text-blue-600">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium text-base"
            >
              Create my account
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Log In
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}