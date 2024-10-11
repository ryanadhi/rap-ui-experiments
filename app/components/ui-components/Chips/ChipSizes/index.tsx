import ChipComponent from "../ChipComponent";

const ChipSizes = () => {
  return (
    <div className="flex gap-2 items-center">
      <ChipComponent size="small">Small chip</ChipComponent>
      <ChipComponent>Medium chip</ChipComponent>
      <ChipComponent size="large">Large chip</ChipComponent>
    </div>
  );
};

export default ChipSizes;
