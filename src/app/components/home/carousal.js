import { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "/carousal/slider-0.png",
    "/carousal/slider-1.png",
    "/carousal/slider-2.png",
    "/carousal/slider-3.png",
  ];

  const slideInterval = useRef();

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const startSlideTimer = () => {
    slideInterval.current = setInterval(() => {
      goToNextSlide();
    }, 5000); // Changed to 5000ms (5 seconds)
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <style jsx global>{`
  @keyframes slideInFromRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOutToLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .slide-in {
    animation: slideInFromRight 1s forwards;
  }

  .slide-out {
    animation: slideOutToLeft 1s forwards;
  }
`}</style>

      <div className="mx-auto">
        <div className="relative">
          <div className="overflow-hidden relative h-[170px] rounded-lg sm:h-[330px] md:h-[400px] xl:h-[550px] 2xl:h-[600px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-transform transform duration-1000 ease-in-out ${index === currentIndex ? "translate-x-0 slide-in" : "translate-x-full slide-out"
                  }`}
                style={{ transitionDuration: "1s" }}
              >
                <img src={slide} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            onClick={goToPreviousSlide}
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-500 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
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
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-500 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
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
    </>
  );
};

export default Carousel;
