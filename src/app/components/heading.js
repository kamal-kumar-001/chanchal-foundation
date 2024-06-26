import React from 'react'

function Heading({ title, subtitle }) {
    return (
        <div className=' bg-orange-600 w-screen py-28 !text-center text-white'>
            <p className='text-4xl font-semibold pb-6'>
                {title}
            </p>
            <hr className='mx-auto max-w-20 border-b-4 border-white' />
            <p className='pt-6 text-2xl font-normal text-white'>
                {subtitle}
            </p>
        </div>
    )
}

export default Heading