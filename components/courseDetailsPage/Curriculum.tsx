"use client";
import { useEffect, useRef, useState } from "react";
import CurriculumTab from "../CurriculumTab";
import { FullCurriculum } from "@/app/core/api";
import Image from "next/image";

type Props = {
  fullCurriculum?: FullCurriculum[];
};

export default function CourseCurriculum(props: Props) {
  const { fullCurriculum } = props;

  const [expanded, setExpanded] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (articleRef.current) {
      setContentHeight(articleRef.current.scrollHeight);
    }
  }, [fullCurriculum, expanded]);

  if (!fullCurriculum || fullCurriculum.length === 0) {
    return null;
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section>
      <div className="container max-w-[1440px] mx-auto pt-10 lg:pt-20 xl:pt-[55px] flex flex-col gap-2">
        <div>
          <h2 className="font-bold text-[32px] text-custom-black">
            Course Curriculum
          </h2>
        </div>
        <div className="max-w-[898px] bg-gradient-to-b from-transparent to-white">
          <div
            ref={articleRef}
            className={`overflow-hidden transition-height duration-300 ${
              expanded ? "h-auto" : "h-[600px]"
            }`}
          >
            <CurriculumTab fullCurriculum={fullCurriculum} />
          </div>
          {contentHeight > 600 && (
            <div
              className={`relative ${
                expanded ? "h-14" : "-mt-28 h-32"
              } bg-gradient-to-b from-transparent to-white`}
            >
              <button
                className="absolute bottom-0 flex gap-2 mt-2 items-center text-custom-black py-2 pr-2 text-lg font-bold"
                onClick={toggleExpanded}
              >
                {expanded ? "See Less" : "See More"}
                <Image
                  width={32}
                  height={32}
                  src={
                    expanded
                      ? "/assets/courseDetails/upwordCD1.svg"
                      : "/assets/dropdown.svg"
                  }
                  alt="dropdown"
                  className="w-[18.67px] h-[18.67px]"
                />
              </button>
            </div>
          )}
        </div>
        {expanded && (
          <div className="w-full h-8 bg-gradient-to-t from-transparent to-white" />
        )}
      </div>
    </section>
  );
}
