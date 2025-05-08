import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import ShoppingCart from "./ShoppingCart";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

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
    { title: "Инструкция", path: "/instruction" },
  ];

  // Определяем, находимся ли мы на главной странице
  const isHomePage = location.pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isHomePage
            ? "bg-black/40 text-white backdrop-blur-lg"
            : "bg-white/70 text-black backdrop-blur-lg shadow-sm",
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
              <div
                className={cn(
                  "flex items-center gap-2",
                  isHomePage ? "text-white" : "text-black",
                )}
              >
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
                    "transition-colors hover:opacity-80",
                    location.pathname === route.path
                      ? "font-medium"
                      : "font-normal",
                    isHomePage ? "text-white" : "text-black",
                  )}
                >
                  {route.title}
                </Link>
              ))}
            </nav>

            {/* Cart Button + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCartOpen(true)}
                className={cn(
                  "relative",
                  isHomePage
                    ? "text-white hover:bg-white/10"
                    : "text-black hover:bg-black/10",
                )}
                aria-label="Корзина"
              >
                <Icon name="ShoppingBag" size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-white text-xs">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "md:hidden",
                  isHomePage ? "text-white" : "text-black",
                )}
                aria-label="Toggle menu"
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
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
                    "block py-3 px-4 rounded-md transition-colors text-black",
                    location.pathname === route.path
                      ? "bg-gray-100 font-medium"
                      : "hover:bg-gray-50",
                  )}
                >
                  {route.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Shopping Cart Sidebar */}
      <ShoppingCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navigation;
