import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

const AutoScrollDivs = ({ divsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === divsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust the interval (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [divsData]);

  return (
    <div className="auto-scroll-divs-container">
      <div className="auto-scroll-content">
        {divsData.map((div, index) => (
          <div
            key={index}
            className={`auto-scroll-div ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            {div}
          </div>
        ))}
      </div>
      <div className="auto-scroll-indicators">
        {divsData.map((_, index) => (
          <div
            key={index}
            className={`auto-scroll-indicator ${
              index === currentIndex ? 'active' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default AutoScrollDivs