// import React from "react";
// import Button from "../Button";
// import BlogPost from "../BlogsPost";

// const blogData = [
//   {
//     topic: "Fitness",
//     imgSrc: "/assets/Blogs/Blog Placeholder Image-4.png",
//     title: "The Impact of Sleep on Fitness Performance",
//     description:
//       "Discover how quality sleep can enhance your fitness performance and recovery.",
//   },
//   {
//     topic: "Fitness",
//     imgSrc: "/assets/Blogs/Blog Placeholder Image-4.png",
//     title: "The Impact of Sleep on Fitness Performance",
//     description:
//       "Discover how quality sleep can enhance your fitness performance and recovery.",
//   },
//   {
//     topic: "Fitness",
//     imgSrc: "/assets/Blogs/Blog Placeholder Image-4.png",
//     title: "The Impact of Sleep on Fitness Performance",
//     description:
//       "Discover how quality sleep can enhance your fitness performance and recovery.",
//   },
//   {
//     topic: "Fitness",
//     imgSrc: "/assets/Blogs/Blog Placeholder Image-4.png",
//     title: "The Impact of Sleep on Fitness Performance",
//     description:
//       "Discover how quality sleep can enhance your fitness performance and recovery.",
//   },
//   {
//     topic: "Fitness",
//     imgSrc: "/assets/Blogs/Blog Placeholder Image-4.png",
//     title: "The Impact of Sleep on Fitness Performance",
//     description:
//       "Discover how quality sleep can enhance your fitness performance and recovery.",
//   },
//   {
//     topic: "Fitness",
//     imgSrc: "/assets/Blogs/Blog Placeholder Image-4.png",
//     title: "The Impact of Sleep on Fitness Performance",
//     description:
//       "Discover how quality sleep can enhance your fitness performance and recovery.",
//   },
// ];

// const BlogsList = () => {
//   return (
//     <div className="flex flex-col gap-10">
//       <h2 className="text-xl md:text-2xl font-bold">Latests blog posts</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogData.map((blog, index) => (
//           <BlogPost
//             key={index}
//             className=""
//             imgClassName=""
//             topic={blog.topic}
//             imgSrc={blog.imgSrc}
//             title={blog.title}
//             description={blog.description}
//             divWidth="flex flex-col gap-4 md:w-72 lg:w-auto"
//             heading="text-xl md:text-2xl"
//           />
//         ))}
//       </div>
//       <div className="block mx-auto">
//         <Button
//           className="bg-custom-purple text-custom-light font-medium px-6 py-3"
//           href=""
//           text="Load more blogs"
//         />
//       </div>
//     </div>
//   );
// };

// export default BlogsList;

import React from "react";
import Button from "../Button";
import BlogPost from "../BlogsPost";

interface BlogsListProps {
  posts: any;
}

const BlogsList: React.FC<BlogsListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-xl md:text-2xl font-bold">Latest blog posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {posts.map((post: any, index: any) => (
          <BlogPost
            slug={post.slug}
            key={index}
            className="md:max-w-[416px] md:max-h-[580px]"
            imgClassName="w-auto"
            name={post.categories}
            imgSrc={post.featuredImage?.sourceUrl}
            title={post.title}
            description={post.excerpt}
            descriptionStyle=""
            divWidth="flex flex-col gap-4 md:w-72 lg:w-auto"
            heading="text-xl md:text-2xl"
          />
        ))}
      </div>
      <div className="block mx-auto">
        <Button
          className="bg-custom-purple text-custom-light font-medium px-6 py-3"
          href=""
          text="Load more blogs"
        />
      </div>
    </div>
  );
};

export default BlogsList;
