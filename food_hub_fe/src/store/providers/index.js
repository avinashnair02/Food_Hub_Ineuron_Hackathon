import React from "react";
import AuthProvider from "./auth";
import MenuProvider from "./menu";
import CartProvider from "./cart";
import OrderProvider from "./order";

const RootProvider = ({ children }) => {
  return (
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          <OrderProvider>{children}</OrderProvider>
        </CartProvider>
      </MenuProvider>
    </AuthProvider>
  );
};

export default RootProvider;
