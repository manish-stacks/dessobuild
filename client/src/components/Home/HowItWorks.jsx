import React from 'react'

export const HowItWorks = () => {
    return (
        <>
            <section className="bg-white py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            How DessoBuilds Works
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Thousands of professionals have already found the right job with us faster, easier, and with less stress
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-left bg-gray-100 p-9 rounded-lg">
                            <div className="w-14 h-8 bg-white flex items-center justify-center mb-6 rounded-4xl shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]">
                                <span className="text-md font-bold text-blue-600">01</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Choose a Category</h3>
                            <p className="text-gray-600">
                                Find the right expert, connect towards, and start building smarter — all in just a few clicks.
                            </p>
                        </div>

                        <div className="text-left bg-gray-100 p-9 rounded-lg">
                            <div className="w-14 h-8 bg-white flex items-center justify-center mb-6 rounded-4xl shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]">
                                <span className="text-md font-bold text-blue-600">02</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Select an Expert</h3>
                            <p className="text-gray-600">
                                Whether you&apos;re seeking architectural advice or interior design help, getting started is easy and seamless.
                            </p>
                        </div>

                        <div className="text-left bg-gray-100 p-9 rounded-lg">
                            <div className="w-14 h-8 bg-white flex items-center justify-center mb-6 rounded-4xl shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]">
                                <span className="text-md font-bold text-blue-600">03</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Start the Conversation</h3>
                            <p className="text-gray-600">
                                Connect with trusted Architects, Designers, and Vastu-Experts — from vision to reality, get paired with the right solution faster.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
