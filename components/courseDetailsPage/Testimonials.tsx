"use client";
import React, { useState } from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { testimonies, credentials } from "@/app/core/data";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

export default function Credentials() {
  const [controlledSwiper, setControlledSwiper] = useState<any>(null);

  return (
    <section>
      <div className="container max-w-[1440px] mx-auto px-5 pt-10 md:px-16 lg:pt-20 xl:pt-[55px] pb-5 md:pb-10">
        <div className="flex flex-col justify-center items-center gap-12 max-w-[898px] ">
          <div className="flex items-center gap-[17px] w-full h-full lg:h-full overflow-hidden relative">
            <button
              className="min-w-12 min-h-12 rounded-full flex items-center justify-center bg-custom-gray text-white"
              onClick={() => controlledSwiper?.slidePrev()}
            >
              <Image
                width={17}
                height={17}
                src="/assets/courseDetails/leftArrow.svg"
                alt="arrow"
                className="w-4 h-4"
              />
            </button>
            <Swiper
              pagination={{
                dynamicBullets: true,
                el: ".swiper-paginationn",
                clickable: true,
              }}
              modules={[Pagination]}
              navigation={true}
              onSwiper={setControlledSwiper}
              className="max-w-[768px]"
            >
              {credentials.map((credentials, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-8 max-w-[768px] h-auto mb-10">
                    <p className="font-bold w-auto text-center self-center md:text-2xl max-w-[768px] h-auto">
                      &quot;{credentials.text}&quot;
                    </p>
                    <div className="flex flex-col gap-4 md:flex-row justify-start items-center md:justify-center">
                      <Image
                        width={57}
                        height={57}
                        src={credentials.imageSrc}
                        alt="placeholder"
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="">
                        <p className="font-bold">{credentials.name}</p>
                        {/* <p>{testimonial.position}</p> */}
                      </div>
                      {/* <Image
                        width={141}
                        height={57}
                        className="w-[140px] h-[56px]"
                        src={testimonial.webflowSrc}
                        alt="webflow"
                      /> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="swiper-paginationn"
              style={
                {
                  position: "absolute",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  "--swiper-pagination-color": "#605EA8",
                } as any
              }
            ></div>
            {controlledSwiper && (
              <button
                className="min-w-12 min-h-12 rounded-full flex items-center justify-center bg-custom-gray text-white"
                onClick={() => controlledSwiper?.slideNext()}
              >
                <Image
                  width={17}
                  height={17}
                  src="/assets/courseDetails/rightArrow.svg"
                  alt="arrow"
                  className="w-4 h-4"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
