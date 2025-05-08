import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface GiftCard {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductsPage = () => {
  const giftCards: GiftCard[] = [
    {
      id: "gc-1000",
      title: "Apple Gift Card",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=600",
      description:
        "Идеальный подарок для небольших покупок в App Store, iTunes и Apple Books",
    },
    {
      id: "gc-2500",
      title: "Apple Gift Card",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1607582544956-46d6e68e40a6?auto=format&fit=crop&q=80&w=600",
      description:
        "Отличный выбор для подписок на Apple Music, iCloud+ или покупок в Apple Store",
    },
    {
      id: "gc-5000",
      title: "Apple Gift Card",
      price: 5000,
      image:
        "https://images.unsplash.com/photo-1607582544270-fb8e0b35a8a0?auto=format&fit=crop&q=80&w=600",
      description:
        "Премиальная карта для значительных покупок, идеальна для любителей Apple",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Apple Gift Cards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите идеальную карту для себя или в подарок для близких
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftCards.map((card) => (
              <Card
                key={card.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={card.image}
                    alt={`Gift Card ${card.price} руб`}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{card.title}</span>
                    <span className="text-xl font-bold">{card.price} ₽</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{card.description}</p>
                </CardContent>
                <CardFooter>
                  {/* Изменяем обработчик добавления в корзину в ProductsPage */}
                  <Button
                    className="w-full bg-[#0071E3] hover:bg-[#0071E3]/90"
                    onClick={() =>
                      alert(`Добавлен ${card.title} за ${card.price} ₽`)
                    }
                  >
                    <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                    Добавить в корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-[#F5F5F7]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Что можно приобрести с Apple Gift Card?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            <div className="p-6">
              <Icon
                name="Smartphone"
                size={32}
                className="mx-auto mb-4 text-black"
              />
              <h3 className="text-lg font-medium mb-2">Приложения и игры</h3>
              <p className="text-gray-600 text-sm">
                Миллионы приложений в App Store
              </p>
            </div>

            <div className="p-6">
              <Icon
                name="Music"
                size={32}
                className="mx-auto mb-4 text-black"
              />
              <h3 className="text-lg font-medium mb-2">Apple Music</h3>
              <p className="text-gray-600 text-sm">
                Более 100 миллионов треков
              </p>
            </div>

            <div className="p-6">
              <Icon name="Film" size={32} className="mx-auto mb-4 text-black" />
              <h3 className="text-lg font-medium mb-2">Фильмы и сериалы</h3>
              <p className="text-gray-600 text-sm">
                Обширная библиотека контента
              </p>
            </div>

            <div className="p-6">
              <Icon
                name="Cloud"
                size={32}
                className="mx-auto mb-4 text-black"
              />
              <h3 className="text-lg font-medium mb-2">iCloud+</h3>
              <p className="text-gray-600 text-sm">
                Дополнительное пространство
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Button
              asChild
              variant="outline"
              className="border-black text-black hover:bg-black/5"
            >
              <Link to="/instruction">
                Как активировать карту
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
