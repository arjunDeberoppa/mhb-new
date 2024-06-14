import React from "react";
import StartTransformation from "@/components/homePage/Transformation";
import StayTuned from "@/components/homePage/Update";
import FeaturedMediaSection from "@/components/homePage/FeaturedCompanies";
import BlogsHero from "@/components/blogs/BlogsHero";
import BlogsList from "@/components/blogs/BlogsList";
import { getAllPostsForHome } from "../core/api";

export interface Post {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  topic: string;
}

export default async function Blogs() {
  const data = await getAllPostsForHome(false);
  const posts = data;
  console.log("All posts", data);

  const post = posts.slice(0, 4);
  const latestPost = posts.slice(0, 1);
  const otherPosts = posts.slice(1, 4);

  return (
    <div className="overflow-hidden bg-custom-light border-t border-custom-gray ">
      <BlogsHero latestPosts={latestPost} otherPosts={otherPosts} />
      <div className="flex flex-col gap-12 md:gap-20 container max-w-[1440px] pb-16 md:pb-28 mx-auto">
        <BlogsList posts={post} />
      </div>
      {/* <CareerSection /> */}
      <StartTransformation />
      <FeaturedMediaSection />
      <StayTuned />
    </div>
  );
}
