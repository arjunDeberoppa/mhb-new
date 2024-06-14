"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CourseBundle } from "@/app/core/api";

interface CardProps {
  imgSrc?: string;
  title?: string;
  desc1?: string;
  desc2?: string;
  price?: number | string;
  titleClass: string;
  desc1Class: string;
  desc2Class: string;
  gap: string;
  data: CourseBundle;
}

const Card: React.FC<CardProps> = ({
  desc2,
  titleClass,
  desc1Class,
  desc2Class,
  gap,
  data,
}) => {
  useEffect(() => {
    console.log("da", data);
  }, [data]);

  return (
    data && (
      <Link
        href={`/courses/${data.pretty_name}-${data.institution_bundle_id}`}
        className="w-auto md:w-full flex flex-col gap-6"
      >
        <Image
          className="aspect-[3/2]"
          width={416}
          height={300}
          alt="place-holder"
          src={data.img_url}
        />
        <div className={`flex flex-col ${gap}`}>
          <h3 className={`${titleClass} font-bold mr-3`}>{data.bundle_name}</h3>
          <p className={desc1Class}>{data.bundle_description}</p>
          <p className={desc2Class}>
            {data.cost === 0 ? "Free" : `${data.currency_symbol}${data.cost}`}
          </p>
          <p className={desc2Class}>{desc2}</p>
        </div>
      </Link>
    )
  );
};

export default Card;
