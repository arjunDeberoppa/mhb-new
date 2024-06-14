import styles from "./content.module.css";
import React from "react";

interface PostBodyProps {
  content: string;
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-20">
      <div className="max-w-[768px]">
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content || "" }}
        />
      </div>
      <div className="bg-white shadow-lg flex flex-col gap-4 px-8 py-8 mt-32 rounded-sm w-auto h-auto md:w-[464px] md:h-96 xl:h-[340px]">
        <p className="text-xl font-bold">Subscribe to newsletter</p>
        <p>
          Subscribe to receive the latest blog posts to your inbox every week.
        </p>
        <input
          className="px-3 py-2.5 border-2 border-gray-300"
          type="text"
          placeholder="Enter your email"
        />
        <button className="bg-custom-green text-custom-light py-2 uppercase font-medium">
          Subscribe
        </button>
        <div>
          <p className="text-xs">By subscribing you agree to with our</p>
          <p className="text-xs underline">Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default PostBody;
