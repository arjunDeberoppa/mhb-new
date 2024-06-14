import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const StartTransformation = () => {
  return (
    <section>
      <div className="flex flex-col gap-6 px-5 py-16 text-custom-light bg-gradient-to-r from-custom-purple to-custom-green h-auto md:py-28">
        <div className="flex flex-col gap-6">
          <h2 className="text-[40px] leading-[48px] text-center font-bold md:leading-[67.2px] md:text-[56px]">
            Transform your fitness <br className="hidden md:inline" />
            career today!
          </h2>
          <p className="text-lg text-center">
            Explore our comprehensive courses and receive industry-relevant
            coaching
          </p>
        </div>
        <div className="flex w-full md:w-auto flex-col gap-6 self-center md:flex-row md:mt-4">
          <Link href="/start-your-fitness-career/">
            <Button
              className="flex md:h-12 w-full md:w-auto items-center justify-center gap-8 p-3 px-6 self-stretch bg-custom-purple text-custom-light"
              href=""
              text="Get Started"
            />
          </Link>
          <Link href={`/contact-us/`}>
            <Button
              className="flex md:h-12 w-full md:w-auto items-center justify-center gap-8 p-3 px-6 self-stretch border-2 border-custom-light bg-custom-light text-custom-black"
              href=""
              text="contact us"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartTransformation;
