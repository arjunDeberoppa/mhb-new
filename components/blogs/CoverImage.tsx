import React from "react";
import Image from "next/image";

interface CoverImageProps {
  title: string;
  coverImage: {
    sourceUrl: string;
  };
  slug?: string;
}

const CoverImage: React.FC<CoverImageProps> = ({ title, coverImage, slug }) => {
  const { sourceUrl } = coverImage;
  console.log("SourceUrl", sourceUrl);

  return (
    <div className="max-w-[1440px] h-auto">
      <Image
        width={1440}
        height={600} // Adjust height as needed
        src={sourceUrl}
        alt={title}
        className="w-full h-auto"
        objectFit="cover"
      />
    </div>
  );
};

export default CoverImage;
