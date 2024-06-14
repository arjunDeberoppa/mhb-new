import React from "react";
import Image from "next/image";
import VisionCard from "../VisionCard";

export default function Vision() {
  return (
    <section>
      <div className="py-16 container max-w-[1440px] mx-auto md:py-28 flex flex-col xl:flex-row gap-12 md:gap-20 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5 md:gap-6">
            <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-bold">
              Transforming Lives Through Comprehensive and Industry Relevant
              Fitness Courses
            </h2>
            <p className="text-base md:text-lg">
              At MHBAcademy, we&apos;re passionate about empowering individuals
              to unlock their full potential through nutrition, lifestyle
              coaching, and fitness education. Our comprehensive coaching
              program will equip you with all the skills and credentials to
              become a certified health coach, enabling you to make a meaningful
              impact in the lives of your clients and community.
            </p>
          </div>
          <div className="my-2 flex flex-col md:flex-row gap-6">
            <VisionCard
              imageSrc="/assets/about/vision.svg"
              title="Our Vision"
              description="We aspire to become India's foremost providers of nutrition and wellness education, with a special focus on women's health."
            />
            <VisionCard
              imageSrc="/assets/about/mission.svg"
              title="Our Mission"
              description="Our mission is to educate one million students, empowering them to embark on successful careers in ‘Online health coaching’"
            />
          </div>
        </div>
        <Image
          className="w-auto xl:w-[616px]"
          src="/assets/about/about-2.webp"
          alt="placeholder"
          width={616}
          height={640}
          priority
        />
      </div>
    </section>
  );
}
