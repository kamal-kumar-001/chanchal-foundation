import { useState, useEffect, useRef } from 'react';
import Heading from './heading';
import Link from 'next/link';
import Image from 'next/image';

const WorkGallery = () => {
  const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
  const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
  const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
  const galleryRef = useRef(null);

  const images = [
    '/work/work-image1.jpeg',
    '/work/work-image2.jpeg',
    '/work/work-image3.jpeg',
    '/work/work-image8.jpeg',
    '/work/work-image10.jpeg',
    '/work/work-image12.jpeg',
    '/work/work-image14.jpeg',
    '/work/work-image16.jpeg',
    '/work/work-image19.jpeg',
    '/work/work-image24.jpeg',
    '/work/work-image30.jpeg',
    '/work/work-image43.jpeg',
    '/work/work-image49.jpeg',
    '/work/work-image50.jpeg',
    '/work/work-image51.jpeg',
    '/work/work-image52.jpeg',
    '/work/work-image53.jpeg',
    '/work/work-image54.jpeg',
    '/work/work-gif1.gif',
    '/work/work-gif2.gif',
    // 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // 'https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg',
    // 'https://images.unsplash.com/photo-1689217634234-38efb49cb664?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    // 'https://images.unsplash.com/photo-1520350094754-f0fdcac35c1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    // 'https://cdn.devdojo.com/images/june2023/mountains-10.jpeg',
    // 'https://cdn.devdojo.com/images/june2023/mountains-06.jpeg',
    // 'https://images.pexels.com/photos/1891234/pexels-photo-1891234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80',
    // 'https://images.pexels.com/photos/4256852/pexels-photo-4256852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // 'https://images.unsplash.com/photo-1541795083-1b160cf4f3d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  ];

  const imageGalleryOpen = (index) => {
    setImageGalleryImageIndex(index);
    setImageGalleryActiveUrl(images[index]);
    setImageGalleryOpened(true);
  };

  const imageGalleryClose = () => {
    setImageGalleryOpened(false);
    setTimeout(() => setImageGalleryActiveUrl(null), 300);
  };

  const imageGalleryNext = () => {
    const nextIndex = (imageGalleryImageIndex + 1) % images.length;
    setImageGalleryImageIndex(nextIndex);
    setImageGalleryActiveUrl(images[nextIndex]);
  };

  const imageGalleryPrev = () => {
    const prevIndex = (imageGalleryImageIndex - 1 + images.length) % images.length;
    setImageGalleryImageIndex(prevIndex);
    setImageGalleryActiveUrl(images[prevIndex]);
  };

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === 'ArrowRight') {
        imageGalleryNext();
      } else if (event.key === 'ArrowLeft') {
        imageGalleryPrev();
      } else if (event.key === 'Escape') {
        imageGalleryClose();
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [imageGalleryImageIndex]);

  return (
    <>
    <Heading title={'CHANCHAL VEER FOUNDATION GALLERY'} subtitle={'WE SUPPORT CHILDREN AND YOUTH TO REACH THEIR FULL POTENTIAL'} />
    <section className="px-4 py-24 mx-auto max-w-7xl">
      <div className="w-full h-full select-none">
        <div
          className="max-w-6xl mx-auto duration-1000 delay-300 opacity-0 select-none ease animate-fade-in-view"
          style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}
        >
          <ul ref={galleryRef} id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
            {images.map((src, index) => (
              <li key={index}>
                <Image
                 width={1024} 
                 height={500}
                  onClick={() => imageGalleryOpen(index)}
                  src={src}
                  className="object-cover select-none w-full h-auto bg-gray-200 rounded cursor-zoom-in aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                  alt={`photo gallery image ${index + 1}`}
                />
              </li>
            ))}
          </ul>
        </div>
        {imageGalleryOpened && (
          <div
            onClick={imageGalleryClose}
            className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 select-none cursor-zoom-out"
          >
            <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  imageGalleryPrev();
                }}
                className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </div>
              <Image
              width={1024} 
              height={720}
                className="object-contain object-center w-full h-full select-none cursor-zoom-out"
                src={imageGalleryActiveUrl}
                alt=""
              />
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  imageGalleryNext();
                }}
                className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    <Heading title={'Donate'} subtitle={'SUPPORT US AND CHANGE THE COURSE OF A CHILD’S LIFE TODAY!'} />
    <div className='flex justify-center items-center'>
    <Link className='flex justify-center w-48  mb-10  -mt-20 border-2 px-5 py-2 border-white rounded-full bg-white text-orange-600 hover:text-white hover:bg-orange-600' href={'/donate'}>Donate Now</Link>
    </div>
    </>
  );
};

export default WorkGallery;
