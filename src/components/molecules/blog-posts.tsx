import { blogSummariesResponse } from "@/lib/api/types";
import { fetchApi } from "@/lib/http-client";
import Link from "next/link";
import Oops from "../atoms/oops";

export default async function BlogPosts(): Promise<
  JSX.Element | JSX.Element[]
> {
  const result = await fetchApi("blogs");
  const validation = blogSummariesResponse.safeParse(await result.json());

  const averageHumanReadSpeedWpm = 238;

  if (validation.success) {
    return validation.data.map((blog) => (
      <li key={blog.id} className="my-1 w-96 py-3">
        <Link href={`blog/${blog.id}`}>
          <div className="rounded-lg border border-gray-800 p-6 transition-colors hover:border-green-500">
            <h3 className="mb-2 text-xl font-semibold transition-colors hover:text-green-500">
              {blog.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              <span>{blog.createdAt}</span>
              <span className="mx-2">•</span>
              <span>
                {Math.ceil(blog.wordCount / averageHumanReadSpeedWpm)} min read
              </span>
            </div>
          </div>
        </Link>
      </li>
    ));
  }
  return <Oops />;
}
