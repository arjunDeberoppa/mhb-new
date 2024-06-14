import React from "react";

interface CategoriesProps {
  categories: string[] | undefined;
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  if (!categories) {
    return null;
  }

  if (!Array.isArray(categories)) {
    console.error("Categories should be an array");
    return null;
  }

  return (
    <div className="flex flex-wrap">
      {categories.map((category, index) => (
        <span key={index} className="mr-2">
          {category}
        </span>
      ))}
    </div>
  );
};

export default Categories;
