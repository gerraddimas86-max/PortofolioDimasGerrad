import { motion } from "framer-motion";

const projects = [
  {
    title: "Bem Website",
    desc: "Modern responsive portfolio built with React & Tailwind.",
    tech: "React • Tailwind • Framer Motion",
    image: "/project1.jpg",
  },
  {
    title: "Laravel CRUD System",
    desc: "Full CRUD application with authentication.",
    tech: "Laravel • MySQL • Blade",
    image: "/project2.jpg",
  },
  {
    title: "Mountpedia",
    desc: "web for the mountain lovers.",
    tech: "React • Tailwind • REST API",
    image: "/project3.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6
                 bg-linear-to-br
                 from-white via-gray-100 to-gray-200
                 dark:from-black dark:via-gray-950 dark:to-black
                 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold
                         text-black dark:text-white">
            My Projects
          </h2>
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            Some of my recent works & experiments.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden
                         bg-white/60 dark:bg-white/5
                         backdrop-blur-xl
                         border border-black/10 dark:border-white/10
                         shadow-lg
                         transition-all duration-500"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover
                             group-hover:scale-110
                             transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold
                               text-black dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm
                              text-gray-700 dark:text-gray-300">
                  {project.desc}
                </p>

                <div className="mt-6 text-xs
                                text-gray-800 dark:text-gray-200
                                font-medium">
                  {project.tech}
                </div>
              </div>

              {/* HOVER GLOW - Sekarang lebih subtle dengan grayscale */}
              <div className="absolute inset-0 opacity-0
                              group-hover:opacity-100
                              transition duration-500
                              pointer-events-none
                              bg-linear-to-tr
                              from-gray-500/10 to-transparent" />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}