"use client";

import { useEffect } from "react";
import "prismjs/themes/prism-okaidia.css"; // Changed to Okaidia theme
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "tsx" }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="bg-[#272822] text-[#f8f8f2] p-4 rounded-lg shadow-none w-full">
      {" "}
      {/* Adjusted background color */}
      <pre className="bg-[#272822] text-[#f8f8f2] p-4 rounded-md overflow-hidden">
        {" "}
        {/* Adjusted background and text color */}
        <code
          className={`language-${language} block w-full`}
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
            overflowWrap: "break-word",
            hyphens: "auto",
            lineHeight: "1.5",
            maxWidth: "100%",
          }}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
