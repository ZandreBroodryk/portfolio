import markdownToHtml from "@/lib/markdown-parser";
import { ReactNode } from "react";
import CodeSnippet from "@/components/molecules/code-snippet";

export default async function MarkdownPage(): Promise<ReactNode> {
  const apiResult = await fetch("api/id");
  const jsonBody = await apiResult.json();
  const parts = await markdownToHtml(jsonBody.markdown);
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
