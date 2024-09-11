import Loader from "@/components/atoms/loader";
import BlogPosts from "@/components/molecules/blog-posts";
import { Suspense } from "react";

export default function Page(): JSX.Element {
  return (
    <div className="mx-auto flex flex-col p-4">
      <h1 className="text-green-500">Welcome to my Blog</h1>
      <h2>Latest articles</h2>
      <ol className="my-2 list-none">
        <Suspense fallback={<Loader />}>
          <BlogPosts />
        </Suspense>
      </ol>
    </div>
  );
}
