import React from "react";
import Image from "next/image";

interface CustomCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const VisionCard: React.FC<CustomCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Image
        width={48}
        height={49}
        className="w-12 h-[49px]"
        src={imageSrc}
        alt={title}
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default VisionCard;
