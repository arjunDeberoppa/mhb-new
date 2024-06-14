import React from "react";

async function getPosts() {
  const res = await fetch(
    "https://public-api.wordpress.com/wp/v2/sites/mhb59.wordpress.com/posts"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
