import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Menutup menu saat link diklik
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Menutup menu saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto">
      <div className="flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-8 py-3 rounded-full 
        bg-white/60 dark:bg-gray-900/60 
        backdrop-blur-2xl shadow-lg 
        border border-gray-200/50 dark:border-gray-700/50
        transition-all duration-300">

        <h1 className="font-bold text-lg whitespace-nowrap">Dimas.dev</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 mx-auto w-[90%] 
          bg-white/60 dark:bg-gray-900/60 
          backdrop-blur-2xl shadow-lg 
          border border-gray-200/50 dark:border-gray-700/50
          rounded-2xl overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="flex flex-col py-2">
          <a 
            href="#about" 
            onClick={handleLinkClick}
            className="px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={handleLinkClick}
            className="px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            className="px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Overlay untuk menutup menu saat klik di luar */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}