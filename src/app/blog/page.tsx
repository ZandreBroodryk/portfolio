import Loader from "@/components/atoms/loader";
import BlogPosts from "@/components/molecules/blog-posts";
import { Suspense } from "react";

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col p-4">
      <h1>Welcome to my Blog</h1>
      <h2>Some blog posts of stuff I like to reference or share</h2>
      <ol className="list-decimal">
        <Suspense fallback={<Loader />}>
          <BlogPosts />
        </Suspense>
      </ol>
    </div>
  );
}
