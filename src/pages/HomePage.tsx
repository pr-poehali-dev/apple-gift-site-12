
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Темный фон для hero-секции */}
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Apple Gift Cards
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Идеальный подарок для тех, кто ценит инновации и качество
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 font-medium text-base px-8 py-6 h-auto"
            >
              <Link to="/products">Выбрать карту</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium text-base px-8 py-6 h-auto"
            >
              <Link to="/instruction">Как использовать</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Почему Apple Gift Cards?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black mb-6">
                <Icon name="ShoppingBag" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-medium mb-3">Покупки в App Store</h3>
              <p className="text-gray-600">
                Разблокируйте доступ к миллионам приложений, игр и многому
                другому
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black mb-6">
                <Icon name="Music" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-medium mb-3">Музыка и фильмы</h3>
              <p className="text-gray-600">
                Оплачивайте подписки на Apple Music, фильмы и сериалы
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-black mb-6">
                <Icon name="Gift" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-medium mb-3">Идеальный подарок</h3>
              <p className="text-gray-600">
                Дарите близким свободу выбора в экосистеме Apple
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Готовы сделать выбор?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Доступны карты номиналом 1000, 2500 и 5000 рублей для различных
            потребностей
          </p>
          <Button
            asChild
            className="bg-[#0071E3] hover:bg-[#0071E3]/90 font-medium text-base px-8 py-6 h-auto"
          >
            <Link to="/products">Перейти к картам</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
