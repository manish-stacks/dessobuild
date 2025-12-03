"use client";
import React, { useState } from 'react';

import { Header } from '@/components/Header/Header';
import { HeroSection } from '@/components/Home/HeroSection';
import { HowItWorks } from '@/components/Home/HowItWorks';
import { CTASection } from '@/components/Home/CTASection';
import { FAQSection } from '@/components/Home/FAQSection';
import { CareerSection } from '@/components/Home/CareerSection';
import { BlogSection } from '@/components/Home/BlogSection';
import { Footer } from '@/components/Footer/Footer';


export default function DessoBuildLanding() {


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header loginBtn={false} />

      {/* Hero Section */}
      <HeroSection />

      {/* How It Works */}
      <HowItWorks />

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Career Section */}
      <CareerSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}