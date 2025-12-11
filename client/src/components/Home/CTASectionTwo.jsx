import Image from 'next/image'
import React from 'react'

export const CTASectionTwo = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl lg:text-6xl text-white mb-3">
                Have a Question?<br />We&apos;re Here to Help
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Reach out to our team — we&apos;ll get back to you shortly.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium">
                Contact us
              </button>
            </div>
            <div className="absolute right-25 top-25 opacity-20 lg:opacity-100">
              <div className="relative">
                <div className="w-40 h-40 lg:w-50 lg:h-50 flex items-center justify-center">
                  <Image
                    src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764825905/23adf82cd5df0d5b415667db397f25d0ac076304_fyqlft.png"
                    alt="Architect"
                    width={100}
                    height={100}
                    className='w-full'
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
