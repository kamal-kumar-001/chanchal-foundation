import React from "react";

export default function SectionTitle(props) {
  return (
    <div
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-[#ff5722] uppercase">
          {props.pretitle}
        </div>
      )}
      {props.title && (
        <div className=' mx-auto py-9 !text-center text-orange-400'>
        <p className='text-3xl font-normal pb-6'>
          {props.title}
        </p>
        <hr className='mx-auto max-w-20 border-b-2 border-blue-500' />
    </div>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
          {props.children}
        </p>
      )}
    </div>
  );
}
