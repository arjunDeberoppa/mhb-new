"use client";
import React, { useState, useCallback, useEffect } from "react";
import Testimony from "../AchiverTemplate";
import ToggleSlider from "../ToggleSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { testimonies } from "@/app/core/data";
import { Pagination } from "swiper/modules";
import { CSSProperties } from "react";

import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([]);
SwiperCore.use([Pagination]);

export default function Testimonies() {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());

  const handleSwiper = (swiper: SwiperCore) => {
    setControlledSwiper(swiper);
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleIntersection = useCallback(
    (entry: IntersectionObserverEntry, isActive: boolean) => {
      const index = parseInt(
        entry.target.getAttribute("data-index") || "0",
        10
      );
      setVisibleIndices((prevIndices) => {
        const newIndices = new Set(prevIndices);
        if (isActive) {
          newIndices.add(index);
        } else {
          newIndices.delete(index);
        }
        return newIndices;
      });
    },
    []
  );

  useEffect(() => {
    if (controlledSwiper) {
      controlledSwiper.on("slideChange", () =>
        handleSlideChange(controlledSwiper)
      );
    }

    return () => {
      if (controlledSwiper) {
        controlledSwiper.off("slideChange", () =>
          handleSlideChange(controlledSwiper)
        );
      }
    };
  }, [controlledSwiper]);

  return (
    <section className="bg-gray-50 relative max-w-[1440px] mx-auto">
      <div className="pb-10 md:pb-20">
        <Swiper
          pagination={{
            dynamicBullets: true,
            el: ".swiper-paginationn",
            clickable: true,
          }}
          spaceBetween={16}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 1,
            },
          }}
          onSlideChange={handleSlideChange}
          onSwiper={handleSwiper}
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index} data-index={index}>
              <Testimony
                imageSrc={testimony.imageSrc}
                videoSrc={testimony.videoSrc}
                text={testimony.text}
                name={testimony.name}
                isActive={index === activeIndex && visibleIndices.has(index)}
                onIntersect={handleIntersection}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="swiper-paginationn"
        style={
          {
            position: "absolute",
            bottom: "70px",
            left: "130px",
            "--swiper-pagination-color": "#605EA8",
          } as CSSProperties
        }
      ></div>
      <div className="container mx-auto max-w-[1440px] pb-10 md:pb-20">
        <ToggleSlider swiper={controlledSwiper} />
      </div>
    </section>
  );
}
