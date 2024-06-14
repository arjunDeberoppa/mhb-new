"use client";
import React, { useEffect } from "react";
import Card from "../CourseDetailsCard";
import Button from "../Button";
import { CourseBundle } from "@/app/core/api";
import Link from "next/link";

interface Props {
  data: CourseBundle[];
}

export default function Course({ data }: Props) {
  const firstThreeCourses = data.slice(13, 16).reverse();

  useEffect(() => {
    console.log("new data", data);
  }, [data]);

  return (
    <section className="grid justify-center container max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-5 pb-16 md:pb-28">
        <div className="py-16 md:py-28 h-auto">
          {/* <div className="flex flex-col gap-16 md:flex-row md:gap-8 lg:gap-8 justify-center"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-16 lg:gap-8 items-center justify-center">
            {firstThreeCourses.map((course) => (
              <Card
                data={course}
                key={course.bundle_id}
                gap="gap-6"
                desc2=""
                titleClass="text-2xl line-clamp-2 max-w-[416px] h-16"
                desc1Class="text-lg line-clamp-3 max-w-[416px] h-[84px]"
                desc2Class="text-2xl font-bold"
              />
            ))}
          </div>
        </div>
        <Link href="/courses/">
          <Button
            href=""
            text="View all courses"
            className="block mx-auto bg-custom-purple border-2 border-custom-purple text-custom-light px-6 py-3 gap-3"
          />
        </Link>
      </div>
    </section>
  );
}
