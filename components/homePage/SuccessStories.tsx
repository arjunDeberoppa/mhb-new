"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { successStories } from "@/app/core/data";

export default function SuccessStories() {
  const swiperSlides = successStories.map((src, index) => (
    <SwiperSlide key={index} className="w-[380px]">
      <Image
        width={380}
        height={304}
        src={src}
        alt="placeholder"
        className="h-[380.13px] w-[304px]"
      />
    </SwiperSlide>
  ));

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col gap-20 container max-w-[1440px] mx-auto my-16 md:my-28">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-1 xl:gap-20">
          <div className="flex flex-col gap-4">
            <h4>Success Stories</h4>
            <h2 className="text-4xl font-bold md:text-5xl md:max-w-xl lg:w-[616px]">
              Hear what our <br />
              <span className="text-custom-green">Successful Coaches</span>
              <br />
              have to say
            </h2>
          </div>
          {/* <p className="md:w-[616px] md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Suspendisse varius enim in eros elementum tristique.
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p> */}
        </div>
        <div className="flex gap-4">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3.2,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            freeMode={true}
            speed={12000}
            autoplay={{
              delay: 0.5,
              pauseOnMouseEnter: false,
              disableOnInteraction: true,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {swiperSlides}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
