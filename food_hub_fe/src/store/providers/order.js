import { OrderContext } from "../context";
import React from "react";
import { useAuth } from "../hooks/auth";

const CartProvider = ({ children }) => {
  const [order, setOrder] = React.useState(null);
  const { real_db } = useAuth();

  const createOrder = async (order_details, table) => {
    try {
      const orderId = `${Date.now()}-${order_details.user}-${table}`;
      real_db.ref(orderId).set(order_details);

      //   const ll = await real_db.ref().child("order").get();
      //   console.log("@@@", ll);
    } catch (err) {
      console.log("##W ", err.message);
    }
  };

  return (
    <OrderContext.Provider value={{ order, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default CartProvider;
