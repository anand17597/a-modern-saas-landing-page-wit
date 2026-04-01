import React, { useState, useEffect, useCallback } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  scrollTo: (id: string) => void;
  activeSection: string;
}

const navLinks = [
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Pricing", id: "pricing" },
  { label: "Contact", id: "contact" },
];

const Navbar: React.FC<NavbarProps> = ({ scrollTo, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = useCallback(
    (id: string) => {
      scrollTo(id);
      setIsMenuOpen(false);
    },
    [scrollTo]
  );

  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isSticky ? "bg-white shadow-lg" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <button onClick={() => scrollTo("hero")} className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-md py-1 px-2 -ml-2">
            SaasFlow
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavLinkClick(link.id)} className={cn("text-sm font-medium transition-colors", activeSection === link.id ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600")}>
              {link.label}
            </button>
          ))}
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavLinkClick(link.id)} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;