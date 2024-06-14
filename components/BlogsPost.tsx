import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  slug: string;
  className: string;
  imgClassName: string;
  imgSrc: string;
  title: string;
  name: string;
  description: string;
  descriptionStyle: string;
  divWidth: string;
  heading: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  slug,
  className,
  imgClassName,
  imgSrc,
  title,
  name,
  description,
  descriptionStyle,
  divWidth,
  heading,
}) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className={`flex flex-col gap-6 ${className}`}>
        <Image
          width={640}
          height={400}
          className={`${imgClassName} object-cover`}
          src={imgSrc}
          alt="place-holder"
          priority
        />
        <div>
          <div className={divWidth}>
            <div className="flex flex-col justify-between gap-4">
              <div className="flex gap-4">
                <button className="px-2 py-1 text-sm font-bold bg-custom-gray">
                  {name}
                </button>
                <p className="px-2 py-1 text-sm font-bold">5 min read</p>
              </div>
              <div className="">
                <h2 className={`${heading} font-bold`}>{title}</h2>
                <p
                  className={`${descriptionStyle} mt-2`}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
            <button className="flex items-center gap-2 font-bold">
              READ MORE
              <Image
                width={13.41}
                height={13.41}
                className="w-[13.41px] h-[13.41px]"
                src="/assets/rightArrow.svg"
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
