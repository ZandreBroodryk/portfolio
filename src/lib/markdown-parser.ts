import { remark } from "remark";
import { supporedLanguages } from "./types";
import targetBlank from "./target-blank";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const parts = await splitMarkdown(markdown);

  return parts;
}

type splitMarkdownResult = {
  type: "code" | "markdown";
  value: string;
  language?: supporedLanguages;
  fileName?: string;
  referenceCode?: string;
};

async function splitMarkdown(markdown: string) {
  const markdownLines: string[] = markdown.split("\n");

  let isInCodeBlock = false;
  let isInReferenceBlock = false;

  const result: splitMarkdownResult[] = [];
  for (let index = 0; index < markdownLines.length; index++) {
    const line = markdownLines[index];

    if (line.startsWith("```reference")) {
      isInReferenceBlock = true;
      continue;
    }

    if (isInReferenceBlock) {
      if (line === "```") {
        isInReferenceBlock = false;
        continue;
      }
      result[result.length - 1].referenceCode ??= "";
      result[result.length - 1].referenceCode += `${line}\n`;
      continue;
    }

    if (line.startsWith("```") && !isInCodeBlock && !isInReferenceBlock) {
      isInCodeBlock = true;
      const [language, filename] = line.slice(3).split(" ");
      result.push({
        type: "code",
        fileName: filename,
        language: language as supporedLanguages,
        value: "",
      });
      continue;
    }

    if (isInCodeBlock) {
      if (line === "```") {
        isInCodeBlock = false;
        continue;
      }
      result[result.length - 1].value += `${line}\n`;
      continue;
    }

    let lastEntry: splitMarkdownResult = result.at(result.length - 1) ?? {
      type: "markdown",
      value: "",
    };

    if (lastEntry.type === "code") {
      lastEntry = {
        type: "markdown",
        value: "",
      };
    }

    if (lastEntry.value === "") {
      result.push(lastEntry);
    }

    lastEntry.value += `${line}\n`;
  }

  for (let index = 0; index < result.length; index++) {
    const entry = result[index];
    if (entry.type === "markdown") {
      const innerHtml = await remark()
        .use(targetBlank)
        .use(remarkRehype)
        .use(rehypeStringify)
        // .use(html)
        .process(entry.value);
      entry.value = innerHtml.toString();

      // console.log(entry.value);
    }
  }

  return result;
}
