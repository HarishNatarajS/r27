import React, { useState, useEffect } from 'react';

function Slider() {
  // State to keep track of the current active slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to manage auto-slide functionality
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  // Image data
  const images = [
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png',
    'img/1.jpg', // Ensure this matches the actual first image when looping
  ];

  // Go to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoSliding(false);
  };

  // Go to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoSliding(false);
  };

  // Go to a specific slide
  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoSliding(false); // Stop auto-sliding
  };

  // Stop auto-slide when clicking on an image
  const handleImageClick = () => {
    setIsAutoSliding(false);
  };

  // Auto-slide effect
  useEffect(() => {
    if (isAutoSliding) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // 3 seconds interval

      return () => clearInterval(interval); // Cleanup on unmount or state change
    }
  }, [isAutoSliding, currentIndex]);



  return (
    <div className="slider">
      <div className="list">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(-${(currentIndex % images.length) * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              onClick={() => {
                handleImageClick(); // Stop auto-sliding
                // Optionally, restart auto-sliding after clicking
              }}
            />
          </div>
        ))}
      </div>

      <div className="buttons">
        <button id="prev" onClick={handlePrev}>
          &lt;
        </button>
        <button id="next" onClick={handleNext}>
          &gt;
        </button>
      </div>

      <ul className="dots">
        {images.map((_, index) => (
          <li
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
