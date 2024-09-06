"use client";
import Button from "@/components/atoms/button";
import { newBlogType } from "@/lib/api/types";
import { authFetchApi, removeToken } from "@/lib/http-client";
import { ReactNode, useState } from "react";
import { useAuthContext } from "../../context/auth.context";
import Send from "@/components/icons/send";
import BlogEditor from "@/components/molecules/blog.form";
import BackButton from "@/components/atoms/back-button";

export default function BlogCreation(): ReactNode {
  const [error, setError] = useState<string | undefined>();
  const setIsLoggedIn = useAuthContext();

  const submit = async (content: string) => {
    const body: newBlogType = {
      content,
    };
    const result = await authFetchApi("blogs", "POST", body);
    if (result.status == 200) {
      return;
    }
    const error = (await result.json()) as string;
    setError(error);
  };
  return (
    <>
      <div className="ml-2 mr-auto flex">
        <BackButton label="Back" />
      </div>
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
        <BlogEditor initialContent="" error={error} onSubmit={submit} />
      </div>
    </>
  );
}
