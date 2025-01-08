import React, { useEffect, useRef } from "react";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let interval;

    const startSlider = () => {
      interval = setInterval(() => {
        if (slider) {
          slider.scrollLeft += 1;
        }
      }, 40);
    };

    startSlider();

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/color-img/image1.jpg",
    "/color-img/image2.jpg",
    "/color-img/image3.jpg",
    "/color-img/image4.jpg",
    "/color-img/image5.jpg",
  ];

  return (
    <div
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide w-full space-x-4"
        style={{ scrollBehavior: "auto" }}
    >
    {images.map((image, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-60 h-60 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
    ))}

    </div>
  );
};

export default ImageSlider;