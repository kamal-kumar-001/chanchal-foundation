"use client";
import Link from "next/link";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MainLayout from "./MainLayout";
import DonatorList from "./DonatorList";
import Heading from "../heading";
import SubHeading from "../subHeading";
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
        <Heading title={'Donate'} subtitle={'Your support is crucial in ensuring education for all!'} />
        <SubHeading title={'Chanchal Veer Foundation Rewari'} />
        <div className="max-w-[724px] mx-auto px-6 pb-6">
          <div>
            <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <input type="checkbox" id="botcheck" className="hidden" style={{ display: 'none' }} name="botcheck" />

              <div className="mb-5 mt-5">
                <input
                  type="text"
                  placeholder="Full Name*"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.name ? 'border-red-500' : ''}`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>

              <div className="mb-5">
                <input
                  type="number"
                  placeholder="Amount*"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.amount ? 'border-red-500' : ''}`}
                  {...register('amount', { required: 'Amount is required' })}
                />
                {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Phone*"
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
                  type="email"
                  placeholder="Email Address"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.email ? 'border-red-500' : ''}`}
                  {...register('email', {
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
                  placeholder="Full Address*"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.address ? 'border-red-500' : ''}`}
                  {...register('address', { required: 'Full address is required' })}
                />
                {errors.address && <span className="text-red-500">{errors.address.message}</span>}
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Pincode*"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.pincode ? 'border-red-500' : ''}`}
                  {...register('pincode', {
                    required: 'Pincode is required',
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: 'Invalid pincode'
                    }
                  })}
                />
                {errors.pincode && <span className="text-red-500">{errors.pincode.message}</span>}
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Pancard*"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.pancard ? 'border-red-500' : ''}`}
                  {...register('pancard')}
                />
                {errors.pancard && <span className="text-red-500">{errors.pancard.message}</span>}
              </div>

              <div className="mb-5">
                <textarea
                  placeholder="Remarks"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.remarks ? 'border-red-500' : ''}`}
                  {...register('remarks')}
                ></textarea>
                {errors.remarks && <span className="text-red-500">{errors.remarks.message}</span>}
              </div>

              <div className="mb-5">
                <textarea
                  placeholder="Your Message"
                  autoComplete="false"
                  className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.message ? 'border-red-500' : ''}`}
                  {...register('message')}
                ></textarea>
                {errors.message && <span className="text-red-500">{errors.message.message}</span>}
              </div>

              <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
                Donate
              </button>
            </form>
          </div>
        </div>
        <SubHeading title={'Chanchal Veer Foundation Supportors'} />
        <DonatorList />
      </div>
    </MainLayout>
  );
}