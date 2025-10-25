// render markdown 

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownRenderer({ filePath }: { filePath: string }) {
    const [content, setContent] = useState<string>("");
  
    useEffect(() => {
      fetch(filePath)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => {
          console.error("Failed to load markdown:", err);
          setContent("# Error\nCould not load content.");
        });
    }, [filePath]);
  
    return (
        <ReactMarkdown>{content}</ReactMarkdown>
    );
  }





    