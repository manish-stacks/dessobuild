import React, { useState } from 'react'

export const ClientSignUp = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailOrPhone1: '',
        emailOrPhone2: '',
        password: '',
        rePassword: '',
        sendEmails: true,
        agreeTerms: false
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
      const handleSubmit = () => {
        if (!formData.firstName || !formData.lastName || !formData.emailOrPhone1 || !formData.emailOrPhone2 || !formData.password || !formData.rePassword) {
          alert('Please fill all fields');
          return;
        }
        if (formData.password !== formData.rePassword) {
          alert('Passwords do not match');
          return;
        }
        if (!formData.agreeTerms) {
          alert('Please agree to the Terms of Service');
          return;
        }
        console.log('Sign up data:', { ...formData, role: userRole });
        alert('Account created successfully!');
      };

    return (
        <>
            <form className='space-y-6'>
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-md font-medium text-gray-900 mb-2">
                            First name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-md font-medium text-gray-900 mb-2">
                            Last name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Email/Phone 1 */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Email address / Phone Number
                    </label>
                    <input
                        type="text"
                        name="emailOrPhone1"
                        value={formData.emailOrPhone1}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Email/Phone 2 */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Email address / Phone Number
                    </label>
                    <input
                        type="text"
                        name="emailOrPhone2"
                        value={formData.emailOrPhone2}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Re-enter Password */}
                <div>
                    <label className="block text-md font-medium text-gray-900 mb-2">
                        Re-enter Password
                    </label>
                    <input
                        type="password"
                        name="rePassword"
                        value={formData.rePassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-gray-600 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3 pt-2">
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="sendEmails"
                            checked={formData.sendEmails}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4  text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="ml-3 text-md text-gray-700">
                            Send me emails with tips on how to find talent that fits my needs.
                        </label>
                    </div>

                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="ml-3 text-md text-gray-700">
                            Yes, I understand and agree to the{' '}
                            <a href="#" className="text-gray-900 underline hover:text-blue-600">
                                DessoBuild Terms of Service
                            </a>{' '}
                            including the{' '}
                            <a href="#" className="text-gray-900 underline hover:text-blue-600">
                                User Agreement
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-gray-900 underline hover:text-blue-600">
                                Privacy Policy
                            </a>
                            .
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium text-base"
                    >
                        Create my account
                    </button>
                </div>
            </form>
        </>
    )
}
