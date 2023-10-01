import React, { useState, useEffect } from "react";
import image1 from "../images/Ellipse 10.png";
import image2 from "../images/Ellipse 12.png";
import image3 from "../images/Ellipse 22.png";
import image4 from "../images/Ellipse 4.png";
import image5 from "../images/Ellipse 5.png";
import image6 from "../images/Ellipse 6.png";
import image7 from "../images/Ellipse 8.png";
const CircleWithImages = () => {
  const [images, setImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageUrls = [image1, image2, image3, image4, image5, image6, image7];

  const explanationTexts = [
    "Explanation 1",
    "Explanation 2",
    "Explanation 3",
    "Explanation 4",
    "Explanation 5",
    "Explanation 6",
    "Explanation 7",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % imageUrls.length;
        const hiddenImage = imageUrls[nextIndex];
        setImages((prevImages) => [...prevImages, hiddenImage]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="circle-container">
      <div className="circle">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === activeImageIndex ? "active" : ""}
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
        <div className="explanation">{explanationTexts[activeImageIndex]}</div>
      </div>
    </div>
  );
};

export default CircleWithImages;
