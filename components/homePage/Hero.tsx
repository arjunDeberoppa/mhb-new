import React from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-custom-light border-t border-custom-gray">
      <div className="container max-w-[1440px] py-16 md:py-28 mx-auto text-center">
        <div className="flex flex-col gap-5 md:max-w-3xl mx-auto">
          <h2 className="text-[40px] leading-[48px] font-bold md:text-[56px] md:leading-[67.2px]">
            <span className="block text-custom-green">Give Wings to your</span>
            Health Coaching Career
          </h2>
          <p className="text-base md:text-lg">
            Welcome to MHB Academy. We specialize in offering cutting-edge
            courses designed to equip you with the knowledge and skills needed
            for kickstarting a successful career in Health Coaching.
          </p>
        </div>
        <Link href="/courses/">
          <Button
            className="hidden md:flex mx-auto bg-custom-purple text-custom-light mt-6 h-12 w-48 justify-center items-center gap-3"
            href=""
            text="Get Started"
          >
            <Image
              width={24}
              height={24}
              className="w-6 h-6"
              src="/assets/arrow.svg"
              alt="arrow"
            />
          </Button>
        </Link>
        <Link href="/courses/">
          <Button
            className="md:hidden flex mx-auto bg-custom-purple text-custom-light mt-6 h-12 w-64 justify-center items-center gap-3"
            href=""
            text=""
          >
            EXPLORE COURSES
          </Button>
        </Link>
        {/* <Image
          className="mt-12 h-full w-full"
          src="/assets/hero-section.png"
          alt="herosection"
          width={1440}
          height={1440}
          priority
        /> */}
      </div>
    </section>
  );
}
