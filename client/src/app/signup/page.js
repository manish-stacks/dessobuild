"use client";
import { HeaderTwo } from '@/components/Header/HeaderTwo';
import { ClientSignUp } from '@/components/SignUP/ClientSignUp';
import { ConsultantSignUp } from '@/components/SignUP/ConsultantSignUp';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SignUpPage() {
  const [userRole, setUserRole] = useState('Client');
  

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderTwo activeForm={userRole} loginBtn={true} />


      {/* Main Content */}
      <main className="max-w-xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Choose your role
          </h2>

          {/* Role Toggle */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-12">
            <button
              onClick={() => setUserRole('Client')}
              className={`flex-1 py-3 px-6 rounded-full text-base font-medium transition-all ${userRole === 'Client'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600'
                }`}
            >
              Join as Client
            </button>
            <button
              onClick={() => setUserRole('Consultant')}
              className={`flex-1 py-3 px-6 rounded-full text-base font-medium transition-all ${userRole === 'Consultant'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600'
                }`}
            >
              Join as Consultant
            </button>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="space-y-6">

          {
            userRole === 'Client' ? (
              <ClientSignUp />
            ) : (
              <ConsultantSignUp />
            )
          }

          {/* Login Link */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-700">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600 hover:underline font-medium">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}