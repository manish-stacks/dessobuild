"use client";
import React, { useState } from 'react';
import { Crown, CheckCircle, Lock, Check } from 'lucide-react';
import Link from 'next/link';
import { HeaderThree } from '@/components/Header/HeaderThree';

export default function PaymentPage() {
  const [couponCode, setCouponCode] = useState('WELCOME20');
  const [isCouponApplied, setIsCouponApplied] = useState(true);
  const [discount, setDiscount] = useState(1000);

  const originalPrice = 4999;
  const [totalPrice, setTotalPrice] = useState(4999);

  const handleApplyCoupon = () => {
    if (couponCode === 'WELCOME20') {
      setDiscount(1000);
      setTotalPrice(3999);
      setIsCouponApplied(true);
    } else {
      alert('Invalid coupon code');
      setIsCouponApplied(false);
    }
  };

  const handleProceedPayment = () => {
    alert('Proceeding to secure payment...');
  };

  const benefits = [
    'Verified Consultant Badge',
    'Access Premium Projects',
    'Premium Client Leads',
    'Direct Client Messaging',
    'Top Listing on Platform',
    'Boosted Visibility',
    'Collaborate with Experts'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderThree />

      {/* Main Content */}

      <main className="bg-white">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex justify-between">
            {/* Left Side - Plan Details */}
            <div>
              {/* Premium Plan Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-5 py-2 rounded-full mb-8">
                <Crown className="w-5 h-5" />
                <span className="font-medium">Premium Plan</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Get Recognized.<br />
                Get Clients. Grow Faster.
              </h1>

              <p className="text-gray-700 text-md mb-12 leading-relaxed">
                Join our 1-Year Consultant Plan for ₹4999/year and unlock premium projects,
                verified visibility, and client connections that help you grow faster.
              </p>

              {/* Benefits Section */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-6">
                  What You&apos;ll Get with the Consultant Plan
                </h2>

                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white fill-white" />
                      </div>
                      <span className="text-gray-900 text-base font-normal">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Payment Card */}
            <div className="lg:p-10">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sticky top-10">
                <h2 className="text-xl font-bold text-gray-900 mb-8">
                  Complete Your Consultant Enrollment
                </h2>

                {/* Premium Plan Card */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 mb-5">
                  <h3 className="text-white text-lg font-semibold mb-3">
                    Premium Consultant Plan
                  </h3>
                  <div className="flex items-baseline">
                    <span className="text-white text-2xl font-md">₹4999</span>
                    <span className="text-blue-100 text-base ml-2 font-normal">/year</span>
                  </div>
                </div>

                {/* Coupon Section */}
                <div className="mb-5">
                  <p className="text-md text-gray-700 mb-3 font-normal">
                    Have a coupon? Apply here.
                  </p>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="WELCOME20"
                      className="flex-1 px-4 py-2 text-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-base"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="bg-blue-600 text-white px-8 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-medium text-base"
                    >
                      Apply
                    </button>
                  </div>
                  {isCouponApplied && (
                    <div className="flex items-center space-x-2 mt-3">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600 font-normal">
                        Your coupon is applied
                      </span>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-200 pt-2 space-y-2 mb-5">
                  <div className="flex justify-between text-gray-900">
                    <span className="text-base">Subtotal:</span>
                    <span className="font-semibold text-base">₹{originalPrice}</span>
                  </div>
                  {isCouponApplied && (
                    <div className="flex justify-between text-gray-900">
                      <span className="text-base">Discount:</span>
                      <span className="font-semibold text-base">-{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-900 pt-2 border-t border-gray-200">
                    <span className="text-base font-semibold">Total Payable:</span>
                    <span className="text-xl font-bold">₹{totalPrice}</span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="flex items-center space-x-2 mb-5 text-gray-700">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm font-normal">100% Secure Payment</span>
                </div>

                {/* Payment Button */}
                <button
                  onClick={handleProceedPayment}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all font-medium text-base"
                >
                  Proceed to Secure Payment
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          {/* <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Powered by <span className="font-semibold text-blue-600">Razorpay</span>
          </p>
        </div> */}
        </section>
      </main>
    </div>
  );
}