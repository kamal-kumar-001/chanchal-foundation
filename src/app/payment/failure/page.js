"use client";
import MainLayout from '@/app/components/pages/MainLayout';
import Link from 'next/link';

export default function FailurePage() {
  return (
    <MainLayout>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h3 className="text-4xl font-bold">Payment failed!</h3>
          <p className="mt-4 text-lg">We couldn&apos;t process your request. Please try again.</p>
          <Link href={`/`}>
            <button className='w-48 my-8 mx-3 py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7'>
              Go to Homepage
            </button>
          </Link>
          <Link href={`/contact-us`}>
            <button className='w-48 my-8 mx-3 py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7'>
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
