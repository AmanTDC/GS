import React from 'react';

const CostOfStudy = () => {
  return (
    <div id='fourth' className='space-y-3 my-16'>
      <h4 className='text-[32px] font-semibold'>
        Cost of Studying in the UK for Indian Students
      </h4>
      <p className='text-secondary pb-3'>
        Studying in the UK is an investment in your future, and understanding
        the costs involved is an essential part of planning your journey. Below
        is a breakdown of the various expenses you might encounter, from visa
        fees to living expenses.
      </p>
      <table className='border w-full' id='costOfStudy'>
        <thead>
          <tr className='bg-green-50 text-green-800 font-semibold'>
            <th>Degree</th>
            <th>Cost in GBP (Per Year)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Student Visa</td>
            <td>
              <li>Standard Visa: £348 (~₹33,000)</li>
              <li>Short-Term Visa: £97 - £186 (~₹9,200 - ₹17,700)</li>
              <li>11-Month Short-Term Visa: £186 (~₹17,700)</li>
            </td>
          </tr>
          <tr>
            <td>Course Fees</td>
            <td>
              <li>
                Undergraduate (Bachelor's): £10,000 - £30,000 (₹9.5 Lacs -
                ₹28.5Lacs)
              </li>
              <li>
                Postgraduate (Master's): £12,000 - £35,000 (₹11.4 Lacs - ₹33.3
                Lacs)
              </li>
              <li>MBA: £15,000 - £60,000 (₹14.3 Lacs - ₹57 Lacs)</li>
              <li>PhD: £13,000 - £27,000 (₹12.4 Lacs - ₹25.7 Lacs)</li>
            </td>
          </tr>
          <tr>
            <td>Living Costs (London)</td>
            <td>£13,250</td>
          </tr>
          <tr>
            <td>Living Costs (Outside London)</td>
            <td>£10,750</td>
          </tr>
        </tbody>
      </table>
      <p className='text-secondary pb-3'>
        Please note that these costs are approximate and can vary widely based
        on factors such as your chosen institution, location, lifestyle, and
        personal spending habits. It's possible to reduce expenses with careful
        planning and budgeting.
      </p>
    </div>
  );
};

export default CostOfStudy;
