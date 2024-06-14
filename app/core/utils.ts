import { CourseTag, Tag } from "./api";
import { BASE_URL, INSTITUTE_ID } from "./constants";
// export const API_ENDPOINT =
//   "https://mcgrawhill-api.edmingle.com/nuSource/api/v1/";
// export const INSTITUTEID = 4;
export const PER_PAGE = 30;

export type filtersType =
  | "subject"
  | "levels"
  | "type"
  | "assessment"
  | "duration"
  | "inclusion";

export const getFiltersById = (tags: Tag[], id: number) => {
  const finder = tags.find((tag) => tag.tag_categories_id === id) as Tag;
  const categories = finder.tag_categories_values;
  const filters = categories && categories.length > 0 ? categories : [];
  return {
    name: finder.tag_categories_name,
    categories: filters,
  };
};

export const getCustomFieldById = (tags: CourseTag[], id: number) => {
  const finder = tags.find((tag) => tag.id === id) as CourseTag;
  if (finder === undefined) {
    return null;
  } else {
    return finder.value[0];
  }
};

export const extractInstBundleId = (path: string) => {
  let splitted = path.split("-");

  return splitted[splitted.length - 1];
};

export const feeDisplay = (amount: number, currencySymbol: string): string => {
  if (amount === 0) {
    return "Free";
  } else {
    return currencySymbol + " " + decimalRemover(amount);
  }
};

export const decimalRemover = (amount: number): string => {
  return amount.toString().replace(/\.00$/, "");
};

export function parseHTMLAndGetLiText(htmlString: string): string[] {
  var tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  var liElements = tempDiv.querySelectorAll("li");
  var liTextArray: string[] = [];
  liElements.forEach(function (liElement) {
    var textContent = liElement?.textContent?.trim();
    if (textContent) {
      liTextArray.push(textContent);
    }
  });
  return liTextArray;
}

// new function's

interface Course {
  course_bundles: any[]; // Define the type according to the actual structure of course_bundles
}

export function consolidateCourseList(courseList: Course[]) {
  let consolidatedCourseList: any[] = [];
  courseList.forEach((departmentCourses) => {
    if (departmentCourses.course_bundles) {
      // Access 'course_bundles' property directly
      departmentCourses.course_bundles.forEach((course) => {
        consolidatedCourseList.push(course);
      });
    }
  });
  return consolidatedCourseList;
}

export const fetchCategories = async (search?: string, filter?: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/institute/${INSTITUTE_ID}/courses?get_tags=1&get_student_count=1${
        search ? `&search=${search}` : ""
      }${filter ? `&tag_categories_name_array=${filter}` : ""}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export function queryString(obj: Record<string, string | number>) {
  const searchParams = new URLSearchParams();

  Object.keys(obj).forEach(
    (key: string) =>
      (obj[key] || obj[key] === 0) &&
      searchParams.append(key, obj[key].toString())
  );

  return `?${searchParams.toString()}`;
}

interface Category {
  stream_id: string;
  sub_categories: { exam_id: string }[];
}

export const getCategoryMapping = (
  categories: Category[]
): Record<string, string[]> => {
  const newObj: Record<string, string[]> = {};

  categories.forEach((e) => {
    newObj[e.stream_id] = e.sub_categories.map((subCat) => subCat.exam_id);
  });

  return newObj;
};

export const filtersMap = [
  {
    name: "All",
    key: "all",
    filter: {},
  },
  {
    name: "Free",
    key: "free",
    filter: { price: "free" },
  },
  {
    name: "Paid",
    key: "paid",
    filter: { price: "paid" },
  },
];

export const getSiteMetadata = () => {
  return {
    title: "MHB Academy",
    description: "",
    site_url: "https://mhb-academy.com",
  };
};


