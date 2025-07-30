'use client';

import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    title: string;
    jobDescription: string;
    imageSrc: string | StaticImageData;
    altText?: string;
  } | null;
}

export default function JobModal({ isOpen, onClose, item }: JobModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !item) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center'
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className='bg-white p-6 rounded-xl max-w-[700px] w-full relative'
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 h-6 w-6 rounded-full bg-[#0D004D] text-white flex items-center justify-center'
        >
          ×
        </button>

        <div className='flex justify-between'>
          <div className='h-[300px] w-[300px] relative mb-4 rounded-xl overflow-hidden'>
            <Image
              src={item.imageSrc}
              alt={item.altText || item.title}
              fill
              className='object-cover'
            />
          </div>
          <div className='text-start w-[325px]'>
            <h3 className='text-2xl font-bold text-[#0D004D] mb-2'>
              {item.title}
            </h3>
            <p className='text-gray-700 mb-6'>{item.jobDescription}</p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
          <div className='bg-[#0D004D] text-white p-6 rounded-xl text-center flex flex-col justify-between h-full'>
            <div>
              <h4 className='text-xl font-bold mb-4'>ARE YOU RECRUITING?</h4>
            </div>
            <div className='mt-auto'>
              <button className='bg-white text-[#0D004D] py-2 px-4 rounded-full'>
                Contact Us
              </button>
            </div>
          </div>

          <div className='bg-[#0D004D] text-white p-6 rounded-xl text-center flex flex-col justify-between h-full'>
            <div>
              <h4 className='text-xl font-bold mb-4'>
                LOOKING FOR YOUR NEXT ROLE?
              </h4>
            </div>
            <div className='mt-auto'>
              <button className='bg-white text-[#0D004D] py-2 px-4 rounded-full'>
                Submit Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
