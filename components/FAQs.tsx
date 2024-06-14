"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import React from "react";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  return (
    <div className="">
      <div className=" max-w-[898px] rounded-2xl bg-white text-[#333333]">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between px-6 py-[22.5px] text-left bg-[#3C3D41] bg-opacity-5 border border-gray-200">
                <span className="text-lg font-bold">{question}</span>
                {open ? (
                  <Image
                    width={32}
                    height={32}
                    src="/assets/courseDetails/minus.svg"
                    alt="dropdown"
                    className="w-8 h-8"
                  />
                ) : (
                  <Image
                    width={32}
                    height={32}
                    src="/assets/plus.svg"
                    alt="dropdown"
                    className="w-[18.67px] h-[18.67px]"
                  />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pb-2 pt-4 text-lg text-custom-black">
                {answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default FAQ;
