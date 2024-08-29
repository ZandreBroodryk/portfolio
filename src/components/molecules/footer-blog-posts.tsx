import { blogSummariesResponse } from "@/lib/api/types";
import { fetchApi } from "@/lib/http-client";
import Link from "next/link";
import Oops from "../atoms/oops";

type FooterBlogPostsProps = {
  currentBlogPost?: number;
};

export default async function FooterBlogPosts({
  currentBlogPost: excluding,
}: FooterBlogPostsProps): Promise<JSX.Element | JSX.Element[]> {
  const result = await fetchApi("blogs");
  const validation = blogSummariesResponse.safeParse(await result.json());
  if (validation.success) {
    return validation.data
      .slice(0, 3)
      .filter((blog) => blog.id != excluding)
      .map((blog) => (
        <li key={blog.id} className="m-1 py-2">
          <Link href={`blog/${blog.id}`} className="flex rounded-md border p-2">
            {blog.id}
            {blog.title}
          </Link>
        </li>
      ));
  }
  return <Oops />;
}
