// import Avatar from "./Avatar";
// import DateComponent from "./Date"; // Renaming Date to DateComponent to avoid conflicts
// import CoverImage from "./CoverImage";
// import Link from "next/link";
// import React from "react";

// interface Image {
//   node: {
//     sourceUrl: string;
//   };
// }

// interface Author {
//   name: string;
//   picture?: string; // Optional field for avatar image
// }

// interface PostPreviewProps {
//   title: string;
//   coverImage: {
//     src: string;
//     width?: number;
//     height?: number;
//     alt?: string;
//   };
//   date: string;
//   excerpt: string;
//   author: Author;
//   slug: string;
// }

// const PostPreview: React.FC<PostPreviewProps> = ({
//   title,
//   coverImage,
//   date,
//   excerpt,
//   author,
//   slug,
// }) => {
//   return (
//     <div>
//       <div className="mb-5">
//         {coverImage && (
//           <CoverImage title={title} coverImage={coverImage} slug={slug} />
//         )}
//       </div>
//       <h3 className="text-3xl mb-3 leading-snug">
//         <Link href={`/posts/${slug}`} className="hover:underline">
//           {title}
//         </Link>
//       </h3>
//       <div className="text-lg mb-4">
//         <DateComponent dateString={date} />
//       </div>
//       <div
//         className="text-lg leading-relaxed mb-4"
//         dangerouslySetInnerHTML={{ __html: excerpt || "" }} // Ensure excerpt is not undefined
//       />
//       {/* <Avatar author={author} /> */}
//     </div>
//   );
// };

// export default PostPreview;
