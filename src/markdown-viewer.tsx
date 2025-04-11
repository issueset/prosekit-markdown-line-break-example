import { useDocChange, useEditor } from "prosekit/react";
import { EditorExtension } from "./extension";
import { useCallback, useState } from "react";
import { getMarkdownContent } from "./markdown/markdownContent";
import { CodeBlock } from "react-code-blocks";

export default function MarkdownViewer() {
  const editor = useEditor<EditorExtension>();

  const [markdown, setMarkdown] = useState("");

  useDocChange(
    useCallback(() => {
      const markdown = getMarkdownContent(editor);
      setMarkdown(markdown);
    }, [editor])
  );

  return (
    <div>
      <CodeBlock text={markdown} language={"markdown"} showLineNumbers={true} />
    </div>
  );
}
