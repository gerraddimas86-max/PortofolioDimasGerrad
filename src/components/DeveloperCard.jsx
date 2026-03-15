import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiCpu, FiLayout, FiZap } from "react-icons/fi";

export default function DeveloperCard() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const glareX = useTransform(x, [-100, 100], ["30%", "70%"]);
  const glareY = useTransform(y, [-100, 100], ["30%", "70%"]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    animate(x, 0, { duration: 0.6 });
    animate(y, 0, { duration: 0.6 });
  }

  return (
    <div
      className="flex justify-center"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-72 h-105 rounded-3xl
                   backdrop-blur-xl
                   bg-white/40 dark:bg-white/5
                   border border-black/10 dark:border-white/10
                   shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.1)]
                   overflow-hidden transition-colors duration-500"
      >
        {/* LIGHT GLARE - Lebih subtle dengan grayscale */}
        <motion.div
          style={{ left: glareX, top: glareY }}
          className="absolute w-48 h-48 bg-white/30 dark:bg-white/10 
                     rounded-full blur-3xl pointer-events-none"
        />

        {/* BACKGROUND PATTERN - dengan canonical classes */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10
                      bg-[radial-gradient(circle_at_50%_50%,#000_1px,transparent_1px)] 
                      bg-size-[20px_20px] pointer-events-none" />

        {/* CONTENT */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="relative z-10 p-6 flex flex-col items-center text-center"
        >
          {/* PROFILE IMAGE - border hitam/putih */}
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-28 h-28 object-cover rounded-full 
                       border-2 border-black dark:border-white
                       shadow-lg"
            />
            {/* Status indicator subtle */}
            <div className="absolute bottom-1 right-1 w-4 h-4 
                          bg-green-500 dark:bg-green-400
                          rounded-full border-2 border-white dark:border-black" />
          </div>

          {/* NAME - hitam/putih */}
          <h3 className="mt-6 text-2xl font-bold 
                         text-black dark:text-white">
            Dimas Gerrad
          </h3>

          {/* TITLE - gray scale */}
          <p className="text-gray-700 dark:text-gray-300 text-sm mt-2
                      font-medium">
            Full Stack Developer
          </p>

          {/* TECH STACK - gray scale */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 text-xs
                           bg-gray-200 dark:bg-gray-800
                           text-gray-800 dark:text-gray-200
                           rounded-full">
              React
            </span>
            <span className="px-3 py-1 text-xs
                           bg-gray-200 dark:bg-gray-800
                           text-gray-800 dark:text-gray-200
                           rounded-full">
              Laravel
            </span>
            <span className="px-3 py-1 text-xs
                           bg-gray-200 dark:bg-gray-800
                           text-gray-800 dark:text-gray-200
                           rounded-full">
              Tailwind
            </span>
          </div>

          {/* SKILL ICONS */}
          <div className="mt-6 grid grid-cols-4 gap-3 w-full">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl
                            bg-gray-100 dark:bg-gray-800
                            flex items-center justify-center
                            text-gray-700 dark:text-gray-300">
                <FiCode />
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Clean</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl
                            bg-gray-100 dark:bg-gray-800
                            flex items-center justify-center
                            text-gray-700 dark:text-gray-300">
                <FiZap />
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Fast</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl
                            bg-gray-100 dark:bg-gray-800
                            flex items-center justify-center
                            text-gray-700 dark:text-gray-300">
                <FiLayout />
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Modern</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl
                            bg-gray-100 dark:bg-gray-800
                            flex items-center justify-center
                            text-gray-700 dark:text-gray-300">
                <FiCpu />
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Smart</span>
            </div>
          </div>

          {/* QUOTE */}
          <div className="mt-6 text-sm italic
                          text-gray-600 dark:text-gray-400
                          border-t border-gray-200 dark:border-gray-800
                          pt-4 w-full">
            "Building immersive web experiences."
          </div>
        </div>
      </motion.div>
    </div>
  );
}