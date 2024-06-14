import Avatar from "./Avatar";
import DateComponent from "./Date";
import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";
import Categories from "./Categories";
import React from "react";

interface CoverImage {
  sourceUrl: string;
}

interface PostHeaderProps {
  title: string;
  coverImage: {
    node: CoverImage;
  };
  date: string;
  author: any;
  categories?: string[];
}

const PostHeader: React.FC<PostHeaderProps> = ({
  title,
  coverImage,
  date,
  author,
  categories,
}: PostHeaderProps) => {
  const {
    node: { sourceUrl },
  } = coverImage;

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-5 md:mb-14 mt-4 md:mt-10">
        <Avatar author={author} date={date} categories={categories} />
      </div>
      <div className="max-w-[1440px] mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={{ sourceUrl }} />
      </div>
      {/* <div className="max-w-[768px]">
        <div className="block md:hidden mb-6">
          <Avatar author={author} date={date} categories={categories} />
        </div>
      </div> */}
    </>
  );
};

export default PostHeader;
