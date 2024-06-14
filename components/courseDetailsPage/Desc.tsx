"use client";
import { CourseDetails } from "@/app/core/api";
import { montserrat } from "@/app/ui/fonts";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  courseDetails: CourseDetails;
};

const CourseDesc = (props: Props) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  const { courseDetails } = props;
  const articleRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (articleRef.current) {
      setContentHeight(articleRef.current.scrollHeight);
    }
  }, [courseDetails.bundle_overview, expanded]);

  // Check if bundle_overview is present before rendering the section
  if (!courseDetails.bundle_overview) {
    return null;
  }

  return (
    <div className="container max-w-[1440px] mx-auto pt-10 lg:pt-20 xl:pt-[55px]">
      <div className="max-w-[898px]">
        <h2 className="font-bold text-custom-black text-3xl mb-5">
          Course Description
        </h2>
        <article
          ref={articleRef}
          className={`${
            montserrat.className
          } text-custom-black text-lg font-medium ${
            expanded ? "h-auto" : "h-[400px]"
          } overflow-hidden`}
          style={{
            height: expanded
              ? "auto"
              : contentHeight < 400
              ? `${contentHeight}px`
              : "400px",
          }}
          dangerouslySetInnerHTML={{
            __html:
              courseDetails?.bundle_overview === ""
                ? "Overview"
                : courseDetails.bundle_overview,
          }}
        />

        {contentHeight > 500 && (
          <div
            className={`relative block max-w-[898px] ${
              expanded ? "h-14" : "-mt-28 h-36"
            } bg-gradient-to-t from-white to-transparent to-90% z-10`}
          >
            <button
              className="absolute bottom-0 flex mt-10 gap-2 items-center text-custom-black py-2 pr-2 text-lg font-bold focus:outline-none"
              onClick={toggleExpanded}
            >
              {expanded ? "See less" : "See more"}
              {expanded ? (
                <Image
                  width={32}
                  height={32}
                  src="/assets/courseDetails/upwordCD1.svg"
                  alt="dropdown"
                  className="w-[18.67px] h-[18.67px]"
                />
              ) : (
                <Image
                  width={32}
                  height={32}
                  src="/assets/dropdown.svg"
                  alt="dropdown"
                  className="w-[18.67px] h-[18.67px]"
                />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDesc;
