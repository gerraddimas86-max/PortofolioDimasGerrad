import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // durasi loader (bisa ubah jadi 3000 kalau mau lebih lama)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div
          className="min-h-screen bg-gradient-to-br 
          from-white to-gray-100 
          dark:from-gray-950 dark:to-black 
          text-gray-900 dark:text-white 
          transition-colors duration-500"
        >
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;