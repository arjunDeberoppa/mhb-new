import React from "react";
import Image from "next/image";

export default function ChangingLife() {
  return (
    <section className="border-t-2 border-custom-purple bg-custom-purple ">
      <div className="py-16 md:py-28 text-custom-light flex flex-col-reverse md:flex-col gap-10 md:gap-20 container max-w-[1440px] mx-auto">
        <Image
          src="/assets/about/hero-img.webp"
          alt="placeholder"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={1312}
          height={738}
          priority
        />
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 ">
          <h2 className="md:w-[616px] text-3xl md:text-[40px] md:leading-[48px] font-bold">
            <span className="text-custom-light-green">Changing lives </span>
            through comprehensive fitness courses and certifications
          </h2>
          <p className="text-base md:text-lg md:w-[616px]">
            MHB Academy has a rich history of coaching thousands of clients,
            providing evidence-based courses, and fostering a healthier
            tomorrow. Our core values of excellence, support, and guidance drive
            our mission to help individuals achieve their health goals.
          </p>
        </div>
      </div>
    </section>
  );
}
