import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-4 h-16 flex items-center bg-white bg-opacity-70 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 justify-between mx-4">
      <div className="">
        <Link
          className="p-1 rounded sm:hover:bg-slate-200 sm:hover:text-slate-950 leading-relaxed text-xl font-mono"
          href="/"
        >
          <span className="">rap - UI Experiments</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
