
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Track scroll position for transparent->solid header transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const routes = [
    { title: "Главная", path: "/" },
    { title: "Карты", path: "/products" },
    { title: "Инструкция", path: "/instruction" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || mobileMenuOpen 
          ? "bg-white/95 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-semibold"
            aria-label="Apple Gift Cards Home"
          >
            <div className={cn(
              "flex items-center gap-2 transition-colors duration-300",
              (isScrolled || mobileMenuOpen || location.pathname !== "/") 
                ? "text-black" 
                : "text-white"
            )}>
              <Icon name="Apple" />
              <span className="hidden sm:block">Gift Cards</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  "transition-colors duration-300 hover:opacity-80",
                  location.pathname === route.path 
                    ? "font-medium" 
                    : "font-normal",
                  (isScrolled || location.pathname !== "/") 
                    ? "text-black" 
                    : "text-white"
                )}
              >
                {route.title}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden transition-colors duration-300",
              (isScrolled || mobileMenuOpen || location.pathname !== "/") 
                ? "text-black" 
                : "text-white"
            )}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-4 space-y-2">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  "block py-3 px-4 rounded-md transition-colors",
                  location.pathname === route.path 
                    ? "bg-gray-100 font-medium" 
                    : "hover:bg-gray-50"
                )}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
