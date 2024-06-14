"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { CourseBundle } from "@/app/core/api";
import Link from "next/link";
import { LEVEL_FILTER_ID } from "@/app/core/constants";

interface CourseProps {
  data: CourseBundle;
  key: string;
  tags: any;
}

const CourseCard: React.FC<CourseProps> = ({ data, tags, key }) => {
  useEffect(() => {
    console.log("data", data);
  }, [data]);

  useEffect(() => {
    console.log("tags", tags);
  }, [tags]);

  const level =
    tags.find((tag: { id: number }) => tag.id === LEVEL_FILTER_ID)?.value || [];

  return (
    data && (
      <Link
        href={`/courses/${data.pretty_name}-${data.institution_bundle_id}`}
        className="w-auto md:max-w-[416px] flex flex-col gap-8"
      >
        <div className="flex flex-col gap-4 f-full">
          <Image
            width={308}
            height={180}
            className="w-[308px] h-[180px]"
            src={data.img_url}
            alt="place-holder"
          />
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-[10px] justify-between min-h-[164px]">
              <h2
                className="text-xl font-bold h-14 max-w-[308px] line-clamp-2"
                key={key}
              >
                {data.bundle_name}
              </h2>
              <div className="flex flex-col gap-[10px]">
                {/* <p className="font-medium text-gray-400">
                  34 hours . 45 lectures . 24 Materials
                </p> */}
                <div className="flex gap-2 items-center">
                  {data.cost === 0 ? (
                    <p className="text-[32px] font-bold text-custom-purple">
                      Free
                    </p>
                  ) : (
                    <p className="flex gap-3 items-center text-[32px] font-bold text-custom-purple">
                      {data.currency_symbol}
                      {data.cost}
                    </p>
                  )}
                  {data.striked_cost !== 0 && (
                    <span className="line-through font-normal text-lg text-[#6B6F73]">
                      {data.currency_symbol}
                      {data.striked_cost}
                    </span>
                  )}
                </div>
                <div className="flex gap-3">
                  {data.is_online_package === 1 && (
                    <p className="text-sm max-h-8 font-bold text-custom-green bg-custom-green bg-opacity-10 px-3 py-1">
                      Online
                    </p>
                  )}
                  {level[0] && (
                    <p className="text-sm max-h-8 font-bold text-custom-green bg-custom-green bg-opacity-10 px-3 py-1">
                      {level[0]}
                    </p>
                  )}
                  {level[1] && (
                    <p className="text-sm max-h-8 font-bold text-custom-green bg-custom-green bg-opacity-10 px-3 py-1">
                      {level[1]}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  );
};

export default CourseCard;
