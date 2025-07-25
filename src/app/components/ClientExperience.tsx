'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Lauren Howard',
    title: 'Client Director',
    message: `Collaborating with ProficientNow has been exceptional. Their keen understanding of client needs ensures they present top-tier candidates.`,
    image: '',
    rating: 5,
  },
  {
    name: 'Michael Sanders',
    title: 'Talent Partner',
    message: `ProficientNow consistently delivers standout professionals. Their streamlined process and consistent communication make them our go-to partner.`,
    image: '',
    rating: 5,
  },
  {
    name: 'Emma Rivera',
    title: 'HR Manager',
    message: `We've never had such a smooth hiring experience. ProficientNow not only understood our company culture but found people who thrive in it.`,
    image: '',
    rating: 5,
  },
];

const ClientExperience = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className='bg-[#0D004D] py-12 md:py-20 px-4 text-white text-center min-h-[500px] md:h-[600px]'>
      <h2 className='text-2xl md:text-4xl font-extrabold'>
        Client Experiences
      </h2>
      <p className='mt-3 max-w-xl mx-auto text-sm md:text-base px-2'>
        Gaining profound insights into the path to success and unleashing your
        business's full potential
      </p>

      <div className='relative mt-8 md:mt-16 max-w-3xl mx-auto'>
        {/* Container that adapts layout based on screen size */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-center md:h-[200px]'>
          {/* Stacked layers behind */}
          <div className='hidden md:flex absolute inset-0 justify-center items-center'>
            <div className='bg-white rounded-xl h-full w-11/12 absolute md:top-6 scale-95 shadow-xl opacity-50'></div>
            <div className='bg-white rounded-xl h-full w-11/12 absolute md:top-12 scale-90 shadow-xl opacity-30'></div>
          </div>

          {/* Left Arrow - Hidden on mobile, positioned absolutely on desktop */}
          <button
            onClick={prev}
            className='hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-white text-indigo-900 rounded-full p-2 shadow hover:bg-gray-100 transition-colors z-20'
          >
            <ArrowLeft className='w-5 h-5' />
          </button>

          {/* Current Testimonial */}
          <div className='relative z-10 w-full min-h-[200px]'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className='bg-white text-left rounded-xl shadow-2xl p-6 md:p-8 w-full max-w-sm md:max-w-2xl mx-auto'
              >
                {/* Card content - responsive flex direction */}
                <div className='flex flex-col md:flex-row items-center md:justify-between text-center md:text-left'>
                  {/* Profile image - top on mobile, right on desktop */}
                  <div className='order-1 md:order-2 mb-4 md:mb-0 md:ml-4 flex-shrink-0'>
                    <div className='w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-full mx-auto md:mx-0'></div>
                  </div>

                  {/* Text content - bottom on mobile, left on desktop */}
                  <div className='order-2 md:order-1 flex-1'>
                    <p className='text-sm text-gray-800 leading-relaxed mb-4'>
                      {current.message}
                    </p>
                    <div className='text-yellow-400 text-lg mb-2'>
                      {'★'.repeat(current.rating)}
                    </div>
                    <div className='font-bold text-black'>{current.name}</div>
                    <div className='text-gray-600 text-sm'>{current.title}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow - Hidden on mobile, positioned absolutely on desktop */}
          <button
            onClick={next}
            className='hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 shadow hover:bg-blue-600 transition-colors z-20'
          >
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>

        {/* Mobile Navigation - Only visible on mobile, centered below card */}
        <div className='flex md:hidden justify-center items-center gap-4 mt-6'>
          <button
            onClick={prev}
            className='bg-white text-indigo-900 rounded-full p-3 shadow hover:bg-gray-100 transition-colors'
          >
            <ArrowLeft className='w-5 h-5' />
          </button>
          <button
            onClick={next}
            className='bg-blue-500 text-white rounded-full p-3 shadow hover:bg-blue-600 transition-colors'
          >
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientExperience;
