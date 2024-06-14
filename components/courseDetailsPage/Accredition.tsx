"use client";
import { CUSTOM_ACC } from "@/app/core/constants";
import Image from "next/image";

export default function ContentAccreditation({ tags }: any) {
  const cert =
    tags.find((tag: { id: number }) => tag.id === CUSTOM_ACC)?.value || [];

  if (!cert.length) {
    return null;
  }

  const renderCertificate = (certificate: string) => {
    if (cert.includes(certificate)) {
      if (certificate === "CDP") {
        return (
          <div className="flex flex-col md:flex-row md:items-center gap-[34.7px]">
            <Image
              width={200}
              height={200}
              className="md:w-[160px] md:h-[160px]"
              src="/assets/section-5-2.webp"
              alt="placeholder"
            />
            <div className="flex flex-col ">
              <h2 className="font-semibold">We Are Accredited</h2>
              <h1 className="font-bold text-2xl pt-4 pb-2">
                The CPD Standards Office
                <br />
                CPD Provider: 22322
              </h1>
              <p>
                Experience the quality and credibility of our CPD accredited
                courses.
              </p>
            </div>
          </div>
        );
      } else if (certificate === "ISO") {
        return (
          <div className="flex flex-col md:flex-row md:items-center gap-[34.7px]">
            <Image
              width={200}
              height={200}
              className="md:w-[160px] md:h-[160px]"
              src="/assets/section-5-1.webp"
              alt="placeholder"
            />
            <div>
              <h2 className="font-semibold">We Are Certified</h2>
              <h1 className="font-bold text-2xl pt-4 pb-2">
                International Organization for Standardization Certified
              </h1>
              <p>
                Your fitness goals are important to us, and our ISO
                certification is our promise to deliver the best in fitness
                education.
              </p>
            </div>
          </div>
        );
      } else if (certificate === "AP") {
        return (
          <div className="flex flex-col md:flex-row md:items-center gap-[34.7px]">
            <Image
              width={200}
              height={200}
              className="md:w-[160px] md:h-[160px]"
              src="/assets/ap.webp"
              alt="placeholder"
            />
            <div>
              <h2 className="font-semibold">We Are Certified</h2>
              <h1 className="font-bold text-2xl pt-4 pb-2">
                International Organization for Standardization Certified
              </h1>
              <p>
                Your fitness goals are important to us, and our ISO
                certification is our promise to deliver the best in fitness
                education.
              </p>
            </div>
          </div>
        );
      } else if (certificate === "AFAA") {
        return (
          <div className="flex flex-col md:flex-row md:items-center gap-[34.7px]">
            <Image
              width={200}
              height={200}
              className="md:w-[160px] md:h-[160px]"
              src="/assets/afaa.webp"
              alt="placeholder"
            />
            <div>
              <h2 className="font-semibold">We Are Certified</h2>
              <h1 className="font-bold text-2xl pt-4 pb-2">
                International Organization for Standardization Certified
              </h1>
              <p>
                Your fitness goals are important to us, and our ISO
                certification is our promise to deliver the best in fitness
                education.
              </p>
            </div>
          </div>
        );
      } else if (certificate === "NASM") {
        return (
          <div className="flex flex-col md:flex-row md:items-center gap-[34.7px]">
            <Image
              width={200}
              height={200}
              className="md:w-[160px] md:h-[160px]"
              src="/assets/nasm.webp"
              alt="placeholder"
            />
            <div>
              <h2 className="font-semibold">We Are Certified</h2>
              <h1 className="font-bold text-2xl pt-4 pb-2">
                International Organization for Standardization Certified
              </h1>
              <p>
                Your fitness goals are important to us, and our ISO
                certification is our promise to deliver the best in fitness
                education.
              </p>
            </div>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <section>
      <div className="container max-w-[1440px] mx-auto pt-10 lg:pt-20 xl:pt-[55px] ">
        <div className="p-8 bg-custom-light border border-gray-300 lg:w-[898px]">
          <div className="flex flex-col gap-6 pb-8">
            <h2 className="text-3xl md:text-[32px] md:leading-[41.6px] font-bold">
              Trust in Quality.
              <br />
              Trust in
              <span className="text-custom-green"> MHB Academy.</span>
            </h2>
            <p className="text-lg">
              When you choose MHB Academy, you&apos;re not just selecting a
              fitness course; you&apos;re choosing a partner on your fitness
              journey. Our Accreditation and ISO certification sets us apart,
              assuring you that our courses are of the highest quality and
              delivered with excellence.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {renderCertificate("CDP")}
            {renderCertificate("ISO")}
            {renderCertificate("AP")}
            {renderCertificate("AFAA")}
            {renderCertificate("NASM")}
          </div>
        </div>
      </div>
    </section>
  );
}
