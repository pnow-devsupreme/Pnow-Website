import { FlaskConical, Hospital, Monitor, Pill } from 'lucide-react';
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

// Complete job data with hero + industry overview sections
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
          imageSrc: Healthcare3,
          altText: 'Laboratory Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/frontend-developer',
        },
        {
          title: 'Laboratory Technician',
          imageSrc: Healthcare2,
          altText: 'Laboratory Technician',
          buttonText: 'Explore Role',
          buttonLink: '/careers/ui-ux-designer',
        },
        {
          title: 'Medical Sales Representative',
          imageSrc: Healthcare1,
          altText: 'Medical Sales Representative',
          buttonText: 'Explore Role',
          buttonLink: '/careers/full-stack-engineer',
        },
        {
          title: 'Chemist',
          imageSrc: Healthcare3,
          altText: 'Chemist',
          buttonText: 'Explore Role',
          buttonLink: '/careers/product-manager',
        },
        {
          title: 'Clinical Research Scientist',
          imageSrc: Healthcare2,
          altText: 'Clinical Research Scientist',
          buttonText: 'Explore Role',
          buttonLink: '/careers/software-architect',
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Backend Engineer',
    slug: 'backend-engineer',
    sections: [
      {
        title: 'Scale Our Backend Infrastructure',
        description:
          "Architect and build robust microservices and APIs that power ProficientNow's platform.",
        imageSrc: HeroImage3,
        altText: 'Illustration of backend engineering',
        buttonText: 'Apply Now',
        buttonLink: 'https://yourcompany.com/careers/backend-engineer',
      },
      {
        title: 'Cloud & Infrastructure Industry Overview',
        description:
          'In the Cloud and Infrastructure industries, professionals work to build and maintain the backbone of modern digital services. From backend engineers developing scalable APIs to DevOps specialists managing cloud resources, the sector focuses on reliability and performance.',
        imageSrc: HeroImage4,
        altText: 'Cloud infrastructure overview illustration',
      },
    ],
    features: {
      description:
        'Technology companies rely on backend engineers, database specialists, and infrastructure professionals to ensure their systems are secure, scalable, and performant. These roles offer excellent career opportunities for those passionate about building robust technical foundations.',
      items: [
        {
          title: 'API Development',
          description:
            'Building secure and scalable APIs for modern applications',
          icon: Hospital,
        },
        {
          title: 'Database Management',
          description:
            'Designing and optimizing database systems for performance',
          icon: Monitor,
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Managing and scaling cloud-based systems and services',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Backend & Infrastructure Careers',
      description:
        'Backend and infrastructure sectors offer technical, high-impact careers with excellent growth:',
      items: [
        {
          title: 'Backend Developer',
          imageSrc: HeroImage1,
          altText: 'Backend Developer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/backend-developer',
        },
        {
          title: 'Database Administrator',
          imageSrc: HeroImage2,
          altText: 'Database Administrator illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/database-administrator',
        },
        {
          title: 'Cloud Engineer',
          imageSrc: HeroImage3,
          altText: 'Cloud Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/cloud-engineer',
        },
        {
          title: 'Systems Architect',
          imageSrc: HeroImage4,
          altText: 'Systems Architect illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/systems-architect',
        },
        {
          title: 'Site Reliability Engineer',
          imageSrc: HeroImage1,
          altText: 'Site Reliability Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/site-reliability-engineer',
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Product Designer',
    slug: 'product-designer',
    sections: [
      {
        title: 'Design Our User Experience',
        description: `Craft intuitive interfaces and design systems to enhance ProficientNow's user experience.`,
        imageSrc: HeroImage1,
        altText: 'Illustration of product design',
        buttonText: 'Apply Now',
        buttonLink: 'https://yourcompany.com/careers/product-designer',
      },
      {
        title: 'Design & Creative Industry Overview',
        description:
          'In the Design and Creative industries, professionals work to create compelling visual experiences and user-centered solutions. From product designers crafting intuitive interfaces to UX researchers understanding user behavior, the sector combines creativity with strategic thinking.',
        imageSrc: HeroImage2,
        altText: 'Design industry overview illustration',
      },
    ],
    features: {
      description:
        'Creative companies employ designers, researchers, and creative directors to develop engaging digital experiences and brand identities. These industries offer inspiring career opportunities for those passionate about visual communication and user experience design.',
      items: [
        {
          title: 'User Experience Design',
          description:
            'Creating intuitive and engaging user interfaces for digital products',
          icon: Monitor,
        },
        {
          title: 'Design Systems',
          description:
            'Building scalable design frameworks and component libraries',
          icon: Monitor,
        },
        {
          title: 'User Research',
          description:
            'Understanding user needs through research and testing methodologies',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Design & Creative Careers',
      description:
        'Design and creative sectors offer innovative, visually-focused careers with strong demand:',
      items: [
        {
          title: 'Product Designer',
          imageSrc: HeroImage1,
          altText: 'Product Designer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/product-designer',
        },
        {
          title: 'UX Researcher',
          imageSrc: HeroImage2,
          altText: 'UX Researcher illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/ux-researcher',
        },
        {
          title: 'Visual Designer',
          imageSrc: HeroImage3,
          altText: 'Visual Designer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/visual-designer',
        },
        {
          title: 'Creative Director',
          imageSrc: HeroImage4,
          altText: 'Creative Director illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/creative-director',
        },
        {
          title: 'Interaction Designer',
          imageSrc: HeroImage1,
          altText: 'Interaction Designer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/interaction-designer',
        },
      ],
    },
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    slug: 'devops-engineer',
    sections: [
      {
        title: 'Optimize Our Infrastructure',
        description:
          'Streamline our DevOps processes and optimize our cloud infrastructure for maximum efficiency.',
        imageSrc: HeroImage4,
        altText: 'Illustration of DevOps engineering',
        buttonText: 'Apply Now',
        buttonLink: 'https://yourcompany.com/careers/devops-engineer',
      },
      {
        title: 'DevOps & Cloud Operations Overview',
        description:
          'In the DevOps and Cloud Operations field, professionals work to bridge development and operations, ensuring smooth deployment and maintenance of software systems. From automation engineers streamlining workflows to cloud specialists managing infrastructure, the sector focuses on efficiency and reliability.',
        imageSrc: HeroImage3,
        altText: 'DevOps operations overview illustration',
      },
    ],
    features: {
      description:
        'Modern technology companies depend on DevOps engineers, cloud architects, and automation specialists to deliver reliable, scalable solutions. These roles offer excellent opportunities for those passionate about operational excellence and infrastructure optimization.',
      items: [
        {
          title: 'Infrastructure Automation',
          description:
            'Automating deployment processes and infrastructure management',
          icon: Monitor,
        },
        {
          title: 'Continuous Integration',
          description:
            'Building and maintaining CI/CD pipelines for seamless deployments',
          icon: Monitor,
        },
        {
          title: 'Cloud Management',
          description:
            'Managing and optimizing cloud resources for cost and performance',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top DevOps & Infrastructure Careers',
      description:
        'DevOps and infrastructure sectors offer technical, automation-focused careers with high demand:',
      items: [
        {
          title: 'DevOps Engineer',
          imageSrc: HeroImage1,
          altText: 'DevOps Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/devops-engineer',
        },
        {
          title: 'Cloud Architect',
          imageSrc: HeroImage2,
          altText: 'Cloud Architect illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/cloud-architect',
        },
        {
          title: 'Infrastructure Engineer',
          imageSrc: HeroImage3,
          altText: 'Infrastructure Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/infrastructure-engineer',
        },
        {
          title: 'Automation Specialist',
          imageSrc: HeroImage4,
          altText: 'Automation Specialist illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/automation-specialist',
        },
        {
          title: 'Platform Engineer',
          imageSrc: HeroImage1,
          altText: 'Platform Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/platform-engineer',
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Content Strategist',
    slug: 'content-strategist',
    sections: [
      {
        title: 'Boost Our Content Strategy',
        description:
          'Develop and maintain high-quality content that engages our audience and drives business growth.',
        imageSrc: HeroImage2,
        altText: 'Illustration of content strategy',
        buttonText: 'Apply Now',
        buttonLink: 'https://yourcompany.com/careers/content-strategist',
      },
      {
        title: 'Marketing & Content Industry Overview',
        description:
          'In the Marketing and Content industries, professionals work to create compelling narratives and strategic communications that connect brands with their audiences. From content strategists developing editorial calendars to SEO specialists optimizing for search, the sector combines creativity with data-driven insights.',
        imageSrc: HeroImage1,
        altText: 'Marketing and content overview illustration',
      },
    ],
    features: {
      description:
        'Marketing and content companies employ strategists, writers, and digital marketers to build brand awareness and drive engagement. These industries offer dynamic career opportunities for those passionate about storytelling and audience connection.',
      items: [
        {
          title: 'Content Creation',
          description:
            'Developing engaging written and visual content across multiple channels',
          icon: Monitor,
        },
        {
          title: 'SEO Optimization',
          description:
            'Optimizing content for search engines and organic discovery',
          icon: Monitor,
        },
        {
          title: 'Performance Analytics',
          description:
            'Measuring and analyzing content performance to drive strategy',
          icon: Monitor,
        },
      ],
    },
    careersSection: {
      title: 'Top Marketing & Content Careers',
      description:
        'Marketing and content sectors offer creative, strategy-focused careers with strong growth potential:',
      items: [
        {
          title: 'Content Strategist',
          imageSrc: HeroImage1,
          altText: 'Content Strategist illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/content-strategist',
        },
        {
          title: 'SEO Specialist',
          imageSrc: HeroImage2,
          altText: 'SEO Specialist illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/seo-specialist',
        },
        {
          title: 'Digital Marketing Manager',
          imageSrc: HeroImage3,
          altText: 'Digital Marketing Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/digital-marketing-manager',
        },
        {
          title: 'Content Writer',
          imageSrc: HeroImage4,
          altText: 'Content Writer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/content-writer',
        },
        {
          title: 'Marketing Analyst',
          imageSrc: HeroImage1,
          altText: 'Marketing Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/marketing-analyst',
        },
      ],
    },
  },
];
