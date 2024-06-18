import React, { useState } from 'react';

const SupportSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form data here, e.g., send it to an API
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      amount: '',
    });
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
        <h3 className="text-4xl font-bold">
          Your support is crucial in ensuring education for all!
        </h3>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
        <div>
          <p className="max-w-sm mt-4 mb-4">
            After a gap of two years, schools have reopened. Watching children go back to school, meet their friends, share lunch, and play together has been a moment to rejoice. But this is just one side of the fence.
          </p>
          <p className="max-w-sm mt-4 mb-4">
            The pandemic affected every child, but some suffered more than others. Children from socio-economically weaker sections, tribal belts, remote rural areas, and urban slums became the worst sufferers. When the schools were shut, only about 28% of children living in rural areas and slums had access to digital learning. Education came to a halt for lakhs of children, who had already been struggling in the pre-pandemic world.
          </p>
          <p className="max-w-sm mt-4 mb-4">
            Smile Foundation, through its ‘Shiksha Na Ruke’ initiative, has been helping children from difficult circumstances get back to school and restart their lives positively and with hope. At present, we are directly providing education to over 100,000 children in 23 states of India.
          </p>
          <p className="max-w-sm mt-4 mb-4">
            Despite all the odds, these young champions have not given up and continue to dream and work hard. With your support, we can fuel their dreams with accessible and quality education. Join hands with us to ensure a happy and safe childhood for all!
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="checkbox" id="botcheck" className="hidden" style={{ display: 'none' }} name="botcheck" />
            <div className="mb-5 mt-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">Email Address</label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                autoComplete="false"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Phone"
                autoComplete="false"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <input
                type="number"
                placeholder="Amount"
                autoComplete="false"
                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
