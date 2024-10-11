import CodeBlock from "../../common/CodeBlock";
import ComponentPreview from "../../ComponentPreview";
import ChipVariant from "@uiComponents/Chips/ChipVariant";
import chipVariantCodeSample from "@uiComponents/Chips/ChipVariant/codeSample";
import ChipSizes from "@uiComponents/Chips/ChipSizes";
import chipSizesCodeSample from "@uiComponents/Chips/ChipSizes/codeSample";
import ChipIcon from "@uiComponents/Chips/ChipIcon";
import chipIconCodeSample from "@uiComponents/Chips/ChipIcon/codeSample";

const Chips = () => {
  return (
    <div className="mb-4">
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-4 md:p-6 rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight my-1">
          Chip
        </h1>
        <p className="text-balance text-sm md:text-lg text-gray-500">
          A stylish chip component which can be used to display tags,
          categories, or any other information.
        </p>
      </div>
      <div className="mt-4 gap-8 flex flex-col">
        <ComponentPreview
          title="Chip variants"
          containerStyle="basis-full"
          tab1={<ChipVariant />}
          tab2={<CodeBlock code={chipVariantCodeSample} />}
        />
        <ComponentPreview
          title="Chip sizes"
          containerStyle="basis-full"
          tab1={<ChipSizes />}
          tab2={<CodeBlock code={chipSizesCodeSample} />}
        />
        <ComponentPreview
          title="Chip with icon"
          containerStyle="basis-full"
          tab1={<ChipIcon />}
          tab2={<CodeBlock code={chipIconCodeSample} />}
        />
      </div>
    </div>
  );
};

export default Chips;
