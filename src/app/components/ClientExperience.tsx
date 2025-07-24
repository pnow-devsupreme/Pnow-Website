'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Lauren Howard',
    title: 'Client Director',
    message: `Collaborating with ProficientNow has been exceptional. Their keen understanding of client needs ensures they present top-tier candidates. Their dedicated team goes beyond, offering unique talents that stand out.`,
    image: '', // base64 or image path
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

const ClientExperience: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className='bg-[#0D004D] py-20 px-4 text-white text-center h-[600px]'>
      <h2 className='text-4xl font-extrabold'>Client Experiences</h2>
      <p className='mt-3 max-w-xl mx-auto text-sm md:text-base'>
        Gaining profound insights into the path to success and unleashing your
        business’s full potential
      </p>

      <div className='relative mt-16 max-w-3xl mx-auto flex items-center justify-center h-[200px]'>
        {/* Stacked layers behind */}
        <div className='absolute w-full h-full flex justify-center items-center'>
          <div className='bg-white rounded-xl h-full w-11/12 absolute top-6 scale-95 shadow-xl opacity-50'></div>
          <div className='bg-white rounded-xl h-full w-11/12 absolute top-12 scale-90 shadow-xl opacity-30'></div>
        </div>

        {/* Current Testimonial */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className='relative bg-white text-left rounded-xl shadow-2xl p-8 w-full max-w-2xl z-10 flex items-center justify-between'
          >
            <div>
              <p className='text-sm text-gray-800'>{current.message}</p>
              <div className='mt-4 text-yellow-400 text-lg'>
                {'★'.repeat(current.rating)}
              </div>
              <div className='mt-2 font-bold text-black'>{current.name}</div>
              <div className='text-gray-600 text-sm'>{current.title}</div>
            </div>
            <div className='ml-4'>
              <div className='w-20 h-20 bg-gray-300 rounded-full'></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          className='absolute left-0 top-1/2 -translate-y-1/2 bg-white text-indigo-900 rounded-full p-2 shadow hover:bg-gray-100'
        >
          <ArrowLeft className='w-5 h-5' />
        </button>
        <button
          onClick={next}
          className='absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 shadow hover:bg-blue-600'
        >
          <ArrowRight className='w-5 h-5' />
        </button>
      </div>
    </section>
  );
};

export default ClientExperience;
