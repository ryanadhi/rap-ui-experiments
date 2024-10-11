type ChipProps = {
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined";
  startIcon?: React.ReactNode;
  children: React.ReactNode;
};

const Chip = (props: ChipProps) => {
  const { variant = "filled", size = "medium", children, startIcon } = props;
  return (
    <div
      className={`flex items-center rounded-md border shadow-md border-gray-900 ${
        variant === "filled"
          ? "bg-gray-900 text-white"
          : "bg-transparent text-gray-900"
      } ${
        size === "small"
          ? "text-xs py-0.5 px-1 h-5"
          : size === "medium"
          ? "text-sm py-1 px-2 h-7"
          : "text-base py-1 px-2.5 h-9"
      }`}
    >
      {startIcon && <div className="mr-2">{startIcon}</div>}
      {children}
    </div>
  );
};

export default Chip;
