"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContentSection from "../Content";
import Button from "../Button";
import CustomCard from "../CustomCard";
import Link from "next/link";
import { CourseBundle } from "@/app/core/api";

interface Props {
  data: CourseBundle[];
}

export default function Benefits({ data }: Props) {
  return (
    <section className="relative w-full h-[1100px] md:h-[1200px] lg:h-full overflow-hidden desc-section">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/section-6-1.webp')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-custom-purple to-custom-green opacity-80"></div>
      <div className="relative text-custom-light flex flex-col my-16 gap-16 lg:flex-row md:gap-20 container max-w-[1440px] mx-auto md:my-52">
        <div className="flex flex-col gap-2 md:gap-4 lg:max-w-[616px]">
          <ContentSection
            title="Benefits"
            subtitle={data[16].bundle_name}
            subtitle_1=""
            description={data[16].bundle_description}
            subtitleColor="text-custom-light-green"
            subtitleSize="md:text-5xl text-[36px] w-full"
            w_content="lg:max-w-[616px] mb-12"
          />
          <div className="flex flex-col gap-2 md:flex-row lg:max-w-[616px]">
            <Link href="/start-your-fitness-career/">
              <Button
                className="text-white bg-white bg-opacity-40 py-3 px-6 border-none "
                href=""
                text="Get Started!"
              ></Button>
            </Link>
            {/* <Link href="/courses/">
              <Button
                className="bg-transparent text-white py-3 px-6 gap-2 flex justify-center items-center border-none"
                href=""
                text="Explore Courses"
              >
                <Image
                  width={24}
                  height={24}
                  src="/assets/arrow_1.svg"
                  alt="arrow"
                />
              </Button>
            </Link> */}
          </div>
        </div>
        <div className="lg:ml-20 lg:mt-20 relative">
          {/* <CustomCard
            className="custom-card absolute z-50 top-0 -left-5 rotate-3"
            title="Community of Passionate Coaches"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,"
          />
          <CustomCard
            className="custom-card absolute z-50 top-0 -left-5 rotate-2"
            title="Community of Passionate Coaches"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,"
          />
          <CustomCard
            className="custom-card absolute z-50 top-0 -left-5 rotate-1"
            title="Community of Passionate Coaches"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,"
          />
          <CustomCard
            className="custom-card absolute z-50 top-0 -left-5 "
            title="Community of Passionate Coaches"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,"
          /> */}
          <Image
            width={416}
            height={256}
            src={data[16].img_url}
            alt="placeholder"
            className="shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
