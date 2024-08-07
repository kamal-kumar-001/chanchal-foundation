import React from 'react'
import MainLayout from './MainLayout'

const DonateConformation = ({ donationData, handleCancel, handlePayNow }) => {
  return (
    <MainLayout>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
          <h3 className="text-4xl font-bold">Review Your Donation</h3>
          <p className="mt-4 text-lg">Please review your donation details before proceeding to payment.</p>
          <div className='flex justify-center items-center'>
          <div className="overflow-x-auto">
            <table className="w-[450px] divide-y divide-gray-200 mt-8">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-100 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ">Field</th>
                  <th className="px-6 py-3 bg-gray-100 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Full Name</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.firstname}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.email}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Phone</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.phone}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Amount</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.amount}</td>
                </tr>
                {donationData.pancard &&  (<><tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pan</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.pancard}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Address</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.address}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Pincode</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.pincode}</td>
                </tr></>)}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Remarks</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.remarks}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Message</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donationData.message}</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={handleCancel} className='w-48 py-4 font-semibold text-white transition-colors bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-red-200 px-7'>
              Cancel
            </button>
            <button onClick={handlePayNow} className='w-48 py-4 font-semibold text-white transition-colors bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-green-200 px-7'>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default DonateConformation
