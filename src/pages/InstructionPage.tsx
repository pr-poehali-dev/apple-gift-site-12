
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const InstructionPage = () => {
  const steps = [
    {
      icon: "CreditCard",
      title: "Приобретите карту",
      description: "Выберите подходящий номинал из доступных вариантов: 1000 ₽, 2500 ₽ или 5000 ₽"
    },
    {
      icon: "Mail",
      title: "Получите код",
      description: "После оплаты вы получите уникальный код активации по электронной почте"
    },
    {
      icon: "LogIn",
      title: "Войдите в аккаунт",
      description: "Войдите в свой Apple ID на устройстве, где хотите использовать карту"
    },
    {
      icon: "RotateCw",
      title: "Активируйте карту",
      description: "Перейдите в App Store, нажмите на аватар и выберите 'Погасить подарочную карту'"
    },
    {
      icon: "CheckCircle",
      title: "Готово!",
      description: "Средства будут зачислены на ваш аккаунт и доступны для использования"
    }
  ];

  const faqs = [
    {
      question: "Срок действия подарочной карты",
      answer: "Apple Gift Cards не имеют срока действия и действительны до полного использования средств."
    },
    {
      question: "Можно ли использовать карту частями?",
      answer: "Да, средства с карты будут зачислены на баланс вашего Apple ID и вы сможете использовать их по мере необходимости."
    },
    {
      question: "Можно ли подарить карту?",
      answer: "Конечно! Apple Gift Cards – это прекрасный подарок для любителей техники Apple и пользователей их сервисов."
    },
    {
      question: "Какие устройства поддерживаются?",
      answer: "Apple Gift Cards работают на всех устройствах Apple: iPhone, iPad, Mac, Apple Watch и Apple TV с последними версиями операционных систем."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Как использовать Apple Gift Card</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простая пошаговая инструкция по активации и использованию
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-16">Процесс активации</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute h-full w-0.5 bg-gray-200 left-[19px] top-0 z-0"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 relative z-10">
                  <div className="flex-shrink-0 flex md:block">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                      <Icon name={step.icon} size={20} />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">Часто задаваемые вопросы</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Готовы выбрать свою карту?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Приобретите Apple Gift Card и откройте мир возможностей
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-[#0071E3] hover:bg-[#0071E3]/90 font-medium text-base px-8 py-6 h-auto"
            >
              <Link to="/products">
                Выбрать карту
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="border-black text-black hover:bg-black/5 font-medium text-base px-8 py-6 h-auto"
            >
              <Link to="/">
                Вернуться на главную
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructionPage;
