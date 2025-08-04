'use client';

import React from 'react';

import { SignupFormDemo } from '@/app/components/contact-us/SignupFormDemo';

export default function ContactSection() {
  return (
    <section className='bg-[#E1E3F8] max-w-[90%] my-[200px] rounded-[10px] mx-auto py-16 px-4 md:px-20'>
      <div className='mx-auto max-w-[80%]'>
        <div className='bg-white rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* ← Left panel: title + intro */}
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-[#0F0F55]'>
              Embrace Innovation – break free from traditional recruitment
              methods
            </h2>
            <p className='mt-4 text-base text-[#4A4A4A]'>
              ProficientNow effortlessly combines services, technology, and
              network advantages to assist businesses in discovering visionary
              talent and creating substantial enterprise worth.
            </p>
          </div>

          {/* ← Right panel: your form, untouched */}
          <div>
            <SignupFormDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
