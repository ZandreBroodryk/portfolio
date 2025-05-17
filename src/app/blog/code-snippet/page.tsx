import CodeSnippet from "@/components/code-snippet";

export default function CodeSnippetPage() {
  return (
    <>
      <CodeSnippet
        code={`    let my_value = 100;\n    println!(oh no);`}
        language="rust"
        fileName="main.rs"
      />
    </>
  );
}
