import ContentCertification from "@/components/homePage/CertificationContent";
import StartTransformation from "@/components/homePage/Transformation";
import FeaturedMediaSection from "@/components/homePage/FeaturedCompanies";
import StayTuned from "@/components/homePage/Update";
import { getAllCourses } from "./core/api";
import Achievements from "@/components/homePage/Achievements";
import Hero from "@/components/homePage/Hero";
import BestSeller from "@/components/homePage/BestSeller";
import Benefits from "@/components/homePage/Benefits";
import Team from "@/components/homePage/Team";
import SuccessStories from "@/components/homePage/SuccessStories";
import Testimonies from "@/components/homePage/Testimonies";
import GeneralFAQs from "@/components/homePage/GeneralFAQs";
import Course from "@/components/homePage/Courses";
// import BlogsSection from "@/components/homePage/blogs";

export const metadata = {
  title: "MHB Academy | Home",
};

async function getData() {
  const res = await getAllCourses();

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.institute_courses[0].course_bundles;
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Hero />
      <Achievements />
      <BestSeller data={data} />
      <Course data={data} />
      <ContentCertification />
      <Benefits data={data} />
      <Team />
      <SuccessStories />
      <Testimonies />
      <GeneralFAQs />
      {/* <BlogsSection data={data} /> */}
      <FeaturedMediaSection />
      <StayTuned />
      <StartTransformation />
    </>
  );
}
