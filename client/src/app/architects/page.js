"use client";
import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header/Header';

export default function ArchitectsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const architects = [
    {
      id: 1,
      name: "Gagan Kumar",
      location: "Jaipur, Rajasthan",
      pricePerMin: "₹20/min",
      experience: "2+yrs",
      description: "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
      skills: ["User Experience Design", "UX Wireframe", "UI Designer", "User Experience Design"],
      pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
      verified: true
    },
    {
      id: 2,
      name: "Gagan Kumar",
      location: "Jaipur, Rajasthan",
      pricePerMin: "₹20/min",
      experience: "2+yrs",
      description: "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
      skills: ["User Experience Design", "UX Wireframe", "UI Designer", "User Experience Design"],
      pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
      verified: true
    },
    {
      id: 3,
      name: "Gagan Kumar",
      location: "Jaipur, Rajasthan",
      pricePerMin: "₹20/min",
      experience: "2+yrs",
      description: "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
      skills: ["User Experience Design", "UX Wireframe", "UI Designer", "User Experience Design"],
      pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
      verified: true
    },
    {
      id: 4,
      name: "Gagan Kumar",
      location: "Jaipur, Rajasthan",
      pricePerMin: "₹20/min",
      experience: "2+yrs",
      description: "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
      skills: ["User Experience Design", "UX Wireframe", "UI Designer", "User Experience Design"],
      pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
      verified: true
    },
    {
      id: 5,
      name: "Gagan Kumar",
      location: "Jaipur, Rajasthan",
      pricePerMin: "₹20/min",
      experience: "2+yrs",
      description: "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
      skills: ["User Experience Design", "UX Wireframe", "UI Designer", "User Experience Design"],
      pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
      verified: true
    },
    {
      id: 6,
      name: "Gagan Kumar",
      location: "Jaipur, Rajasthan",
      pricePerMin: "₹20/min",
      experience: "2+yrs",
      description: "With over 8+ years of experience as a 3D Artist, I specialize in creating top-notch, hyper-realistic pro...",
      skills: ["User Experience Design", "UX Wireframe", "UI Designer", "User Experience Design"],
      pricing: "₹31,500 / 100 Sq. Yards (Approx.)",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Build Smarter with Top Architects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            A trusted platform connecting clients with top-rated architects and design professionals worldwide.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm">
            Hire Architects
          </button>
        </div>
      </section>

      {/* Architects Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architects.map((architect) => (
            <div key={architect.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Header */}
              <div className="p-5 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{architect.name}</h3>
                      <p className="text-sm text-gray-500">{architect.location}</p>
                    </div>
                  </div>
                  {architect.verified && (
                    <div className="bg-blue-500 rounded-full p-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-4 text-sm">
                  <div>
                    <div className="font-semibold text-gray-900">{architect.pricePerMin}</div>
                    <div className="text-gray-500 text-xs">Price</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{architect.experience}</div>
                    <div className="text-gray-500 text-xs">Experience</div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {architect.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {architect.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    +2
                  </span>
                </div>

                <div className="text-sm font-semibold text-gray-900 mb-4">
                  {architect.pricing}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-medium">
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat</span>
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 font-medium">
                    <Phone className="w-4 h-4" />
                    <span>Call Expert</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
              Have a Question?<br />We&apos;re Here to Help
            </h2>
            <p className="text-blue-100 mb-6 text-lg">
              Reach out to our team — we&apos;ll get back to you shortly.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium">
              Contact us
            </button>
          </div>
          <div className="absolute right-8 bottom-8 opacity-20 lg:opacity-100">
            <div className="relative">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-blue-500 rounded-3xl flex items-center justify-center">
                <div className="text-white text-4xl">💬</div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xl">
                ❤️
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-sm">Location</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                E-520A, 2nd Floor,<br />
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
                <li><a href="#" className="hover:text-white transition-colors">Become a Freelancer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Follow Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
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