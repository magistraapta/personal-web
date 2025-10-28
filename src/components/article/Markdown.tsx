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
        .then((text) => {
          // Transform Obsidian image syntax ![[image.png]] to standard markdown
          const transformedText = text.replace(/!\[\[([^\]]+)\]\]/g, (_, imagePath) => {
            // Convert to standard markdown image syntax pointing to public directory
            return `![${imagePath}](/image/${imagePath})`;
          });
          setContent(transformedText);
        })
        .catch((err) => {
          console.error("Failed to load markdown:", err);
          setContent("# Error\nCould not load content.");
        });
    }, [filePath]);


    const customMarkDown = {
        h1: (props: any) => <h1 className="text-3xl font-bold pt-3 mb-4 text-white-900" {...props} />,
        h2: (props: any) => <h2 className="text-2xl font-bold pt-2 mb-3 text-white" {...props} />,
        h3: (props: any) => <h3 className="text-xl font-bold pt-1 mb-2 text-white" {...props} />,
        h4: (props: any) => <h4 className="text-lg font-bold mb-2 text-white" {...props} />,
        h5: (props: any) => <h5 className="text-base font-bold mb-2 text-white" {...props} />,
        h6: (props: any) => <h6 className="text-sm font-bold mb-2 text-white" {...props} />,
        p: (props: any) => <p className="text-base pb-6 text-white leading-relaxed" {...props} />,
        ul: (props: any) => <ul className="list-disc list-inside py-2 space-y-1" {...props} />,
        ol: (props: any) => <ol className="list-decimal list-inside space-y-1" {...props} />,
        li: (props: any) => <li className="ml-4 text-white" {...props} />,
        a: (props: any) => <a className="text-blue-600 hover:text-blue-800 hover:underline transition-colors" {...props} />,
        img: (props: any) => <img className="w-full h-auto rounded-lg shadow-sm my-4" {...props} />,
        code: (props: any) => {
            if (props.className) {
                return <code {...props} />
            } else {
                return (
                    <code 
                        className="text-sm font-mono bg-gray-100 text-gray-800 px-2 py-1 rounded-md border border-gray-200 shadow-sm" 
                        {...props} 
                    />
                )
            }
        },
        pre: (props: any) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto shadow-lg border border-gray-700 my-4" {...props} />
        ),
        blockquote: (props: any) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 text-black italic my-4" {...props} />
        ),
        table: (props: any) => (
            <table className="min-w-full border-collapse border border-gray-300 my-4" {...props} />
        ),
        th: (props: any) => (
            <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold" {...props} />
        ),
        td: (props: any) => (
            <td className="border border-gray-300 px-4 py-2" {...props} />
        ),
    }
  
    return (
        <div className="markdown-content">
            <ReactMarkdown
                components={customMarkDown}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
  }





    