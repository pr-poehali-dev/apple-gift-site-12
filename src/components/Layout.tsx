import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useScrollTop } from "@/hooks/useScrollTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Используем хук для сброса положения скролла при изменении маршрута
  useScrollTop();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
