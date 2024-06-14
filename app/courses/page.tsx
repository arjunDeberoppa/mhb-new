"use client";
import React, { useEffect, useState } from "react";
import SearchBanner from "@/components/courses/SearchBanner";
import { useDebounce } from "@uidotdev/usehooks";
import useSWR from "swr";
import { fetcher, instance } from "../core/api";
import { INSTITUTE_ID, PER_PAGE } from "../core/constants";
import { consolidateCourseList } from "../core/utils";
import DisplayCourses from "@/components/courses/DisplayCourses";
import Nav from "@/components/courses/Nav";

export default function Courses() {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState<any[]>([]);
  const [cat, setCat] = useState<number | null>(null);
  const { data: catData } = useSWR(
    `/builder/institute/${INSTITUTE_ID}/course/categories`,
    fetcher
  );

  const debouncedSearchTerm = useDebounce(search, 1000);
  const { data: courseData, isLoading: courseLoading } = useSWR(
    `/institute/${INSTITUTE_ID}/courses?page=1&per_page=${PER_PAGE}&get_tags=1${
      cat ? `&categories_ids=${cat}` : ""
    }${debouncedSearchTerm.trim() && `&search=${debouncedSearchTerm}`}`,
    fetcher
  );

  useEffect(() => {
    if (courseData?.institute_courses) {
      let newCData = consolidateCourseList(courseData.institute_courses) || [];
      setCourses(newCData);

      document.title = "Courses | MHB | Online Fitness";
    }
  }, [courseData]);

  return (
    <>
      <SearchBanner search={search} updateSearch={setSearch} />
      <Nav catData={catData} cat={cat} setCat={setCat} />
      <DisplayCourses
        tags={courses}
        courses={courses}
        courseLoading={courseLoading}
      />
    </>
  );
}
