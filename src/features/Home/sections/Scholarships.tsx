import React from 'react';

const Scholarships = () => {
  const data = [
    {
      name: 'UK Excellence Scholarship',
      description:
        'Merit-based scholarship for outstanding Indian students applying to UK universities.',
      eligibility: 'Academic excellence',
      amount: '£5,000 - £20,000',
    },
    {
      name: 'Chevening Scholarship',
      description:
        "Prestigious scholarship funded by the UK government, offering full financial support for a one-year Master's degree in any subject.",
      eligibility: 'Leadership qualities, academic excellence, work experience',
      amount: 'Full tuition fees, living expenses',
    },
    {
      name: 'GREAT Scholarships',
      description:
        'Multiple scholarships are offered by the British Council and UK universities, covering a variety of disciplines and academic levels.',
      eligibility: 'Varies based on the specific scholarship program',
      amount: 'Varies based on the specific scholarship program',
    },
    {
      name: 'Charles Wallace India Trust Scholarships',
      description:
        'Scholarships for Indian artists, researchers, and professionals to undertake short-term or long-term programs in the UK.',
      eligibility:
        'Specific to arts, heritage conservation, humanities, social sciences, and more',
      amount: 'Varies based on program and duration',
    },
  ];
  return (
    <div id='fifth' className='space-y-3 my-16'>
      <h4 className='text-[32px] font-semibold'>
        UK Scholarships for Indian students
      </h4>
      <div>
        <p className='text-secondary pb-3'>
          The United Kingdom is known for its prestigious universities and
          quality education, and it offers a range of scholarships to attract
          international students, including those from India. Scholarships in
          the UK provide financial support to deserving students, helping them
          pursue their academic dreams and reducing the financial burden of
          studying abroad.
        </p>
        <p className='text-secondary pb-3'>
          Scholarships in the UK for Indian students not only provide financial
          assistance but also offer recognition and access to valuable networks
          and opportunities. They can significantly contribute to making
          education in the UK more affordable and accessible for talented Indian
          students. By leveraging these scholarship opportunities, Indian
          students can enhance their chances of studying in the UK and pursue
          their academic and career aspirations with the support they need. The
          UK's commitment to international education and diversity makes it an
          attractive destination for Indian students seeking scholarships and a
          world-class education.
        </p>
      </div>
      <div className='overflow-x-scroll'>
        <table className='border w-full' id='scholarship'>
          <thead>
            <tr className='bg-yellow-50 text-yellow-700 font-semibold'>
              <th>Name of Scholarship</th>
              <th>Description</th>
              <th>Eligibility</th>
              <th>Amount in GBP</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, idx) => (
              <tr key={idx}>
                <td>{item?.name}</td>
                <td>{item?.description}</td>
                <td>{item?.eligibility}</td>
                <td>{item?.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className='text-secondary pb-3'>
        Please note that these costs are approximate and can vary widely based
        on factors such as your chosen institution, location, lifestyle, and
        personal spending habits. It's possible to reduce expenses with careful
        planning and budgeting.
      </p>
    </div>
  );
};

export default Scholarships;
