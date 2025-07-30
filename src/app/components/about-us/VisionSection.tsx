import { Briefcase, ClipboardList, User } from 'lucide-react';

export default function Vision() {
  return (
    <section className='px-6 md:px-10 lg:px-16 py-12 lg:py-16 mx-auto lg:max-w-[65%]'>
      <div className=''>
        <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B0B66] mb-10'>
          Vision
        </h2>
        {/* Layout: Pyramid (fixed width at md+) + copy */}
        <div className='relative grid gap-10 md:gap-16 md:grid-cols-[420px_1fr] items-start'>
          {/* LEFT: Pyramid */}
          <div className='relative w-full mx-auto md:mx-0 md:w-[420px] md:h-[360px] aspect-[7/6]'>
            {/* Bottom segment */}
            <div
              className='absolute inset-0 bg-[#0A0042]'
              style={{
                clipPath:
                  'polygon(16.67% 66.67%, 83.33% 66.67%, 100% 100%, 0% 100%)',
              }}
            />
            {/* Middle segment */}
            <div
              className='absolute inset-0 bg-[#0A0042]'
              style={{
                clipPath:
                  'polygon(33.33% 33.33%, 66.67% 33.33%, 83.33% 66.67%, 16.67% 66.67%)',
              }}
            />
            {/* Top segment */}
            <div
              className='absolute inset-0 bg-[#0A0042]'
              style={{
                clipPath: 'polygon(50% 0%, 66.67% 33.33%, 33.33% 33.33%)',
              }}
            />
            {/* white separators (thin) */}
            <div
              className='absolute left-[16.67%] right-[16.67%] top-[33.33%] h-[2px] bg-white/80'
              aria-hidden
            />
            <div
              className='absolute left-[0%] right-[0%] top-[66.67%] h-[2px] bg-white/80'
              aria-hidden
            />
            {/* Icons (centered per tier) */}
            <div className='absolute left-1/2 -translate-x-1/2 top-[12%] text-white'>
              <Briefcase size={28} strokeWidth={2.25} />
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 top-[45%] text-white'>
              <User size={28} strokeWidth={2.25} />
            </div>
            <div className='absolute left-1/2 -translate-x-1/2 top-[78%] text-white'>
              <ClipboardList size={28} strokeWidth={2.25} />
            </div>
          </div>

          {/* Horizontal lines that extend from pyramid */}
          {/* Line 1: Aligned with pyramid's first internal line */}
          <div
            className='hidden md:block absolute h-px bg-[#B8B3D3]/60'
            style={{
              left: 'calc(420px + 16px)', // Pyramid width + md:gap-16
              right: '0',
              top: '120px', // 33.33% of 360px pyramid height
            }}
            aria-hidden
          ></div>
          {/* Line 2: Aligned with pyramid's second internal line */}
          <div
            className='hidden md:block absolute h-px bg-[#B8B3D3]/60'
            style={{
              left: 'calc(420px + 16px)',
              right: '0',
              top: '240px', // 66.67% of 360px pyramid height
            }}
            aria-hidden
          ></div>

          {/* RIGHT: Copy aligned to pyramid tiers */}
          <div className='md:h-[360px] grid grid-rows-3'>
            {/* Row 1 */}
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-extrabold text-[#5A5A5A]'>
                Bridge the Gap
              </h3>
              <p className='text-[#6F6F77] mt-1'>
                Between industry and talent pool
              </p>
            </div>
            {/* Row 2 */}
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-extrabold text-[#5A5A5A]'>
                Direct Employees
              </h3>
              <p className='text-[#6F6F77] mt-1'>
                To the right position in their career path
              </p>
            </div>
            {/* Row 3 */}
            <div className='flex flex-col justify-center'>
              <h3 className='text-2xl font-extrabold text-[#5A5A5A]'>
                Support Employers
              </h3>
              <p className='text-[#6F6F77] mt-1'>
                With professional and executive talent
              </p>
            </div>
          </div>
        </div>
        {/* Bottom paragraph */}
        <p className='mt-10 max-w-5xl text-lg leading-8 text-[#6F6F77]'>
          To support our Employers with professional and executive talent and to
          direct employees to the right position in their career path with
          rewarding benefits. We bridge the gap between industry and the talent
          pool with Automated technology.
        </p>
      </div>
    </section>
  );
}
