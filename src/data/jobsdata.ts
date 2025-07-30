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

import Accounting1 from '../../public/jobs/Accountant-amico.png';
import Accounting2 from '../../public/jobs/Accountant-pana.png';
import Accounting3 from '../../public/jobs/Accountant-rafiki.png';
import Accounting4 from '../../public/jobs/Audit-amico.png';
import Accounting5 from '../../public/jobs/Audit-rafiki.png';
import Healthcare1 from '../../public/jobs/Doctors.png';
import Accounting6 from '../../public/jobs/Investment.png';
import Healthcare3 from '../../public/jobs/Laboratory.png';
import Healthcare2 from '../../public/jobs/Laboratory-r.png';
import {
  Construction1,
  Construction2,
  Construction3,
  Construction4,
  Construction5,
  Construction6,
  Construction7,
} from '~/constructionImages';
import {
  Aviation1,
  Aviation2,
  Aviation3,
  Aviation4,
  Aviation5,
  Aviation6,
  Aviation7,
} from '~/aviationImages';
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from '~/hardwareNetwork';
import {
  Hospitality1,
  Hospitality2,
  Hospitality3,
  Hospitality4,
  Hospitality5,
  Hospitality6,
  Hospitality7,
} from '~/hospitality';

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
        imageSrc: Accounting1,
        altText: 'Accounting and Finance',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Accounting & Finance Industry Overview',
        description:
          'The accounting and finance industry is a cornerstone of the economy. It requires highly skilled professionals with a deep understanding of financial markets, accounting principles, and regulatory requirements. Accounting and finance careers offer a range of opportunities for those interested in financial analysis, forecasting, budgeting, and strategic planning.',
        imageSrc: Accounting2,
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
          imageSrc: Accounting3,
          altText: 'Accountant illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Financial Analyst',
          jobDescription: 'Financial Analyst',
          imageSrc: Accounting4,
          altText: 'Financial Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Financial Planner',
          jobDescription: 'Financial Planner',
          imageSrc: Accounting5,
          altText: 'Financial Planner illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Auditor',
          jobDescription: 'Auditor',
          imageSrc: Accounting6,
          altText: 'Auditor illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Management Accountant',
          jobDescription: 'Management Accountant',
          imageSrc: Accounting1,
          altText: 'Management Accountant illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Hardware & Networking',
    slug: 'hardware-networking',
    sections: [
      {
        title: 'Hardware & Networking Careers with ProficientNow',
        description: `
        Connecting talented professionals with rewarding careers in hardware and networking. We bridge the gap between industry needs and qualified candidates through innovative recruitment solutions.`,
        imageSrc: Image7,
        altText: 'Hardware and Networking',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Hardware & Networking Industry Overview',
        description:
          'The hardware and networking industry is a rapidly evolving field with new technologies and innovations emerging regularly. It requires skilled professionals with a deep understanding of computer systems, networks, and cybersecurity. Hardware and networking careers offer a range of opportunities for those interested in design, development, installation, and maintenance of computer hardware and networks.',
        imageSrc: Image6,
        altText: 'Hardware and Networking illustration',
      },
    ],
    features: {
      description:
        'Hardware and networking careers offer a range of opportunities for those interested in design, development, installation, and maintenance of computer hardware and networks.',
      items: [
        {
          title: 'Network Engineer',
          description:
            'Designing and maintaining computer networks and systems',
          icon: Monitor,
        },
        {
          title: 'Network Administrator',
          description:
            'Managing and administering computer networks and systems',
          icon: Monitor,
        },
        {
          title: 'Network Security Analyst',
          description: 'Analyzing and securing computer networks and systems',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Hardware & Networking Careers',
      description:
        'Hardware and networking sectors offer diverse, rewarding careers with strong growth:',
      items: [
        {
          title: 'Network Engineer',
          jobDescription: 'Network Engineer',
          imageSrc: Image5,
          altText: 'Network Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Network Administrator',
          jobDescription: 'Network Administrator',
          imageSrc: Image4,
          altText: 'Network Administrator illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Network Security Analyst',
          jobDescription: 'Network Security Analyst',
          imageSrc: Image3,
          altText: 'Network Security Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Hardware Engineer',
          jobDescription: 'Hardware Engineer',
          imageSrc: Image2,
          altText: 'Hardware Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Hardware Technician',
          jobDescription: 'Hardware Technician',
          imageSrc: Image1,
          altText: 'Hardware Technician illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Availation & Airlines',
    slug: 'aviation',
    sections: [
      {
        title: 'Aviation Careers with ProficientNow',
        description:
          'Connecting talented professionals with rewarding careers in aviation. We bridge the gap between industry needs and qualified candidates through innovative recruitment solutions.',
        imageSrc: Aviation1,
        altText: 'Aviation careers illustration',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Aviation Industry Overview',
        description:
          'The aviation industry is a dynamic and expanding sector, offering a wide range of career opportunities. From pilots and air traffic controllers to aerospace engineers and ground staff, the aviation industry provides exciting and challenging careers for those interested in technology, travel, and logistics.',
        imageSrc: Aviation2,
        altText: 'Aviation illustration',
      },
    ],
    features: {
      description:
        'Aviation careers offer a diverse range of opportunities for those interested in aviation, technology, travel, and logistics.',
      items: [
        {
          title: 'Aviation Pilot',
          description: 'Flying planes and airplanes for passengers and cargo',
          icon: Monitor,
        },
        {
          title: 'Aviation Ground Staff',
          description: 'Operating and maintaining aviation equipment',
          icon: Monitor,
        },
        {
          title: 'Aviation Engineer',
          description: 'Designing and maintaining aviation systems',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Aviation Careers',
      description:
        'Aviation sectors offer diverse, rewarding careers with strong growth:',
      items: [
        {
          title: 'Aviation Pilot',
          jobDescription: 'Aviation Pilot',
          imageSrc: Aviation3,
          altText: 'Aviation Pilot illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Aviation Ground Staff',
          jobDescription: 'Aviation Ground Staff',
          imageSrc: Aviation4,
          altText: 'Aviation Ground Staff illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Aviation Engineer',
          jobDescription: 'Aviation Engineer',
          imageSrc: Aviation5,
          altText: 'Aviation Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Aviation Flight Attendant',
          jobDescription: 'Aviation Flight Attendant',
          imageSrc: Aviation6,
          altText: 'Aviation Flight Attendant illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Aviation Operations Manager',
          jobDescription: 'Aviation Operations Manager',
          imageSrc: Aviation7,
          altText: 'Aviation Operations Manager illustration',
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
        imageSrc: Construction1,
        altText: 'Construction careers illustration',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Construction Industry Overview',
        description:
          'The construction industry is a significant contributor to the global economy. With the growing demand for infrastructure development, housing, and commercial buildings, the construction industry is expected to grow at a steady pace. ProficientNow is a trusted partner for construction companies looking to hire top talent to fill a range of roles, from construction managers to engineers and skilled laborers.',
        imageSrc: Construction2,
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
          imageSrc: Construction3,
          altText: 'Construction Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Engineer',
          jobDescription: 'Construction Engineer',
          imageSrc: Construction4,
          altText: 'Construction Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Laborer',
          jobDescription: 'Construction Laborer',
          imageSrc: Construction5,
          altText: 'Construction Laborer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Superintendent',
          jobDescription: 'Construction Superintendent',
          imageSrc: Construction6,
          altText: 'Construction Superintendent illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Supervisor',
          jobDescription: 'Construction Supervisor',
          imageSrc: Construction7,
          altText: 'Construction Supervisor illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
  {
    id: 6,
    title: 'Hospitality',
    slug: 'hospitality',
    sections: [
      {
        title: 'Hospitality Careers with ProficientNow',
        description:
          'Connecting skilled professionals with exciting opportunities in the hospitality industry. We help businesses find exceptional talent through innovative and tailored recruitment solutions.',
        imageSrc: Hospitality1,
        altText: 'Hospitality careers illustration',
        buttonText: 'Contact Us',
        buttonLink: '/contact',
      },
      {
        title: 'Hospitality Industry Overview',
        description:
          'The hospitality industry is a vital part of the global economy, encompassing hotels, restaurants, travel, and tourism. With increasing demand for exceptional guest experiences, this sector offers vast career opportunities. ProficientNow partners with leading hospitality brands to recruit top-tier talent in management, culinary, customer service, and operations roles.',
        imageSrc: Hospitality2,
        altText: 'Hospitality industry illustration',
      },
    ],
    features: {
      description:
        'Hospitality careers provide dynamic and rewarding paths for those passionate about service, travel, and guest experience.',
      items: [
        {
          title: 'Hotel Manager',
          description:
            'Overseeing hotel operations and ensuring guest satisfaction',
          icon: Monitor,
        },
        {
          title: 'Executive Chef',
          description:
            'Leading kitchen staff and curating top-tier dining experiences',
          icon: Monitor,
        },
        {
          title: 'Front Desk Agent',
          description:
            'Providing welcoming and efficient check-in and guest services',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Hospitality Careers',
      description:
        'The hospitality sector offers a wide variety of fulfilling careers with strong long-term prospects:',
      items: [
        {
          title: 'Hotel Manager',
          jobDescription: 'Hotel Manager',
          imageSrc: Hospitality3,
          altText: 'Hotel Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Executive Chef',
          jobDescription: 'Executive Chef',
          imageSrc: Hospitality4,
          altText: 'Executive Chef illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Spa & Wellness Expert',
          jobDescription: 'Spa & Wellness Expert',
          imageSrc: Hospitality5,
          altText: 'Spa & Wellness Expert illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Event Coordinator',
          jobDescription: 'Event Coordinator',
          imageSrc: Hospitality6,
          altText: 'Event Coordinator illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Housekeeping Supervisor',
          jobDescription: 'Housekeeping Supervisor',
          imageSrc: Hospitality7,
          altText: 'Housekeeping Supervisor illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  }
  
];
