import React from "react";
import Image from "next/image";

interface CustomCardProps {
  title: string;
  description: string;
  className?: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`flex justify-center items-center text-custom-black ${className}`}
    >
      <div
        className={`relative bg-custom-light shadow-lg w-full h-auto sm:h-[350px] lg:w-full px-8 py-8 flex flex-col gap-3 m-5 lg:h-auto xl:h-[266px] xl:w-full ${className}`}
      >
        <Image
          width={40}
          height={40}
          src="/assets/cardLogo.svg"
          alt="card-logo"
          className="h-10 w-10"
        />
        <h4 className="leading-7 text-xl font-bold">{title}</h4>
        <p className="leading-6">{description}</p>
      </div>
    </div>
  );
};

export default CustomCard;
