import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  role: string;
  imgSrc: string;
  description: string;
  linkedin: string;
  instagram: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  description,
  imgSrc,
  linkedin,
  instagram,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-center bg-white px-4 py-6">
      <Image
        width={144}
        height={144}
        className="w-[144px] h-[144px] justify-center items-center rounded-full"
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
              className="w-6 h-6"
              src="/assets/linkedinDark.svg"
              alt=""
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
              alt=""
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
