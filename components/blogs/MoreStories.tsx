import React from "react";
import BlogPost from "../BlogsPost";
import Link from "next/link";

interface MoreStoriesProps {
  posts: {
    node: {
      slug: string;
      title: string;
      excerpt: string;
      categories: string;
      featuredImage: {
        node: {
          sourceUrl: string;
        };
      };
      author: {
        node: {
          name: string;
        };
      };
    };
  }[];
}

const MoreStories: React.FC<MoreStoriesProps> = ({ posts }) => {
  return (
    <div className="py-16 md:py-28">
      <div className="flex justify-between items-end pb-10 md:pb-20">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-5xl font-semibold">Related posts</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <Link href="/blogs">
          <button className="px-6 py-3 bg-gray-300 uppercase font-medium">
            VIEW ALL
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
        {posts.map(({ node }) => (
          <BlogPost
            key={node.slug}
            slug={node.slug}
            className="xl:flex-row"
            imgClassName="md:max-w-[296px] md:max-h-[250px]"
            imgSrc={node.featuredImage.node.sourceUrl}
            title={node.title}
            name={node.author.node.name}
            description={node.excerpt}
            descriptionStyle="text-sm md:max-w-[296px]"
            divWidth="md:max-w-[296px] h-[200px] md:h-[220px] flex flex-col justify-between"
            heading="text-lg md:max-w-[296px]"
          />
        ))}
      </div>
    </div>
  );
};

export default MoreStories;
