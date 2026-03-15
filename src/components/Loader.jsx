import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      {/* Spotlight Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 bg-white opacity-10 blur-3xl rounded-full"></div>
      </div>

      {/* Text */}
      <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-widest text-gray-300"
        >
          PORTOFOLIO
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-0.5 bg-gray-400 mx-auto mt-4"
        ></motion.div>
      </div>
    </motion.div>
  );
}