import React from "react";
import FAQ from "../FAQs";
import Link from "next/link";
import { faqData } from "@/app/core/data";

export default function QA() {
  return (
    <section>
      <div className="container max-w-[1440px] pb-10 md:pb-[188px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-[32px] font-bold">FAQs</h2>
          {/* <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros <br />
            elementum tristique.
          </p> */}
        </div>
        <div className="flex flex-col gap-4">
          {faqData.map((faqData, index) => (
            <FAQ
              key={index}
              question={faqData.question}
              answer={faqData.answer}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] font-bold">Still have questions?</h2>
            {/* <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>
          <Link href="/contact-us/">
            <button className="font-medium bg-custom-purple text-custom-light py-3 px-6 w-[129px] uppercase">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
