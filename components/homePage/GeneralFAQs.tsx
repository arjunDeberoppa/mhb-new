import React from "react";
import QASection from "../Question";
import { faqData } from "@/app/core/data";
import Link from "next/link";

export default async function GeneralFAQs() {
  return (
    <section className="bg-gray-100">
      <div className="flex flex-col gap-12 py-16 container max-w-[1440px] mx-auto md:py-28 md:gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-4xl md:text-5xl">FAQs</h2>
          <p className="text-lg md:max-w-3xl">
            Find answers to frequently asked questions about our fitness courses
            and coaching programs.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {faqData.map((faq, index) => (
              <div key={index} className="flex flex-col gap-12">
                <QASection question={faq.question} text={faq.answer} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold md:text-c-32">
              Still have questions?
            </h3>
            <p>Contact us for more information.</p>
          </div>
          <Link href="/contact-us/">
            <button className="bg-custom-purple w-32 h-12 border-2 border-custom-purple text-custom-light flex px-6 py-3 text-base gap-3 items-center uppercase cursor-pointer">
              CONTACT
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
