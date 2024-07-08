"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "./MainLayout";
import Link from "next/link";
import Heading from "../heading";
import SubHeading from "../subHeading";


export default function ContactUs() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (result && result.email) {
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
      <section className="bg-blue-50" id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 text-3xl sm:text-5xl">
              Message Sent Successfully!
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">
              Thank you for getting in touch with us. We will respond to your message shortly.
            </p>
            <Link href={`/`}>
              <button className='w-48 my-8 py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7'>
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return (
    <MainLayout>
      <section className="bg-blue-50" id="contact">
        <Heading title={'We Would Love to Hear from You'} subtitle={'Please write or call us with your questions or comments'} />
        <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="my-4">
            <SubHeading title={'Contact US'} />
          </div>
          <div className="!text-center mx-auto space-y-3 ">
            <p className="text-xl ">
              Head Office: 225/3 Uttam Nagar , Rewari, Haryana
            </p>
            <p className="text-xl ">
              Branch Office: Village- Jawa, Charkhi Dadri, Haryana, India
            </p>
            <p className="text-xl text-blue-500">
              Mail: info@chanchalveer.org
              <br />
              phone: +91 9466394803
            </p>
            <hr className=" mx-auto max-w-96  border-b-2 border-orange-600 "/>
            <div className="flex justify-center  mx-auto mt-6 space-x-5 text-orange-500">
                  <a href="https://twitter.com/" target="_blank" rel="noopener">
                    <span className="sr-only">Twitter</span>
                    <Twitter />
                  </a>
                  <a href="https://facebook.com/" target="_blank" rel="noopener">
                    <span className="sr-only">Facebook</span>
                    <Facebook />
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noopener">
                    <span className="sr-only">Instagram</span>
                    <Instagram />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener">
                    <span className="sr-only">Linkedin</span>
                    <Linkedin />
                  </a>
                </div>
          </div>
          <div className="flex max-w-[724px] mx-auto items-stretch justify-center">
            <div className="card h-fit w-full p-5 md:p-12" id="form">
              <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5 mt-5">
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.name ? 'border-red-500' : ''}`}
                  />
                  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    id="email"
                    {...register("email", { pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
                    placeholder="Your Email Address"
                    className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div className="mb-5">
                  <input
                    type="number"
                    id="phone"
                    {...register("phone", { required: "Phone is required",pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Invalid phone number'
                    } })}
                    placeholder="Your Phone Number"
                    className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                </div>

                <div className="mb-5">
                  <textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 ${errors.message ? 'border-red-500' : ''}`}
                  ></textarea>
                  {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                </div>

                <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
                  Send Message
                </button>
              </form>
              <div className="rounded-lg mt-10 overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.316946694085!2d76.64159757545292!3d28.197681575904962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4fffaaaaaaab%3A0xdc28911a966052b0!2sCHANCHAL%20VEER%20FOUNDATION!5e0!3m2!1sen!2sin!4v1719377663639!5m2!1sen!2sin"
                        width="100%" height="480" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}


const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);