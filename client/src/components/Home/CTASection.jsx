import Image from 'next/image'
import React from 'react'

export const CTASection = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-blue-600 rounded-2xl p-8 sm:p-12 lg:p-16 ">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Smarter Collaboration.<br />Faster Results.
            </h2>
            <p className="text-blue-100 text-lg max-w-3xl mb-8">
              Discover the easy route to expert insights, and inspiring advice from Architects, Interior Designers, and Vastu-Experts right into transforming modern design and perfecting the way our everyday spaces, without without being neglected.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 font-semibold">
              Get Started
            </button>
          </div>


          <div className="flex justify-center md:justify-end">
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764762690/7k43_a5ha_230116_qjd1ge.png"
              alt="Hero Illustration"
              className="w-fill max-w-sm md:max-w-md rounded-xl object-cover h-90 w-90"
            />
          </div>

        </div>

      </section>
    </>
  )
}
