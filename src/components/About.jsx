import { motion } from "framer-motion";
import DeveloperCard from "./DeveloperCard";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 
                 bg-linear-to-br 
                 from-gray-100 via-white to-gray-200
                 dark:from-black dark:via-gray-950 dark:to-black
                 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 
                         text-black dark:text-white">
            About Me
          </h2>

          <p className="text-gray-800 dark:text-gray-200 
                        leading-relaxed text-lg">
            I'm <span className="font-semibold text-black dark:text-white">
              Dimas Gerrad
            </span>, a passionate Full Stack Developer focused on building
            modern, immersive, and high-performance web applications.
          </p>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            I enjoy crafting clean UI systems, smooth animations,
            and interactive digital experiences using modern
            technologies like React, Laravel, and Tailwind CSS.
          </p>

          {/* STATS */}
          <div className="mt-10 flex gap-10">

            <div>
              <h3 className="text-3xl font-bold 
                             text-black dark:text-white">
                10+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold 
                             text-black dark:text-white">
                1+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Years Learning
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <DeveloperCard />
        </motion.div>

      </div>
      
    </section>
  );
}