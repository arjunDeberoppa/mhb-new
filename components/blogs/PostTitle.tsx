import React from "react";

interface PostTitleProps {
  children: string;
}

export default function PostTitle({ children }: PostTitleProps) {
  return (
    <div className="max-w-[900px]">
      <h1 className="text-4xl md:text-5xl font-bold mt-10 md:mt-[100px] mb-5 md:leading-[57.6px]">
        {children}
      </h1>
    </div>
  );
}
