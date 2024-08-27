import { blogSummariesResponse } from "@/lib/api/types";
import { fetchApi } from "@/lib/http-client";
import Link from "next/link";
import Oops from "../atoms/oops";

export default async function BlogPosts(): Promise<
  JSX.Element | JSX.Element[]
> {
  const result = await fetchApi("blogs");
  const validation = blogSummariesResponse.safeParse(await result.json());
  if (validation.success) {
    return validation.data.map((blog) => (
      <li key={blog.id}>
        <Link href={`blog/${blog.id}`}>{blog.title}</Link>
      </li>
    ));
  }
  return <Oops />;
}
