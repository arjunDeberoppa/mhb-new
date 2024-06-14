import axios from "axios";
import { BASE_URL, INSTITUTE_ID } from "./constants";

export enum TagCategoryType {
  DROPDOWN = 1,
  BOOLEAN = 2,
  DATE = 3,
  TEXT = 4,
}

export interface Tag {
  tag_categories_id: number;
  tag_categories_name: string;
  tag_categories_type: TagCategoryType;
  status: number;
  tag_categories_values?: TagCategoriesValue[];
}

export interface TagCategoriesValue {
  tag_categories_value_id: number;
  tag_categories_value: string;
  display_index: number;
  status: number;
}

export interface CourseTag {
  id: number;
  label: string;
  type: TagCategoryType;
  value: string[];
}

export interface CourseBundle {
  bundle_id: number;
  bundle_name: string;
  course_ids: string[];
  bundle_description: string;
  exam_ids: string[];
  is_test_series: number;
  cost: number;
  currency_cost: number;
  actual_cost: number;
  currency_actual_cost: number;
  striked_cost: number;
  currency_striked_cost: number;
  position: number;
  academic_year: number;
  institution_bundle_id: number;
  is_online_package: number;
  student_count: number;
  fees_template_ids: string;
  online_registration_allowed: number;
  free_preview_allowed: number;
  course_type: number;
  pretty_name: string;
  course_start_date: number;
  course_end_date: number;
  img_url: string;
  stream_id: number;
  currency_symbol: string;
  package_cost_set: number;
  apple_product_id: string;
  rating: number;
  num_of_rating: number;
  tags: CourseTag[];
  tutors: string[];
}

export interface CourseDetailsResponse {
  code: number;
  message: string;
  bundle: CourseDetails;
  tags: CourseTag[];
}

export interface CourseDetails {
  institution_bundle_id: number;
  bundle_id: number;
  bundle_name: string;
  bundle_description: string;
  status: string;
  cost: string;
  bundle_overview: string;
  is_online_package: number;
  actual_cost: string;
  striked_cost: string;
  position: number;
  package_cost_set: number;
  organization_id: number;
  academic_year: number;
  fees_template_ids: string[];
  video_url: string;
  student_count: number;
  free_preview_allowed: number;
  payment_gateway: string;
  course_type: number;
  pretty_name: string;
  img_url: any;
  currency_symbol: string;
  currency_id: number;
  apple_product_id: string;
  rating: number;
  num_of_rating: number;
  organization_name: string;
  enable_buy_now: number;
  exam_ids: string[];
}

export interface InstituteCourse {
  course_bundles: CourseBundle[];
  department_id: number;
  department_name: string;
}
export interface GetAllCoursesRes {
  code: number;
  message: string;
  tags: Tag[];
  count: number;
  has_result: number;
  institute_courses: InstituteCourse[];
}

export interface CourseContent {
  course_id: number;
  name: string;
  description: string;
  course_num_exercises: number;
  course_num_materials: number;
  image_url: string;
}

export interface CourseCurriculumResponse {
  code: number;
  message: string;
  course_curriculum: CourseCurriculum;
  institution_DrmLibraryId: any;
}

export interface CourseCurriculum {
  course_id: string;
  sequential_viewing: number;
  published_count: number;
  total_time: number;
  resources: Section[];
}

export interface Section {
  section_id: number;
  section_name: string;
  description: string;
  status: string;
  in_curriculum: number;
  display_index: number;
  course_id: number;
  resource_type: number;
  freepreview: number;
  resources: Resource[];
}

export interface Resource {
  material_id: number;
  file_name: string;
  material_name: string;
  exercise_name: string;
  description: string;
  material_source: string;
  external_url?: string;
  type: string;
  is_active: number;
  display_index: number;
  view_count: any;
  is_downloadable: number;
  is_drm: number;
  drm_url: string;
  resource_type: number;
  external_video_play: number;
  vimeo_transcoding_status: any;
  freepreview: number;
  vimeo_url: number;
  is_prerequisite: number;
  parent_id: number;
  duration_seconds: number;
  created_at_timestamp: number;
}

export interface FullCurriculum {
  id: number;
  subject_name: string;
  sections: Section[];
}

export interface ContactUs {
  first_name: string;
  contact_number: number;
  contact_number_country_id: number;
  email: string;
  message: string;
  institute_id: number;
  add_db: number;
  is_internal: number;
}

export interface AppContext {
  // cursor: boolean
  // setCursor: React.Dispatch<React.SetStateAction<boolean>>
  openDownloadModal: boolean;
  setOpenDownloadModal: React.Dispatch<React.SetStateAction<boolean>>;
  // scaleCursor: string
  // setScaleCursor: React.Dispatch<React.SetStateAction<string>>
}

export interface NewsletterForm {
  Name: string;
  ListID: number;
  Email: string;
}

export interface ContactCreate {
  IsExcludedFromCampaigns: boolean;
  Name: string;
  Email: string;
}

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetcher = (url: string) =>
  instance.get(url).then((res) => res.data);

export const getAllCourses = async (
  search?: string,
  filter?: string
): Promise<GetAllCoursesRes> => {
  const res = await fetch(
    `${BASE_URL}/institute/${INSTITUTE_ID}/courses?get_tags=1&get_student_count=1${
      search ? `&search=${search}` : ""
    }${filter ? `&tag_categories_name_array=${filter}` : ""}`
  );
  const data = await res.json();
  return data;
};

export const getCourseDetails = async (
  institutionBundleID: string
): Promise<CourseDetailsResponse> => {
  const res = await fetch(
    `${BASE_URL}/organization/bundles/${institutionBundleID}`
  );
  const data = await res.json();
  return data;
};

export const getCourseID = async (
  institutionBundleID: string
): Promise<CourseContent[]> => {
  const res = await fetch(
    `${BASE_URL}/public/tutor/courses/all/${institutionBundleID}`
  );
  const data = await res.json();
  return data.courses;
};

export const getCourseCurriculum = async (
  institutionBundleID: string,
  courseID: string
): Promise<CourseCurriculumResponse> => {
  const res = await fetch(
    `${BASE_URL}/public/tutor/class/curriculum/${courseID}?institution_bundle_id=${institutionBundleID}`
  );
  const data = await res.json();
  return data;
};

export const postMailer = async ({ data, to, subject }: any) => {
  let body = `<html><table>${Object.keys(data)
    .map((val) => `<tr><td>${val}</td><td>${data[val]}</td></tr>`)
    .join("")}</table></html>`;

  let dataFormat = new FormData();

  dataFormat.append("JSONString", JSON.stringify({ to, subject, body }));

  return await fetch(`${BASE_URL}/institute/mail`, {
    method: "POST",
    body: dataFormat,
  })
    .then((res) => res.json())
    .catch((err) => "FAIL");
};

export const fetchMetaData = async () => {
  const res = await fetch(`${BASE_URL}/meta/all?institution_id=3`);
  const data = await res.json();
  let exams: any = {};
  data.resources.exam.forEach(
    (el: { resource_id: number; resource_name: string }) => {
      exams[el.resource_id] = el.resource_name;
    }
  );

  return {
    subCategories: exams,
  };
};

export const fetchCountries = async () => {
  const res = await fetch(`${BASE_URL}/meta/countries`);
  const data = await res.json();
  return data.country_codes;
};

export const sampleChapter = async (data: ContactUs) => {
  let dataFormat = new FormData();

  dataFormat.append("JSONString", JSON.stringify(data));

  return await fetch(`${BASE_URL}/contactus`, {
    method: "POST",
    body: dataFormat,
  })
    .then((res) => res.json())
    .catch((err) => err);
};

const API_URL: string = process.env.WORDPRESS_API_URL as string;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    console.error(await res.text());
    throw new Error("Failed to fetch API");
  }
  const json = await res.json();
  // console.log("JSON data:", json);

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(
  id: string | number,
  idType: string = "DATABASE_ID"
) {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    { variables: { id, idType } }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  return data?.posts.edges.map((edge: { node: { slug: string } }) => ({
    slug: edge.node.slug,
  }));
}

export async function getAllPostsForHome(preview: boolean) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            categories {
              edges {
                node {
                  name
                }
              }
            }
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }`,
    { variables: { onlyEnabled: !preview, preview } }
  );

  const posts = data?.posts.edges.map((edge: { node: any }) => ({
    ...edge.node,
    categories: edge.node.categories.edges.map(
      (categoryEdge: { node: any }) => categoryEdge.node.name
    ),
    featuredImage: edge.node.featuredImage?.node,
    author: edge.node.author?.node,
  }));

  console.log("Post objects:", posts);

  return posts;
}


export async function getPostAndMorePosts(
  slug: string | number,
  preview: boolean,
  previewData: any
) {
  const postPreview = preview && previewData?.post;
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";

  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }`
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }`,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  console.log("All the post cards", data);

  if (isDraft) data.post.slug = postPreview.id;
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;
    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  data.posts.edges = data.posts.edges.filter(
    ({ node }: { node: any }) => node.slug !== slug
  );
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}
