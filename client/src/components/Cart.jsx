import React from "react";
import Newsletter from "./Newsletter";
import Header from "./Header";
import CartItem from "./CartItem";

const Cart = () => {
  const cart = true;
  return (
    <div>
      <Newsletter />
      <Header cart={cart} />
      <CartItem />
    </div>
  );
};

export default Cart;
