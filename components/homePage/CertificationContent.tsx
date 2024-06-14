import React from "react";
import Image from "next/image";
import { accreditations } from "@/app/core/data";

const ContentCertification = () => {
  return (
    <section className="bg-custom-light text-custom-black">
      <div className="py-16 container max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 md:flex-row md:gap-custom-gap md:my-28 justify-between">
            <h2 className="text-4xl md:text-[40px] md:w-[616px] font-bold">
              Trust in Quality.
              <br />
              Trust in <span className="text-custom-green">MHB Academy.</span>
            </h2>
            <p className="text-lg w-auto md:w-[616px]">
              When you choose MHB Academy, you&apos;re not just selecting a
              fitness course; you&apos;re choosing a partner on your fitness
              journey. Our Accreditation and ISO certification sets us apart,
              assuring you that our courses are of the highest quality and
              delivered with excellence.
            </p>
          </div>
          <div className=" md:mb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {accreditations.map((item, index) => (
                <article
                  key={index}
                  className="flex flex-col gap-6 lg:flex-row md:gap-8 sm:max-w-[300px] md:max-w-[624px] md:items-center"
                >
                  <Image
                    className={item.image.className}
                    alt={item.image.alt}
                    src={item.image.src}
                    width={item.image.width}
                    height={item.image.height}
                  />
                  <div className="flex flex-col gap-3 max-w-[387px]">
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <nav className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold">
                        {item.content.certification}
                      </h3>
                      <p className="text-lg">{item.content.description}</p>
                    </nav>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCertification;
