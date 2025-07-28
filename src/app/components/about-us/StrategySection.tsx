import Image from 'next/image';
import { FaBullseye, FaHandshake, FaProjectDiagram } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

const ITEMS = [
  {
    title: 'Talent Network',
    desc: 'Utilizing our extensive professional connections',
    icon: <FaProjectDiagram size={20} />,
    pos: { side: 'left', pct: 25 },
  },
  {
    title: 'Mutual Success',
    desc: 'Directing skilled talent toward shared goals',
    icon: <FaHandshake size={20} />,
    pos: { side: 'left', pct: 75 },
  },
  {
    title: 'Effective Planning',
    desc: 'Crafting strategies for client growth',
    icon: <FaBullseye size={20} />,
    pos: { side: 'right', pct: 25 },
  },
  {
    title: 'Strategic Placement',
    desc: 'Matching the right talent to business demands',
    icon: <FiMapPin size={20} />,
    pos: { side: 'right', pct: 75 },
  },
];

export default function StrategySection() {
  return (
    <section className='bg-white py-16 px-4 md:px-20'>
      <h2 className='text-4xl font-bold text-[#0F0F55] mb-12'>Strategy</h2>

      <div className='relative mx-auto w-64 h-64'>
        <div className='absolute inset-0'>
          <Image
            src='/strategy-chart.png'
            alt='Strategy chart'
            layout='fill'
            objectFit='contain'
            priority
          />
        </div>

        {ITEMS.map(({ title, desc, icon, pos }, idx) => {
          const horizontal =
            pos.side === 'left' ? 'left-[-13rem]' : 'right-[-13rem]';
          const vertical = `top-[${pos.pct}%]`;

          return (
            <div
              key={idx}
              className={`
                absolute ${horizontal} ${vertical}
                transform -translate-y-1/2
                max-w-xs
                ${pos.side === 'right' ? 'text-right' : 'text-left'}
              `}
            >
              <div className='flex items-center gap-3 mb-1'>
                <div className='w-8 h-8 bg-[#0B0A3E] rounded-md flex items-center justify-center'>
                  <span className='text-white'>{icon}</span>
                </div>
                <h3 className='text-xl font-semibold text-[#6F6F89]'>
                  {title}
                </h3>
              </div>
              <p className='text-sm text-[#4A4A4A]'>{desc}</p>
            </div>
          );
        })}
      </div>

      <p className='mt-10 max-w-3xl text-sm text-[#4A4A4A]'>
        ProficientNow crafts effective strategies for client growth, utilizing
        our talent network. We strategically place the right talent to meet
        business demands, directing our skilled pool toward shared goals for
        mutual success.
      </p>
    </section>
  );
}
