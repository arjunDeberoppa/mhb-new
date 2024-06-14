// import React from "react";
// import CurriculumTab from "../CurriculumTab";
// import { FullCurriculum } from "@/app/core/api";

// type Props = {
//   fullCurriculum?: FullCurriculum[];
// };

// export default function Accordian(props: Props) {
//   const { fullCurriculum } = props;
//   const sectionData = fullCurriculum?.map((curriculum) =>
//     curriculum.sections.map((section) => section.section_name)
//   );

//   return (
//     <section>
//       <div className="container max-w-[1440px] mx-auto pt-10 lg:pt-20 xl:pt-[55px] flex flex-col gap-2">
//         <div>
//           <h2 className="font-bold text-[32px] text-custom-black">
//             Course Curriculum
//           </h2>
//           <p className="text-lg font-medium text-custom-black mt-4">
//             {fullCurriculum && fullCurriculum.length > 0
//               ? fullCurriculum.map((item) => item.subject_name).join(", ")
//               : "No Curriculum Available"}
//           </p>
//         </div>
//         {fullCurriculum && fullCurriculum.length > 0 ? (
//           <div>
//             <CurriculumTab fullCurriculum={fullCurriculum} />
//           </div>
//         ) : (
//           <div>Curriculum</div>
//         )}
//       </div>
//     </section>
//   );
// }
