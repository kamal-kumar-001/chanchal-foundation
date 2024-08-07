"use client";
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import handleDonation from "./handleDonation";
import DonateConformation from "./donateConformation";
import DonateForm from './donateForm';

export default function Donate() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [donationData, setDonationData] = useState(null);
  

  const onSubmit = async (data) => {
    try {
      const res = await handleDonation(data);
      if (res && res.txnid) {
        setDonationData({ ...data, ...res });
        console.log(data);
      } else {
        console.error('Failed to generate transaction details');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handlePayNow = async () => {
    // Save donator to the database
    try {
      const response = await fetch('/api/donator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });
        // Proceed to payment if donator is saved successfully
        const form = document.createElement("form");
        form.setAttribute("method", "POST");
        form.setAttribute("action", "https://test.payu.in/_payment"); // Use the production URL for live payments

        Object.keys(donationData).forEach(key => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = donationData[key];
          form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving donator. Please try again.');
    }
  };

  const handleCancel = () => {
    setDonationData(null);
    // reset();
  };

  useEffect(() => {
    if (donationData) {
      window.scrollTo(0, 0);
    }
  }, [donationData]);

  if (donationData) {
    return (
      <DonateConformation donationData={donationData} handleCancel={handleCancel} handlePayNow={handlePayNow}/>
    );
  }
  return (
    <DonateForm register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} />
  );
}
