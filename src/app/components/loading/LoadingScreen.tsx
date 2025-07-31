'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps = {}) {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const outlineTextRef = useRef<HTMLDivElement>(null);
  const solidTextRef = useRef<HTMLDivElement>(null);
  const outlineLettersRef = useRef<HTMLSpanElement[]>([]);
  const solidLettersRef = useRef<HTMLSpanElement[]>([]);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spinner = spinnerRef.current;
    const outlineText = outlineTextRef.current;
    const solidText = solidTextRef.current;
    const outlineLetters = outlineLettersRef.current;
    const solidLetters = solidLettersRef.current;
    const curtain = curtainRef.current;

    if (!container || !spinner || !outlineText || !solidText || !curtain)
      return;

    // Set initial states
    gsap.set(container, { opacity: 0 });
    gsap.set(spinner, { rotation: 0, scale: 0.8, opacity: 0 });
    gsap.set(outlineLetters, { opacity: 0, y: 30 });
    gsap.set(solidLetters, { opacity: 0, rotation: -90, scale: 0.5 });
    gsap.set(curtain, { y: 0 });

    // Create timeline
    const tl = gsap.timeline();

    // Fade in container
    tl.to(container, {
      opacity: 1,
      duration: 0.01,
      ease: 'power2.out',
    });

    // Animate spinner
    tl.to(
      spinner,
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      },
      '-=0.3'
    );

    // Start spinner rotation
    tl.to(
      spinner,
      {
        rotation: 360,
        duration: 2,
        ease: 'none',
        repeat: -1,
      },
      '-=0.5'
    );

    // Show outline text (no rotation, stays in place)
    tl.to(
      outlineLetters,
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.out',
      },
      '-=1.5'
    );

    // Then rotate in solid letters one by one at the same position
    tl.to(
      solidLetters,
      {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 0.4,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      },
      '+=0.9'
    );

    // Wait a moment, then start curtain animation
    tl.to({}, { duration: 1 }); // Pause for 1 second

    // Curtain pull-up animation
    tl.to(curtain, {
      y: '-100%',
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsComplete(true);
        onLoadingComplete?.();
      },
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!isComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isComplete]);

  const addOutlineLetterRef = (el: HTMLSpanElement | null, index: number) => {
    if (el) {
      outlineLettersRef.current[index] = el;
    }
  };

  const addSolidLetterRef = (el: HTMLSpanElement | null, index: number) => {
    if (el) {
      solidLettersRef.current[index] = el;
    }
  };

  const text = 'PROFICIENT NOW';
  const letters = text.split('');

  if (isComplete) {
    return null;
  }

  return (
    <div ref={curtainRef} className='fixed inset-0 z-50'>
      <div
        ref={containerRef}
        className='w-full h-full bg-brand-purple flex flex-col items-center justify-center relative overflow-hidden'
      >
        {/* Decorative curtain texture overlay */}
        <div className='absolute inset-0 opacity-10'>
          <div className='w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent'></div>
          {/* Vertical curtain lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className='absolute top-0 bottom-0 w-px bg-white/10'
              style={{ left: `${(i + 1) * 5}%` }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className='relative z-10 flex flex-col justify-center mb-32 items-center text-center text-white'>
          {/* Spinner */}
          <div className='mb-16'>
            <div
              ref={spinnerRef}
              className='w-20 h-20 border-3 border-white/30 border-t-white rounded-full'
              style={{
                borderWidth: '3px',
              }}
            />
          </div>

          {/* Text container with both outline and solid text */}
          <div className='relative'>
            {/* Outline text - appears first and stays in place */}
            <div ref={outlineTextRef} className='flex space-x-3'>
              {letters.map((letter, index) => (
                <span
                  key={`outline-${index}`}
                  ref={(el) => addOutlineLetterRef(el, index)}
                  className='text-xl md:text-5xl lg:text-6xl font-light tracking-wider'
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2px #ffffff',
                    // textStroke: '2px #ffffff',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>

            {/* Solid text - rotates in one by one at the same position */}
            <div ref={solidTextRef} className='absolute inset-0 flex space-x-3'>
              {letters.map((letter, index) => (
                <span
                  key={`solid-${index}`}
                  ref={(el) => addSolidLetterRef(el, index)}
                  className='text-xl md:text-5xl lg:text-6xl font-light tracking-wider text-white'
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Curtain bottom edge shadow */}
        <div className='absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/20 to-transparent pointer-events-none' />
      </div>
    </div>
  );
}
