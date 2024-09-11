import { TypeOf, z } from "zod";

export const loginRequest = z.object({
  username: z.string().email(),
  password: z.string(),
});

export type loginRequestType = TypeOf<typeof loginRequest>;

export const blogSummary = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  createdAt: z.string().date(),
  wordCount: z.number().int().positive(),
});

export const blogSummariesResponse = blogSummary.array();

export const detailedBlog = z.object({
  createdAt: z.string().date(),
  author: z.string(),
  content: z.string(),
});

export const newBlog = z.object({
  content: z.string(),
});

export type newBlogType = TypeOf<typeof newBlog>;
