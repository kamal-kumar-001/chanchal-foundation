"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MainLayout from "./MainLayout";
export default function Donate() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState({});

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/donator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result && result.phone) {
        setResult(result)
        setSubmitted(true);
        reset();
    } else {
        console.error('Failed to Send Message:', result.message || 'Unknown error');
    }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h3 className="text-4xl font-bold">Thank you for your support!</h3>
          <p className="mt-4 text-lg">Your contribution helps us ensure education for all.</p>
          <Link href={`/receipt/${result?._id}`}>
          <button className='w-48 my-8 mx-3 py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7'>
          Get Your Recipt
          </button>
          </Link>
          <Link href={`/`}>
          <button className='w-48 my-8 mx-3 py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7'>
          Explore More
          </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <MainLayout>
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
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="checkbox" id="botcheck" className="hidden" style={{ display: 'none' }} name="botcheck" />
            <div className="mb-5 mt-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.name ? 'border-red-500' : ''}`}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <span className="text-red-500">{errors.name.message}</span>}
            </div>
            <div className="mb-5">
              <input
                type="email"
                placeholder="Email Address"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.email ? 'border-red-500' : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <span className="text-red-500">{errors.email.message}</span>}
            </div>
            <div className="mb-5">
              <input
                type="text"
                placeholder="Phone"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.phone ? 'border-red-500' : ''}`}
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Invalid phone number'
                  }
                })}
              />
              {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
            </div>
            <div className="mb-5">
              <input
                type="number"
                placeholder="Amount"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.amount ? 'border-red-500' : ''}`}
                {...register('amount', { required: 'Amount is required' })}
              />
              {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
            </div>
            <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
              Donate
            </button>
          </form>
        </div>
      </div>
    </div>
    </MainLayout>
  );
}