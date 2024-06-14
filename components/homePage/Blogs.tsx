import React from "react";
import Card from "../CourseDetailsCard";
import { CourseBundle } from "@/app/core/api";

interface Props {
  data: CourseBundle[];
}

export default function BlogsSection({ data }: Props) {
  const ThreeCourses = data.slice(3, 6);

  return (
    <section className="bg-gray-50 container max-w-[1440px] mx-auto">
      <div className="flex items-center flex-col gap-12 py-16 md:py-28">
        <div className="flex flex-col gap-3 text-center">
          <h4 className="font-bold">Fitness Blogs</h4>
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-4xl">Stay Fit and Healthy</h2>
            <p>Read our latest blog posts for valuable health tips</p>
          </div>
        </div>
        <div className="flex justify-center flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 justify-center">
            {ThreeCourses.map((course) => (
              <Card
                data={course}
                key={course.bundle_id}
                gap="gap-6"
                desc2=""
                titleClass="text-2xl max-w-[416px]"
                desc1Class="line-clamp-3 text-lg max-w-[416px]"
                desc2Class="text-2xl font-bold"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
