import React from "react";
import "./App.css";
import ImageSlider from "./ImageSlider";
import image1 from "../images/Ellipse 8.png";
import image2 from "../images/Ellipse 5.png";
import image3 from "../images/Ellipse 6.png";
import image4 from "../images/Ellipse 4.png";
import image5 from "../images/Ellipse 12.png";
import image6 from "../images/Ellipse 10.png";
import image7 from "../images/Ellipse 9.png";

function GroupOfImages() {
  const images = [
    {
      src: image1,
      alt: "Image 1",
      caption: "التتبع الدقيق للتدفقات المالية",
    },
    {
      src: image2,
      alt: "Image 2",
      caption: "دقة ومرونة في تسعير السيارات",
    },
    {
      src: image3,
      alt: "Image 3",
      caption: "متابعة مستندات وعقود الفروع عبر الانترنت",
    },
    {
      src: image4,
      alt: "Image 4",
      caption: "سهولة ادارة البيانات والحسابات",
    },
    {
      src: image5,
      alt: "Image 5",
     caption: "الموثوقية في ابرام العقود",
    },
    {
      src: image6,
      alt: "Image 6",
       caption: "توفير كافة البيانات المتعلقة بوثائق السيارات وكيفية تجهيزها",
    },
    {
      src: image7,
      alt: "Image 7",
      caption: "أرشفة العقود وجميع التعاملات",
    },
    
    // Add more images with explanations as needed
  ];

  return (
    <div className="GroupOfImages">
      <ImageSlider images={images} />
    </div>
  );
}

export default GroupOfImages;
