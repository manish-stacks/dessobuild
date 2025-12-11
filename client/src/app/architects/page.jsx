"use client";
import React from 'react';
import { Phone, MessagesSquare } from 'lucide-react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import Image from 'next/image';
import { CTASectionTwo } from '@/components/Home/CTASectionTwo';

export default function ArchitectsPage() {

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header activePage="architects" />

      {/* Hero Section */}
      <section className="py-12 lg:py-16">
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
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architects.map((architect) => (
              <div key={architect.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                {/* Header */}
                <div className="p-5 border-b border-gray-100 bg-[#D6E1F5]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full relative">
                        <span className="w-3 h-3 rounded-full bg-green-500 absolute top-0 left-0 border-2 border-white"></span>
                        <Image src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764827183/70b9487dc81a4a27708ab6ca7d329302ce8b22ac_zxdm5j.png"
                          alt="Verified"
                          width={100}
                          height={100}
                          className='w-12 h-12 rounded-full' />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{architect.name}</h3>
                        <p className="text-sm text-gray-500">{architect.location}</p>
                      </div>
                    </div>
                    {architect.verified && (
                      <div>

                        <Image
                          src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764826400/Verified_o4tm4w.png"
                          alt="Verified"
                          width={500}
                          height={500}
                          className='h-15 w-15' />

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
                      <MessagesSquare className="w-4 h-4" />
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
        </div>
      </section>

      {/* CTA Section */}
      <CTASectionTwo />

      {/* Footer */}
      <Footer />
    </div >
  );
}