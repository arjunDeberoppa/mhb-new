import React from "react";
import Image from "next/image";

interface SliderButtonProps {
  title: string;
  seeAll: string;
}

const SliderButton: React.FC<SliderButtonProps> = ({ title, seeAll }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4 items-center">
        <h1 className="text-[32px] font-bold">{title}</h1>
        <p className="flex gap-1 items-center text-lg font-medium">
          {seeAll}
          <Image
            width={20}
            height={10}
            className="w-5 h-5 p-1"
            src="/assets/arrowDark.svg"
            alt="arrow"
          />
        </p>
      </div>
      <div className="flex">
        <Image
          width={56}
          height={56}
          className="w-14 h-14"
          src="/assets/ArrowCircleLeft.svg"
          alt="arrow"
        />
        <Image
          width={56}
          height={56}
          className="w-14 h-14"
          src="/assets/ArrowCircleRight.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default SliderButton;
