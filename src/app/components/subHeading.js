import React from 'react'

function SubHeading({ title }) {
    return (
        <div className=' mx-auto py-9 !text-center text-orange-400'>
            <p className='text-2xl font-normal pb-6'>
                {title}
            </p>
            <hr className='mx-auto max-w-20 border-b-2 border-blue-500' />
        </div>
    )
}

export default SubHeading