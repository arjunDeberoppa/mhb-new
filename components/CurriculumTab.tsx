"use client";

import { FullCurriculum } from "@/app/core/api";
import { CaretDown } from "phosphor-react";

import Image from "next/image";
import { useEffect } from "react";
import CourseSection from "./courseDetailsPage/Courses";

type Props = {
  fullCurriculum: FullCurriculum[];
};

const CurriculumTab = (props: Props) => {
  const { fullCurriculum } = props;

  return (
    <div className="space-y-0 max-w-[898px]">
      {fullCurriculum.map((curriculum) => {
        if (!curriculum.subject_name.includes("IN23_")) {
          return (
            <div key={curriculum.id} className="bg-gray-light">
              <div className="flex flex-col w-full gap-3 text-left group">
                <span className="text-lg mt-8 font-bold lg:text-2xl mb-5">
                  {curriculum.subject_name}
                </span>
                {/* <span className="text-lg mb-5">
                  7 Sections . 17 Lessons . 14h 36m Total Length
                </span> */}
              </div>
              <div className="">
                {curriculum.sections.length > 0
                  ? curriculum.sections.map((section) => (
                      <CourseSection
                        key={section.section_id}
                        section={section}
                      />
                    ))
                  : "No Content"}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CurriculumTab;
