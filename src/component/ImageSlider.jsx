import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the next index, looping back to 0 when it reaches the end
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 3000); // Change image every 3 seconds

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(timer);
    };
  }, [currentIndex, images]);

  return (
    <div className="image-slider">
      <div className="image-container">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <p className="caption">{images[currentIndex].caption}</p>
      </div>
    </div>
  );
};

export default ImageSlider;