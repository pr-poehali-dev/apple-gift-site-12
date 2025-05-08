
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Add item to cart (or increase quantity if already exists)
  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      
      if (existingItem) {
        // Item already exists, increase quantity
        return prevItems.map((i) => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Item doesn't exist, add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems((prevItems) => 
      prevItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setItems([]);
  };

  // Calculate total items in cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate total price
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addItem, 
        removeItem, 
        updateQuantity, 
        clearCart, 
        totalItems,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
