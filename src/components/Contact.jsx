import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-16 px-6
      bg-linear-to-br
      from-gray-100 via-white to-gray-200
      dark:from-black dark:via-gray-950 dark:to-black
      border-t border-black/10 dark:border-white/10
      transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-black dark:text-white"
        >
          Let's Work Together
        </motion.h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        {/* EMAIL */}
        <div className="mt-6">
          <a
            href="mailto:gerraddimas86@gmail.com"
            className="text-lg font-medium text-black dark:text-white
            hover:underline"
          >
            gerraddimas86@gmail.com
          </a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://github.com/gerraddimas86-max"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl
            bg-white/60 dark:bg-white/5
            border border-black/10 dark:border-white/10
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition-all duration-300 hover:-translate-y-1"
          >
            <FiGithub className="text-xl text-black dark:text-white" />
          </a>

          <a
            href="https://www.linkedin.com/in/dimasgerrad"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl
            bg-white/60 dark:bg-white/5
            border border-black/10 dark:border-white/10
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition-all duration-300 hover:-translate-y-1"
          >
            <FiLinkedin className="text-xl text-black dark:text-white" />
          </a>

          <a
            href="mailto:gerraddimas86@gmail.com"
            className="p-3 rounded-xl
            bg-white/60 dark:bg-white/5
            border border-black/10 dark:border-white/10
            hover:bg-gray-200 dark:hover:bg-gray-800
            transition-all duration-300 hover:-translate-y-1"
          >
            <FiMail className="text-xl text-black dark:text-white" />
          </a>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-300 dark:bg-gray-700 my-10"></div>

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Dimas Gerrad. All rights reserved.
        </p>

      </div>
    </footer>
  );
}