import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h4 className="font-bold mb-4">Location</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">E-520A, 3rd Floor,<br/>Sector 7,Dwarka,<br/>New Delhi- 110075, India</a></li>
                                <li><a href="#" className="hover:text-white">support.dessobuild@gmail.com</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Navigation</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="/" className="hover:text-white">Home</Link></li>
                                <li><Link href="#" className="hover:text-white">About</Link></li>
                                <li><Link href="#" className="hover:text-white">Services</Link></li>
                                <li><Link href="#" className="hover:text-white">Become a Frelancer</Link></li>
                                <li><Link href="#" className="hover:text-white">Support</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Follow Us</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Facebook</a></li>
                                <li><a href="#" className="hover:text-white">Instagram</a></li>
                                <li><a href="#" className="hover:text-white">Linkedin</a></li>
                                <li><a href="#" className="hover:text-white">Youtube</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><Link href="#" className="hover:text-white">Terms & Condition</Link></li>
                                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                                <li><Link href="#" className="hover:text-white">Legal Notice</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center">
                            <span className="text-2xl font-bold mb-2 sm:mb-0">DessoBuild</span>
                            <span className="text-gray-400 text-sm text-center sm:text-right">
                                © 2025 DessoBuild. All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
