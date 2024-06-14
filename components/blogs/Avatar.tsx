import React from "react";
import Image from "next/image";
import DateComponent from "./Date";
import Categories from "./Categories";

interface Author {
  node: {
    name: string;
    avatar: {
      url: string;
    };
  };
}

interface AvatarProps {
  author: Author;
  date: string;
  categories?: string[];
}

const Avatar: React.FC<AvatarProps> = ({ author, date, categories }) => {
  const { name, avatar } = author.node;

  const authorName = name || "Unknown Author";

  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex items-center justify-center">
        {avatar && (
          <div className="w-12 h-12 relative mr-4">
            <Image
              src={avatar.url}
              layout="fill"
              className="rounded-full"
              alt={authorName}
            />
          </div>
        )}
        <div className="flex flex-col">
          <div className="text-xl font-bold">{authorName}</div>
          <div>
            <DateComponent dateString={date} />
            {categories && <Categories categories={categories} />}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Image width={20} height={24} src="/assets/link.svg" alt="link" />
        <Image
          width={24}
          height={24}
          src="/assets/linkedinDark.svg"
          alt="linkedin"
        />
        <Image width={24} height={24} src="/assets/xDark.svg" alt="x" />
        <Image
          width={20}
          height={24}
          src="/assets/facebookDark.svg"
          alt="facebook"
        />
      </div>
    </div>
  );
};

export default Avatar;
