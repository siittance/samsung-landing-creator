
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Features", href: "#features" },
  { name: "Specs", href: "#specs" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-samsung-black">
          SAMSUNG
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-samsung-darkGray hover:text-samsung-blue transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full bg-samsung-blue text-white text-sm font-medium hover:bg-opacity-90 transition-all duration-200"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-samsung-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-samsung-darkGray hover:text-samsung-blue transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full py-3 rounded-full bg-samsung-blue text-white text-center text-lg font-medium hover:bg-opacity-90 transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
