import React from "react";
import { OrderContext } from "../context";

export const useOrder = () => {
  const { order, createOrder } = React.useContext(OrderContext);
  return { order, createOrder };
};
