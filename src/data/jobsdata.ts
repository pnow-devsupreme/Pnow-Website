import {
  Coins,
  FlaskConical,
  Hospital,
  Landmark,
  Monitor,
  Pill,
  UmbrellaOff,
} from 'lucide-react';
import { StaticImageData } from 'next/image';
import { ComponentType, SVGProps } from 'react';

import HeroImage1 from '../../public/images/heroImage1.jpg';
import HeroImage2 from '../../public/images/heroImage2.jpg';
import HeroImage3 from '../../public/images/heroImage3.jpg';
import HeroImage4 from '../../public/images/heroImage4.jpg';
import Healthcare1 from '../../public/jobs/Doctors.png';
import Healthcare3 from '../../public/jobs/Laboratory.png';
import Healthcare2 from '../../public/jobs/Laboratory-r.png';

export interface JobSection {
  title: string;
  description: string;
  imageSrc: StaticImageData | string;
  altText?: string;
  buttonText?: string;
  buttonLink?: string;
}
export interface JobFeature {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}
export interface CareerItem {
  title: string;
  jobDescription: string;
  imageSrc: StaticImageData | string;
  altText?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface JobCareers {
  title: string;
  description: string;
  items: CareerItem[];
}

// Main Job interface including multiple sections
export interface Job {
  id: number;
  title: string;
  slug: string;
  sections: JobSection[];
  features?: {
    description: string;
    items: JobFeature[];
  };
  careersSection?: JobCareers;
}

// List of all jobs
export const jobs: Job[] = [
  {
    id: 1,
    title: 'Health Care',
    slug: 'health-care',
    sections: [
      {
        title: 'Healthcare & Pharmaceuticals Careers with ProficientNow',
        description:
          'Connecting talented professionals with rewarding careers in healthcare and pharmaceuticals. We bridge the gap between industry needs and qualified candidates through innovative recruitment solutions.',
        imageSrc: Healthcare1,
        altText: 'Healthcare illustration',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Healthcare & Pharmaceuticals Industry Overview',
        description:
          'In the Healthcare and Pharmaceuticals industries, professionals work diligently to provide vital medical services and develop life-saving medications. From doctors and nurses delivering direct patient care to researchers conducting groundbreaking studies, the sector encompasses a broad spectrum of roles.',
        imageSrc: Healthcare2,
        altText: 'Healthcare illustration',
      },
    ],
    features: {
      description:
        'Pharmaceutical companies employ scientists, regulatory specialists, and marketing professionals to develop, produce, and distribute medications globally. These industries offer rewarding career opportunities for those passionate about improving healthcare outcomes and advancing medical science.',
      items: [
        {
          title: 'Patient Care',
          description:
            'Direct medical services from doctors, nurses and support staff',
          icon: Hospital,
        },
        {
          title: 'Research & Development',
          description: 'Groundbreaking studies advancing medical science',
          icon: FlaskConical,
        },
        {
          title: 'Pharmaceutical Production',
          description: 'Development and distribution of medications globally',
          icon: Pill,
        },
      ],
    },
    careersSection: {
      title: 'Top Healthcare & Pharmaceutical Careers',
      description:
        'Healthcare and pharmaceutical sectors offer diverse, rewarding careers with strong growth:',
      items: [
        {
          title: 'Laboratory Analyst',
          jobDescription: 'Laboratory Analyst',
          imageSrc: Healthcare3,
          altText: 'Laboratory Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/frontend-developer',
        },
        {
          title: 'Laboratory Technician',
          jobDescription: 'Laboratory Technician',
          imageSrc: Healthcare2,
          altText: 'Laboratory Technician',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Medical Sales Representative',
          jobDescription: 'Medical Sales Representative',
          imageSrc: Healthcare1,
          altText: 'Medical Sales Representative',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Chemist',
          jobDescription: 'Chemist',
          imageSrc: Healthcare3,
          altText: 'Chemist',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Clinical Research Scientist',
          jobDescription: 'Clinical Research Scientist',
          imageSrc: Healthcare2,
          altText: 'Clinical Research Scientist',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Accounting & Finance',
    slug: 'accounting-finance',
    sections: [
      {
        title: 'Accounting & Finance Careers with ProficientNow',
        description:
          'Connecting talented professionals with rewarding careers in accounting and finance. We bridge the gap between industry needs and qualified candidates through innovative recruitment solutions.',
        imageSrc: HeroImage3,
        altText: 'Accounting and Finance',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Accounting & Finance Industry Overview',
        description:
          'The accounting and finance industry is a cornerstone of the economy. It requires highly skilled professionals with a deep understanding of financial markets, accounting principles, and regulatory requirements. Accounting and finance careers offer a range of opportunities for those interested in financial analysis, forecasting, budgeting, and strategic planning.',
        imageSrc: HeroImage4,
        altText: 'Accounting and Finance',
      },
    ],
    features: {
      description:
        'Accounting and finance careers offer a range of opportunities for those interested in financial analysis, forecasting, budgeting, and strategic planning.',
      items: [
        {
          title: 'Financial Analysis',
          description:
            'Analyzing and interpreting financial data to make informed decisions',
          icon: Landmark,
        },
        {
          title: 'Budgeting and Planning',
          description:
            'Developing and implementing financial plans and budgets for organizations',
          icon: Coins,
        },
        {
          title: 'Risk Management',
          description:
            'Analyzing and managing financial risks and opportunities',
          icon: UmbrellaOff,
        },
      ],
    },
    careersSection: {
      title: 'Top Accounting & Finance Careers',
      description:
        'Accounting and finance sectors offer diverse, rewarding careers with strong growth:',
      items: [
        {
          title: 'Accountant',
          jobDescription: 'Accountant',
          imageSrc: HeroImage1,
          altText: 'Accountant illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Financial Analyst',
          jobDescription: 'Financial Analyst',
          imageSrc: HeroImage2,
          altText: 'Financial Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Financial Planner',
          jobDescription: 'Financial Planner',
          imageSrc: HeroImage3,
          altText: 'Financial Planner illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Auditor',
          jobDescription: 'Auditor',
          imageSrc: HeroImage4,
          altText: 'Auditor illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Management Accountant',
          jobDescription: 'Management Accountant',
          imageSrc: HeroImage1,
          altText: 'Management Accountant illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Sports',
    slug: 'sports',
    sections: [
      {
        title: 'Sports Careers with ProficientNow',
        description: `
        Connecting talented professionals with rewarding careers in sports. We bridge the gap between industry needs and qualified candidates through innovative recruitment solutions.
        `,
        imageSrc: HeroImage1,
        altText: 'Sports careers illustration',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Sports Industry Overview',
        description: `
        The sports industry is a multibillion-dollar market with a diverse range of roles and opportunities. From professional athletes to sports agents, coaches, and equipment manufacturers, the sports industry offers a wide range of careers for those passionate about sports and fitness. ProficientNow helps connect talented professionals with rewarding careers in sports.
        `,
        imageSrc: HeroImage2,
        altText: 'sports illustration',
      },
    ],
    features: {
      description:
        'Sports careers offer a diverse range of opportunities for those interested in sports, fitness, and related industries.',
      items: [
        {
          title: 'Sports Coaching',
          description:
            'Guiding athletes through training and performance development',
          icon: Monitor,
        },
        {
          title: 'Sports Marketing',
          description:
            'Creating and executing marketing strategies for sports brands',
          icon: Monitor,
        },
        {
          title: 'Sports Media',
          description:
            'Producing and distributing sports content for audiences',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Sports Careers',
      description:
        'Sports sectors offer diverse, rewarding careers with strong growth:',
      items: [
        {
          title: 'Sports Agent',
          jobDescription: 'Sports Agent',
          imageSrc: HeroImage1,
          altText: 'Sports Agent illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Sports Coach',
          jobDescription: 'Sports Coach',
          imageSrc: HeroImage2,
          altText: 'Sports Coach illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Sports Manager',
          jobDescription: 'Sports Manager',
          imageSrc: HeroImage3,
          altText: 'Sports Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Sports Producer',
          jobDescription: 'Sports Producer',
          imageSrc: HeroImage4,
          altText: 'Sports Producer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Sports Analyst',
          jobDescription: 'Sports Analyst',
          imageSrc: HeroImage1,
          altText: 'Sports Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Oil & Gas',
    slug: 'oil-and-gas',
    sections: [
      {
        title: 'Oil & Gas Careers with ProficientNow',
        description:
          'Connecting talented professionals with rewarding careers in the oil and gas industry. We bridge the gap between industry needs and qualified candidates through innovative recruitment solutions.',
        imageSrc: HeroImage4,
        altText: 'Oil & Gas careers illustration',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Oil & Gas Industry Overview',
        description:
          "The oil and gas industry plays a vital role in meeting the world's increasing energy demands. From exploration and production to transportation and refining, the industry offers a wide range of career opportunities for skilled professionals.",
        imageSrc: HeroImage3,
        altText: 'oil and gas illustration',
      },
    ],
    features: {
      description:
        'Oil and gas careers offer a diverse range of opportunities for those interested in the energy industry.',
      items: [
        {
          title: 'Oil and Gas Exploration',
          description:
            'Exploring and evaluating potential oil and gas resources',
          icon: Monitor,
        },
        {
          title: 'Oil and Gas Production',
          description: 'Producing oil and gas for transportation and refining',
          icon: Monitor,
        },
        {
          title: 'Oil and Gas Transportation',
          description: 'Transporting oil and gas from exploration to refining',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Oil & Gas Careers',
      description:
        'Oil and gas sectors offer diverse, rewarding careers with strong growth:',
      items: [
        {
          title: 'Oil and Gas Engineer',
          jobDescription: 'Oil and Gas Engineer',
          imageSrc: HeroImage1,
          altText: 'Oil and Gas Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Oil and Gas Manager',
          jobDescription: 'Oil and Gas Manager',
          imageSrc: HeroImage2,
          altText: 'Oil and Gas Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Oil and Gas Technician',
          jobDescription: 'Oil and Gas Technician',
          imageSrc: HeroImage3,
          altText: 'Oil and Gas Technician illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Oil and Gas Specialist',
          jobDescription: 'Oil and Gas Specialist',
          imageSrc: HeroImage4,
          altText: 'Oil and Gas Specialist illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Oil and Gas Quality Assurance Engineer',
          jobDescription: 'Oil and Gas Quality Assurance Engineer',
          imageSrc: HeroImage1,
          altText: 'Oil and Gas Quality Assurance Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Construction',
    slug: 'construction',
    sections: [
      {
        title: 'Construction Careers with ProficientNow',
        description:
          'Connecting talented professionals with rewarding careers in the construction industry. We bridge the gap between industry needs and qualified candidates through innovative recruitment solutions.',
        imageSrc: HeroImage2,
        altText: 'Construction careers illustration',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Construction Industry Overview',
        description:
          'The construction industry is a significant contributor to the global economy. With the growing demand for infrastructure development, housing, and commercial buildings, the construction industry is expected to grow at a steady pace. ProficientNow is a trusted partner for construction companies looking to hire top talent to fill a range of roles, from construction managers to engineers and skilled laborers.',
        imageSrc: HeroImage1,
        altText: 'Construction illustration',
      },
    ],
    features: {
      description:
        'Construction careers offer a diverse range of opportunities for those interested in the construction industry.',
      items: [
        {
          title: 'Construction Manager',
          description:
            'Planning, overseeing, and supervising construction projects',
          icon: Monitor,
        },
        {
          title: 'Construction Engineer',
          description:
            'Designing, constructing, and overseeing construction projects',
          icon: Monitor,
        },
        {
          title: 'Construction Laborer',
          description:
            'Working on construction sites to build structures and infrastructure',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Construction Careers',
      description:
        'Construction sectors offer diverse, rewarding careers with strong growth:',
      items: [
        {
          title: 'Construction Manager',
          jobDescription: 'Construction Manager',
          imageSrc: HeroImage1,
          altText: 'Construction Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Engineer',
          jobDescription: 'Construction Engineer',
          imageSrc: HeroImage2,
          altText: 'Construction Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Laborer',
          jobDescription: 'Construction Laborer',
          imageSrc: HeroImage3,
          altText: 'Construction Laborer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Superintendent',
          jobDescription: 'Construction Superintendent',
          imageSrc: HeroImage4,
          altText: 'Construction Superintendent illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Supervisor',
          jobDescription: 'Construction Supervisor',
          imageSrc: HeroImage1,
          altText: 'Construction Supervisor illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
];
