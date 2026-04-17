import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX, FiUser, FiFolder, FiMail, FiGithub, FiLinkedin, FiMail as FiGmail } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle scroll untuk menyembunyikan/menampilkan navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      if (isOpen) {
        setIsOpen(false);
      }

      // Active link detection
      const sections = ['about', 'projects', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'About', href: '#about', icon: FiUser },
    { name: 'Projects', href: '#projects', icon: FiFolder },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ];

  const socialIcons = [
    { Icon: FiGithub, href: 'https://github.com/gerraddimas86-max', label: 'GitHub' },
    { Icon: FiLinkedin, href: 'https://linkedin.com/in/dimasgerrad', label: 'LinkedIn' },
    { Icon: FiGmail, href: 'mailto:gerraddimas86@gmail.com', label: 'Gmail' },
  ];

  return (
    <>
      <div className="h-20 sm:h-24" />
      
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full 
            bg-white/80 dark:bg-gray-900/80 
            backdrop-blur-2xl shadow-lg 
            border border-gray-200/50 dark:border-gray-700/50
            transition-all duration-300 hover:shadow-xl
            animate-slideDown">
            
            {/* Logo dengan efek hover */}
            <h1 className="font-bold text-base sm:text-lg whitespace-nowrap 
              text-gray-900 dark:text-white
              transition-all duration-300 hover:scale-105 cursor-pointer
              relative group">
              Dimas.dev
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 dark:bg-white 
                group-hover:w-full transition-all duration-300"></span>
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2 lg:gap-3 text-sm lg:text-base">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeLink === item.name.toLowerCase();
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative group/menu px-4 py-2 rounded-full font-medium
                      transition-all duration-300
                      ${isActive 
                        ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`text-sm transition-all duration-300 
                        ${isActive ? 'scale-110' : 'group-hover/menu:scale-110'}`} />
                      {item.name}
                    </div>
                    
                    {/* Tooltip indicator */}
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 
                      bg-gray-900 dark:bg-white rounded-full opacity-0 group-hover/menu:opacity-100 
                      transition-all duration-300"></span>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              {/* Social Media Icons - Desktop */}
              <div className="hidden sm:flex items-center gap-1 mr-2">
                {socialIcons.map(({ Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-300 
                      hover:scale-110 active:scale-95
                      text-gray-600 dark:text-gray-400
                      hover:bg-gray-100 dark:hover:bg-gray-800
                      hover:text-gray-900 dark:hover:text-white
                      group relative`}
                    aria-label={label}
                  >
                    <Icon className="text-sm" />
                    
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                      px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded
                      opacity-0 group-hover:opacity-100 transition-all duration-300
                      pointer-events-none whitespace-nowrap">
                      {label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl p-2 rounded-full transition-all duration-300 
                  hover:scale-110 active:scale-95
                  text-gray-600 dark:text-gray-400
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  hover:text-gray-900 dark:hover:text-white"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FiSun className="animate-spin-slow" />
                ) : (
                  <FiMoon className="animate-pulse-slow" />
                )}
              </button>

              {/* Hamburger Menu Button - Mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-xl p-2 rounded-full transition-all duration-300 
                  hover:scale-110 active:scale-95
                  text-gray-600 dark:text-gray-400
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  hover:text-gray-900 dark:hover:text-white"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX className="animate-rotate-in" /> : <FiMenu className="animate-rotate-out" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mx-auto px-4 sm:px-6
            transition-all duration-400 ease-in-out
            ${isOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-8 pointer-events-none'
            }`}
        >
          <div className="bg-white/95 dark:bg-gray-900/95 
            backdrop-blur-2xl shadow-xl 
            border border-gray-200/50 dark:border-gray-700/50
            rounded-2xl overflow-hidden">
            
            <div className="flex flex-col py-4">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`group/item mx-3 mb-2 px-4 py-3 rounded-xl
                      transition-all duration-300 hover:scale-105
                      hover:bg-gray-50 dark:hover:bg-gray-800
                      cursor-pointer`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                        text-gray-700 dark:text-gray-300
                        transition-all duration-300 
                        group-hover/item:scale-110 group-hover/item:rotate-6`}>
                        <Icon className="text-sm" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {item.name === 'About' && 'Learn about me'}
                          {item.name === 'Projects' && 'View my work'}
                          {item.name === 'Contact' && 'Get in touch'}
                        </p>
                      </div>
                      <div className="text-gray-400 group-hover/item:translate-x-1 transition-transform">
                        →
                      </div>
                    </div>
                  </a>
                );
              })}
              
              {/* Divider */}
              <div className="h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent 
                my-2 mx-3"></div>
              
              {/* Social Media Links in Mobile */}
              <div className="px-6 py-3">
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mb-3">
                  Connect with me
                </p>
                <div className="flex justify-center gap-3">
                  {socialIcons.map(({ Icon, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-all duration-300 
                        hover:scale-110 active:scale-95
                        bg-gray-100 dark:bg-gray-800
                        text-gray-600 dark:text-gray-400
                        hover:bg-gray-200 dark:hover:bg-gray-700
                        hover:text-gray-900 dark:hover:text-white`}
                      aria-label={label}
                    >
                      <Icon className="text-base" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 -z-10 md:hidden bg-black/20 dark:bg-black/40 backdrop-blur-sm 
              animate-fadeIn"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  );
}