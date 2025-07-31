'use client';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    title: string;
    qualifications: string[];
    responsibilities?: string[];
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
        className='bg-white p-6 rounded-xl max-w-[50%] w-full relative'
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 h-6 w-6 rounded-full bg-[#0D004D] text-white flex items-center justify-center'
        >
          ×
        </button>

        <div className='flex flex-col md:flex-row gap-6'>
          {/* Image Section */}
          <div className='w-full md:w-[400px] relative rounded-xl overflow-hidden'>
            <Image
              src={item.imageSrc}
              alt={item.altText || item.title}
              fill
              className='object-contain'
            />
          </div>

          {/* Text Section */}
          <div className='flex-1 text-start'>
            <h3 className='text-2xl font-bold text-[#0D004D] mb-4'>
              {item.title}
            </h3>

            {/* Qualifications */}
            <div className='mb-6'>
              <h4 className='font-semibold mb-2'>Qualifications:</h4>
              <ul className='list-disc list-inside text-gray-700 space-y-1'>
                {item.qualifications.map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Responsibilities (if provided) */}
            {item.responsibilities?.length ? (
              <div className='mb-6'>
                <h4 className='font-semibold mb-2'>Responsibilities:</h4>
                <ul className='list-disc list-inside text-gray-700 space-y-1'>
                  {item.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Buttons */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
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
