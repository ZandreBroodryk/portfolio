import markdownToHtml from "@/lib/markdown-parser";
import { ReactNode } from "react";
import CodeSnippet from "@/components/molecules/code-snippet";
import { fetchApi } from "@/lib/http-client";
import { detailedBlog } from "@/lib/api/types";
import Oops from "@/components/atoms/oops";

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
      {parts.map((part, index) =>
        part.type === "markdown" ? (
          <div
            className="flex w-full flex-col"
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
    </>
  );
}
