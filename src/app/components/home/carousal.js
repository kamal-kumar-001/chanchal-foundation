import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slides = [
    "/carousal/slider-0.png",
    "/carousal/slider-1.png",
    "/carousal/slider-2.png",
    "/carousal/slider-3.png",
    // "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    // "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    // "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  ];

  const slideInterval = useRef();

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const startSlideTimer = () => {
    slideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const goToSlide = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 2000); // Duration of the slide transition
  };

  const goToPreviousSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
      setIsAnimating(false);
    }, 2000); // Duration of the slide transition
  };

  const goToNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
      setIsAnimating(false);
    }, 2000); // Duration of the slide transition
  };

  return (
    <div className=" mx-auto">
      <div className="relative">
        {/* <div className="overflow-hidden relative  rounded-lg max-h-[600px]  "> */}
        <div className="overflow-hidden relative h-[170px] rounded-lg sm:h-[330px] md:h-[400px]  xl:h-[550px] 2xl:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-2000 ease-in-out ${
                index === currentIndex ? "translate-x-0" : index < currentIndex ? "-translate-x-full" : "translate-x-full"
              } ${isAnimating ? "duration-2000" : "duration-0"}`}
            >
              <img src={slide} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#ff5722]" : "bg-gray-300"}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={goToPreviousSlide}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-500  group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={goToNextSlide}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-500  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
