import Image from 'next/image'
import React from 'react'

export const BlogSection = () => {
    const colors = ["bg-[#D6E1F5]", "bg-[#E9F5D6]", "bg-[#F5F4D6]"];
    const randomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return (
        <>
            <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Architectural Insights That Inspire
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl mx-auto">
                            Discover trends, tips, and expert stories from Architects, Interior Designers, and Vastu-Experts redefining the way we build.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[1, 2, 3].map((item, index) => (
                            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                                <div className="h-48 bg-gray-200">
                                    <Image
                                        width={500}
                                        height={400}
                                        src="https://res.cloudinary.com/dzpezyxt2/image/upload/v1764760785/768e99885c6721258f7b36033fa8a21d97d1aaac_iujgor.png"
                                        alt="Blog" className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <div className='flex justify-between'>
                                        <span className={`inline-block ${colors[index]} text-slate-800 text-xs px-3 py-1 rounded-full mb-3`}>
                                            ARCHITECTURE
                                        </span>
                                        <span className='text-gray-700'>
                                            7 Min read
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Top 10 Architecture Trends for Modern Homes
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        Explore the latest design trends shaping modern home design in 2024
                                    </p>
                                    <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                                        Learn more →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
