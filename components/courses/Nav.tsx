import React, { useEffect } from "react";

interface NavProps {
  catData: any;
  cat: number | null;
  setCat: React.Dispatch<React.SetStateAction<number | null>>;
}

const Nav: React.FC<NavProps> = ({ catData, cat, setCat }) => {
  useEffect(() => {
    if (catData && catData.category.length > 0) {
      setCat(catData.category[0].stream_id);
    }
  }, [catData, setCat]);

  const handleClick = (categoryId: number | null) => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Set the category state
    setCat(categoryId);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="sticky z-50 top-0 bg-white flex gap-6 border-b border-gray-200 container max-w-[1440px] mx-auto overflow-auto">
        {catData && catData.category.length > 0
          ? catData.category.map((e: any, index: number) => (
              <button
                className={`flex shrink-0 px-[10px] pt-[18px] pb-4 ${
                  cat == e.stream_id &&
                  "text-custom-purple font-bold border-b-2 border-custom-purple bg-gray-100 cursor-pointer"
                }`}
                key={e.stream_id}
                onClick={() => handleClick(e.stream_id)}
              >
                {e.stream_name}
              </button>
            ))
          : ""}
        <button
          className={`flex shrink-0 px-[10px] pt-[18px] pb-4 ${
            cat === null &&
            "shrink-0 flex text-custom-purple font-bold border-b-2 border-custom-purple bg-gray-100 cursor-pointer"
          }`}
          onClick={() => handleClick(null)}
        >
          All Courses
        </button>
      </div>
    </div>
  );
};

export default Nav;
