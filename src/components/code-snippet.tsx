import { CSSProperties, ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import compareStrings from "@/lib/string-comparer";
import CopyToClipBoard from "./copy-to-clipboard-button";
import { supportedLanguages } from "@/lib/shared";

type CodeSnippetProps = {
  code: string;
  compareCode?: string;
  language: supportedLanguages;
  fileName?: string;
};

export default function CodeSnippet({
  code,
  language,
  fileName,
  compareCode,
}: CodeSnippetProps): ReactNode {
  const strokeWidthOnIcons = 0.4;
  let addedLines: number[] = [];
  let removedLines: number[] = [];
  let codeDisplay = code;
  if (compareCode) {
    const { addedLineNumbers, removedLineNumbers, combinedString } =
      compareStrings(compareCode, code);
    addedLines = addedLineNumbers;
    removedLines = removedLineNumbers;
    codeDisplay = combinedString;
  }

  return (
    <div className="flex flex-col rounded bg-neutral-900 md:w-[600px]">
      <div className="mx-2 flex flex-row justify-between py-2">
        <Image src="/vs-code-icon.png" alt="Code" height={24} width={24} />
        <div className="flex h-6 w-24 items-center gap-4 self-center py-1">
          <svg
            viewBox="0 0 10 10"
            stroke="currentColor"
            strokeWidth={strokeWidthOnIcons}
          >
            <path d="M2 5 H 6" />
          </svg>
          <svg
            viewBox="0 0 10 10"
            stroke="currentColor"
            fill="none"
            strokeWidth={strokeWidthOnIcons}
          >
            <rect width={5} height={5} x={2} y={2} />
          </svg>
          <svg
            viewBox="0 0 10 10"
            stroke="currentColor"
            strokeWidth={strokeWidthOnIcons}
          >
            <path d="M2 2 L 8 8" />
            <path d="M2 8 L 8 2" />
          </svg>
        </div>
      </div>
      {fileName && (
        <div className="flex flex-row justify-between bg-neutral-800 px-2">
          <div className="flex flex-row items-center gap-4 border border-b-0 border-neutral-700 p-2">
            <p>{fileName}</p>
            <svg
              viewBox="0 0 10 10"
              stroke="currentColor"
              strokeWidth={strokeWidthOnIcons}
              className="size-5"
            >
              <path d="M2 2 L 8 8" />
              <path d="M2 8 L 8 2" />
            </svg>
          </div>
        </div>
      )}
      <div className="relative max-w-[90vw] overflow-auto">
        <div className="absolute top-2 right-2">
          <CopyToClipBoard text={code} />
        </div>
        <SyntaxHighlighter
          language={language}
          style={hybrid}
          showLineNumbers
          wrapLongLines
          lineProps={(lineNumber) => {
            const style: CSSProperties = { display: "block" };
            if (addedLines.includes(lineNumber)) {
              style.backgroundColor = "rgba(0, 200, 20, 0.3)";
            } else if (removedLines.includes(lineNumber)) {
              style.backgroundColor = "rgba(200, 0, 0, 0.3)";
            }
            return { style };
          }}
        >
          {codeDisplay}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
