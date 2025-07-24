import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

gsap.registerPlugin(ScrollTrigger);

const features: Feature[] = [
  {
    icon: (
      <Image
        src='data:image/png;base64,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'
        alt='Retain Top Talent'
        width={100}
        height={100}
        className='w-8 h-8'
      />
    ),
    title: 'Retain Top Talent',
    description:
      'Providing clear career paths and growth opportunities is key to retaining top talent.',
    href: '/retain',
  },
  {
    icon: (
      <Image
        src='data:image/png;base64,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'
        alt='Stay Compliant'
        width={100}
        height={100}
        className='w-8 h-8'
      />
    ),
    title: 'Stay Compliant',
    description:
      'Educate employees about compliance requirements through regular training.',
    href: '/compliance',
  },
  {
    icon: (
      <Image
        src='data:image/png;base64,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'
        alt='Improve Employee'
        width={100}
        height={100}
        className='w-8 h-8'
      />
    ),
    title: 'Improve Employee',
    description:
      'Invest in employee training development programs to enhance skill and knowledge.',
    href: '/improvement',
  },
];

const WhyChooseUs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className='py-16'>
      <div className='container mx-auto px-6 lg:px-8 text-center'>
        <span className='inline-block text-[#0D004D] border border-[#0D004D] rounded-full px-3 py-1 text-xs uppercase font-medium'>
          Why us
        </span>
        <h2 className='mt-4 text-3xl lg:text-4xl font-bold'>Why Choose Us</h2>

        <div
          ref={containerRef}
          className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {features.map((f, idx) => (
            <a
              key={f.title}
              href={f.href}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className='block bg-white rounded-xl shadow hover:shadow-md transition-shadow p-6 text-left'
            >
              <div className='inline-flex items-center justify-center bg-[#0D004D] rounded-full p-3'>
                {f.icon}
              </div>
              <h3 className='mt-4 text-xl font-semibold'>{f.title}</h3>
              <p className='mt-2 text-gray-600 text-sm'>{f.description}</p>
              <span className='mt-4 inline-flex items-center text-[#0D004D] font-medium hover:underline'>
                Learn More <ArrowRight className='w-4 h-4 ml-1' />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
