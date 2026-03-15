import { TypeAnimation } from "react-type-animation";
import Card from "../assets/Card.jpg";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-10 lg:gap-16">
        
        {/* LEFT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* GREETING BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 
                       bg-gray-100 dark:bg-gray-800 
                       rounded-full text-sm
                       border border-gray-200 dark:border-gray-700"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-700 dark:text-gray-300">Available for work</span>
          </motion.div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white transition-colors duration-500">
            Hi, I'm{" "}
            <span className="inline-block min-w-50">
              <TypeAnimation
                sequence={[
                  "Dimas Gerrad",
                  2000,
                  "Web Developer",
                  2000,
                  "IT Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={70}
                deletionSpeed={80}
                repeat={Infinity}
                cursor={true}
                className="text-black dark:text-white"
              />
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg">
            I craft modern, responsive, and interactive web experiences 
            using <span className="font-semibold text-black dark:text-white">React</span>, 
            <span className="font-semibold text-black dark:text-white"> Tailwind</span>, and 
            <span className="font-semibold text-black dark:text-white"> Framer Motion</span>.
          </p>

          {/* CTA BUTTON - DOWNLOAD CV */}
<div className="flex flex-wrap gap-4 pt-4">
  <motion.a
    href="/CV_Dimas_Gerrad_Handjaya.pdf"
    download="CV_Dimasgerrad.pdf"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group px-6 py-3 bg-black text-white 
               dark:bg-white dark:text-black 
               rounded-full font-medium 
               shadow-lg hover:shadow-xl
               transition-all duration-300
               flex items-center gap-2"
  >
    Download CV
    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
  </motion.a>
</div>

          {/* SOCIAL LINKS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 pt-6"
          >
            <a href="https://github.com/gerraddimas86-max" 
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 rounded-full bg-gray-100 dark:bg-gray-800
                        text-gray-700 dark:text-gray-300
                        hover:bg-gray-200 dark:hover:bg-gray-700
                        hover:-translate-y-1 transition-all duration-300">
              <FiGithub className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/dimasgerrad"
               target="_blank"
               rel="noopener noreferrer"
               className="p-3 rounded-full bg-gray-100 dark:bg-gray-800
                        text-gray-700 dark:text-gray-300
                        hover:bg-gray-200 dark:hover:bg-gray-700
                        hover:-translate-y-1 transition-all duration-300">
              <FiLinkedin className="text-xl" />
            </a>
            <a href="mailto:gerraddimas86@gmail.com"
               className="p-3 rounded-full bg-gray-100 dark:bg-gray-800
                        text-gray-700 dark:text-gray-300
                        hover:bg-gray-200 dark:hover:bg-gray-700
                        hover:-translate-y-1 transition-all duration-300">
              <FiMail className="text-xl" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - MODERN FULL IMAGE CARD */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <ModernImageCard />
        </motion.div>

      </div>
    </section>
  );
}

/* =========================
   MODERN FULL IMAGE CARD WITH OVERLAY
========================= */

function ModernImageCard() {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

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
    animate(x, 0, { type: "spring", stiffness: 200, damping: 20 });
    animate(y, 0, { type: "spring", stiffness: 200, damping: 20 });
  }

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-72 md:w-80 lg:w-96 
                   rounded-3xl 
                   overflow-hidden
                   shadow-2xl dark:shadow-[0_0_50px_rgba(255,255,255,0.15)]
                   transition-all duration-300
                   cursor-pointer
                   group"
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src={Card}
            alt="Dimas Gerrad Background"
            className="w-full h-full object-cover
                       group-hover:scale-110
                       transition-transform duration-700"
          />
        </div>

        {/* DARK OVERLAY - GRADIENT */}
        <div className="absolute inset-0 
                      bg-linear-to-t 
                      from-black/90 via-black/50 to-black/30
                      group-hover:from-black/95 group-hover:via-black/60
                      transition-colors duration-500" />

        {/* CONTENT */}
        <div className="relative z-10 h-full min-h-120
                      flex flex-col justify-end
                      p-8 text-white"
             style={{ transform: "translateZ(30px)" }}>
          
          {/* BADGE - LOCATION */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-6 right-6
                       bg-white/20 backdrop-blur-md
                       px-4 py-2 rounded-full
                       border border-white/30
                       text-sm font-medium
                       flex items-center gap-2"
          >
            <FiMapPin className="text-white/80" />
            <span>Palembang, ID</span>
          </motion.div>

          {/* NAME & TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              Dimas Gerrad
            </h3>
            <p className="text-white/80 text-lg flex items-center gap-2">
              <span className="w-8 h-0.5 bg-white/60"></span>
              Full Stack Developer
            </p>
          </motion.div>

          {/* DIVIDER */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full h-0.5 bg-white/30 my-6"
          />

          {/* STATS GRID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4"
          >
            <div>
              <p className="text-2xl font-bold">10+</p>
              <p className="text-white/60 text-xs uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1+</p>
              <p className="text-white/60 text-xs uppercase tracking-wider">Years</p>
            </div>
            <div>
              <p className="text-2xl font-bold">∞</p>
              <p className="text-white/60 text-xs uppercase tracking-wider">Passion</p>
            </div>
          </motion.div>

          {/* TECH STACK TAGS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["React", "Laravel", "Tailwind", "Framer"].map((tech, i) => (
              <span key={i} 
                    className="px-3 py-1 text-xs
                             bg-white/20 backdrop-blur-sm
                             border border-white/30
                             rounded-full">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* EXPERIENCE BADGE - BOTTOM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-6 left-8
                       flex items-center gap-2
                       text-white/80 text-sm"
          >
            <FiCalendar />
            <span>Available Now</span>
          </motion.div>
        </div>

        {/* GLARE EFFECT - SUBTLE */}
        <motion.div
          style={{ 
            left: useTransform(x, [-100, 100], ["30%", "70%"]),
            top: useTransform(y, [-100, 100], ["30%", "70%"]),
          }}
          className="absolute w-48 h-48 
                     bg-white/20 
                     rounded-full blur-3xl 
                     pointer-events-none
                     mix-blend-overlay"
        />
      </motion.div>
    </div>
  );
}