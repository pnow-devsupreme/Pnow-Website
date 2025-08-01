import type React from 'react';

interface EmployerHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  additionalInfo?: string;
}

const EmployerHero: React.FC<EmployerHeroProps> = ({
  title = 'Employers',
  subtitle = 'Services',
  description = "ProficientNow specializes in sourcing outstanding talent pools for various industries and businesses, placing them in the right positions. Whether you require permanent hires, contract employees, freelancers, temporary staff, remote workers, or executive talent searches, we're your preferred partner.",
  additionalInfo = 'Additionally, ProficientNow provides workforce management services through recruitment process outsourcing (RPO) methods, ensuring seamless talent onboarding with minimal operational interference.',
}) => {
  return (
    <section className='relative overflow-hidden bg-brand-purple m-0 pt-32'>
      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mb-20 md:py-24 text-center text-gray-200'>
        <h1 className='text-[min(2vw, 25px)] font-bold text-white mb-2'>
          {title}
        </h1>
        <h2 className='text-[min(2vw, 25px)] font-bold text-white mb-8'>
          {subtitle}
        </h2>
        <div className='space-y-6 max-w-3xl mx-auto'>
          <p className='text-[13px] lg:text-[18px] md:text-[min(2vw, 20px)] leading-relaxed'>
            {description}
          </p>
          <p className='text-[13px] lg:text-[15px] md:text-xl leading-relaxed'>
            {additionalInfo}
          </p>
        </div>
      </div>

      {/* Convex bottom curve */}
      <div className='lg:absolute bottom-0 left-0 w-full overflow-hidden leading-[0]'>
        <svg
          className='relative block w-[calc(100%+1px)] lg:h-32'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0 C600,120 600,120 1200,0 L1200,120 L0,120 Z'
            fill='#F9FAFB'
          />
        </svg>
      </div>
    </section>
  );
};

export default EmployerHero;
