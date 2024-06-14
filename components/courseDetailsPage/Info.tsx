"use client";
import { CourseDetails } from "@/app/core/api";
import {
  CUSTOM_CREDITS,
  CUSTOM_DURATION,
  LEVEL_FILTER_ID,
} from "@/app/core/constants";
import { feeDisplay } from "@/app/core/utils";
import Image from "next/image";
import { useEffect } from "react";

interface Props {
  data: CourseDetails;
  tags: any; // Change: Updated to expect an array of CourseTag objects
  id: string;
}

export default function CourseInfo({ data, tags }: Props) {
  const level =
    tags.find((tag: { id: number }) => tag.id === LEVEL_FILTER_ID)?.value || [];
  const cost = parseFloat(data.cost);
  // const level = tags[].value;
  const cred =
    tags.find((tag: { id: number }) => tag.id === CUSTOM_CREDITS)?.value || [];

  const duration =
    tags.find((tag: { id: number }) => tag.id === CUSTOM_DURATION)?.value || [];

  const credValue = { __html: cred };
  const durationValue = { __html: duration };

  useEffect(() => {
    //@ts-ignore
    window.BUNDLE = data;
  }, [data]);

  return (
    <section className="relative">
      <div
        className="relative w-full md:h-auto text-white bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: "url('../assets/coursedetails/background.jfif')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-custom-purple opacity-90 z-0 flex flex-col gap-20"></div>
        <div className="relative flex flex-col gap-6 w-auto md:pr-[400px] lg:pr-[500px] xl:pr-[608px] py-10 md:py-20 container max-w-[1440px] mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:leading-[57.6px]">
            {data.bundle_name}
          </h2>
          <p className="lg:text-lg">{data.bundle_description}</p>
          <p
            className="text-xl font-bold"
            dangerouslySetInnerHTML={credValue}
          />
          <div className="flex gap-2">
            {data.is_online_package === 1 && (
              <p className="text-sm font-bold px-2 py-[6px] bg-custom-light bg-opacity-20">
                Online
              </p>
            )}
            {level !== "" ? (
              <p className="text-sm font-bold px-2 py-[6px] bg-custom-light bg-opacity-20">
                {level[0]} {level[1]}
              </p>
            ) : null}
            {cost !== 0 && (
              <p className="text-sm font-bold px-2 py-[6px] bg-custom-light bg-opacity-20">
                Paid
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-[350px] md:max-w-[300px] lg:max-w-[350px] bg-custom-light my-16 mx-auto md:absolute right-10 top-5">
        <Image
          width={350}
          height={210}
          src={data.img_url}
          alt="placeholder"
          className="w-[350px]"
        />
        <div className="p-6 flex flex-col gap-5">
          <div className="flex flex-col ">
            <div className="flex flex-col gap-2">
              <p className="flex gap-3 items-center text-[32px] font-bold text-custom-purple leading-[39px]">
                {feeDisplay(parseFloat(data.cost), data.currency_symbol)}
                {data.striked_cost === "0" && (
                  <span className="line-through font-normal text-lg text-[#6B6F73]">
                    {feeDisplay(
                      parseFloat(data.striked_cost),
                      data.currency_symbol
                    )}
                  </span>
                )}
              </p>
              <p
                className="text-[#00A96F]"
                dangerouslySetInnerHTML={durationValue}
              ></p>
            </div>
            {/* <div className="flex gap-1 items-center">
              <p className="text-lg font-bold text-[#AB5E10]">4.5</p>
              <div className="flex gap-[1.6px] items-center">
                <Image
                  width={17.06}
                  height={17.06}
                  src="/assets/courseDetails/fullStar.svg"
                  alt="star"
                />
                <Image
                  width={17.06}
                  height={17.06}
                  src="/assets/courseDetails/fullStar.svg"
                  alt="star"
                />
                <Image
                  width={17.06}
                  height={17.06}
                  src="/assets/courseDetails/fullStar.svg"
                  alt="star"
                />
                <Image
                  width={17.06}
                  height={17.06}
                  src="/assets/courseDetails/fullStar.svg"
                  alt="star"
                />
                <Image
                  width={8.97}
                  height={17.06}
                  src="/assets/courseDetails/halfStar.svg"
                  alt="star"
                />
              </div>
              <p className="text-sm text-[#6E757C]">(34)</p>
            </div> */}
          </div>

          <div className="flex flex-col gap-4">
            {data.free_preview_allowed === 1 && (
              <>
                <button
                  className={`py-2 px-[70px] md:px-5 lg:px-[70px] xl:px-[70px] font-semibold bg-[#E5E5E5] w-full uppercase open-signup-course-freepreview enrollFree enrollFree_${data.institution_bundle_id}`}
                >
                  Enrol for free
                </button>
              </>
            )}
            <button
              data-instbundleid={data.institution_bundle_id}
              className={` course-landing-buy_${data.institution_bundle_id} py-2 px-[77px] font-semibold text-custom-light bg-custom-purple w-full uppercase `}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { CourseDetails } from "@/app/core/api";
// import {
//   CUSTOM_CREDITS,
//   CUSTOM_DURATION,
//   LEVEL_FILTER_ID,
// } from "@/app/core/constants";
// import { feeDisplay } from "@/app/core/utils";
// import Image from "next/image";
// import { useEffect } from "react";

// interface Props {
//   data: CourseDetails;
//   tags: any; // Change: Updated to expect an array of CourseTag objects
//   id: string;
// }

// // Utility function to strip HTML tags
// function stripHtmlTags(html: any): string {
//   if (typeof html !== "string") {
//     return "";
//   }
//   return html.replace(/<\/?[^>]+(>|$)/g, "");
// }

// export default function CourseInfo({ data, tags }: Props) {
//   const level =
//     tags.find((tag: { id: number }) => tag.id === LEVEL_FILTER_ID)?.value || [];
//   const cost = parseFloat(data.cost);
//   const cred =
//     tags.find((tag: { id: number }) => tag.id === CUSTOM_CREDITS)?.value || [];

//   const duration =
//     tags.find((tag: { id: number }) => tag.id === CUSTOM_DURATION)?.value || [];

//   // Strip HTML tags from cred and duration
//   const strippedCred = stripHtmlTags(cred);
//   const strippedDuration = stripHtmlTags(duration);

//   useEffect(() => {
//     //@ts-ignore
//     window.BUNDLE = data;
//   }, [data]);

//   return (
//     <section className="relative">
//       <div
//         className="relative w-full md:h-auto text-white bg-center bg-cover overflow-hidden"
//         style={{
//           backgroundImage: "url('../assets/coursedetails/background.jfif')",
//         }}
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-custom-purple opacity-90 z-0 flex flex-col gap-20"></div>
//         <div className="relative flex flex-col gap-6 w-auto md:pr-[400px] lg:pr-[500px] xl:pr-[608px] py-10 md:py-20 container max-w-[1440px] mx-auto">
//           <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:leading-[57.6px]">
//             {data.bundle_name}
//           </h2>
//           <p className="lg:text-lg">{data.bundle_description}</p>
//           <p className="text-xl font-bold">{strippedCred}</p>
//           <div className="flex gap-2">
//             {data.is_online_package === 1 && (
//               <p className="text-sm font-bold px-2 py-[6px] bg-custom-light bg-opacity-20">
//                 Online
//               </p>
//             )}
//             {level !== "" && (
//               <p className="text-sm font-bold px-2 py-[6px] bg-custom-light bg-opacity-20">
//                 {level}
//               </p>
//             )}
//             {cost !== 0 && (
//               <p className="text-sm font-bold px-2 py-[6px] bg-custom-light bg-opacity-20">
//                 Paid
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="max-w-[350px] md:max-w-[300px] lg:max-w-[350px] bg-custom-light my-16 mx-auto md:absolute right-10 top-5">
//         <Image
//           width={350}
//           height={210}
//           src="/assets/courseDetails/ingredients.png"
//           alt="placeholder"
//           className="w-[350px]"
//         />
//         <div className="p-6 flex flex-col gap-5">
//           <div className="flex flex-col ">
//             <div className="flex flex-col gap-2">
//               <p className="flex gap-3 items-center text-[32px] font-bold text-custom-purple leading-[39px]">
//                 {feeDisplay(parseFloat(data.cost), data.currency_symbol)}
//                 {data.striked_cost === "0" && (
//                   <span className="line-through font-normal text-lg text-[#6B6F73]">
//                     {feeDisplay(
//                       parseFloat(data.striked_cost),
//                       data.currency_symbol
//                     )}
//                   </span>
//                 )}
//               </p>
//               <p className="text-[#00A96F]">{strippedDuration}</p>
//             </div>
//             {/* <div className="flex gap-1 items-center">
//               <p className="text-lg font-bold text-[#AB5E10]">4.5</p>
//               <div className="flex gap-[1.6px] items-center">
//                 <Image
//                   width={17.06}
//                   height={17.06}
//                   src="/assets/courseDetails/fullStar.svg"
//                   alt="star"
//                 />
//                 <Image
//                   width={17.06}
//                   height={17.06}
//                   src="/assets/courseDetails/fullStar.svg"
//                   alt="star"
//                 />
//                 <Image
//                   width={17.06}
//                   height={17.06}
//                   src="/assets/courseDetails/fullStar.svg"
//                   alt="star"
//                 />
//                 <Image
//                   width={17.06}
//                   height={17.06}
//                   src="/assets/courseDetails/fullStar.svg"
//                   alt="star"
//                 />
//                 <Image
//                   width={8.97}
//                   height={17.06}
//                   src="/assets/courseDetails/halfStar.svg"
//                   alt="star"
//                 />
//               </div>
//               <p className="text-sm text-[#6E757C]">(34)</p>
//             </div> */}
//           </div>

//           <div className="flex flex-col gap-4">
//             {data.free_preview_allowed === 1 && (
//               <>
//                 <button
//                   className={`py-2 px-[70px] md:px-5 lg:px-[70px] xl:px-[70px] font-semibold bg-[#E5E5E5] w-full uppercase open-signup-course-freepreview enrollFree enrollFree_${data.institution_bundle_id}`}
//                 >
//                   Enrol for free
//                 </button>
//               </>
//             )}
//             <button
//               data-instbundleid={data.institution_bundle_id}
//               className={` course-landing-buy_${data.institution_bundle_id} py-2 px-[77px] font-semibold text-custom-light bg-custom-purple w-full uppercase `}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
