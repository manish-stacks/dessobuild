import Link from 'next/link'
import React from 'react'
export const HeaderTwo = ({ activeForm = 'Client', loginBtn = true }) => {
    return (
        <>
            <nav className="bg-white lg:pt-8">
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center bg-gray-50 rounded-2xl">
                    <Link href="/"><h1 className="text-2xl font-bold text-gray-900">DessoBuild</h1></Link>
                    <div className="flex items-center space-x-6">
                        <Link href="/signup" className="text-gray-700 hover:text-gray-900 text-base">
                            Join as {activeForm === 'Client' ? 'Consultant' : 'Client'}
                        </Link>
                        {
                            loginBtn ?
                                <Link href="/login" className="text-gray-700 hover:text-gray-900 text-base">
                                    Login
                                </Link>
                                :
                                <Link href="/signup" className="text-gray-700 hover:text-gray-900 text-base">
                                    Sign up
                                </Link>
                        }

                    </div>
                </div>
            </nav>

        </>
    )
}
