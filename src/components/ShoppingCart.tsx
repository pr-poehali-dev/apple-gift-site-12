
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter, 
  SheetClose 
} from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "@/hooks/use-toast";

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  onClose,
}) => {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    toast({
      title: "Заказ оформлен",
      description: `Сумма заказа: ${totalPrice.toLocaleString()} ₽`,
    });
    clearCart();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} />
            Корзина {totalItems > 0 && `(${totalItems})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="bg-gray-100 rounded-full p-6">
              <Icon name="ShoppingCart" size={48} className="text-gray-400" />
            </div>
            <p className="text-lg text-gray-500">Ваша корзина пуста</p>
            <SheetClose asChild>
              <Button asChild>
                <Link to="/products">Перейти к покупкам</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex flex-col space-y-4 py-4 overflow-y-auto max-h-[65vh]">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-gray-500 text-sm">{item.price.toLocaleString()} ₽</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center border rounded-md">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2"
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity <= 1}
                      >
                        <Icon name="Minus" size={16} />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={16} />
                      </Button>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-red-500 hover:text-red-700 hover:bg-red-50"
                      onClick={() => removeItem(item.id)}
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Итого:</span>
                <span className="font-bold">{totalPrice.toLocaleString()} ₽</span>
              </div>

              <SheetFooter className="flex-col gap-2 sm:flex-col">
                <Button 
                  className="w-full bg-[#0071E3] hover:bg-[#0071E3]/90"
                  onClick={handleCheckout}
                >
                  Оформить заказ
                </Button>
                <SheetClose asChild>
                  <Button variant="outline" className="w-full">
                    Продолжить покупки
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
