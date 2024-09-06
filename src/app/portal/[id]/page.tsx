"use client";

import Button from "@/components/atoms/button";
import { detailedBlog, newBlogType } from "@/lib/api/types";
import { authFetchApi, fetchApi, removeToken } from "@/lib/http-client";
import Send from "@/components/icons/send";
import { useAuthContext } from "@/app/context/auth.context";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/atoms/loader";
import BlogEditor from "@/components/molecules/blog.form";
import { useState } from "react";
import BackButton from "@/components/atoms/back-button";

export default function BlogCreation({
  params,
}: {
  params: { id: number };
}): JSX.Element {
  const setIsLoggedIn = useAuthContext();

  const [error, setError] = useState<string | undefined>();

  const detailedPostQuery = useQuery({
    queryKey: ["blog-portal", params.id],
    queryFn: async () => {
      const apiResult = await fetchApi(`blogs/${params.id}`);
      const jsonBody = await apiResult.json();
      const validation = detailedBlog.safeParse(jsonBody);
      if (!validation.success) {
        return JSON.stringify(validation.error);
      }
      return validation.data.content;
    },
  });

  const submit = async (content: string) => {
    const body: newBlogType = {
      content,
    };
    const result = await authFetchApi(`blogs/${params.id}`, "POST", body);
    if (result.status == 200) {
      await detailedPostQuery.refetch();
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
        {detailedPostQuery.isLoading ? (
          <Loader />
        ) : (
          <BlogEditor
            initialContent={detailedPostQuery.data!}
            error={error}
            onSubmit={submit}
          />
        )}
      </div>
    </>
  );
}
