import React from "react";

interface Tag {
  name?: string;
}

interface Edge<T> {
  node: T;
}

interface TagsProps {
  tags: {
    edges?: Edge<Tag>[];
  };
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  if (!tags || !tags.edges) {
    return null; 
  }

  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">
        Tagged
        {tags.edges.map((tag, index) => (
          <span key={index} className="ml-4 font-normal">
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Tags;
