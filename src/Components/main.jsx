import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/img/slider-1.jpg',
];

const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) goToNext(); // swipe left
    else if (deltaX < -50) goToPrev(); // swipe right
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-[700px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-full object-cover transition duration-700 ease-in-out"
      />

      {/* Left Button (hidden on small screens) */}
      <button
        onClick={goToPrev}
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
      >
        ◀
      </button>

      {/* Right Button (hidden on small screens) */}
      <button
        onClick={goToNext}
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full hover:bg-black/60"
      >
        ▶
      </button>
    </div>
  );
};

export default Main;
