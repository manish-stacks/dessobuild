import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 border border-blue-200 shadow-sm px-6 py-3 rounded-full mb-6 bg-gray-50">
                        <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]"></span>
                        <span className="tracking-widest text-sm font-medium text-gray-800">
                            SMART CONSTRUCTION SOLUTIONS
                        </span>
                    </div>
                 
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Be Smart. Build Smart.<br />Build Better.
                    </h1>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto mb-8 px-4">
                        Connect with top architects, interior designers, and Vastu consultants to transform your vision into reality.
                        Experience seamless project management from concept to completion.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 w-full sm:w-auto">
                            Find an Expert
                        </button>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 w-full sm:w-auto">
                            Join as Expert
                        </button>
                    </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                        <div className="h-52 bg-gray-200">
                            <Image width={400} height={300} src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764760785/768e99885c6721258f7b36033fa8a21d97d1aaac_iujgor.png" alt="Architects" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 bg-[#D6E1F5]">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Architects</h3>
                            <p className="text-gray-600">
                                Professional architects to design your dream spaces with precision and creativity.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                        <div className="h-52 bg-gray-200">
                            <Image width={400} height={300} src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764760779/7a98e88acb3c1beb7672c58d5899411c7633e975_lb59la.png" alt="Interior Designers" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 bg-[#E9F5D6]">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Interior Designers</h3>
                            <p className="text-gray-600">
                                Expert interior designers to create beautiful and functional living spaces.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
                        <div className="h-52 bg-gray-200">
                            <Image width={400} height={300} src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764760778/f3eee56296ba8f0016d411457be4c5bf90a8384c_bqkdbs.png" alt="Vastu Experts" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 bg-[#F5F4D6]">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Vastu Experts</h3>
                            <p className="text-gray-600">
                                Certified Vastu consultants to ensure positive energy and harmony in your space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
