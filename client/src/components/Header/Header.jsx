import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

export const Header = ({loginBtn=true}) => {console.log("loginBtn", loginBtn)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <nav className="bg-white pt-8">
                {/* pt-8 remove and paste this border-b border-gray-100 sticky top-0 z-50 */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8 bg-gray-50 rounded-2xl">
                    <div className="flex justify-between items-center h-18">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-gray-900">DessoBuild</h1>
                        </div>

                        <div className="hidden lg:flex items-center space-x-8">
                            <a href="#architects" className="text-blue-600 hover:text-blue-700 text-base font-medium transition-colors">
                                Architects
                            </a>
                            <a href="#designers" className="text-gray-600 hover:text-gray-900 text-base transition-colors">
                                Interior Designers
                            </a>
                            <a href="#vastu" className="text-gray-600 hover:text-gray-900 text-base transition-colors">
                                Vastu Experts
                            </a>
                            <a href="/contact" className="text-gray-600 hover:text-gray-900 text-base transition-colors">
                                Contact us
                            </a>
                        </div>

                        <div className="hidden lg:flex items-center space-x-4">

                            {
                                loginBtn && <a href="/login" className="text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-all font-medium">
                                    Login
                                </a>
                            }
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium">
                                Get Started
                            </button>
                        </div>

                        <button
                            className="lg:hidden p-2 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100">
                        <div className="px-6 py-4 space-y-1">
                            <a href="#architects" className="block px-4 py-3 text-blue-600 bg-blue-50 rounded-lg font-medium">
                                Architects
                            </a>
                            <a href="#designers" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                                Interior Designers
                            </a>
                            <a href="#vastu" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                                Vastu Experts
                            </a>
                            <a href="#contact" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
                                Contact us
                            </a>
                            <div className="pt-4 space-y-2">
                                <button className="w-full text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg font-medium">
                                    Login
                                </button>
                                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
