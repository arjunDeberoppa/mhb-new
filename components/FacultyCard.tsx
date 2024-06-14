import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FacultyCardProps {
  name: string;
  role: string;
  description: string;
  imgSrc: string;
  linkedin: string;
  instagram: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  role,
  description,
  imgSrc,
  linkedin,
  instagram,
}) => {
  return (
    <div className="flex flex-col gap-6 items-center text-center">
      <Image
        width={304}
        height={296}
        className="justify-center max-w-[304px] max-h-[296px] object-cover"
        src={imgSrc}
        alt="placeholder"
      />
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xl font-bold">{name}</p>
          <p className="text-lg">{role}</p>
        </div>
        {/* <p>{description}</p> */}
      </div>
      <div className="flex gap-3.5 justify-center">
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
              src="/assets/linkedinDark.svg"
              alt="LinkedIn"
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
              src="/assets/home/Instagram.svg"
              alt="Basketball"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default FacultyCard;
