import {
  Antenna,
  Coins,
  Construction,
  FlaskConical,
  Hammer,
  Hospital,
  Hotel,
  Landmark,
  Monitor,
  Network,
  PersonStanding,
  Pill,
  Plane,
  Spade,
  UmbrellaOff,
  Users,
  Wifi,
  Wrench,
} from 'lucide-react';
import { StaticImageData } from 'next/image';
import { ComponentType, SVGProps } from 'react';
import {drugImg, psychologistImg, chemist,pharma, forensic } from '~/healthCare';
import { finance, financeLeader, EWallet } from '~/accounting';
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
  qualifications: string[];
  responsibilities?: string[];
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
          qualifications: [
            "Bachelor's degree in Chemistry or Biology",
            'Proficiency in laboratory techniques and equipment',
          ],
          responsibilities: [
            'Conduct analytical tests using laboratory equipment',
            'Record data, analyze results, and prepare reports',
            'Maintain safety and quality standards',
            'Collaborate with team on research objectives',
          ],
          imageSrc: Healthcare3,
          altText: 'Laboratory Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers/frontend-developer',
        },
        {
          title: 'Laboratory Technician',
          qualifications: [
            'Associate degree or certification in Medical Laboratory Technology or a related field.',
            'Proficiency in laboratory procedures and techniques.',
          ],
          responsibilities: [
            'Prepare specimens and samples for analysis.',
            'Perform routine laboratory tests and experiments.',
            'Maintain laboratory equipment and supplies.',
            'Document and report test results accurately.',
            'Follow safety protocols and quality control procedures.',
          ],
          imageSrc: forensic,
          altText: 'Laboratory Technician',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Medical Sales Representative',
          qualifications: [
            'Bachelor’s degree in a relevant field (such as Biology or Marketing).',
            'Strong sales and communication skills',
          ],
          responsibilities: [
            'Promote and sell medical products to healthcare professionals',
            'Build and maintain relationships with clients and customers.',
            'Provide product information and conduct product demonstrations.',
            'Analyze market trends and develop sales strategies.',
          ],
          imageSrc: pharma,
          altText: 'Medical Sales Representative',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Pharmaceutical Manufacturer Technician',
          qualifications: [
            'Associate degree or certification in Pharmacy Technology or a related field.',
            'Experience in pharmaceutical manufacturing required.',
          ],
          responsibilities: [
            'Operate and maintain pharmaceutical manufacturing equipment.',
            'Follow standard operating procedures and safety protocols.',
            'Prepare and package pharmaceutical products.',
            'Monitor product quality and compliance with regulations.',
          ],
          imageSrc: drugImg,
          altText: 'Chemist',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Regulatory Specialist',
          qualifications: [
            'Bachelor’s degree in Regulatory Affairs or a related field.',
            'Strong knowledge of healthcare regulations and compliance standards.',
          ],
          responsibilities: [
            'Prepare and submit regulatory documents for product approvals.',
            'Monitor regulatory changes and ensure ongoing compliance.',
            'Review product labeling and advertising materials for compliance.',
            'Provide guidance and support to internal teams on regulatory requirements.',
          ],
          imageSrc: Healthcare2,
          altText: 'Regulatory Specialist',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Clinical Research Scientist',
          qualifications: [
            'Advanced degree (Master’s or Ph.D.) in a relevant scientific field.',
            'Experience in clinical research required',
          ],
          responsibilities: [
            'Design and implement clinical research studies.',
            'Collect, analyze, and interpret clinical data.',
            'Prepare study protocols, reports, and scientific publications.',
            'Ensure compliance with regulatory requirements and ethical standards.',
          ],
          imageSrc: pharma,
          altText: 'Clinical Research Scientist',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Chemist',
          qualifications: [
            'Bachelor’s degree or higher in Chemistry or a related field.',
            'Strong analytical and problem-solving skills.',
          ],
          responsibilities: [
            'Conduct chemical analyses and laboratory experiments.',
            'Develop and optimize chemical processes and formulations.',
            'Prepare study protocols, reports, and scientific publications.',
            'Maintain laboratory safety protocols and quality standards.',
          ],
          imageSrc: chemist,
          altText: 'Chemist',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Psychiatrist',
          qualifications: [
            'Medical degree (MD or DO) with specialization in Psychiatry.',
            'Board certification in Psychiatry required.',
          ],
          responsibilities: [
            'Diagnose and treat a wide range of mental health disorders.',
            'Conduct psychiatric evaluations and comprehensive assessments.',
            'Provide crisis intervention and support to patients and their families.',
            'Collaborate with multidisciplinary healthcare teams to coordinate patient care.',
          ],
          imageSrc: psychologistImg,
          altText: 'Chemist',
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
          qualifications: [
            "Bachelor’s degree in Accounting or Finance; CPA certification preferred.",
            ' Proficiency in accounting principles and financial regulations.',
          ],
          responsibilities: [
            'Maintain accurate and up-to-date financial records.',
            'Analyze financial data to ensure accuracy and regulatory compliance.',
            'Prepare, review, and file tax returns in a timely manner.',
            'Assist with budgeting, forecasting, and financial planning.',
            'Manage accounts payable and accounts receivable processes.',
          ],
          imageSrc: Accounting3,
          altText: 'Accountant illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Accounting Manager',
          qualifications: [
            "Bachelor’s degree in Accounting or Finance; CPA certification preferred.",
            'Proven experience in accounting leadership.',
          ],
          responsibilities: [
            'Oversee daily operations of the accounting department.',
            'Supervise accounting staff and ensure accuracy of financial records.',
            'Develop and implement accounting policies and internal procedures.',
            'Prepare and present financial reports to senior management.',
          ],
          imageSrc: finance,
          altText: 'Accounting Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Financial Analyst',
          qualifications: [
            "Bachelor’s degree in Finance, Accounting, Economics, or a related field.",
            'Strong analytical and communication skills.',
          ],
          responsibilities: [
            'Analyze financial data and trends to provide insights and recommendations.',
            'Conduct variance analysis to identify areas for improvement.',
            'Assist with financial planning, budgeting, and performance tracking.',
            'Prepare presentations and reports for management and stakeholders.',
          ],
          imageSrc: Accounting4,
          altText: 'Financial Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Accounting Clerk',
          qualifications: [
            'High school diploma or equivalent; some college coursework in accounting or a related field preferred.',
          ],
          responsibilities: [
            'Assist with accounts payable and accounts receivable processes.',
            'Maintain and update financial records accurately in databases.',
            'Prepare invoices, track payments, and process transactions.',
            'Support basic bookkeeping and administrative accounting tasks.',
          ],
          imageSrc: Accounting5,
          altText: 'Financial Planner illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Accounts Payable',
          qualifications: [
            'High school diploma or equivalent; some college coursework in accounting or a related field preferred.',
          ],
          responsibilities: [
            'Process vendor invoices with accuracy and attention to detail.',
            'Conduct variance analysis to identify areas for improvement.',
            'Assist with financial planning, budgeting, and performance tracking.',
            'Prepare presentations and reports for management and stakeholders.',
          ],
          imageSrc: Accounting5,
          altText: 'Accounts Payable illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Auditor',
          qualifications: [
            "Bachelor’s degree in Accounting, Finance, or a related field.",
            ' CPA or CIA certification preferred.',
          ],
          responsibilities: [
            'Conduct internal audits to evaluate financial processes and internal controls.',
            'Identify risks, inefficiencies, and recommend corrective actions.',
            'Prepare detailed audit reports and present findings to management.',
          ],
          imageSrc: Accounting6,
          altText: 'Auditor illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'CFO',
          qualifications: [
            " Master’s degree in Finance, Accounting, or Business Administration; CPA or CFA certification preferred.",
            'Extensive experience in financial leadership roles.',
          ],
          responsibilities: [
            'Develop and execute financial strategies aligned with company objectives.',
            'Oversee financial planning, budgeting, and forecasting processes.',
            'Provide strategic financial insights and recommendations to senior leadership.',
            'Oversee financial reporting and communicate performance to stakeholders.',
          ],
          imageSrc: EWallet,
          altText: 'Auditor illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Management Accounting',
          qualifications: [
            "Bachelor’s degree in Accounting, Finance, or a related field; CPA or CMA certification preferred",
          ],
          responsibilities: [
            'Analyze financial data to support informed decision-making.',
            'Prepare departmental and project-based budgets and forecasts.',
            'Monitor financial performance and report variances against budgets.',
            'Provide insights to enhance operational efficiency and profitability.',
          ],
          imageSrc: Accounting1,
          altText: 'Management Accountant illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Senior Accountant',
          qualifications: [
            "Bachelor’s degree in Accounting or Finance; CPA certification preferred.",
            'Several years of experience in accounting roles.'
          ],
          responsibilities: [
            'Prepare and review accurate financial statements and reports.',
            'Supervise, mentor, and support junior accounting staff.',
            'Assist with month-end and year-end closing activities.',
            'Conduct financial analysis and deliver actionable insights to management.',
          ],
          imageSrc: financeLeader,
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
          icon: Wifi,
        },
        {
          title: 'Network Administrator',
          description:
            'Managing and administering computer networks and systems',
          icon: Network,
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
          qualifications: [
            "Bachelor's degree in Computer Science, IT, or related field",
            'Strong knowledge of network infrastructure and protocols',
          ],
          responsibilities: [
            'Design, implement, and maintain computer networks',
            'Monitor network performance and troubleshoot issues',
            'Optimize network infrastructure for scalability and security',
          ],
          imageSrc: Image5,
          altText: 'Network Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Network Administrator',
          qualifications: [
            'Degree or certification in IT, Networking, or related field',
            'Experience with routers, switches, and firewalls',
          ],
          responsibilities: [
            'Manage day-to-day network operations',
            'Ensure security, availability, and performance of network systems',
            'Implement updates, patches, and backups',
          ],
          imageSrc: Image4,
          altText: 'Network Administrator illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Network Security Analyst',
          qualifications: [
            "Bachelor's degree in Cybersecurity, IT, or related field",
            'Knowledge of firewalls, VPNs, IDS/IPS, and encryption',
          ],
          responsibilities: [
            'Monitor network for security breaches or incidents',
            'Analyze security risks and implement mitigation strategies',
            'Ensure compliance with cybersecurity standards and policies',
          ],
          imageSrc: Image3,
          altText: 'Network Security Analyst illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Hardware Engineer',
          qualifications: [
            "Bachelor's degree in Electrical Engineering, Computer Engineering, or related field",
            'Strong understanding of circuit design and microprocessors',
          ],
          responsibilities: [
            'Design, test, and develop computer hardware components',
            'Collaborate with software teams for system integration',
            'Evaluate and improve hardware performance',
          ],
          imageSrc: Image2,
          altText: 'Hardware Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Hardware Technician',
          qualifications: [
            'Diploma or certification in hardware or computer technology',
            'Hands-on experience with hardware troubleshooting',
          ],
          responsibilities: [
            'Install, repair, and maintain computer hardware',
            'Diagnose and fix system hardware issues',
            'Assist users and IT teams with equipment support',
          ],
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
          icon: Plane,
        },
        {
          title: 'Aviation Ground Staff',
          description: 'Operating and maintaining aviation equipment',
          icon: Users,
        },
        {
          title: 'Aviation Engineer',
          description: 'Designing and maintaining aviation systems',
          icon: Antenna,
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
          qualifications: [
            'Commercial Pilot License (CPL) or Airline Transport Pilot License (ATPL)',
            'Extensive flight training and medical certification',
          ],
          responsibilities: [
            'Operate aircraft safely and according to flight plans',
            'Communicate with air traffic control and crew',
            'Conduct pre-flight and post-flight checks',
            'Ensure passenger safety during all flight phases',
          ],
          imageSrc: Aviation3,
          altText: 'Aviation Pilot illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Aviation Ground Staff',
          qualifications: [
            'High school diploma or relevant diploma in aviation services',
            'Customer service skills and airport operations knowledge',
          ],
          responsibilities: [
            'Assist passengers during check-in and boarding',
            'Handle luggage and cargo logistics',
            'Coordinate ground operations with flight crews',
          ],
          imageSrc: Aviation4,
          altText: 'Aviation Ground Staff illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Aviation Engineer',
          qualifications: [
            "Bachelor's degree in Aeronautical or Mechanical Engineering",
            'Certification from DGCA or EASA (as applicable)',
          ],
          responsibilities: [
            'Maintain and repair aircraft systems and components',
            'Conduct inspections and troubleshoot mechanical issues',
            'Ensure compliance with aviation safety standards',
          ],
          imageSrc: Aviation5,
          altText: 'Aviation Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Aviation Flight Attendant',
          qualifications: [
            'High school diploma or equivalent',
            'Cabin crew training and safety certification',
          ],
          responsibilities: [
            'Ensure passenger safety and comfort',
            'Demonstrate safety procedures before flight',
            'Serve meals, assist with seating, and respond to emergencies',
          ],
          imageSrc: Aviation6,
          altText: 'Aviation Flight Attendant illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Aviation Operations Manager',
          qualifications: [
            "Bachelor's degree in Aviation Management or related field",
            'Experience in airport or airline operations',
          ],
          responsibilities: [
            'Oversee day-to-day airport or airline operations',
            'Coordinate with departments to maintain safety and efficiency',
            'Manage staff schedules, budgets, and regulatory compliance',
          ],
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
          icon: Construction,
        },
        {
          title: 'Construction Engineer',
          description:
            'Designing, constructing, and overseeing construction projects',
          icon: Hammer,
        },
        {
          title: 'Construction Laborer',
          description:
            'Working on construction sites to build structures and infrastructure',
          icon: Wrench,
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
          qualifications: [
            "Bachelor's degree in Construction Management, Civil Engineering, or related field",
            'Strong project management and leadership skills',
          ],
          responsibilities: [
            'Plan, coordinate, and supervise construction projects',
            'Manage budgets, timelines, and subcontractors',
            'Ensure compliance with safety and building regulations',
          ],
          imageSrc: Construction3,
          altText: 'Construction Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Engineer',
          qualifications: [
            "Bachelor's degree in Civil, Structural, or Construction Engineering",
            'Knowledge of engineering principles and construction practices',
          ],
          responsibilities: [
            'Design and implement construction plans and systems',
            'Collaborate with architects and contractors',
            'Ensure structural integrity and project efficiency',
          ],
          imageSrc: Construction4,
          altText: 'Construction Engineer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Laborer',
          qualifications: [
            'High school diploma or equivalent',
            'Physical stamina and familiarity with construction tools',
          ],
          responsibilities: [
            'Perform physical tasks such as digging, loading, and assembling materials',
            'Operate basic machinery and follow instructions from supervisors',
            'Maintain a clean and safe job site',
          ],
          imageSrc: Construction5,
          altText: 'Construction Laborer illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Superintendent',
          qualifications: [
            'Experience in construction site supervision',
            "Bachelor's degree or equivalent field experience",
          ],
          responsibilities: [
            'Oversee field operations and supervise job site activities',
            'Coordinate with subcontractors and ensure adherence to schedule',
            'Enforce safety protocols and quality standards',
          ],
          imageSrc: Construction6,
          altText: 'Construction Superintendent illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Construction Supervisor',
          qualifications: [
            'Diploma or degree in construction-related field',
            'Strong leadership and time management skills',
          ],
          responsibilities: [
            'Monitor daily activities and assign tasks to laborers',
            'Ensure projects meet deadlines and safety regulations',
            'Liaise with clients, engineers, and senior managers',
          ],
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
          icon: Hotel,
        },
        {
          title: 'Executive Chef',
          description:
            'Leading kitchen staff and curating top-tier dining experiences',
          icon: Spade,
        },
        {
          title: 'Front Desk Agent',
          description:
            'Providing welcoming and efficient check-in and guest services',
          icon: PersonStanding,
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
          qualifications: [
            "Bachelor's degree in Hospitality Management or related field",
            'Strong leadership and customer service skills',
          ],
          responsibilities: [
            'Oversee daily hotel operations and staff performance',
            'Ensure guest satisfaction and handle complaints',
            'Manage budgets, occupancy, and revenue goals',
          ],
          imageSrc: Hospitality3,
          altText: 'Hotel Manager illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Executive Chef',
          qualifications: [
            'Culinary degree or equivalent experience',
            'Strong kitchen management and menu planning skills',
          ],
          responsibilities: [
            'Lead kitchen operations and supervise culinary staff',
            'Develop and execute creative menus',
            'Ensure food quality, safety, and presentation standards',
          ],
          imageSrc: Hospitality4,
          altText: 'Executive Chef illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Spa & Wellness Expert',
          qualifications: [
            'Certification in wellness, massage therapy, or spa services',
            'Knowledge of holistic treatments and client care',
          ],
          responsibilities: [
            'Provide spa treatments and wellness consultations',
            'Maintain cleanliness and relaxing ambiance',
            'Stay current on wellness trends and techniques',
          ],
          imageSrc: Hospitality5,
          altText: 'Spa & Wellness Expert illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Event Coordinator',
          qualifications: [
            "Bachelor's degree in Hospitality, Event Management, or related field",
            'Excellent organizational and communication skills',
          ],
          responsibilities: [
            'Plan, organize, and oversee events from start to finish',
            'Coordinate with vendors, clients, and internal teams',
            'Manage timelines, budgets, and event logistics',
          ],
          imageSrc: Hospitality6,
          altText: 'Event Coordinator illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
        {
          title: 'Housekeeping Supervisor',
          qualifications: [
            'Experience in housekeeping or hospitality operations',
            'Attention to detail and strong supervisory skills',
          ],
          responsibilities: [
            'Oversee housekeeping team and daily schedules',
            'Ensure cleanliness and hygiene standards are met',
            'Train staff and manage inventory of supplies',
          ],
          imageSrc: Hospitality7,
          altText: 'Housekeeping Supervisor illustration',
          buttonText: 'Explore Role',
          buttonLink: '/careers',
        },
      ],
    },
  },
];
