"use client";
import Button from "@/components/atoms/button";
import CodeSnippet from "@/components/molecules/code-snippet";
import { newBlogType } from "@/lib/api/types";
import { authFetchApi, removeToken } from "@/lib/http-client";
import markdownToHtml, { splitMarkdownResult } from "@/lib/markdown-parser";
import { ReactNode, useState } from "react";
import { useAuthContext } from "../context/auth.context";
import Send from "@/components/icons/send";

export default function BlogCreation(): ReactNode {
  const [content, setContent] = useState<string>("");
  const [parts, setParts] = useState<splitMarkdownResult[]>([]);
  const [error, setError] = useState<string | undefined>();
  const setIsLoggedIn = useAuthContext();

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
      <Button
        onClick={() => {
          removeToken();
          setIsLoggedIn(false);
        }}
        className="absolute right-4 top-16 size-fit rounded-full"
      >
        <Send className="size-9" />
      </Button>
      <form onSubmit={submit} className="flex flex-col gap-2">
        {error && <p className="text-red-500">{error}</p>}
        <textarea
          className="h-96 w-full rounded-md bg-neutral-500 p-1"
          name="content"
          onChange={async (event) => {
            setContent(event.target.value);
            setParts(await markdownToHtml(event.target.value));
          }}
        />
        <Button
          className="rounded-md bg-neutral-500"
          type="button"
          onClick={submit}
        >
          Submit blog
        </Button>
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
