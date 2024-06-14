"use client";
import React, {
  use,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import CourseCard from "../courses/CourseCard";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  CourseBundle,
  CourseDetails,
  fetcher,
  getAllCourses,
  getCourseDetails,
} from "@/app/core/api";
import useSWR from "swr";
import { INSTITUTE_ID, PER_PAGE } from "@/app/core/constants";
import { consolidateCourseList } from "@/app/core/utils";

interface OtherCoursesProps {
  id: string;
  data: CourseDetails;
  tags: any;
}

type Swiper = any;

export default function OtherCourses({ data, tags }: OtherCoursesProps) {
  const [courses, setCourses] = useState<CourseBundle[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState<Swiper | null>(null);
  const { data: courseData } = useSWR(
    `/institute/${INSTITUTE_ID}/courses?page=1&per_page=${PER_PAGE}${
      data?.exam_ids[0] ? `&categories_ids=${data?.exam_ids[0]}` : ""
    }`,
    fetcher
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileView = windowWidth < 768;

  const showArrows = courses.length > 4 || isMobileView;

  useEffect(() => {
    console.log("new data", data);
  }, [data]);

  useEffect(() => {
    if (courseData?.institute_courses) {
      let newCData = consolidateCourseList(courseData.institute_courses) || [];

      newCData = newCData.filter(
        (e) => e.institution_bundle_id !== data.institution_bundle_id
      );
      setCourses(newCData);
    }
  }, [courseData, data.institution_bundle_id]);

  return (
    <section className="overflow-hidden bg-[#F4F4F4]">
      <div className="flex flex-col gap-6 py-10 md:py-20 container max-w-[1440px] mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl min-h-14 md:text-[32px] font-bold">
            Other Similar Courses
          </h1>
          {showArrows && (
            <div className="flex">
              <Image
                className="cursor-pointer"
                onClick={() => controlledSwiper.slidePrev()}
                width={56}
                height={56}
                src="/assets/ArrowCircleLeft.svg"
                alt="arrow"
              />
              <Image
                width={56}
                height={56}
                className="cursor-pointer"
                onClick={() => controlledSwiper.slideNext()}
                src="/assets/ArrowCircleRight.svg"
                alt="arrow"
              />
            </div>
          )}
        </div>
        <div>
          <Swiper
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1.2,
              },
              450: {
                slidesPerView: 1.5,
              },
              570: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.2,
              },
              1000: {
                slidesPerView: 3.2,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={setControlledSwiper}
          >
            {courses.map((e) => (
              <SwiperSlide key={e.bundle_name}>
                <CourseCard tags={tags} key={e.bundle_name} data={e} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
