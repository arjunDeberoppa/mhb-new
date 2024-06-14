"use client";
import { Disclosure } from "@headlessui/react";
import TypeIcon from "./TypeIcon";
import { Section } from "@/app/core/api";
import React, { useState } from "react"; // Import useState
import Image from "next/image";

type Props = {
  section: Section;
};

const CourseSection = ({ section }: Props) => {
  const { section_name, resources } = section;

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="text-left border border-gray-200">
            <Disclosure.Button className="flex items-center bg-[#3C3D41] bg-opacity-5 px-8 py-[25.5px] w-full justify-between">
              <h4 className="text-[20px] font-bold">{section_name}</h4>
              {open ? (
                <Image
                  width={32}
                  height={32}
                  src="/assets/courseDetails/upwordCD1.svg"
                  alt="dropdown"
                  className="w-[18.67px] h-[18.67px]"
                />
              ) : (
                <Image
                  width={32}
                  height={32}
                  src="/assets/dropdown.svg"
                  alt="dropdown"
                  className="w-[18.67px] h-[18.67px]"
                />
              )}
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className="bg-white px-4 lg:px-8 lg:py-4">
                {resources?.map((resource) => (
                  <p
                    key={resource.material_id}
                    className="flex items-center py-4"
                  >
                    <span className="text-custom-green h-6 w-6 flex-shrink-0 text-accent">
                      <TypeIcon type={resource.type} />
                    </span>
                    <span className="mx-4 text-lg font-semibold">
                      {resource.resource_type === 5
                        ? resource.exercise_name
                        : resource.material_name}
                    </span>
                    {resource.freepreview ? (
                      <span className="ml-auto flex-shrink-0 rounded-full bg-primary-dark px-3 py-1 text-[12px] font-semibold text-white">
                        Free
                      </span>
                    ) : (
                      <span className="ml-auto flex-shrink-0"></span>
                    )}
                  </p>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  );
};

export default CourseSection;
