import PageWrapper from '@/components/PageWrapper/PageWrapper';
import Home from '@/features/Home/Home';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Index() {
  const data = [
    {
      country: 'The United Kingdom',
      studyIn: {
        description:
          'Welcome to the UK - a destination that hosts over 500,000 international students annually. Immerse yourself in pioneering universities, acquire skills sought by top global employers, and experience the culture that shaped the modern world. Join a diverse community of changemakers.',
        data: [
          {
            title: 'High-Quality Education',
            description:
              "The UK is home to some of the world's oldest and most prestigious universities, such as the University of Oxford and the University of Cambridge",
          },
          {
            title: 'Wide Range of Programs',
            description:
              'One can choose a degree in business, engineering, law, medicine, social sciences, and more based on interests and career aspirations in UK',
          },
          {
            title: 'Quality Education',
            description:
              'UK boasts Quality Assurance Agency (QAA), a national body established to ensure the highest teaching standards at institutions across the UK.',
          },
          {
            title: 'International Recognition',
            description:
              'UK degrees are recognized worldwide, which gives graduates a competitive advantage in the job market. UK has become the second most popular study destination after the US.',
          },
          {
            title: 'Cultural Diversity',
            description:
              'The UK is a diverse and multicultural society that allows international students to experience different cultures and lifestyles.',
          },
        ],
      },
      visaRequirements: {
        description:
          'Studying in the UK is an investment in your future. The following table provides an overview of student visa requirements:',
        data: [
          {
            title: 'Short-Term Study',
            requirements: [
              'Short-term students',
              'Up to 3 months prior to course start',
              'Up to 7 days before course start',
              'Enrollment proof, sufficient funds, valid passport',
            ],
          },
          {
            title: 'Student (General)',
            requirements: [
              'Postgraduates, researchers, student union officers',
              'Up to 6 months prior to course start',
              'Up to 6 months prior to course start',
              'Acceptance, funds, English proficiency, TB test (if needed), valid passport',
            ],
          },
          {
            title: 'Child Student',
            requirements: [
              'Children aged 4-17',
              'Up to 3 months prior to course start',
              'Up to 7 days before course start',
              'Acceptance, parental consent, funds, valid passport',
            ],
          },
        ],
      },
      intakes: {
        description:
          'Universities and colleges in the UK follow three sessions of intakes:',
        data: [
          {
            intake: 'January',
            admission: 'June-September',
          },
          {
            intake: 'September',
            admission: 'February-May',
          },
          {
            intake: 'May',
            admission: 'January-February',
          },
        ],
      },
      costOfStudy: {
        title: 'Cost of Studying in UK for Indian Students',
        description:
          'Studying in the UK involves various expenses. The table below provides an overview:',
        tableHeading: ['Degree', 'Cost in GBP (Per Year)'],
        tableBody: [
          {
            col1: 'Student Visa',
            col2: 'Standard Visa: £348 (~₹33,000) Short-Term Visa: £97 - £186 (~₹9,200 - ₹17,700) 11-Month Short-Term Visa: £186 (~₹17,700)',
          },
          {
            col1: 'Course Fees',
            col2: "Undergraduate (Bachelor's): £10,000 - £30,000 (₹9.5 Lacs - ₹28.5 Lacs) Postgraduate (Master's): £12,000 - £35,000 (₹11.4 Lacs - ₹33.3 Lacs) MBA: £15,000 - £60,000 (₹14.3 Lacs - ₹57 Lacs) PhD: £13,000 - £27,000 (₹12.4 Lacs - ₹25.7 Lacs)",
          },
        ],
      },
      livingExpenses: {
        title: 'UK Living Expenses for Indian Students',
        description:
          'Living expenses in the UK typically include accommodation, food, transportation, utilities, textbooks, health insurance, and personal expenses. The table below breaks down monthly costs:',
        tableHeading: [
          'Expenses',
          'Cost in GBP (Per Month)',
          'Cost in INR (Per Month)',
        ],
        tableBody: [
          {
            col1: 'Accommodation (shared)',
            col2: '£400 - £800',
            col3: '₹38,000 - ₹76,000',
          },
          {
            col1: 'Accommodation (private)',
            col2: '£400 - £800',
            col3: '₹57,000 - ₹1,42,500',
          },
          {
            col1: 'Food',
            col2: '$200 - $400',
            col3: '₹19,000 - ₹38,000',
          },
          {
            col1: 'Transportation',
            col2: '$50 - $100',
            col3: '₹4,750 - ₹9,500',
          },
          {
            col1: 'Utilities',
            col2: '$50 - $100',
            col3: '₹9,500 - ₹14,250',
          },
          {
            col1: 'Textbooks and study materials',
            col2: '£100 - £150',
            col3: '₹4,750 - ₹9,500',
          },
          {
            col1: 'Health Insurance',
            col2: '₹4,750 - ₹9,500',
            col3: '₹4,750 - ₹9,500',
          },
          {
            col1: 'Personal Expenses',
            col2: '£50 - £100',
            col3: '₹9,500 - ₹19,000',
          },
        ],
      },
      careerOpportunity: {
        title: 'Career Opportunities in UK for Indian Students',
        description:
          'Post-study work opportunities in the UK are significant for Indian students. The table below presents top job roles and corresponding salaries in GBP:',
        tableHeading: [
          'Job Profile',
          'Description & Opportunities',
          'Top Employers',
        ],
        tableBody: [
          {
            col1: 'Technology and Engineering',
            col2: 'Fast-growing tech sector with roles in software development, cybersecurity, etc. Engineering fields also in demand.',
            col3: 'Google, Microsoft, BAE Systems, Siemens, Rolls-Royce',
          },
          {
            col1: 'Healthcare',
            col2: 'Opportunities in nursing, pharmacy, general practice, and specialist medicine.',
            col3: 'NHS, GlaxoSmithKline, AstraZeneca, Bupa',
          },
          {
            col1: 'Business and Finance',
            col2: 'Banking, investment, marketing, and human resources opportunities in cities like London, Manchester, and Edinburgh.',
            col3: 'Barclays, HSBC, Deloitte, PwC, Ernst & Young',
          },
          {
            col1: 'Creative Industries',
            col2: 'Media, design, arts sectors with roles in film production, graphic design, etc.',
            col3: 'BBC, Universal Pictures, WPP, Saatchi & Saatchi',
          },
          {
            col1: 'Education',
            col2: 'Roles in teaching, research positions, administrative jobs, and educational technology.',
            col3: 'University of Oxford, University of Cambridge, Pearson Education, McGraw-Hill',
          },
          {
            col1: 'Other Emerging Sectors',
            col2: 'Growth in sustainability, renewable energy, biotechnology, and other niche sectors.',
            col3: 'Tesla, Johnson Matthey, Genzyme, Vestas Wind Systems',
          },
        ],
      },
      scholarships: {
        title: 'UK Scholarships for Indian Students',
        description:
          'The United Kingdom is known for its prestigious universities and quality education. Scholarships in the UK provide financial support to deserving students, making education more affordable. The table below outlines some key scholarships:',
        tableHeading: [
          'Name of Scholarship',
          'Description',
          'Eligibility',
          'Amount in GBP',
        ],
        tableBody: [
          {
            col1: 'UK Excellence Scholarship',
            col2: 'Merit-based for outstanding Indian students applying to UK universities.',
            col3: 'Academic excellence',
            col4: '£5,000 - £20,000',
          },
          {
            col1: 'Chevening Scholarship',
            col2: "Funded by the UK government, offering full financial support for a one-year Master's degree in any subject.",
            col3: 'Leadership qualities, academic excellence, work experience',
            col4: 'Full tuition fees, living expenses',
          },
          {
            col1: 'GREAT Scholarships',
            col2: 'Multiple scholarships offered by the British Council and UK universities, covering various disciplines and academic levels.',
            col3: 'Varies based on the specific scholarship program',
            col4: 'Varies based on the specific scholarship program',
          },
          {
            col1: 'Charles Wallace India Trust Scholarships',
            col2: 'Scholarships for Indian artists, researchers, and professionals to undertake short-term or long-term programs in the UK.',
            col3: 'Specific to arts, heritage conservation, humanities, social sciences, and more',
            col4: 'Varies based on program and duration',
          },
        ],
      },
      faqs: [
        {
          title: 'How much does it cost to study in the UK?',
          description:
            'Costs vary based on factors such as the chosen institution, location, lifestyle, and personal spending habits. Refer to the "Cost of Studying in the UK for Indian Students" section for details.',
        },
        {
          title: 'What are the student visa requirements for the UK?',
          description:
            'Requirements vary by visa type. Refer to the "Student Visa Requirements for the UK" section for a detailed breakdown.',
        },
        {
          title: 'When are the intakes in the UK?',
          description:
            'The main intake is in September, with additional opportunities to begin shorter courses in January and May. Refer to the "Intakes in the UK" section for details.',
        },
      ],
    },
    {
      country: 'USA',
      studyIn: {
        description:
          'Embark on a transformative academic journey in the United States, a global education hub that attracts students from around the world. Immerse yourself in diverse cultures, cutting-edge research, and a dynamic learning environment.',
        data: [
          {
            title: 'Top-Ranked Universities:',
            description:
              'The USA is home to prestigious institutions like Harvard, MIT, and Stanford, offering world-class education.',
          },
          {
            title: 'Extensive Program Choices:',
            description:
              'Choose from a vast array of programs, including STEM fields, humanities, business, and more, tailored to your career aspirations.',
          },
          {
            title: 'Innovation and Research:',
            description:
              'Engage in groundbreaking research and innovation, with access to state-of-the-art facilities and resources.',
          },
          {
            title: 'Cultural Diversity:',
            description:
              'Experience a melting pot of cultures, fostering a global perspective and creating lifelong connections.',
          },
        ],
      },
      visaRequirements: {
        description:
          'Navigating the student visa process is crucial for studying in the USA. The following table provides key details:',
        data: [
          {
            title: 'F-1 Student Visa',
            requirements: [
              'International Students',
              'Up to 120 days before the program starts',
              'Up to 30 days before the program starts',
              'Form I-20, SEVIS fee payment, visa application, valid passport',
            ],
          },
        ],
      },
      intakes: {
        description:
          'Universities in the USA typically follow two major intakes:',
        data: [
          {
            intake: 'Fall (August/September)',
            admission: 'December-April',
          },
          {
            intake: 'Spring (January)',
            admission: 'June-September',
          },
        ],
      },
      costOfStudy: {
        title: 'Cost of Studying in USA for International Students',
        description:
          'Understanding the cost of studying in the USA is essential. The table below provides an overview:',
        tableHeading: ['Degree', 'Cost in USD (Per Year)'],
        tableBody: [
          {
            col1: 'Student Visa',
            col2: 'SEVIS fee: $350, visa application fee: varies by country',
          },
          {
            col1: "Undergraduate (Bachelor's)",
            col2: '$25,000 - $50,000',
          },
          {
            col1: "Postgraduate (Master's)",
            col2: '$30,000 - $60,000',
          },
          {
            col1: 'MBA',
            col2: '$40,000 - $80,000',
          },
          {
            col1: 'PhD',
            col2: '$28,000 - $55,000',
          },
        ],
      },
      livingExpenses: {
        title: 'Living Expenses in USA for International Students',
        description:
          'Managing living expenses is crucial for a comfortable stay in the USA. The table below breaks down monthly costs:',
        tableHeading: [
          'Expenses',
          'Cost in USD (Per Month)',
          'Cost in INR (Per Month)',
        ],
        tableBody: [
          {
            col1: 'Accommodation',
            col2: '$800 - $1,500',
            col3: '₹59,000 - ₹1,11,000',
          },
          {
            col1: 'Food',
            col2: '$200 - $400',
            col3: '₹14,800 - ₹29,500',
          },
          {
            col1: 'Transportation',
            col2: '$50 - $100',
            col3: '₹3,700 - ₹7,400',
          },
          {
            col1: 'Health Insurance',
            col2: '$50 - $100',
            col3: '₹3,700 - ₹7,400',
          },
          {
            col1: 'Personal Expenses',
            col2: '$100 - $200',
            col3: '₹7,400 - ₹14,800',
          },
        ],
      },
      careerOpportunity: {
        title: 'Career Opportunities in USA for International Students',
        description:
          'The USA offers vast career opportunities for international students. The table below highlights some job profiles and top employers:',
        tableHeading: [
          'Job Profile',
          'Description & Opportunities',
          'Top Employers',
        ],
        tableBody: [
          {
            col1: 'Technology and IT',
            col2: 'Opportunities in software development, data analytics, and cybersecurity.',
            col3: 'Google, Microsoft, Apple, Amazon',
          },
          {
            col1: 'Finance and Consulting',
            col2: 'Roles in banking, investment, and management consulting.',
            col3: 'JPMorgan Chase, Goldman Sachs, McKinsey & Company',
          },
          {
            col1: 'Healthcare',
            col2: 'Opportunities in nursing, research, and pharmaceuticals.',
            col3: 'Mayo Clinic, Cleveland Clinic, Pfizer',
          },
          {
            col1: 'Engineering',
            col2: 'Roles in various engineering fields, including civil, mechanical, and electrical.',
            col3: 'Boeing, Lockheed Martin, Tesla',
          },
          {
            col1: 'Marketing and Advertising',
            col2: 'Opportunities in digital marketing, advertising, and public relations.',
            col3: 'Procter & Gamble, Coca-Cola, Ogilvy & Mather',
          },
        ],
      },
      scholarships: {
        title: 'USA Scholarships for International Students',
        description:
          'The USA offers a plethora of scholarships to support international students. The table below provides details:',
        tableHeading: [
          'Name of Scholarship',
          'Description',
          'Eligibility',
          'Amount in USD',
        ],
        tableBody: [
          {
            col1: 'Fulbright Scholarship',
            col2: 'Merit-based for exceptional students',
            col3: 'Academic excellence, leadership qualities',
            col4: 'Varies based on program',
          },
          {
            col1: 'Hubert H. Humphrey Fellowship Program',
            col2: 'Funded by the U.S. Department of State for mid-career professionals',
            col3: 'Professional achievements, leadership potential',
            col4: 'Full financial support',
          },
          {
            col1: 'Aga Khan Foundation International Scholarship Program',
            col2: 'Need-based scholarships for postgraduate studies',
            col3: 'Financial need, academic merit',
            col4: 'Full tuition, living expenses',
          },
        ],
      },
      faqs: [
        {
          title: 'How much does it cost to study in the USA?',
          description:
            'Costs vary based on factors such as the chosen institution, location, and the level of study.',
        },
        {
          title: 'What are the student visa requirements for the USA?',
          description:
            'Requirements include a valid passport, Form I-20, SEVIS fee payment, and a visa application. Refer to the "Student Visa Requirements for the USA" section for a detailed breakdown.',
        },
        {
          title: 'When are the intakes in the USA?',
          description:
            'The main intakes are in Fall (August/September) and Spring (January). Refer to the "Intakes in the USA" section for details.',
        },
      ],
    },
    {
      country: 'CANADA',
      studyIn: {
        description:
          'Embark on a rewarding educational journey in Canada, a country renowned for its welcoming communities, breathtaking landscapes, and world-class education. Immerse yourself in a multicultural environment and enjoy the benefits of quality education and vibrant student life.',
        data: [
          {
            title: 'High-Quality Education:',
            description:
              'Canada is home to top-ranking universities and colleges known for their academic excellence and research opportunities.',
          },
          {
            title: 'Diverse Programs:',
            description:
              'Choose from a diverse range of programs, including STEM fields, arts, business, and more, tailored to your career goals.',
          },
          {
            title: 'Safe and Inclusive Environment:',
            description:
              'Experience a safe and inclusive environment that encourages cultural exchange and personal growth.',
          },
          {
            title: 'Post-Graduation Work Opportunities:',
            description:
              'Benefit from post-graduation work permits, allowing you to gain valuable work experience after completing your studies.',
          },
        ],
      },
      visaRequirements: {
        description:
          'Understanding the student visa process is crucial for studying in Canada. The following table provides key details:',
        data: [
          {
            title: 'Study Permit',
            requirements: [
              'International Students',
              'Up to 6 months before the program starts',
              'Up to 30 days before the program starts',
              'Letter of acceptance, proof of funds, visa application, valid passport',
            ],
          },
        ],
      },
      intakes: {
        description:
          'Universities and colleges in Canada typically follow two major intakes:',
        data: [
          {
            intake: 'Fall (September)',
            admission: 'November-January',
          },
          {
            intake: 'Winter (January)',
            admission: 'May-July',
          },
        ],
      },
      costOfStudy: {
        title: 'Cost of Studying in Canada for International Students',
        description:
          'Understanding the cost of studying in Canada is essential. The table below provides an overview:',
        tableHeading: ['Degree', 'Cost in CAD (Per Year)'],
        tableBody: [
          {
            col1: 'Study Permit',
            col2: 'Application fee: CAD 150, Biometrics fee: CAD 85',
          },
          {
            col1: "Undergraduate (Bachelor's)",
            col2: 'CAD 20,000 - CAD 40,000',
          },
          {
            col1: "Postgraduate (Master's)",
            col2: 'CAD 15,000 - CAD 30,000',
          },
          {
            col1: 'PhD',
            col2: 'CAD 7,000 - CAD 20,000',
          },
        ],
      },
      livingExpenses: {
        title: 'Canada Living Expenses for International Students',
        description:
          'Managing living expenses is crucial for a comfortable stay in Canada. The table below breaks down monthly costs:',
        tableHeading: [
          'Expenses',
          'Cost in CAD (Per Month)',
          'Cost in INR (Per Month)',
        ],
        tableBody: [
          {
            col1: 'Accommodation',
            col2: 'CAD 800 - CAD 1,500',
            col3: '₹47,000 - ₹88,000',
          },
          {
            col1: 'Food',
            col2: 'CAD 300 - CAD 500',
            col3: '₹17,600 - ₹29,400',
          },
          {
            col1: 'Transportation',
            col2: 'CAD 50 - CAD 100',
            col3: '₹2,900 - ₹5,900',
          },
          {
            col1: 'Health Insurance',
            col2: 'CAD 50 - CAD 100',
            col3: '₹2,900 - ₹5,900',
          },
          {
            col1: 'Personal Expenses',
            col2: 'CAD 100 - CAD 200',
            col3: '₹5,900 - ₹11,800',
          },
        ],
      },
      careerOpportunity: {
        title: 'Career Opportunities in Canada for International Students',
        description:
          'Canada offers diverse career opportunities for international students. The table below highlights some job profiles and top employers:',
        tableHeading: [
          'Job Profile',
          'Description & Opportunities',
          'Top Employers',
        ],
        tableBody: [
          {
            col1: 'Information Technology',
            col2: 'Opportunities in software development, data analysis, and cybersecurity.',
            col3: 'Shopify, CGI, BlackBerry',
          },
          {
            col1: 'Healthcare',
            col2: 'Roles in nursing, pharmaceuticals, and medical research.',
            col3: 'Royal Bank of Canada, Toronto-Dominion Bank, Ernst & Young',
          },
          {
            col1: 'Engineering',
            col2: 'Opportunities in nursing, research, and pharmaceuticals.',
            col3: 'Mayo Clinic, Cleveland Clinic, Pfizer',
          },
          {
            col1: 'Engineering',
            col2: 'Roles in civil, mechanical, and software engineering.',
            col3: 'SNC-Lavalin, Bombardier, Shopify',
          },
          {
            col1: 'Renewable Energy',
            col2: 'Growth in the sustainable energy sector with opportunities in solar and wind energy.',
            col3: 'Brookfield Renewable, TransAlta, Innergex Renewable Energy',
          },
        ],
      },
      scholarships: {
        title: 'Canada Scholarships for International Students',
        description:
          'Canada offers various scholarships to support international students in their academic pursuits. The table below provides details:',
        tableHeading: [
          'Name of Scholarship',
          'Description',
          'Eligibility',
          'Amount in CAD',
        ],
        tableBody: [
          {
            col1: 'Canada Graduate Scholarships',
            col2: 'Merit-based scholarships for graduate students',
            col3: 'Academic excellence, research potential',
            col4: 'Varies based on program',
          },
          {
            col1: 'Vanier Canada Graduate Scholarships',
            col2: 'Scholarships for doctoral students demonstrating leadership skills',
            col3: 'Academic excellence, leadership qualities',
            col4: '$50,000 per year',
          },
          {
            col1: 'Lester B. Pearson International Scholarship',
            col2: 'Full tuition and living expenses for exceptional students',
            col3: 'Academic achievement, leadership potential',
            col4: 'Full tuition, living expenses',
          },
        ],
      },
      faqs: [
        {
          title: 'How much does it cost to study in Canada?',
          description:
            'Costs vary based on factors such as the chosen institution, location, and the level of study.',
        },
        {
          title: 'What are the student visa requirements for Canada?',
          description:
            'Requirements include a valid passport, letter of acceptance, proof of funds, and a visa application. Refer to the "Student Visa Requirements for Canada" section for a detailed breakdown.',
        },
        {
          title: 'When are the intakes in Canada?',
          description:
            'The main intakes are in Fall (September) and Winter (January). Refer to the "Intakes in Canada" section for details.',
        },
      ],
    },
  ];
  const router = useRouter();
  const [pageData, setPageData] = useState<any>();
  useEffect(() => {
    router?.query?.index === 'uk'
      ? setPageData(data[0])
      : router?.query?.index === 'usa'
      ? setPageData(data[1])
      : router?.query?.index === 'canada'
      ? setPageData(data[2])
      : null;
  }, [router]);
  return (
    <PageWrapper isBanner wrapperClass='!px-0 lg:!px-0'>
      <Home data={pageData} router={router} />
    </PageWrapper>
  );
}
