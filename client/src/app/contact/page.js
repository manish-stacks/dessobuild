"use client";
import React, { useState } from 'react';
import { Menu, X, CheckCircle, Mail, MapPin } from 'lucide-react';
import { Header } from '@/components/Header/Header';

export default function ContactUsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    message: '',
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
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.message) {
      alert('Please fill all fields');
      return;
    }
    if (!formData.agreeTerms) {
      alert('Please agree to Terms and Conditions');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Request sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Header activePage='contact' />
      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in touch with us
          </h1>
          <p className="text-gray-600 text-lg">
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-700 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-md text-gray-700">
                  I agree with{' '}
                  <a href="#" className="text-gray-700 underline hover:underline-offset-2">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium text-base"
              >
                Send your Request
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                With our services you can
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Find and hire trusted experts for your dream project
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Personalize every detail to match your unique vision
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Collaborate smoothly with professionals from start to finish
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    Save valuable time and effort with hassle-free hiring
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                You can also Contact Us via
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">info@dessobuild.com</span>
                </div>

                <div className="space-y-2 mt-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">India</p>
                      <p className="text-gray-600 text-sm">E-520A, 3rd Floor,</p>
                      <p className="text-gray-600 text-sm">Sector 7, Dwarka,</p>
                      <p className="text-gray-600 text-sm">New Delhi- 110075, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-sm">Location</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                E-520A, 3rd Floor,<br />
                Sector 7, Dwarka,<br />
                New Delhi- 110075, India
              </p>
              <p className="text-gray-400 text-sm mt-4">
                support.dessobuild@gmail.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become a Frelancer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Linkedin</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Youtube</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms & Condition</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Notice</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-xl font-bold mb-4 sm:mb-0">DessoBuild</h2>
            <p className="text-gray-400 text-sm">© 2025 DessoBuild. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}