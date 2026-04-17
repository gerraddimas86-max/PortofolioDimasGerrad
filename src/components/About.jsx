import { motion } from "framer-motion";
import DeveloperCard from "./DeveloperCard";
import { 
  FiCode, FiUsers, FiHeart, FiAward, FiBriefcase, 
  FiCpu, FiZap, FiTrendingUp, FiSmile 
} from "react-icons/fi";

export default function About() {
  // Animasi per huruf untuk judul
  const titleText = "About Me";
  const titleLetters = titleText.split("");

  // Animasi per huruf untuk paragraf
  const paragraph1 = "I'm Dimas Gerrad, a passionate Full Stack Developer focused on building modern, immersive, and high-performance web applications.";
  const paragraph2 = "I enjoy crafting clean UI systems, smooth animations, and interactive digital experiences using modern technologies like React, Laravel, and Tailwind CSS.";

  const stats = [
    { value: "10+", label: "Projects Built", icon: FiCode, delay: 0.2 },
    { value: "1+", label: "Years Learning", icon: FiTrendingUp, delay: 0.3 },
    { value: "100%", label: "Commitment", icon: FiHeart, delay: 0.4 },
    { value: "5+", label: "Happy Clients", icon: FiSmile, delay: 0.5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      }
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      }
    },
  };

  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden
                 bg-linear-to-br 
                 from-gray-50 via-white to-gray-100
                 dark:from-gray-950 dark:via-black dark:to-gray-950
                 transition-colors duration-500"
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gray-300 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gray-400 dark:bg-gray-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gray-300 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Animated Title per Huruf */}
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 
                       text-black dark:text-white
                       font-['Poppins'] tracking-tight"
            variants={containerVariants}
          >
            {titleLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block hover:text-gray-500 dark:hover:text-gray-400 
                         transition-colors duration-300 cursor-default"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h2>

          {/* Animated Paragraph 1 */}
          <motion.p 
            className="text-gray-700 dark:text-gray-300 
                      leading-relaxed text-lg mb-4"
            variants={containerVariants}
          >
            {paragraph1.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-1 hover:text-black dark:hover:text-white 
                         transition-colors duration-300"
              >
                {word}
                <span className="inline-block w-1"> </span>
              </motion.span>
            ))}
          </motion.p>

          {/* Animated Paragraph 2 */}
          <motion.p 
            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
            variants={containerVariants}
          >
            {paragraph2.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block mr-1 hover:text-gray-900 dark:hover:text-gray-200 
                         transition-colors duration-300"
              >
                {word}
                <span className="inline-block w-1"> </span>
              </motion.span>
            ))}
          </motion.p>

          {/* Stats Grid dengan Icon */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={wordVariants}
                  custom={index}
                  className="group relative p-5 rounded-2xl
                           bg-white dark:bg-gray-900/50
                           border border-gray-200 dark:border-gray-800
                           hover:border-gray-300 dark:hover:border-gray-700
                           hover:shadow-lg dark:hover:shadow-gray-900/50
                           transition-all duration-500
                           hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon */}
                  <div className="mb-3">
                    <Icon className="text-2xl text-gray-600 dark:text-gray-400 
                                   group-hover:text-black dark:group-hover:text-white
                                   group-hover:scale-110 transition-all duration-300" />
                  </div>
                  
                  {/* Value */}
                  <motion.h3 
                    className="text-3xl font-bold 
                               text-black dark:text-white mb-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.1 * index, type: "spring" }}
                  >
                    {stat.value}
                  </motion.h3>
                  
                  {/* Label */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 
                                bg-black dark:bg-white
                                group-hover:w-full transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>

          {/* Skill Tags */}
          <motion.div 
            className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800"
            variants={containerVariants}
          >
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 tracking-wider">
              TECH STACK
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Laravel", "Tailwind", "Framer Motion", "Node.js", "MySQL"].map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={wordVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 text-sm rounded-full
                           bg-gray-100 dark:bg-gray-800
                           text-gray-700 dark:text-gray-300
                           border border-gray-200 dark:border-gray-700
                           hover:border-gray-400 dark:hover:border-gray-600
                           hover:bg-gray-200 dark:hover:bg-gray-700
                           transition-all duration-300
                           cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CARD - dengan animasi masuk yang lebih keren */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            damping: 15,
            stiffness: 100
          }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 
                        bg-gray-200 dark:bg-gray-800 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 
                        bg-gray-300 dark:bg-gray-700 rounded-full blur-3xl opacity-50" />
          
          <DeveloperCard />
        </motion.div>

      </div>
      
      {/* CSS untuk animasi blob */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}