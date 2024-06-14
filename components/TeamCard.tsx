import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TestimonialProps {
  name: string;
  designation: string;
  text: string;
  imgSrc: string;
  linkedin: string;
  instagram: string;
}

const TeamCard: React.FC<TestimonialProps> = ({
  name,
  designation,
  text,
  imgSrc,
  linkedin,
  instagram,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <Image
        width={300}
        height={295}
        src={imgSrc}
        className="h-[295px] w-[300px] md:h-[395px] md:w-[400px] object-cover"
        alt="testimonial-image"
      />
      <div className="flex flex-col gap-4 max-w-[300px] md:max-w-[400px]">
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <h4 className="text-lg">{designation}</h4>
        </div>
        {/* <p className="max-w-[290px] md:max-w-[380px]">{text}</p> */}
      </div>
      <div className="flex gap-4">
        {linkedin && (
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              width={24}
              height={24}
              className="w-6 h-6"
              src="/assets/linkedinDark.svg"
              alt="linkedin"
            />
          </Link>
        )}
        {instagram && (
          <Link
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              width={24}
              height={24}
              className="w-6 h-6"
              src="/assets/home/Instagram.svg"
              alt="instagram"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
