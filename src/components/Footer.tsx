
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#F5F5F7] pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">Gift Cards</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900">Все карты</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900">1000 ₽</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900">2500 ₽</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-gray-900">5000 ₽</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Помощь</h3>
            <ul className="space-y-3">
              <li><Link to="/instruction" className="text-gray-600 hover:text-gray-900">Как активировать</Link></li>
              <li><Link to="/instruction" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Условия использования</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-gray-900">Политика конфиденциальности</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Экосистема Apple</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">App Store</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Apple Music</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">iCloud+</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Apple One</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Icon name="Mail" size={16} />
                <span>support@applegiftcards.ru</span>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Icon name="Phone" size={16} />
                <span>8 (800) 555-35-35</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium text-sm mb-3">Следите за нами</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Icon name="Instagram" size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Icon name="Facebook" size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <Icon name="Twitter" size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-200 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Apple" size={16} />
              <span>Apple Gift Cards</span>
            </div>
            
            <p>Copyright © {currentYear} Apple Inc. Все права защищены.</p>
            
            <div className="flex space-x-4">
              <Link to="/" className="hover:text-gray-700">Правовая информация</Link>
              <Link to="/" className="hover:text-gray-700">Карта сайта</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
