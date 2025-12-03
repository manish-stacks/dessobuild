"use client";
import React, { useState } from 'react';

export default function LoginPage() {
  const [userRole, setUserRole] = useState('client');
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
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

  const handleLogin = () => {
    if (!formData.emailOrPhone || !formData.password) {
      alert('Please fill all fields');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to the Terms of Service');
      return;
    }
    console.log('Login data:', { ...formData, role: userRole });
    alert('Login successful!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">DessoBuild</h1>
          <div className="flex items-center space-x-6">
            <a href="/paymentpage" className="text-gray-700 hover:text-gray-900 text-base">
              Join as Consultant
            </a>
            <a href="/signup" className="text-gray-700 hover:text-gray-900 text-base">
              Sign up
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

        {/* Login Form */}
        <div className="space-y-6">
          {/* Email/Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              Email address / Phone Number
            </label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
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
            <div className="mt-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Your Password?
              </a>
            </div>
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

          {/* Login Button */}
          <div className="pt-4">
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium text-base"
            >
              Login to Continue
            </button>
          </div>

          {/* Sign up Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-700">
              Don&apos;t have an DessoBuilt account?{' '}
              <a href="/signup" className="text-blue-600 hover:underline font-medium">
                Signup
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}