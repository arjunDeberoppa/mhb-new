import { MetadataRoute } from "next";
import { getSiteMetadata } from "./core/utils";
import { getAllCourses, GetAllCoursesRes } from "./core/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const metadata = getSiteMetadata();
  const coursesResponse: GetAllCoursesRes = await getAllCourses();
  const courses = coursesResponse.institute_courses.reduce(
    (acc, curr) => acc.concat(curr.course_bundles),
    [] as any[]
  );

  const routes = [
    "",
    "/courses",
    "/about",
    "/contactUs",
    "/leadGenForm",
    "/privacyPolicy",
  ].map((route) => ({
    url: `${metadata.site_url}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${metadata.site_url}/courses/${course.pretty_name}-${course.institution_bundle_id}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...courseRoutes];
}
