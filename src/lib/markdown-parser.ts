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
  const handleReferenceBlock = (line: string) => {
    if (line.startsWith("```reference")) {
      isInReferenceBlock = true;
      return true;
    }

    if (isInReferenceBlock) {
      if (line === "```") {
        isInReferenceBlock = false;
        return true;
      }
      result[result.length - 1].referenceCode ??= "";
      result[result.length - 1].referenceCode += `${line}\n`;
      return true;
    }
    return false;
  };

  const handleCodeBlock = (line: string) => {
    if (line.startsWith("```") && !isInCodeBlock && !isInReferenceBlock) {
      isInCodeBlock = true;
      const [language, filename] = line.slice(3).split(" ");
      result.push({
        type: "code",
        fileName: filename,
        language: language as supporedLanguages,
        value: "",
      });
      return true;
    }

    if (isInCodeBlock) {
      if (line === "```") {
        isInCodeBlock = false;
        return true;
      }
      result[result.length - 1].value += `${line}\n`;
      return true;
    }
    return false;
  };

  const handleNonCodeBlock = (line: string) => {
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
  };

  for (let index = 0; index < markdownLines.length; index++) {
    const line = markdownLines[index];

    if (handleReferenceBlock(line)) {
      continue;
    }

    if (handleCodeBlock(line)) {
      continue;
    }

    handleNonCodeBlock(line);
  }

  await parseMarkdownSegments(result);

  return result;
}

async function parseMarkdownSegments(result: splitMarkdownResult[]) {
  for (let index = 0; index < result.length; index++) {
    const entry = result[index];
    if (entry.type === "markdown") {
      const innerHtml = await remark()
        .use(targetBlank)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(entry.value);
      entry.value = innerHtml.toString();
    }
  }
}
