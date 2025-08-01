'use client';
import { X } from 'lucide-react';
import React, { useState } from 'react';

import { Category } from '@/app/components/employer/data/employerData';

interface EmploymentGridProps {
  categories: Category[];
  headerText?: string;
}

const EmploymentGrid: React.FC<EmploymentGridProps> = ({
  categories,
  headerText = 'WHAT WE PROVIDE',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
      {/* Header */}
      <div className='max-w-7xl mx-auto mb-8'>
        <div className='text-center mb-2'>
          <span className='inline-block bg-blue-100 text-brand-purple px-4 py-2 rounded-full text-sm font-medium'>
            {headerText}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {categories.map((category) => (
          <div
            key={category.id}
            className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden'
            onClick={() => openModal(category)}
          >
            <div className='aspect-video overflow-hidden'>
              <img
                src={category.image}
                alt={category.title}
                className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-900 mb-4 text-center'>
                {category.title}
              </h3>
              <div className='text-center'>
                <button className='text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200'>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCategory && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div
            className={`bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh]
              overflow-hidden transform transition-all duration-300 ${isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
              }`}
          >
            {/* Header */}
            <div className='flex justify-between items-center p-6 border-b border-gray-200'>
              <h2 className='text-2xl font-bold text-gray-900'>Job Details</h2>
              <button
                onClick={closeModal}
                className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
              >
                <X className='w-6 h-6 text-gray-600' />
              </button>
            </div>

            {/* Body */}
            <div className='overflow-y-auto max-h-[calc(90vh-120px)]'>
              <div className='p-6'>
                <div className='flex flex-col lg:flex-row gap-8'>
                  {/* Image */}
                  <div className='lg:w-1/3'>
                    <img
                      src={selectedCategory.image}
                      alt={selectedCategory.title}
                      className='w-full h-48 object-cover rounded-lg shadow-md mb-6'
                    />
                  </div>

                  {/* Text */}
                  <div className='lg:w-2/3'>
                    <h3 className='text-2xl font-bold text-brand-purple mb-2'>
                      {selectedCategory.jobTitle}
                    </h3>
                    <p className='text-lg text-gray-600 mb-4'>
                      {selectedCategory.location}
                    </p>

                    <div className='mb-6'>
                      <h4 className='text-lg font-semibold text-gray-900 mb-3'>
                        Job Description
                      </h4>
                      <p className='text-gray-700 mb-4'>
                        <span className='font-medium'>Qualifications:</span>{' '}
                        {selectedCategory.qualifications}
                      </p>

                      <div>
                        <h5 className='font-medium text-gray-900 mb-2'>
                          Key Responsibilities:
                        </h5>
                        <ul className='space-y-2'>
                          {selectedCategory.responsibilities.map((resp) => (
                            <li key={resp.id} className='flex items-start'>
                              <span className='w-2 h-2 bg-brand-purple rounded-full mt-2 mr-3 flex-shrink-0' />
                              <span className='text-gray-700'>{resp.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
                  <div className='bg-brand-purple rounded-xl p-6 text-white text-center'>
                    <h4 className='text-xl font-bold mb-4'>
                      ARE YOU RECRUITING?
                    </h4>
                    <button className='bg-white text-brand-purple px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200'>
                      Contact Us
                    </button>
                  </div>
                  <div className='bg-brand-purple rounded-xl p-6 text-white text-center'>
                    <h4 className='text-xl font-bold mb-4'>
                      LOOKING FOR YOUR NEXT ROLE?
                    </h4>
                    <button className='bg-white text-brand-purple px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200'>
                      Submit Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmploymentGrid;
