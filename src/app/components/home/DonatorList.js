import React from 'react';

const DonatorList = ({donators}) => {
  return (
    <div className="w-1/2 mx-auto">
      <div className="p-4  bg-white rounded-lg border shadow-md sm:p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">Some Supporters</h3>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {donators.map((donator, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={donator.image ||  'https://flowbite.com/docs/images/people/profile-picture-5.jpg'} alt={`${donator.name} image`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{donator.name}</p>
                    <p className="text-sm text-gray-500 truncate">{donator.email}</p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">{donator.amount} ₹</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DonatorList;
