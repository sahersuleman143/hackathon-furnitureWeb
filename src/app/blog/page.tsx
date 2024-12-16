// app/blog/[id]/page.tsx
import React from "react";

// Async function to fetch data for the dynamic route using params.id
const BlogPost = async ({ params }: { params: { id: string } }) => {
  // Fetching the blog post data using the dynamic ID from the URL
  const res = await fetch(`https://your-api.com/posts/${params.id}`);
  const postData = await res.json();

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
    </div>
  );
};

export default BlogPost;
