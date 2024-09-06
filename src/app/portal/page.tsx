import Oops from "@/components/atoms/oops";
import { blogSummariesResponse } from "@/lib/api/types";
import { fetchApi } from "@/lib/http-client";
import Link from "next/link";

export default async function PortalPage(): Promise<JSX.Element> {
  const result = await fetchApi("blogs");
  const validation = blogSummariesResponse.safeParse(await result.json());
  if (validation.success) {
    return (
      <>
        <Link href={`portal/new`}>New Blog Post</Link>
        <p>-OR-</p>
        {validation.data.map((blog) => (
          <li key={blog.id} className="my-1 list-decimal">
            <Link href={`portal/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </>
    );
  }
  return <Oops />;
}
