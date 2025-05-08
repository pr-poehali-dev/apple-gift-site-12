
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="mb-8">
          <Icon name="FileQuestion" className="mx-auto h-24 w-24 text-gray-300" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Упс! Страница не найдена
        </p>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Возможно, она была перемещена или удалена. Проверьте правильность URL или вернитесь на главную страницу.
        </p>
        <Button asChild className="bg-[#0071E3] hover:bg-[#0071E3]/90">
          <Link to="/">
            <Icon name="Home" className="mr-2 h-4 w-4" />
            Вернуться на главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
