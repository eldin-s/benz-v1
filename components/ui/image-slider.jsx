"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const thumbnailContainerRef = useRef(null);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Scroll thumbnails to the active item
  useEffect(() => {
    scrollThumbnailToActiveItem();
  }, [currentIndex]);

  const scrollThumbnailToActiveItem = () => {
    if (thumbnailContainerRef.current) {
      const activeItem = thumbnailContainerRef.current.children[currentIndex];
      const containerWidth = thumbnailContainerRef.current.offsetWidth;
      const itemWidth = activeItem.offsetWidth;

      const scrollToPosition =
        activeItem.offsetLeft - (containerWidth - itemWidth) / 2;

      thumbnailContainerRef.current.scrollTo({
        left: scrollToPosition,
        behavior: "smooth", // smooth scrolling
      });
    }
  };

  return (
    <div className="relative w-full mx-auto max-w-[800px] overflow-hidden">
      {/* Main Image */}
      <div
        className="relative sm:h-[500px] h-[300px] group bg-cover bg-center rounded-2xl"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage: `url('${images[currentIndex]}')`,
        }}
      ></div>

      {/* Left and Right buttons */}
      <div className="flex justify-between absolute bottom-0 md:bottom-6 lg:bottom-0 xl:bottom-0 w-full">
        <button
          className="h-fit rounded-xl bg-bgShade border border-primary mx-1 text-primary px-2 py-9 group z-50"
          onClick={prevSlide}
        >
          <ChevronLeft className="group-hover:text-white" />
        </button>
        <button
          className="h-fit rounded-xl bg-bgShade border border-primary mx-1 text-primary px-2 py-9 group z-50"
          onClick={nextSlide}
        >
          <ChevronRight className="group-hover:text-white" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 w-9/12 sm:10/12 mx-auto">
        <div
          className="flex items-center justify-center gap-1 sm:gap-3 overflow-x-auto no-scrollbar"
          ref={thumbnailContainerRef}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url('${image}')`,
              }}
              className={`w-24 h-24 bg-cover bg-center rounded-2xl cursor-pointer ${
                index === currentIndex ? "border-2 border-primary" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
