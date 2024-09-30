const ButtonGradientGlowing = () => {
  return (
    <div className="relative inline-flex group">
      <div className="absolute transition-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#FFD700] via-[#FFA07A] to-[#FF6347] rounded-md blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-1000"></div>
      <button className="relative inline-flex items-center justify-center px-6 h-10 text-white bg-gray-900 rounded-md">
        Hover me
      </button>
    </div>
  );
};

export default ButtonGradientGlowing;
