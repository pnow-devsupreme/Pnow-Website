import { EmploymentPageData } from '@/app/components/employer/data/employerData';

export const employeesData: Record<string, EmploymentPageData> = {
  'permanent-employees': {
    servicesSection: {
      title: 'Permanent',
      subtitle: 'Employees',
      description:
        'We specialize in finding top-tier permanent employees who will become long-term assets to your organization. Our rigorous screening process ensures cultural fit and technical excellence.',
      additionalInfo:
        'Our permanent placement services include comprehensive background checks, skills assessments, and cultural fit evaluations to ensure successful long-term employment relationships.',
    },
    gridSection: {
      headerText: 'PERMANENT EMPLOYMENT SOLUTIONS',
      categories: [
        {
          id: 1,
          title: 'Senior Software Engineers',
          image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Senior Full Stack Developer',
          location: '(Full-time - Remote/Hybrid)',
          qualifications:
            "Bachelor's degree in Computer Science, 5+ years experience in full-stack development with React, Node.js, and cloud technologies.",
          responsibilities: [
            { text: 'Design and develop scalable web applications' },
            { text: 'Lead technical architecture decisions' },
            { text: 'Mentor junior developers and conduct code reviews' },
            { text: 'Collaborate with product teams on feature development' },
            { text: 'Optimize application performance and security' },
          ],
        },
        {
          id: 2,
          title: 'Marketing Specialists',
          image:
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Digital Marketing Manager',
          location: '(Full-time - On-site)',
          qualifications:
            "Bachelor's degree in Marketing, 3+ years in digital marketing with proven ROI track record.",
          responsibilities: [
            { text: 'Develop comprehensive digital marketing strategies' },
            { text: 'Manage multi-channel marketing campaigns' },
            { text: 'Analyze performance metrics and optimize campaigns' },
            { text: 'Lead social media and content marketing initiatives' },
            { text: 'Collaborate with sales teams on lead generation' },
          ],
        },
        {
          id: 3,
          title: 'Business Analysts',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Senior Business Analyst',
          location: '(Full-time - Hybrid)',
          qualifications:
            "Bachelor's degree in Business or related field, 4+ years experience in business analysis and process improvement.",
          responsibilities: [
            { text: 'Analyze business processes and identify improvements' },
            { text: 'Gather and document business requirements' },
            { text: 'Create detailed functional specifications' },
            { text: 'Collaborate with stakeholders and development teams' },
            { text: 'Support testing and implementation phases' },
          ],
        },
      ],
    },
  },

  'contract-freelancers': {
    servicesSection: {
      title: 'Contract &',
      subtitle: 'Freelancers',
      description:
        'Access skilled contract workers and freelancers for project-based work, seasonal demands, or specialized expertise. Flexible engagement models to meet your business needs.',
      additionalInfo:
        'Our contract and freelance network includes vetted professionals across various industries, offering flexibility in project duration and skill requirements with competitive rates.',
    },
    gridSection: {
      headerText: 'CONTRACT & FREELANCE SOLUTIONS',
      categories: [
        {
          id: 1,
          title: 'Project Managers',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Technical Project Manager',
          location: '(Contract - 3-12 months)',
          qualifications:
            'PMP certification preferred, 5+ years managing technology projects with Agile methodologies.',
          responsibilities: [
            { text: 'Lead cross-functional project teams' },
            { text: 'Manage project timelines and deliverables' },
            { text: 'Coordinate with stakeholders and clients' },
            { text: 'Implement project management best practices' },
            { text: 'Ensure quality delivery within budget constraints' },
          ],
        },
        {
          id: 2,
          title: 'Specialized Consultants',
          image:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Cloud Solutions Architect',
          location: '(Contract - 6 months)',
          qualifications:
            'Advanced certifications in AWS/Azure/GCP, 7+ years in cloud architecture and migration projects.',
          responsibilities: [
            { text: 'Design cloud infrastructure solutions' },
            { text: 'Lead cloud migration initiatives' },
            { text: 'Provide technical guidance and best practices' },
            { text: 'Optimize cloud costs and performance' },
            { text: 'Train internal teams on cloud technologies' },
          ],
        },
        {
          id: 3,
          title: 'Creative Designers',
          image:
            'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'UI/UX Designer',
          location: '(Freelance - Project-based)',
          qualifications:
            'Portfolio demonstrating strong design skills, proficiency in Figma, Adobe Creative Suite, 3+ years experience.',
          responsibilities: [
            { text: 'Create user-centered design solutions' },
            { text: 'Develop wireframes and interactive prototypes' },
            { text: 'Conduct user research and usability testing' },
            { text: 'Collaborate with development teams' },
            { text: 'Maintain design systems and guidelines' },
          ],
        },
      ],
    },
  },

  'remote-workers': {
    servicesSection: {
      title: 'Remote',
      subtitle: 'Workers',
      description:
        'Connect with talented remote professionals from around the globe. Our remote workforce solutions provide access to diverse talent pools with proven remote work capabilities.',
      additionalInfo:
        'We specialize in remote work arrangements with established communication protocols, productivity tracking, and cultural integration support for seamless remote team collaboration.',
    },
    gridSection: {
      headerText: 'REMOTE WORKFORCE SOLUTIONS',
      categories: [
        {
          id: 1,
          title: 'Global Developers',
          image:
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Remote Frontend Developer',
          location: '(Remote - Global)',
          qualifications:
            "Bachelor's degree in relevant field, 3+ years remote work experience, proficiency in modern frontend frameworks.",
          responsibilities: [
            { text: 'Develop responsive web applications remotely' },
            { text: 'Participate in daily standups and sprint planning' },
            { text: 'Collaborate with distributed team members' },
            { text: 'Maintain high code quality in remote environment' },
            { text: 'Communicate effectively across time zones' },
          ],
        },
        {
          id: 2,
          title: 'Virtual Assistants',
          image:
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Executive Virtual Assistant',
          location: '(Remote - Flexible Hours)',
          qualifications:
            'Proven experience in executive support, excellent communication skills, proficiency in digital collaboration tools.',
          responsibilities: [
            { text: 'Manage executive calendars and scheduling' },
            { text: 'Handle email correspondence and communications' },
            { text: 'Coordinate virtual meetings and events' },
            { text: 'Provide administrative support remotely' },
            { text: 'Maintain confidentiality and professionalism' },
          ],
        },
        {
          id: 3,
          title: 'Content Writers',
          image:
            'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Technical Content Writer',
          location: '(Remote - Worldwide)',
          qualifications:
            'Strong writing portfolio, experience in technical documentation, SEO knowledge, excellent English proficiency.',
          responsibilities: [
            { text: 'Create engaging technical content and documentation' },
            { text: 'Research and write industry-specific articles' },
            { text: 'Optimize content for search engines' },
            { text: 'Collaborate with marketing and product teams' },
            { text: 'Maintain content calendars and deadlines' },
          ],
        },
      ],
    },
  },

  msp: {
    servicesSection: {
      title: 'Managed Service',
      subtitle: 'Provider (MSP)',
      description:
        'Comprehensive workforce management solutions through our MSP services. We handle the entire talent lifecycle from sourcing to onboarding, allowing you to focus on core business operations.',
      additionalInfo:
        'Our MSP solutions provide cost optimization, compliance management, and streamlined vendor relationships while maintaining quality and reducing administrative overhead.',
    },
    gridSection: {
      headerText: 'MSP SOLUTIONS',
      categories: [
        {
          id: 1,
          title: 'IT Support Specialists',
          image:
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'IT Support Specialist',
          location: '(MSP - Various Locations)',
          qualifications:
            "Bachelor's degree in IT or relevant certifications, 2+ years in technical support with strong problem-solving skills.",
          responsibilities: [
            { text: 'Provide technical support to end users' },
            { text: 'Troubleshoot hardware and software issues' },
            { text: 'Maintain IT infrastructure and systems' },
            { text: 'Document support procedures and solutions' },
            { text: 'Escalate complex issues to senior technicians' },
          ],
        },
        {
          id: 2,
          title: 'Network Engineers',
          image:
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Network Infrastructure Engineer',
          location: '(MSP - Client Sites)',
          qualifications:
            'Network certifications (CCNA/CCNP), 4+ years experience in network design and implementation.',
          responsibilities: [
            { text: 'Design and implement network solutions' },
            { text: 'Monitor network performance and security' },
            { text: 'Configure routers, switches, and firewalls' },
            { text: 'Troubleshoot network connectivity issues' },
            { text: 'Maintain network documentation and diagrams' },
          ],
        },
      ],
    },
  },

  'executive-talent': {
    servicesSection: {
      title: 'Executive',
      subtitle: 'Talent Pool',
      description:
        'Access to senior-level executives and C-suite professionals who can drive strategic initiatives and organizational transformation. Our executive search process is thorough and confidential.',
      additionalInfo:
        'We specialize in executive placements across industries, focusing on leadership capability, cultural alignment, and strategic vision to ensure successful long-term partnerships.',
    },
    gridSection: {
      headerText: 'EXECUTIVE TALENT SOLUTIONS',
      categories: [
        {
          id: 1,
          title: 'C-Suite Executives',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Chief Technology Officer',
          location: '(Executive Level - Global)',
          qualifications:
            'Advanced degree in Technology or Business, 15+ years of progressive leadership experience, proven track record in digital transformation.',
          responsibilities: [
            { text: 'Define and execute technology strategy and vision' },
            { text: 'Lead digital transformation initiatives' },
            { text: 'Build and manage high-performing technology teams' },
            { text: 'Drive innovation and competitive advantage' },
            { text: 'Oversee technology investments and partnerships' },
          ],
        },
        {
          id: 2,
          title: 'Senior Directors',
          image:
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Director of Operations',
          location: '(Executive Level - Various)',
          qualifications:
            'MBA or equivalent, 10+ years in operations management, experience in process optimization and team leadership.',
          responsibilities: [
            { text: 'Oversee daily operational activities' },
            { text: 'Implement operational strategies and improvements' },
            { text: 'Manage cross-functional teams and budgets' },
            { text: 'Ensure compliance with industry standards' },
            { text: 'Drive operational excellence initiatives' },
          ],
        },
      ],
    },
  },

  'professional-talent': {
    servicesSection: {
      title: 'Professional',
      subtitle: 'Talent Pool',
      description:
        'Skilled professionals across various industries and specializations. Our professional talent pool includes experienced individuals ready to contribute immediately to your organization.',
      additionalInfo:
        'We maintain relationships with professionals at all career levels, ensuring access to the right talent when you need it, with expertise spanning multiple industries and functions.',
    },
    gridSection: {
      headerText: 'PROFESSIONAL TALENT SOLUTIONS',
      categories: [
        {
          id: 1,
          title: 'Laboratory Analysts',
          image:
            'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Laboratory Analyst',
          location: '(Across USA)',
          qualifications:
            "Bachelor's degree in Chemistry or Biology, laboratory techniques and equipment proficiency, attention to detail.",
          responsibilities: [
            { text: 'Conduct analytical tests using laboratory equipment' },
            { text: 'Record data, analyze results, and prepare reports' },
            { text: 'Follow safety protocols and quality standards' },
            { text: 'Maintain equipment and inventory' },
            { text: 'Collaborate with team to meet research objectives' },
          ],
        },
        {
          id: 2,
          title: 'Financial Analysts',
          image:
            'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Senior Financial Analyst',
          location: '(Various Locations)',
          qualifications:
            "Bachelor's degree in Finance or Accounting, CFA preferred, 3+ years of financial analysis experience.",
          responsibilities: [
            { text: 'Perform financial modeling and analysis' },
            { text: 'Prepare detailed financial reports and presentations' },
            { text: 'Support budgeting and forecasting processes' },
            { text: 'Analyze market trends and investment opportunities' },
            { text: 'Provide insights for strategic decision making' },
          ],
        },
        {
          id: 3,
          title: 'Healthcare Professionals',
          image:
            'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=250&fit=crop&crop=faces',
          jobTitle: 'Registered Nurse',
          location: '(Healthcare Facilities)',
          qualifications:
            'RN license, BSN preferred, 2+ years clinical experience, strong patient care skills.',
          responsibilities: [
            { text: 'Provide direct patient care and support' },
            { text: 'Administer medications and treatments' },
            { text: 'Monitor patient conditions and vital signs' },
            { text: 'Collaborate with healthcare team members' },
            { text: 'Maintain accurate patient records' },
          ],
        },
      ],
    },
  },
};

export const defaultEmployeesData: EmploymentPageData = {
  servicesSection: {
    title: 'Employers',
    subtitle: 'Services',
    description:
      "ProficientNow specializes in sourcing outstanding talent pools for various industries and businesses, placing them in the right positions. Whether you require permanent hires, contract employees, freelancers, temporary staff, remote workers, or executive talent searches, we're your preferred partner.",
    additionalInfo:
      'Additionally, ProficientNow provides workforce management services through recruitment process outsourcing (RPO) methods, ensuring seamless talent onboarding with minimal operational interference.',
  },
  gridSection: {
    headerText: 'WHAT WE PROVIDE',
    categories: [
      {
        id: 1,
        title: 'Permanent Employees',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&crop=faces',
        jobTitle: 'Senior Software Engineer',
        location: '(Remote - USA)',
        qualifications:
          "Bachelor's degree in Computer Science or related field. 5+ years of software development experience.",
        responsibilities: [
          { text: 'Design and develop scalable software solutions' },
          { text: 'Collaborate with cross-functional teams' },
          { text: 'Mentor junior developers and code reviews' },
          { text: 'Participate in architectural decisions' },
          { text: 'Ensure code quality and best practices' },
        ],
      },
      {
        id: 2,
        title: 'Contractual / Freelancers',
        image:
          'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=faces',
        jobTitle: 'Project Manager',
        location: '(Contract - 6 months)',
        qualifications:
          'PMP certification preferred. 3+ years of project management experience in technology sector.',
        responsibilities: [
          { text: 'Lead project planning and execution' },
          { text: 'Coordinate with stakeholders and teams' },
          { text: 'Monitor project progress and deliverables' },
          { text: 'Manage project risks and issues' },
          { text: 'Ensure projects are delivered on time and budget' },
        ],
      },
      {
        id: 3,
        title: 'Remotely Working Employees',
        image:
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop&crop=faces',
        jobTitle: 'Digital Marketing Specialist',
        location: '(Remote - Global)',
        qualifications:
          "Bachelor's degree in Marketing or related field. Experience with digital marketing tools and analytics.",
        responsibilities: [
          { text: 'Develop and execute digital marketing campaigns' },
          { text: 'Analyze campaign performance and ROI' },
          { text: 'Manage social media presence and content' },
          { text: 'Collaborate with design and content teams' },
          { text: 'Stay updated with latest marketing trends' },
        ],
      },
      {
        id: 4,
        title: 'MSP',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=250&fit=crop&crop=faces',
        jobTitle: 'IT Consultant',
        location: '(On-site - Various)',
        qualifications:
          "Bachelor's degree in Information Technology. Relevant certifications in cloud technologies.",
        responsibilities: [
          { text: 'Provide technical consultation to clients' },
          { text: 'Assess and recommend IT solutions' },
          { text: 'Implement and configure systems' },
          { text: 'Provide ongoing support and maintenance' },
          { text: 'Document processes and procedures' },
        ],
      },
      {
        id: 5,
        title: 'Executive Talent Pool',
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=faces',
        jobTitle: 'Chief Technology Officer',
        location: '(Executive Level)',
        qualifications:
          'Advanced degree in Technology or Business. 10+ years of executive leadership experience.',
        responsibilities: [
          { text: 'Define technology strategy and vision' },
          { text: 'Lead technology teams and initiatives' },
          { text: 'Drive digital transformation efforts' },
          { text: 'Build strategic partnerships' },
          { text: 'Oversee technology budget and investments' },
        ],
      },
      {
        id: 6,
        title: 'Professional Talent Pool',
        image:
          'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&crop=faces',
        jobTitle: 'Laboratory Analyst',
        location: '(Across USA)',
        qualifications:
          "Bachelor's degree in Chemistry or Biology. Laboratory techniques and equipment proficiency.",
        responsibilities: [
          { text: 'Conduct analytical tests using laboratory equipment' },
          { text: 'Record data, analyze results, and prepare reports' },
          { text: 'Follow safety protocols and quality standards' },
          { text: 'Maintain equipment and inventory' },
          { text: 'Collaborate with team to meet research objectives' },
        ],
      },
    ],
  },
};
