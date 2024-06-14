import React from "react";
import Image from "next/image";

const FeaturedMediaSection = () => {
  return (
    <section className="bg-custom-gray md:py-12">
      <div className="container max-w-[1440px] mx-auto py-16">
        <div className="flex flex-col gap-8 md:flex-row md:gap-10 xl:gap-20 md:justify-between">
          <p className="font-bold md:w-[365px]">
            Featured by the world&apos;s leading
            <br className="hidden md:inline" />
            <span className="ml-1 sm:ml-0">media companies</span>
          </p>
          <div className="flex flex-wrap gap-8 lg:flex-nowrap md:gap-8">
            <Image
              width={140}
              height={29}
              src="/assets/ndtv.svg"
              alt="NDTV"
              className="max-w-[135px] h-auto object-contain"
            />
            <Image
              width={103}
              height={47}
              src="/assets/section-13-2.png"
              alt="Section 13-2"
              className="max-w-[98px] h-auto object-contain"
            />
            <Image
              width={107}
              height={42}
              src="/assets/yourstory.svg"
              alt="YourStory"
              className="max-w-[85px] h-auto object-contain"
            />
            <Image
              width={325}
              height={46}
              src="/assets/section-13-4.png"
              alt="Section 13-4"
              className="max-w-[320px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMediaSection;
