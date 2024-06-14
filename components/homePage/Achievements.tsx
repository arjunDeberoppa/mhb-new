import React from "react";
import Image from "next/image";
import ContentSection from "../Content";
import Button from "../Button";
import Counter from "../Counter";
import Link from "next/link";

export default function Achievements() {
  return (
    <section
      className="relative w-full md:h-auto text-white bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('./assets/section-2.webp')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-custom-purple opacity-80 z-0 flex flex-col gap-20"></div>
      <div className="relative container max-w-[1440px] mx-auto py-16 md:py-28">
        <ContentSection
          title="Achievements"
          subtitle="Experience The Power of "
          subtitle_1="MHB Academy"
          description="With 30+ Years of combined faculty experience we are confident we can give wings to your career as a Health Coach."
          subtitleColor="text-custom-light-green"
          subtitleSize="text-5xl"
          w_content="max-w-3xl mb-12"
        />
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
              <Counter count="4+" description="Years of Industry Experience" />
              <Counter
                count="1000+"
                description="hours of lectures delivered"
              />
              <Counter count="3000+" description="students certified" />
              <Counter count="100%" description="Placement Assistance" />
            </div>
          </div>
          <div className="flex">
            <Link href="/start-your-fitness-career/">
              <Button
                className="text-white bg-white bg-opacity-40 py-3 px-6 border-none "
                href=""
                text="Learn more"
              ></Button>
            </Link>
            <div className="loginButton signup">
              <Button
                className="flex gap-2 bg-transparent text-white py-3 px-6 items-center border-none"
                href=""
                text=""
              >
                <span>Sign Up</span>
                <Image
                  width={24}
                  height={24}
                  src="/assets/arrow_1.svg"
                  alt="arrow"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
