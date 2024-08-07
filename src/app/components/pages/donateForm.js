import React, { useState } from 'react'
import MainLayout from './MainLayout'
import Heading from '../heading'
import SubHeading from '../subHeading'
import DonatorList from './DonatorList'

const DonateForm = ({register, handleSubmit, errors, onSubmit}) => {
    const [needTaxCertificate, setNeedTaxCertificate] = useState(false);
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

              <div className="mb-5 flex items-center">
              <label htmlFor="taxCertificate" className="inline-flex items-center me-5 cursor-pointer">
                  <input type="checkbox" className="mr-2 sr-only peer"
                  id="taxCertificate"
                  checked={needTaxCertificate}
                  onChange={() => setNeedTaxCertificate(!needTaxCertificate)}
                  />
                  <div className=" relative w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-1 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-500"></div>
                </label>
                <span htmlFor="taxCertificate" className="text-gray-800">Require 80G Tax Exp. Certificate*</span>
              </div>

              {needTaxCertificate && (
                <>
                  <div className="mb-5">
                    <input
                      type="text"
                      placeholder="Pancard*"
                      autoComplete="false"
                      className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.pancard ? 'border-red-500' : ''}`}
                      {...register('pancard', { required: 'Pancard is required' })}
                    />
                    {errors.pancard && <span className="text-red-500">{errors.pancard.message}</span>}
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


                </>
              )}

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
        <SubHeading title={'Chanchal Veer Foundation Supporters'} />
        <DonatorList />
      </div>
    </MainLayout>
  )
}

export default DonateForm