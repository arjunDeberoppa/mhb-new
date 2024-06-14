import React from "react";
import CourseCard from "./CourseCard";
import { CourseTag } from "@/app/core/api";

interface DisplayCoursesProps {
  courses: any[];
  courseLoading: boolean;
  tags: CourseTag[];
}

const CourseSkeleton = () => (
  <div className="flex flex-col w-[308px]">
    <div className="w-full h-[180px] bg-gray-200 rounded-t-lg"></div>
    <div className="flex flex-col gap-[10px] p-4 bg-white rounded-b-lg shadow-md">
      <div className="w-full h-[28px] bg-gray-200 rounded"></div>
      <div className="w-3/4 h-[20px] bg-gray-200 rounded"></div>
      <div className="flex gap-2 mt-2">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="w-[80px] h-[28px] bg-gray-200 rounded-full"
          ></div>
        ))}
      </div>
      <div className="w-[125px] h-[48px] bg-gray-200 rounded-full mt-4"></div>
    </div>
  </div>
);

const DisplayCourses: React.FC<DisplayCoursesProps> = ({
  courses,
  courseLoading,
  tags,
}) => {
  const gridClasses =
    "grid justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[27px] gap-y-8 sm:gap-y-16 md:gap-y-[96px]";

  return (
    <div
      className={`relative ${gridClasses} px-5 md:px-16 pt-5 md:pt-16 pb-10 md:pb-[233px] max-w-[1440px] mx-auto`}
    >
      {courseLoading ? (
        <>
          {[...Array(8)].map((_, index) => (
            <CourseSkeleton key={index} />
          ))}
        </>
      ) : courses.length > 0 ? (
        [...courses]
          .reverse()
          .map((course) => (
            <CourseCard
              key={course.bundle_id}
              data={course}
              tags={course.tags}
            />
          ))
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-bold text-[32px] text-custom-black text-opacity-30">
            Oops! No courses found
          </h2>
        </div>
      )}
    </div>
  );
};

export default DisplayCourses;
