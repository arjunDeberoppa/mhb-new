import React from "react";
import Link from "next/link";

export default function Queries() {
  return (
    <section className="pb-10 px-5 md:px-16">
      <div className=" bg-[#E5E5E5] pt-10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-16 pb-20">
          <div className="flex flex-col gap-4 items-center text-center justify-center">
            <h2 className="text-[32px] font-bold">Have questions?</h2>
            <p className="font-medium">
              Contact our support team for further assistance.
            </p>
            <Link href={`/contact-us/`}>
              <button className="py-2 px-3 bg-custom-purple text-custom-light">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
