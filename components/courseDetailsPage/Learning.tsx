"use client";
import React from "react";
import Image from "next/image";
import { getCustomFieldById, parseHTMLAndGetLiText } from "@/app/core/utils";
import { CUSTOM_WHAT_LEARN } from "@/app/core/constants";

export default function LearningPoints({ tags }: any) {
  const whatLearn = getCustomFieldById(tags, CUSTOM_WHAT_LEARN);
  const parsedLiText = parseHTMLAndGetLiText(whatLearn || "");

  if (!parsedLiText || parsedLiText.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="container max-w-[1440px] mx-auto pt-10 md:pt-28 lg:pt-20 xl:pt-[55px]">
        <div className="p-8 bg-[#E5E5E5] lg:w-[898px] flex flex-col gap-8">
          <h2 className="text-3xl md:text-[32px] font-bold">
            What you&apos;ll learn
          </h2>
          <div className="grid grid-cols-2 gap-4 justify-center">
            {parsedLiText.map((item, index) => (
              <div className="flex gap-2" key={index}>
                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  src="/assets/check.svg"
                  alt="check"
                />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
