import React from "react";
import ComponentPreview from "../../ComponentPreview";
import ButtonHover from "@uiComponents/Buttons/ButtonHover";
import buttonHoverCodeSample from "@uiComponents/Buttons/ButtonHover/codeSample";
import ButtonGlowing from "@uiComponents/Buttons/ButtonGradientGlowing";
import buttonGlowingCodeSample from "@uiComponents/Buttons/ButtonGradientGlowing/codeSample";
import ButtonCircle from "@uiComponents/Buttons/ButtonCircle";
import buttonCircleCodeSample from "@uiComponents/Buttons/ButtonCircle/codeSample";
import CodeBlock from "../../common/CodeBlock";

const Buttons = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-6 rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight my-1">Button</h1>
        <p className="text-balance text-sm md:text-lg text-gray-500">
          A stylish button component for enhancing user interactions.
        </p>
      </div>
      <div className="mt-4 gap-8 flex flex-col">
        <ComponentPreview
          title="Pressed button on hover"
          containerStyle="basis-full"
          tab1={<ButtonHover />}
          tab2={<CodeBlock code={buttonHoverCodeSample} />}
        />
        <ComponentPreview
          title="Glowing gradient button"
          containerStyle="basis-full"
          tab1={<ButtonGlowing />}
          tab2={<CodeBlock code={buttonGlowingCodeSample} />}
        />
        <ComponentPreview
          title="Arrow circling button"
          containerStyle="basis-full"
          tab1={<ButtonCircle />}
          tab2={<CodeBlock code={buttonCircleCodeSample} />}
        />
      </div>
    </div>
  );
};

export default Buttons;
