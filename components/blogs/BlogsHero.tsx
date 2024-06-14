import React from "react";
import BlogPost from "../BlogsPost";

interface BlogsHeroProps {
  latestPosts: any;
  otherPosts: any;
}

const BlogsHero: React.FC<BlogsHeroProps> = ({ latestPosts, otherPosts }) => {
  return (
    <section className="overflow-hidden bg-custom-light border-t border-custom-gray">
      <div className="flex flex-col gap-12 md:gap-20 container max-w-[1440px] py-16 md:pb-28 md:pt-24 mx-auto">
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="font-medium">Insights</p>
          <div className="flex flex-col gap-5 md:gap-6">
            <h2 className="leading-[48px] md:leading-[67.2px] text-[40px] md:text-[56px] font-bold">
              Discover the
              <span className="text-custom-green"> Latest Trends</span>
            </h2>
            <p className="text-lg">
              Stay informed with our informative blog posts.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-bold text-2xl">Featured Blog Posts</p>
          <div>
            <div className="flex flex-col lg:flex-row gap-8">
              {latestPosts.map((post: any, index: any) => (
                <BlogPost
                  slug={post.slug}
                  key={index}
                  className="w-full lg:max-w-[640px]"
                  imgClassName="w-full lg:max-w-[640px] lg:h-[400px]"
                  name={post.categories}
                  title={post.title}
                  description={post.excerpt}
                  descriptionStyle="max-w-[640px]"
                  imgSrc={post.featuredImage?.sourceUrl}
                  divWidth="flex flex-col gap-6 max-w-[640px]"
                  heading="text-2xl md:text-[32px] md:max-w-[640px]"
                />
              ))}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-16 md:gap-y-8">
                {otherPosts.map((post: any, index: any) => (
                  <BlogPost
                    slug={post.slug}
                    key={index}
                    className="xl:flex-row xl:max-w-[640px]"
                    imgClassName="w-full md:w-auto xl:w-[250px] md:h-auto xl:h-[160px]"
                    name={post.categories}
                    imgSrc={post.featuredImage?.sourceUrl}
                    title={post.title}
                    description={post.excerpt}
                    descriptionStyle="line-clamp-1"
                    divWidth="flex flex-col gap-4 max-w-full lg:max-w-[366px]"
                    heading="text-xl md:text-2xl line-clamp-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
