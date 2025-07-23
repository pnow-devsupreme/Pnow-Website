import React from 'react';

const services = [
  'Architecture',
  'Mechanical',
  'Legal',
  'Environmental',
  'Accounting',
];

const RibbonMarquee: React.FC = () => {
  // duplicate for seamless loop
  const items = [...services, ...services];

  return (
    // 1) absolute full‑width window, crops the bar to 4rem tall
    <div className=' inset-x-0 top-0 overflow-hidden h-16'>
      {/* 
        2) extra‑wide + shifted left so it overflows both edges,
           then rotated down on the left by 3°
      */}
      <div className=' w-[150%] left-[-25%] -rotate-3'>
        {/* 3) your ribbon background */}
        <div className='bg-ribbon py-3'>
          {/* 4) counter‑rotate so text stays flat */}
          <div className='rotate-3'>
            <ul className='flex whitespace-nowrap animate-marquee'>
              {items.map((svc, idx) => (
                <li
                  key={idx}
                  className='flex items-center text-white text-lg mx-6'
                >
                  {svc}
                  <span className='ml-2 text-sm'>★</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RibbonMarquee;
