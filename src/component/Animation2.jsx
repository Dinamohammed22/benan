import React from 'react';
import image1 from "../images/Ellipse 10.png";
import image2 from "../images/Ellipse 12.png";
import image3 from "../images/Ellipse 22.png";
import image4 from "../images/Ellipse 4.png";
import image5 from "../images/Ellipse 5.png";
import image6 from "../images/Ellipse 6.png";
import image7 from "../images/Ellipse 8.png";

const CircleWithImages = () => {
  const imageUrls = [image1, image2, image3, image4, image5, image6, image7];
  return (
    <div className="circle-container">
      <div className="circle">
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            className={`image-${index + 1}`}
            src={imageUrl}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleWithImages;