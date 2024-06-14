import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Opportunities() {
  return (
    <section className="text-custom-light">
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/about/section-6 img.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-custom-purple to-custom-green opacity-80"></div>
        <div className="relative px-5 py-16 md:px-16 md:py-28 text-center flex flex-col gap-4">
          <p className="font-medium">Want to work with MHB Academy?</p>
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Apply For <span> </span>
              <span className="text-custom-light-green">
                Career Opportunities <br />
              </span>
              <span className="block">At MHB Academy </span>
            </h2>
            <p className="text-lg">Mail us your resume at</p>
            <a
              className="flex mx-auto gap-3 justify-center text-custom-black bg-custom-light px-6 py-3 w-c-298"
              href="mailto:hello@mhbacademy.com"
            >
              <Image
                width={24}
                height={24}
                className="w-6 h-6"
                src="/assets/about/envelope_2.svg"
                alt="envelope"
              />
              <Link href="mailto:info@mhbacademy.com">
                <button className="font-bold">info@mhbacademy.com</button>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
