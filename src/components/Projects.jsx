import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Bem Website",
    desc: "Modern responsive website built with React & Tailwind. Features smooth animations, dark mode, and fully responsive design for all devices.",
    tech: "React • Tailwind • Framer Motion",
    image: "/project1.png",
    demo: "https://bemfasilkomunsri.org/"
  },
  {
    title: "COMMUNITY SIMS",
    desc: "Mini social media platform for university community. Allows students to connect, share posts, and interact within their campus environment.",
    tech: "Laravel • Tailwindcss • MySQL • Blade",
    image: "/project2.png",
    demo: "https://communitysims.infinityfreeapp.com/"
  },
];

const certificates = [
  {
    name: "Legacy Web Responsive",
    issuer: "freeCodeCamp",
    description: "Professional certification in responsive web design covering HTML5, CSS3, Flexbox, Grid, and modern responsive techniques.",
    image: "LegacyResponsive.jpeg",
    skills: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Responsive Design"]
  },
  {
    name: "Legacy JavaScript",
    issuer: "freeCodeCamp",
    description: "Comprehensive JavaScript certification covering ES6, data structures, algorithms, and functional programming concepts.",
    image: "LegacyJavascript.jpeg",
    skills: ["JavaScript", "ES6", "Data Structures", "Algorithms", "OOP"]
  },
  {
    name: "Web Development",
    issuer: "IBM SkillsBuild",
    description: "Industry-recognized certification covering full-stack web development, databases, and modern development practices.",
    image: "WebDev.jpeg",
    skills: ["HTML/CSS", "JavaScript", "Node.js", "Express", "MongoDB"]
  },
  {
    name: "Cybersecurity",
    issuer: "IBM SkillsBuild",
    description: "Essential cybersecurity certification covering threat landscapes, network security, cryptography, and security best practices.",
    image: "CyberSecurity.jpeg",
    skills: ["Network Security", "Cryptography", "Threat Analysis", "Risk Management"]
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (certName) => {
    setImageErrors(prev => ({
      ...prev,
      [certName]: true
    }));
  };

  return (
    <section
      id="projects"
      className="relative py-32 px-6
                 bg-linear-to-br
                 from-white via-gray-50 to-gray-100
                 dark:from-black dark:via-gray-950 dark:to-black
                 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold
                         bg-gradient-to-r from-gray-900 to-gray-600 
                         dark:from-white dark:to-gray-400 
                         bg-clip-text text-transparent">
            {activeTab === "projects" ? "My Projects" : "Certifications"}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            {activeTab === "projects" 
              ? "Some of my recent works & experiments"
              : "Professional certifications and achievements"}
          </p>
        </motion.div>

        {/* TAB BUTTONS - Minimalis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-16"
        >
          <button
            onClick={() => setActiveTab("projects")}
            className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300
              ${activeTab === "projects"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
          >
            Projects
            {activeTab === "projects" && (
              <motion.span
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300
              ${activeTab === "certificates"
                ? "text-black dark:text-white"
                : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
          >
            Certifications
            {activeTab === "certificates" && (
              <motion.span
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-black dark:bg-white rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        </motion.div>

        {/* PROJECTS TAB - Full Image Hover Effect */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden
                           bg-white dark:bg-gray-900
                           shadow-lg hover:shadow-2xl
                           transition-all duration-500"
              >
                {/* Image Container - Full dengan overlay hover */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover
                               transition-transform duration-700
                               group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/800x600/cccccc/666666?text=Image+Not+Found";
                    }}
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 
                                group-hover:bg-black/70
                                transition-all duration-500" />
                  
                  {/* Hover Content - Muncul saat hover */}
                  <div className="absolute inset-0 p-8
                                flex flex-col justify-between
                                opacity-0 group-hover:opacity-100
                                transition-all duration-500
                                translate-y-4 group-hover:translate-y-0">
                    
                    {/* Top Section */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                    
                    {/* Bottom Section */}
                    <div>
                      <div className="mb-4">
                        <p className="text-white/60 text-xs font-mono mb-2">
                          TECH STACK
                        </p>
                        <p className="text-white/90 text-sm">
                          {project.tech}
                        </p>
                      </div>
                      
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5
                                 bg-white text-black rounded-full
                                 text-sm font-medium
                                 hover:gap-3 transition-all duration-300"
                      >
                        <span>Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  {/* Title Mobile (tanpa hover) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6
                                bg-gradient-to-t from-black/80 to-transparent
                                md:hidden">
                    <h3 className="text-white text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CERTIFICATES TAB - Full Image Hover Effect */}
        {activeTab === "certificates" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden
                           bg-white dark:bg-gray-900
                           shadow-lg hover:shadow-2xl
                           transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={imageErrors[cert.name] ? "https://via.placeholder.com/800x600/cccccc/666666?text=Certificate" : cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover
                               transition-transform duration-700
                               group-hover:scale-110"
                    onError={() => handleImageError(cert.name)}
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 
                                group-hover:bg-black/80
                                transition-all duration-500" />
                  
                  {/* Hover Content */}
                  <div className="absolute inset-0 p-8
                                flex flex-col justify-between
                                opacity-0 group-hover:opacity-100
                                transition-all duration-500
                                translate-y-4 group-hover:translate-y-0">
                    
                    {/* Top Section */}
                    <div>
                      {/* Issuer Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5
                                    bg-white/20 backdrop-blur-sm rounded-full
                                    text-white text-xs font-medium mb-4">
                        <span>{cert.issuer}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {cert.name}
                      </h3>
                      
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {cert.description}
                      </p>
                    </div>
                    
                    {/* Bottom Section - Skills */}
                    <div>
                      <p className="text-white/60 text-xs font-mono mb-2">
                        SKILLS
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 4).map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs
                                                   bg-white/20 backdrop-blur-sm
                                                   rounded-full text-white">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-2 py-1 text-xs
                                         bg-white/20 backdrop-blur-sm
                                         rounded-full text-white">
                            +{cert.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title Mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-6
                                bg-gradient-to-t from-black/80 to-transparent
                                md:hidden">
                    <h3 className="text-white text-xl font-bold mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-white/60 text-xs">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}