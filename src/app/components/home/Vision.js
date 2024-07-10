import Image from 'next/image';

function Vision() {
  return (
      <div className=" md:lg:xl:flex md:justify-center xl:justify-center lg:justify-center gap-5 px-10">
        <div className="my-5 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <Image
            width={384}
            height={384}
            src='/hospital.webp'
            alt={`chanchal logo`}
            className="rounded-lg"
          />
        </div>
        <div className="my-5 md:w-1/3 lg:w-1/3 xl:w-1/3">
          <p className='mt-3 text-gray-500'>
          Establish a free hospital dedicated to improving the health of our nation and serving for a better tomorrow. This hospital would provide high-quality medical care to those in need, regardless of their financial status. By offering free healthcare services, we aim to ensure that every individual has access to necessary treatments and preventative care. Our mission is to alleviate the burden of medical expenses on families and contribute to a healthier, more prosperous society. This initiative is not just about treating illnesses but about fostering a future where everyone can lead healthier, more fulfilling lives.
          </p>
        </div>
      </div>

  )
}

export default Vision