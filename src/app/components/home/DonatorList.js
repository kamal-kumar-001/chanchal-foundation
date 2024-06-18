import React from 'react';

const donators = [
  {
    name: 'Neil Sims',
    email: 'email@windster.com',
    amount: 320,
    image: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
  },
  {
    name: 'Bonnie Green',
    email: 'email@windster.com',
    amount: 3456,
    image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
  },
  {
    name: 'Michael Gough',
    email: 'email@windster.com',
    amount: 279,
    image: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
  },
  {
    name: 'Lana Byrd',
    email: 'email@windster.com',
    amount: 908,
    image: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
  },
  {
    name: 'Thomas Lean',
    email: 'email@windster.com',
    amount: 245,
    image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
  },
];

const DonatorList = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold leading-none text-gray-900">Some Supporters</h3>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200">
            {donators.map((donator, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={donator.image} alt={`${donator.name} image`} />
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
