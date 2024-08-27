"use client";
import CodeSnippet from "@/components/molecules/code-snippet";
import { newBlogType } from "@/lib/api/types";
import { authFetchApi } from "@/lib/http-client";
import markdownToHtml, { splitMarkdownResult } from "@/lib/markdown-parser";
import { ReactNode, useState } from "react";

export default function BlogCreation(): ReactNode {
  const [content, setContent] = useState<string>("");
  const [parts, setParts] = useState<splitMarkdownResult[]>([]);
  const [error, setError] = useState<string | undefined>();

  const submit = async () => {
    const body: newBlogType = {
      content,
    };
    const result = await authFetchApi("blogs", "POST", body);
    if (result.status == 200) {
      setContent("");
      setParts([]);
      return;
    }
    const error = (await result.json()) as string;
    setError(error);
  };
  return (
    <div className="grid w-full grid-cols-2 gap-2">
      <form onSubmit={submit} className="flex flex-col gap-2">
        {error && <p className="text-red-500">{error}</p>}
        <textarea
          className="h-96 w-full bg-neutral-500"
          name="content"
          onChange={async (event) => {
            setContent(event.target.value);
            setParts(await markdownToHtml(event.target.value));
          }}
        />
        <button type="button" onClick={submit}>
          Submit blog
        </button>
      </form>
      <div className="flex flex-col gap-2">
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
      </div>
    </div>
  );
}
