"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TeamCard from "../TeamCard";
import ToggleSlider from "../ToggleSlider";
import { teamData } from "@/app/core/data";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

export default function Team() {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore | null>(
    null
  );

  const handleSwiper = (swiper: SwiperCore) => {
    setControlledSwiper(swiper);
  };

  return (
    <section className="overflow-hidden">
      <div className="container max-w-[1440px] mx-auto my-16 flex flex-col gap-12 md:my-28 md:gap-20 relative">
        <div>
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold">Meet Our Team</h2>
            <p>
              With Internationally Certified Coaches and Experienced Doctors
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex gap-6">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  el: ".swiper-pagination",
                  clickable: true,
                }}
                modules={[Pagination]}
                spaceBetween={24}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  400: { slidesPerView: 1.2 },
                  500: { slidesPerView: 1.7 },
                  650: { slidesPerView: 2 },
                  768: { slidesPerView: 1.8 },
                  900: { slidesPerView: 2 },
                  1000: { slidesPerView: 2.2 },
                  1150: { slidesPerView: 2.5 },
                  1224: { slidesPerView: 3 },
                  1300: { slidesPerView: 3.2 },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={handleSwiper}
              >
                {teamData.map((member, index) => (
                  <SwiperSlide key={index}>
                    <TeamCard
                      name={member.name}
                      designation={member.designation}
                      imgSrc={member.imgSrc}
                      text={member.text}
                      linkedin={member.linkedin}
                      instagram={member.instagram}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div
          className="swiper-pagination"
          style={
            {
              position: "absolute",
              bottom: "20px",
              left: "100px",
              "--swiper-pagination-color": "#605EA8",
            } as any
          }
        ></div>
        {/* Positioning the pagination bullets */}
        <ToggleSlider swiper={controlledSwiper} />
      </div>
    </section>
  );
}
