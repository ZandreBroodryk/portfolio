"use-client";

import markdownToHtml, {
  splitMarkdownResult,
} from "@/lib/markdown/markdown-parser";
import { useEffect, useState } from "react";
import Button from "../atoms/button";
import CodeSnippet from "./code-snippet";

type BlogEditorProps = {
  initialContent: string;
  error?: string;
  onSubmit: (content: string) => Promise<void>;
};
export default function BlogEditor({
  initialContent,
  onSubmit,
  error,
}: BlogEditorProps): JSX.Element {
  const [content, setContent] = useState<string>(initialContent);
  const [parts, setParts] = useState<splitMarkdownResult[]>([]);

  useEffect(() => {
    const parseParts = async () => {
      setParts(await markdownToHtml(initialContent));
    };

    parseParts();
    return;
  }, [initialContent]);

  return (
    <>
      <form className="flex flex-col gap-2">
        {error && <p className="text-red-500">{error}</p>}
        <textarea
          className="h-96 w-full rounded-md bg-neutral-500 p-1"
          name="content"
          value={content}
          onChange={async (event) => {
            setContent(event.target.value);
            setParts(await markdownToHtml(event.target.value));
          }}
        />
        <Button
          className="rounded-md bg-neutral-500"
          type="button"
          onClick={() => onSubmit(content)}
        >
          Submit blog
        </Button>
      </form>
      <div className="flex flex-col">
        {parts.map((part, index) =>
          part.type === "markdown" ? (
            <div
              className="flex w-full flex-col gap-4"
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
    </>
  );
}
