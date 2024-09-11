import markdownToHtml from "@/lib/markdown/markdown-parser";
import { ReactNode, Suspense } from "react";
import CodeSnippet from "@/components/molecules/code-snippet";
import { fetchApi } from "@/lib/http-client";
import { detailedBlog } from "@/lib/api/types";
import Oops from "@/components/atoms/oops";
import FooterBlogPosts from "@/components/molecules/footer-blog-posts";
import Loader from "@/components/atoms/loader";
import BackButton from "@/components/atoms/back-button";

export default async function MarkdownPage({
  params,
}: {
  params: { id: number };
}): Promise<ReactNode> {
  const apiResult = await fetchApi(`blogs/${params.id}`);
  const jsonBody = await apiResult.json();
  const validation = detailedBlog.safeParse(jsonBody);
  if (!validation.success) {
    return <Oops />;
  }
  const parts = await markdownToHtml(validation.data.content);
  return (
    <>
      <BackButton label="Back to all posts" route="/blog" />
      <div className="mx-auto mb-10 flex flex-col">
        {parts.map((part, index) =>
          part.type === "markdown" ? (
            <div
              className="flex max-w-[600px] flex-col gap-4"
              key={index}
              dangerouslySetInnerHTML={{ __html: part.value }}
            />
          ) : (
            <CodeSnippet
              key={index}
              code={part.value}
              language={part.language ?? "markdown"}
              fileName={part.fileName}
              compareCode={part.referenceCode}
            />
          ),
        )}
      </div>
      <footer className="mt-auto w-full border-t">
        <h3 className="py-2">Recommended further reading:</h3>
        <ul className="grid grid-cols-1 pt-2 md:grid-cols-3">
          <Suspense fallback={<Loader />}>
            <FooterBlogPosts currentBlogPost={params.id} />
          </Suspense>
        </ul>
      </footer>
    </>
  );
}
