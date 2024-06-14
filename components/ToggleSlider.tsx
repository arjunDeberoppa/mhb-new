// ToggleSlider.tsx
import React from "react";
import Image from "next/image";

interface ToggleSliderProps {
  swiper: any;
}

const ToggleSlider: React.FC<ToggleSliderProps> = ({ swiper }) => {
  if (!swiper) return null;

  const handleClick = (index: number) => {
    console.log("Clicked dot:", index);
    swiper.slideTo(index);
  };

  return (
    <div className="flex justify-end">
      {/* <div className="flex gap-2 h-2 self-center">
        {Array.from({ length: totalSlides }, (_, index) => (
          <Image
            key={index}
            width={8}
            height={8}
            onClick={() => handleClick(index)}
            className={`w-2 h-2 cursor-pointer ${
              swiper.activeIndex === index
                ? "opacity-100 dark-dot"
                : "opacity-50 light-dot"
            }`}
            src="/assets/darkDot.svg"
            alt={`dot-${index}`}
          />
        ))}
      </div> */}
      <div className="flex gap-4">
        <button
          className="w-12 h-12 rounded-full flex items-center justify-center bg-custom-gray text-white"
          onClick={() => swiper.slidePrev()}
        >
          <Image
            width={16}
            height={16}
            className="w-4 h-4"
            src="/assets/leftArrow.svg"
            alt="left-arrow"
          />
        </button>
        <button
          className="w-12 h-12 rounded-full flex items-center justify-center bg-custom-gray text-white"
          onClick={() => {
            swiper.slideNext();
            const activeIndex = swiper.activeIndex;
            const dots = document.querySelectorAll(".dark-dot");
            if (dots) {
              dots.forEach((dot) => dot.classList.remove("dark-dot"));
            }
            const activeDot = document.querySelector(
              `.light-dot:nth-child(${activeIndex + 1})`
            );
            if (activeDot) {
              activeDot.classList.add("dark-dot");
            }
          }}
        >
          <Image
            width={16}
            height={16}
            className="w-4 h-4"
            src="/assets/rightArrow.svg"
            alt="right-arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default ToggleSlider;
