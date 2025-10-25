// render markdown 

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

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


    const customMarkDown = {
        h1: (props: any) => <h1 className="text-3xl font-bold pt-3" {...props} />,
        h2: (props: any) => <h2 className="text-2xl font-bold pt-2" {...props} />,
        h3: (props: any) => <h3 className="text-xl font-bold pt-1" {...props} />,
        h4: (props: any) => <h4 className="text-lg font-bold" {...props} />,
        h5: (props: any) => <h5 className="text-base font-bold" {...props} />,
        h6: (props: any) => <h6 className="text-sm font-bold" {...props} />,
        p: (props: any) => <p className="text-base pb-6" {...props} />,
        ul: (props: any) => <ul className="list-disc list-inside py-2" {...props} />,
        ol: (props: any) => <ol className="list-decimal list-inside" {...props} />,
        li: (props: any) => <li className="ml-4" {...props} />,
        a: (props: any) => <a className="text-blue-500 hover:underline" {...props} />,
        img: (props: any) => <img className="w-full h-auto" {...props} />,
        code: (props: any) => <code className="text-base bg-gray-100 p-1 rounded-md" {...props} />,
    }
  
    return (
        <ReactMarkdown
        components={customMarkDown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        >{content}</ReactMarkdown>
    );
  }





    