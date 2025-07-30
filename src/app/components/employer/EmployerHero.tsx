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
      {/* Pulsing background blobs */}

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-gray-200'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2'>
          {title}
        </h1>
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8'>
          {subtitle}
        </h2>
        <div className='space-y-6 max-w-3xl mx-auto'>
          <p className='text-lg md:text-xl leading-relaxed'>{description}</p>
          <p className='text-lg md:text-xl leading-relaxed'>{additionalInfo}</p>
        </div>
      </div>

      {/* Smooth bottom curve via SVG - Adjusted for outward curve */}
      {/* Smooth bottom curve via SVG - convex only */}
    </section>
  );
};

export default EmployerHero;
