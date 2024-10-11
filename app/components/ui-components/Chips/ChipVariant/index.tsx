import ChipComponent from "../ChipComponent";

const ChipVariants = () => {
  return (
    <div className="flex gap-2">
      <ChipComponent variant="filled">Chip filled</ChipComponent>
      <ChipComponent variant="outlined">Chip outlined</ChipComponent>
    </div>
  );
};

export default ChipVariants;
