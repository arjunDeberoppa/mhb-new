import { Metadata } from "next";
import { getPostAndMorePosts } from "@/app/core/api";
import PostBody from "@/components/blogs/PostBody";
import MoreStories from "@/components/blogs/MoreStories";
import PostHeader from "@/components/blogs/PostHeader";
// import SectionSeparator from "@/components/blogs/SectionSeparator";
import Tags from "@/components/blogs/Tags";

interface PostType {
  slug: string;
  title: string;
  content: string;
  date: string;
  author: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  categories: any;
  tags: {
    edges: {
      node: {
        name: string;
      };
    }[];
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPostAndMorePosts(params.slug, false, null);
  const post = data?.post;

  if (!post) {
    return {
      title: "Post not found | Next.js Blog Example",
    };
  }

  return {
    title: `${post.title} | Next.js Blog Example`,
    openGraph: {
      images: [post.featuredImage?.node.sourceUrl],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getPostAndMorePosts(params.slug, false, null);
  const post = data?.post;
  const morePosts = data?.posts?.edges ?? [];
  const preview = false;

  if (!post) {
    return (
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 mb-28">
        <h1>Post not found</h1>
        <p>The post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-16 mb-28">
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.featuredImage}
          date={post.date}
          author={post.author}
          categories={post.categories}
        />
        <PostBody content={post.content} />
        <footer>
          {post.tags.edges.length > 0 && <Tags tags={post.tags.edges} />}
        </footer>
      </article>
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      <MoreStories posts={morePosts} />
    </div>
  );
}
