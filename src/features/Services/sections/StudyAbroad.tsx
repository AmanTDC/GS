import StudyCard from '@/shared/Cards/StudyCard';
import Img from '@/shared/Img';
import React from 'react';

const StudyAbroad = () => {
  const data = [
    {
      icon: '/icons/abroad1.png',
      title: 'In-Depth Consultations:',
      description:
        'Our experienced counselors will engage in in-depth discussions with you, helping you select the perfect destination and institution that matches your aspirations.',
    },
    {
      icon: '/icons/abroad2.png',
      title: 'Visa Guidance:',
      description:
        'Navigating the visa application process can be daunting. We provide step-by-step guidance on visa applications, ensuring a smooth and hassle-free experience.',
    },
    {
      icon: '/icons/abroad3.png',
      title: 'Document Preparation',
      description:
        'We guide you through the documentation required for your university application, ensuring that everything is in order.',
    },
    {
      icon: '/icons/abroad4.png',
      title: 'English Proficiency Tests',
      description:
        "If English isn't your native language, we assist you in preparing for language proficiency exams like IELTS and TOEFL.",
    },
    {
      icon: '/icons/abroad5.png',
      title: 'Scholarship Assistance',
      description:
        'We keep you informed about scholarship opportunities and help you with the application process, making education abroad more affordable.',
    },
    {
      icon: '/icons/abroad6.png',
      title: 'Post-Departure Support',
      description:
        "Our commitment to your success doesn't end with your departure. We offer ongoing support even after you've arrived at your dream university.",
    },
  ];
  return (
    <div className='my-16 space-y-7' id='second'>
      <h4 className='text-[32px] font-semibold mb-2'>
        What to Expect from Our FREE Study Abroad Counseling:
      </h4>

      <div className='grid lg:grid-cols-3 grid-cols-12 gap-5 place-items-center'>
        {data?.map((item, idx) => (
          <StudyCard data={item} key={idx} isServices />
        ))}
      </div>
    </div>
  );
};

export default StudyAbroad;
