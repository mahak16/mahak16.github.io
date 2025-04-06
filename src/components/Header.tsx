
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { cn } from "@/lib/utils";
import { useTheme } from '@/context/ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? theme === 'dark'
            ? "bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-800"
            : "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="gradient-text">Mahak Jiwnani</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <nav className="flex space-x-8">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={cn(
                  "font-medium transition-colors",
                  theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-portfolio-purple'
                )}
              >
                {item}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button onClick={toggleMenu} className={theme === 'dark' ? 'text-gray-300' : ''}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={cn(
          "md:hidden absolute w-full",
          theme === 'dark' ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-lg'
        )}>
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={cn(
                    "font-medium transition-colors py-2",
                    theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-portfolio-purple'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
