import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  "img/slider-4.jpg",
  "img/slider-3.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) goToNext();
    else if (deltaX < -50) goToPrev();
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-[700px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover transition duration-700 ease-in-out"
        />

        {/* Typing Text with White Background */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white  backdrop-blur-sm px-4">
          <TypeAnimation
            sequence={[
              'Welcome to Our Website',
              1000,
              '',
              'Excellence in Every Creation',
              1000,
              '',
              'Engineering the Future',
              1000,
              ''
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
          />
          <p className="text-lg md:text-2xl mb-6 text-black">Leading the way in smart manufacturing and global impact.</p>
        </div>
      </div>

      {/* Font Awesome Styled Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="hidden md:flex items-center justify-center absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="hidden md:flex items-center justify-center absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default HeroSection;
