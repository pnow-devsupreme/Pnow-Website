'use client';

import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

import SplitTextComp from '@/app/components/bits/SplitText';

import ConstructionEstimator from '../../../../public/images/heroImage1.jpg';
import ConstructionTechnicians from '../../../../public/images/heroImage2.jpg';
import PipelineEngineer from '../../../../public/images/heroImage3.jpg';
import SeniorAttorney from '../../../../public/images/heroImage4.jpg';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    const ctx = gsap.context(() => {
      // Split‑text animations
      const splitTitle = new SplitText(titleRef.current, {
        type: 'chars, words',
      });
      const splitDesc = new SplitText(descRef.current, { type: 'words' });

      gsap.from(splitTitle.chars, {
        duration: 0.3,
        opacity: 0,
        y: 50,
        stagger: 0.04,
        ease: 'power2.out',
      });
      gsap.from(splitDesc.words, {
        duration: 0.6,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: 'power2.out',
        delay: 0.01,
      });

      // Floating icons animations
      const q = gsap.utils.selector(heroRef);
      gsap.from(q('.nav-item'), {
        duration: 0.4,
        y: -20,
        opacity: 0,
        stagger: 0.12,
        ease: 'power2.out',
        delay: 0.01,
      });
      gsap.from(q('.contact-btn'), {
        duration: 0.6,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 0.01,
      });

      // Floating icons animations
      q('.floating-icon').forEach((el, i) => {
        gsap.to(el, {
          scale: 0.9,
          duration: 2,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.3,
          force3D: true,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className='w-full bg-brand-purple overflow-hidden'
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 92%, 83% 100%, 17% 100%, 0 92%)',
      }}
    >
      <div className='relative mx-auto h-[750px] max-w-[1440px]'>
        {/* HERO CONTENT */}
        <div
          className='
            absolute top-1/2 left-1/2 transform
            -translate-x-1/2 -translate-y-1/2
            text-center px-4 w-full max-w-[800px]
            flex flex-col gap-5 mt-10
          '
        >
          <h1
            ref={titleRef}
            className='text-[60px] font-bold text-white leading-tight'
          >
            Transform Your <span className='text-brand-red'>Path</span> to
            <br />
            <span className='text-brand-red'>Success</span>
          </h1>

          <SplitTextComp
            text='Welcome to our comprehensive solution, optimizing hiring for employers and efficiently connecting top talent. For employees, we offer career opportunities aligning with aspirations. Elevate your success journey with us, unlocking your full potential together.'
            className='mt-4 text-[18px] leading-relaxed text-white/90'
            delay={100}
            duration={0.5}
            ease='ease-in'
            splitType='words'
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin='-100px'
            textAlign='center'
          />

          <div className='mt-8 flex justify-center space-x-4'>
            <Link
              href='/find-a-job'
              className='bg-white text-brand-purple px-8 py-3 rounded-full font-semibold text-base hover:opacity-90 transition'
            >
              Find Works
            </Link>
            <Link
              href='/employers'
              className='bg-brand-red text-white px-8 py-3 rounded-full font-semibold text-base hover:opacity-90 transition'
            >
              Hire Talents Now
            </Link>
          </div>
        </div>

        {/* FOUR FLOATING ICONS */}
        <div
          className='
            floating-icon absolute top-[260px] left-[80px]
            flex flex-col items-center
          '
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
        >
          <Image
            src={ConstructionEstimator}
            alt='Construction Estimator'
            className='w-[120px] h-[120px] rounded-full bg-white object-cover'
          />
          <span className='mt-2 bg-white px-2 py-1 rounded-full text-[14px] text-brand-purple whitespace-nowrap antialiased'>
            Construction Estimator
          </span>
        </div>

        <div
          className='
            floating-icon absolute bottom-[120px] left-[160px]
            flex flex-col items-center
          '
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
        >
          <Image
            src={ConstructionTechnicians}
            alt='Construction Technicians'
            className='w-[120px] h-[120px] rounded-full bg-white object-cover'
          />
          <span className='mt-2 bg-white px-2 py-1 rounded-full text-[14px] text-brand-purple whitespace-nowrap antialiased'>
            Construction Technicians
          </span>
        </div>

        <div
          className='
            floating-icon absolute top-[260px] right-[80px]
            flex flex-col items-center
          '
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
        >
          <Image
            src={SeniorAttorney}
            alt='Senior Attorney'
            className='w-[120px] h-[120px] rounded-full bg-white object-cover'
          />
          <span className='mt-2 bg-white px-2 py-1 rounded-full text-[14px] text-brand-purple whitespace-nowrap antialiased'>
            Senior Attorney
          </span>
        </div>

        <div
          className='
            floating-icon absolute bottom-[120px] right-[160px]
            flex flex-col items-center
          '
          style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
        >
          <Image
            src={PipelineEngineer}
            alt='Pipeline Engineer'
            className='w-[120px] h-[120px] rounded-full bg-white object-cover'
          />
          <span className='mt-2 bg-white px-2 py-1 rounded-full text-[14px] text-brand-purple whitespace-nowrap antialiased'>
            Pipeline Engineer
          </span>
        </div>
      </div>
    </section>
  );
}
