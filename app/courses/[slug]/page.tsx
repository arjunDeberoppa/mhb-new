import { extractInstBundleId } from "@/app/core/utils";
import ContentAccreditation from "@/components/courseDetailsPage/Accredition";
import CourseCurriculum from "@/components/courseDetailsPage/Curriculum";
import CourseDesc from "@/components/courseDetailsPage/Desc";
import QA from "@/components/courseDetailsPage/FAQ";
import CourseInfo from "@/components/courseDetailsPage/Info";
import LearningPoints from "@/components/courseDetailsPage/Learning";
import OtherCourses from "@/components/courseDetailsPage/OtherCoursesListing";
import Credentials from "@/components/courseDetailsPage/Testimonials";
import Script from "next/script";
import {
  CourseBundle,
  FullCurriculum,
  getCourseCurriculum,
  getCourseDetails,
  getCourseID,
} from "../../core/api";

type Props = {
  courseDetails: CourseBundle;
  fullCurriculum: FullCurriculum[];
};

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const id = extractInstBundleId(slug);
  const { bundle } = await getCourseDetails(id);
  return {
    title: `Course | ${bundle.bundle_name}`,
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { courseDetails, fullCurriculum } = await getData(params.slug);
  const id = extractInstBundleId(params.slug);

  const isFreeCourse = parseFloat(courseDetails.bundle.cost) === 0;

  return (
    <div className="break-words">
      <CourseInfo
        id={id}
        data={courseDetails.bundle}
        tags={courseDetails.tags}
      />
      <LearningPoints tags={courseDetails.tags} />
      {!isFreeCourse && <CourseCurriculum fullCurriculum={fullCurriculum} />}
      {!isFreeCourse && <CourseDesc courseDetails={courseDetails.bundle} />}
      <ContentAccreditation tags={courseDetails.tags} />
      <Credentials />
      <QA />
      <OtherCourses
        id={id}
        tags={courseDetails.tags}
        data={courseDetails.bundle}
      />
      <div></div>
      <Script defer src={`/assets/inst.js?c=${new Date().getTime()}`} />
    </div>
  );
}

async function getData(slug: string) {
  const id = extractInstBundleId(slug);
  const courseDetails = await getCourseDetails(id);
  const courseContent = await getCourseID(id);

  const fullCurriculum =
    courseContent.length > 0
      ? await Promise.all(
          courseContent.map(async (course) => {
            const data = await getCourseCurriculum(
              id,
              course.course_id.toString()
            );
            return {
              id: course.course_id,
              subject_name: course.name,
              sections: data.course_curriculum.resources,
            } as FullCurriculum;
          })
        )
      : [];

  if (!courseDetails || !courseContent) {
    throw new Error("Failed to fetch data");
  }

  return { courseDetails, fullCurriculum };
}
