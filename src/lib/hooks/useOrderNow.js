"use client"
import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrderContext = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [isTriggered, setTriggered] = useState(false);

  return (
    <OrderContext.Provider value={{ isTriggered, setTriggered }}>
      {children}
    </OrderContext.Provider>
  );
};