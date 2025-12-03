import { Plus } from 'lucide-react'
import React, { useState } from 'react'

export const FAQSection = () => {
    const [openFaq, setOpenFaq] = useState(1);
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };


    return (
        <>
            <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Got Questions? We&apos;ve Got Answer
                        </h2>
                        <p className="text-gray-600 text-lg max-w-xl mx-auto">
                            Find quick answers to the most common questions about our platform and how we can help you build your dream project
                        </p>
                    </div>

                    <div className="space-y-4 px-6">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div key={index} className="border rounded-lg bg-white">
                                <button
                                    className="w-full flex justify-between items-center p-4 text-left hover:bg-white rounded-lg"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-semibold text-gray-900">
                                        What is DessoBuild and how it works?
                                    </span>
                                    <Plus
                                        className={`transform text-gray-900 transition-transform ${openFaq === index ? 'rotate-45' : ''
                                            }`}
                                        size={20}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600">
                                        {index === 1 ? (
                                            <p>
                                                We offer a range of real options, including eco-friendly materials, sustainable construction and environmentally conscious design practices.
                                            </p>
                                        ) : (
                                            <p>DessoBuild is a platform connecting clients with expert architects, interior designers, and Vastu consultants for seamless project management.</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
