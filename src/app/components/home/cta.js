import React from "react";
import Link from 'next/link'

export default function Cta() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between w-full max-w-5xl gap-5 mx-auto text-white bg-[#ff5722] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Looking for Contribution?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
          Want to help and support
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link href="/donate">
          <span className="inline-block py-3 mx-auto text-lg font-medium text-center text-[#ff5722] bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Donate Now
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
