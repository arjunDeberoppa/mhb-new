import React from "react";
import Image from "next/image";
import Link from "next/link";
import { socialMediaLinks } from "@/app/core/data";

const FooterSection = () => {
  return (
    <section>
      <div className="bg-custom-black text-custom-light text-sm py-12 md:py-20 flex flex-col gap-12 md:gap-20">
        <div className="flex flex-col gap-12 md:flex-row md:gap-16 justify-between container max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-6">
            <div>
              <Link href={`/`}>
                <Image
                  width={101}
                  height={40}
                  className="w-[101px] h-10"
                  src="/assets/logoLight.svg"
                  alt="logo"
                />
              </Link>
              <Link href="https://myhealthbuddy.co/">
                <p className="text-xs font-light mt-2 ml-1">
                  An Academy by My Health Buddy
                </p>
              </Link>
            </div>
            <p>
              Address:
              <a
                href="https://www.google.com/maps/search/?api=1&query=Arcadia,404,South+City+II,Gurugram,Haryana,122018"
                target="_blank"
                className="block"
              >
                Arcadia, 404, South City II, Gurugram, Haryana 122018
              </a>
            </p>
            <p>
              Contact:
              <a href="tel:+919599126669" className="block underline">
                +91 9599126669
              </a>{" "}
              <a href="mailto:info@mhbacademy.com" className="block underline">
                info@mhbacademy.com
              </a>
            </p>
            <div className="flex flex-row gap-4">
              <Link href={socialMediaLinks.facebook}>
                <button className="cursor-pointer">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/facebookLight.svg"
                    alt="facebook"
                  />
                </button>
              </Link>
              <Link href={socialMediaLinks.instagram}>
                <button className="cursor-pointer">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/instaLight.svg"
                    alt="instagram"
                  />
                </button>
              </Link>
              <Link href={socialMediaLinks.twitter}>
                <button className="cursor-pointer">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/xLight.svg"
                    alt="X"
                  />
                </button>
              </Link>
              <Link href={socialMediaLinks.linkedin}>
                <button className="cursor-pointer">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/linkedinLight.svg"
                    alt="linkedin"
                  />
                </button>
              </Link>
              {/* <Link href={socialMediaLinks.youtube}>
                <button className="cursor-pointer">
                  <Image
                    width={24}
                    height={24}
                    src="/assets/youtubeLight.svg"
                    alt="youtube"
                  />
                </button>
              </Link> */}
            </div>
          </div>
          <div className="flex flex-col gap-10 md:flex-row md:gap-8 md:w-[450px]">
            <div className="flex flex-col gap-3 md:max-w-[150px]">
              <Link href="/about-us/">
                <button>Our Story</button>
              </Link>
              <Link href="/courses/">
                <p>Our Courses</p>
              </Link>
              {/* <p>Testimonials</p> */}
              <Link href="/contact-us/">
                <button>Contact Us</button>
              </Link>
              {/* <p>FAQs</p> */}
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/courses/NutritionLifestyleCoachLevel1-42471">
                <p>Fitness Coaching</p>
              </Link>
              <Link href="/courses/100Recipesunder200calories-60479">
                <p>Nutrition Coaching</p>
              </Link>
              <Link href="/courses/EnergyBalance-50977">
                <p>
                  Weight Loss <span className="block">Coaching</span>
                </p>
              </Link>
              <Link href="/courses/NutritionLifestyleCoachLevel2-42472">
                <p>Wellness Coaching</p>
              </Link>
              <Link href="/courses/ExerciseBank-58877">
                <p>Sports Coaching</p>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {/* <p>Policies</p> */}
              <Link href={`/data-protection-policy/`}>
                <p>Data Protection Policy</p>
              </Link>
              <Link href={`/delegate-policy/`}>
                <p>Delegate Policy</p>
              </Link>
              <Link href={`/diversity-policy/`}>
                <p>Diversity Policy</p>
              </Link>
              <Link href={`/grievance-policy/`}>
                <p>Grievance Policy</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-6 md:pt-8 border-t">
          <div className="container max-w-[1440px] mx-auto flex flex-col-reverse gap-8 md:flex-row md:justify-between">
            <Image
              width={300}
              height={25}
              className="w-[293px] h-[21]"
              src="/assets/copyRight.svg"
              alt="copyright"
            />
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              <Link href={`/privacy-policy/`}>
                <p className="underline">Privacy Policy</p>
              </Link>
              <Link href={`/terms-and-conditions/`}>
                <p className="underline">Terms and Conditions</p>
              </Link>
              {/* <p className="underline">Cookie Policy</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
