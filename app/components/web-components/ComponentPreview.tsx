"use client";
import { useState } from "react";

type ComponentPreviewProps = {
  title: string;
  containerStyle: string;
  tab1: React.ReactNode;
  tab2: React.ReactNode;
};

const ComponentPreview = (props: ComponentPreviewProps) => {
  const { title = "", containerStyle = "", tab1 = <></>, tab2 = <></> } = props;
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={containerStyle}>
      <div className="">
        <h2 className="text-xl font-semibold tracking-tight text-gray-800">{title}</h2>
      </div>
      <div className="flex space-x-4 border-b border-gray-400 my-1 w-full gap-4 relative ">
        <button
          className={`border-b-4 p-2 transition-all duration-300 ${
            activeTab === 1 ? "border-gray-800" : "border-transparent"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Preview
        </button>
        <button
          className={`border-b-4 p-2 transition-all duration-300 ${
            activeTab === 2 ? "border-gray-800" : "border-transparent"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Code
        </button>
      </div>
      {activeTab === 1 && (
        <div className="flex w-full justify-center items-center inset-0 h-48 bg-slate-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          {tab1}
        </div>
      )}
      {activeTab === 2 && tab2}
    </div>
  );
};

export default ComponentPreview;
