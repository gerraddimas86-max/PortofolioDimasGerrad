import { TypeAnimation } from "react-type-animation";
import Card from "../assets/Card.jpg";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";
import { 
  FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-20">
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
            <span className="font-semibold text-black dark:text-white"> Laravel</span>, and 
            <span className="font-semibold text-black dark:text-white"> Tailwind</span>.
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

        {/* RIGHT SIDE - SIMPLE CLEAN CARD */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <SimpleImageCard />
        </motion.div>

      </div>
    </section>
  );
}

/* =========================
   SIMPLE CLEAN CARD - TIDAK MENUTUPI FOTO
========================= */

function SimpleImageCard() {
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
                   shadow-2xl dark:shadow-[0_0_50px_rgba(255,255,255,0.1)]
                   transition-all duration-300
                   cursor-pointer
                   group"
      >
        {/* BACKGROUND IMAGE - FULL PHOTO */}
        <div className="absolute inset-0">
          <img
            src={Card}
            alt="Dimas Gerrad"
            className="w-full h-full object-cover
                       group-hover:scale-105
                       transition-transform duration-700"
          />
        </div>

        {/* GRADIENT OVERLAY - HANYA DI ATAS DAN BAWAH */}
        <div className="absolute inset-0 
                      bg-linear-to-t 
                      from-black/70 via-transparent to-black/40
                      group-hover:from-black/80 group-hover:to-black/50
                      transition-all duration-500" />

        {/* CONTENT - HANYA ATAS DAN BAWAH */}
        <div className="relative z-10 h-full min-h-112.5
                      flex flex-col justify-between
                      p-6 text-white"
             style={{ transform: "translateZ(30px)" }}>
          
          {/* TOP BADGE - LOCATION */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-end"
          >
            <div className="bg-black/50 backdrop-blur-md
                         px-3 py-1.5 rounded-full
                         border border-white/30
                         text-sm font-medium
                         flex items-center gap-2">
              <FiMapPin className="text-white/80 text-xs" />
              <span>Palembang, ID</span>
            </div>
          </motion.div>

          {/* BOTTOM SECTION - NAME & TITLE SEDERHANA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-1">
              Dimas Gerrad
            </h3>
            <p className="text-white/80 text-sm flex items-center gap-2">
              <span className="w-6 h-0.5 bg-white/60"></span>
              Full Stack Developer
            </p>
            
            {/* AVAILABILITY */}
            <div className="flex items-center gap-2 mt-3 text-xs text-white/70">
              <FiCalendar className="text-sm" />
              <span>Available for projects</span>
            </div>
          </motion.div>
        </div>

        {/* GLARE EFFECT - SUBTLE */}
        <motion.div
          style={{ 
            left: useTransform(x, [-100, 100], ["30%", "70%"]),
            top: useTransform(y, [-100, 100], ["30%", "70%"]),
          }}
          className="absolute w-48 h-48 
                     bg-white/10 
                     rounded-full blur-3xl 
                     pointer-events-none
                     opacity-0 group-hover:opacity-100
                     transition-opacity duration-500"
        />
      </motion.div>
    </div>
  );
}