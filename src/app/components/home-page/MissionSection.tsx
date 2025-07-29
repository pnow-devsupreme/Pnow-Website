'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import { FaBridge, FaHandshake, FaUser } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const MissionSection: React.FC = () => {
  const center = 100;
  const outerR = 90;
  const innerR = 50;
  const gapAngle = 15; 
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  function describeArc(startAngle: number, endAngle: number) {
    const startRad = (Math.PI / 180) * startAngle;
    const endRad = (Math.PI / 180) * endAngle;

    const x1 = center + outerR * Math.cos(startRad);
    const y1 = center + outerR * Math.sin(startRad);
    const x2 = center + outerR * Math.cos(endRad);
    const y2 = center + outerR * Math.sin(endRad);
    const x3 = center + innerR * Math.cos(endRad);
    const y3 = center + innerR * Math.sin(endRad);
    const x4 = center + innerR * Math.cos(startRad);
    const y4 = center + innerR * Math.sin(startRad);

    const largeArcFlag = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;

    return [
      `M ${x1} ${y1}`,
      `A ${outerR} ${outerR} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      `L ${x3} ${y3}`,
      `A ${innerR} ${innerR} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
      'Z',
    ].join(' ');
  }

  const segmentAngle = (360 - 3 * gapAngle) / 3; 

  const segments = [
    { start: -90, end: -90 + segmentAngle }, 
    {
      start: -90 + segmentAngle + gapAngle,
      end: -90 + 2 * segmentAngle + gapAngle,
    }, 
    {
      start: -90 + 2 * segmentAngle + 2 * gapAngle,
      end: -90 + 3 * segmentAngle + 2 * gapAngle,
    }, 
  ];

  const arcs = segments.map((seg) => describeArc(seg.start, seg.end));

  const mids = segments.map(
    (seg) => (Math.PI / 180) * ((seg.start + seg.end) / 2)
  );

  useLayoutEffect(() => {
    if (!svgRef.current || !sectionRef.current) return;

    const svg = svgRef.current;
    const paths = svg.querySelectorAll('path');
    const icons = document.querySelectorAll('.mission-icon');

    gsap.set(paths, {
      drawSVG: '0%',
      opacity: 0,
      transformOrigin: 'center center',
    });
    gsap.set(icons, { opacity: 0, scale: 0.5 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%', 
        end: 'top 50%',
        once: true, 
        markers: false, 
      },
    });

    tl.to(paths, {
      drawSVG: '100%',
      opacity: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
    });

    tl.to(
      icons,
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      },
      '-=0.3'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='bg-white text-[#0D004D] py-20 px-6 md:px-20'
    >
      <h2 className='text-4xl md:text-5xl font-extrabold text-center mb-16'>
        Our Mission at <span className='text-[#1A0C6D]'>ProficientNow</span>
      </h2>

      <div className='flex flex-col lg:flex-row items-center justify-center gap-12 mb-12 max-w-6xl mx-auto'>
        <div className='lg:w-1/3 text-center lg:text-right order-2 lg:order-1'>
          <h3 className='text-xl font-semibold mb-2 text-[#0D004D]'>
            Global Success
          </h3>
          <p className='text-gray-500'>
            Delivering solutions that drive growth worldwide
          </p>
        </div>

          <div className='relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] order-1 lg:order-2'>
          <svg
            ref={svgRef}
            viewBox='0 0 200 200'
            className='w-full h-full rounded-full text-[#0D004D]'
          >
            {arcs.map((d, i) => (
              <path
                key={i}
                d={d}
                fill='#1A0C6D'
                stroke='#1A0C6D'
                strokeWidth='8'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='drop-shadow-sm'
              />
            ))}
          </svg>

          {/* Icons */}
          {[
            <FaHandshake key='0' />,
            <FaBridge key='1' />,
            <FaUser key='2' />,
          ].map((Icon, i) => {
            // Place icon at middle radius
            const r = (outerR + innerR) / 2;
            const x = center + r * Math.cos(mids[i]);
            const y = center + r * Math.sin(mids[i]);

            return (
              <div
                key={i}
                className='absolute text-white text-2xl md:text-3xl mission-icon'
                style={{
                  left: `${(x / 200) * 100}%`,
                  top: `${(y / 200) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {Icon}
              </div>
            );
          })}
        </div>

        {/* Right Labels */}
        <div className='lg:w-1/3 text-center lg:text-left space-y-8 order-3'>
          <div>
            <h3 className='text-xl font-semibold mb-2 text-[#0D004D]'>
              Bridging Aspirations
            </h3>
            <p className='text-gray-500'>
              Connecting ambitions with achievement
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2 text-[#0D004D]'>
              Empowering Organizations
            </h3>
            <p className='text-gray-500'>
              Revolutionizing recruitment across industries
            </p>
          </div>
        </div>
      </div>

      {/* Footer Paragraph */}
      <p className='text-center text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg'>
        ProficientNow revolutionizes recruitment across diverse industries,
        empowering organizations and individuals alike. Our mission is to bridge
        aspiration with achievement, delivering tailored solutions that drive
        growth and success globally. Join us in shaping the future of careers
        and businesses.
      </p>
    </section>
  );
};

export default MissionSection;
