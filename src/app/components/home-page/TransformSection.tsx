import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

import teamImage from '../../../../public/images/teamImage.png';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '73k+', label: 'Resumes' },
  { value: '95%', label: 'Jobs Fulfillment Rate' },
  { value: '12k+', label: 'Jobs Filled' },
  { value: '7152+', label: 'Satisfied Businesses' },
];

gsap.registerPlugin(ScrollTrigger);

const TransformSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !statsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.gsap-intro', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.2,
      });

      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.2,
      });

      const rawValues = stats.map((s) => s.value);
      const numericValues = rawValues.map((v) =>
        parseInt(v.replace(/\D/g, ''), 10)
      );
      const suffixes = rawValues.map((v) => v.replace(/[0-9]/g, ''));

      const statEls = gsap.utils.toArray<HTMLElement>('.stat-value');
      statEls.forEach((el, i) => {
        el.textContent = `0${suffixes[i]}`;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: numericValues[i],
          duration: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.textContent = `${Math.floor(obj.val)}${suffixes[i]}`;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className='bg-white  mt-[300px] mb-[100px]'>
      <div className='container max-w-8xl mx-auto px-6 lg:px-8'>
        <div className='flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12'>
          <div className='gsap-intro w-full lg:w-1/2 flex justify-center'>
            <Image
              src={teamImage}
              alt='Team raising a flag illustration'
              width={600}
              height={600}
              className='max-w-full h-auto'
            />
          </div>
          <div className='gsap-intro w-full lg:w-1/2 max-w-md flex flex-col gap-4'>
            <span className='inline-block text-[#0D004D] border border-[#0D004D] rounded-full px-3 py-1 text-xs uppercase font-medium w-fit'>
              About us
            </span>
            <div className='flex flex-col gap-4'>
              <h2 className=' text-3xl lg:text-4xl font-bold leading-tight'>
                Transform Your Path to{' '}
                <span className='text-[#0D004D]'>Success</span>
              </h2>
              <p className=' text-gray-600 text-[min(1.125rem, 18px)]'>
                Welcome to our comprehensive solution, optimizing hiring for
                employers and efficiently connecting top talent. For employees,
                we offer career opportunities aligning with aspirations. Elevate
                your success journey with us, unlocking your full potential
                together.
              </p>
              <button
                type='button'
                className='gsap-intro w-fit mt-3  inline-block border border-[#0D004D] text-[#0D004D] rounded-full px-6 py-2 text-sm font-medium hover:bg-purple-50 transition'
              >
                Let’s go!
              </button>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto gap-4'
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className='stat-card bg-white border rounded-lg px-2 py-8 text-center shadow-sm w-[250px]'
            >
              <div className='stat-value text-2xl lg:text-4xl font-extrabold'>
                0
              </div>
              <div className='mt-2 text-gray-600'>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformSection;
