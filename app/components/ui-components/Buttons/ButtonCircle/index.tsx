"use client";

import { motion } from "framer-motion";

const ButtonCircle = () => {
  return (
    <motion.div
      className="w-20 h-20 relative"
      role="button"
      initial="hidden" // Start in hidden state
      whileHover="visible" // Trigger hover animations for both circle and arrow
    >
      <svg
        className="fill-slate-100"
        width="100%"
        height="100%"
        viewBox="0 0 80 80"
      >
        <circle
          className="stroke-slate-300"
          cx="40"
          cy="40"
          r="36"
          strokeWidth={2}
        />
      </svg>

      {/* Animated Circle on Hover */}
      <motion.svg
        className="absolute top-0 left-0 z-10 fill-transparent"
        width="100%"
        height="100%"
        viewBox="0 0 80 80"
      >
        <motion.circle
          className="stroke-slate-800"
          cx="40"
          cy="40"
          r="36"
          strokeWidth={2}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { type: "spring", duration: 0.75, bounce: 0 },
                opacity: { duration: 0.01 },
              },
            },
          }}
          custom={0}
        />
      </motion.svg>

      {/* Animated Arrow on Hover */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        className="absolute inset-0 m-auto fill-slate-500 w-8 h-8 z-20 stroke-slate-800"
        initial={{ x: 0 }} // Initial position of the arrow
        variants={{
          visible: { x: 5 }, // Translate X by 5px on hover
        }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </motion.svg>
    </motion.div>
  );
};

export default ButtonCircle;
