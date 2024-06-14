"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Button from "../Button";
import List from "../List";
import ContentSection from "../Content";
import { CourseBundle } from "@/app/core/api";
import Link from "next/link";

interface Props {
  data: CourseBundle[];
}

export default function BestSeller({ data }: Props) {
  return (
    <section>
      <div className="w-auto md:w-full md:h-auto container max-w-[1440px] mx-auto mt-16 flex flex-col lg:flex-row md:gap-20 gap-12 justify-center items-center">
        <div className="order-2 md:order-1 w-custom-img flex flex-col gap-6 justify-center ">
          <Link href="/courses/DiplomainNutritionLifestyleCoaching-42473">
            <Image
              width={360}
              height={230}
              className="w-[335px] md:w-[360px] md:h-[230px]"
              src={data[16].img_url}
              alt="course-img"
            />
          </Link>
          <div className="flex gap-1 sm:gap-4">
            <p className="font-montserrat font-bold text-4xl tracking-tight text-custom-black">
              {data[16].cost === 0 ? "Free" : `₹${data[16].cost}`}
            </p>
            {/* <Image
              width={2}
              height={2}
              className="w-1 h-10"
              src="/assets/line-2.svg"
              alt="line"
            /> */}
            {/* <aside className="flex flex-col">
              <div className="flex gap-1">
                <Image
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  src="/assets/star.svg"
                  alt="star"
                />
                <Image
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  src="/assets/star.svg"
                  alt="star"
                />
                <Image
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  src="/assets/star.svg"
                  alt="star"
                />
                <Image
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  src="/assets/star.svg"
                  alt="star"
                />
                <Image
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  src="/assets/semi_star.svg"
                  alt="star"
                />
              </div>
              <p>(4.7 stars) • 129 reviews</p>
            </aside> */}
          </div>
          <div className="flex flex-col gap-4 h-[154px]">
            <Link href="/start-your-fitness-career/">
              <Button
                href=""
                text="talk to our expert"
                className="flex items-center justify-center p-3 px-6 flex-1 self-stretch bg-custom-purple md:w-[360px] w-full text-custom-light max-h-[51px]"
              />
            </Link>
            <Link href="/courses/DiplomainNutritionLifestyleCoaching-42473">
              <Button
                href=""
                text="Buy Now"
                className="flex w-[335px] md:w-[360px] items-center justify-center p-3 px-6 self-stretch border-2 border-gray-300 bg-gray-300 "
              />
            </Link>
            {/* <p className="text-xs text-center">30-Day Money-Back Guarantee</p> */}
          </div>
        </div>
        <div className="order-1 md:order-2 flex flex-col md:w-auto gap-8 text-custom-black">
          <ContentSection
            title="Our Flagship Course"
            subtitle={data[16].bundle_name}
            subtitle_1=""
            description={data[16].bundle_description}
            subtitleColor="text-custom-black"
            subtitleSize="text-[40px]"
            w_content="w-auto"
          />
          <nav className="bg-gray-200 flex flex-col gap-4 p-8">
            <p className="font-montserrat font-medium leading-6 text-lg">
              Includes:
            </p>
            <nav className="flex flex-col gap-4 md:flex-row md:gap-20 lg:gap-2 xl:gap-20 px-2">
              <nav className="flex flex-col gap-4">
                <List value="Expert-led video lessons" />
                <List value="Interactive quizzes and assignments" />
                <List value="Personalized coaching support" />
                <List value="Access to exclusive resources" />
              </nav>
              <nav className="flex flex-col gap-4">
                <List value="Practical case studies" />
                <List value="Networking opportunities" />
                <List value="Lifetime access to course materials" />
                <List value="Certification upon completion" />
              </nav>
            </nav>
          </nav>
        </div>
      </div>
    </section>
  );
}
