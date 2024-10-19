import React, { useEffect, useState } from "react";
import "./Cart.css";

export const Cart = ({ cart, setCart }) => {
  const [cartItems, setCartItems] = useState(
    cart.map((product) => ({ ...product, quantity: product.quantity || 1 }))
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, curr) => acc + curr.amt * curr.quantity, 0)
    );
  }, [cartItems]);

  const handleIncrement = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id) {
          if (product.quantity >= 10) {
            alert("You reached the maximum quantity for this item!");
            return product;
          }
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      })
    );
  };
  
  const handleDecrement = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((product) =>
          product.id === id && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  };

  const removeCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const handleClick = (id) => {
  handleDecrement(id);
  removeCart(id);
};


  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cartItems.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="cart-img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p>&#8377; {product.amt}/-</p>
              <div className="btns">
                <button
                  onClick={() =>
                    handleDecrement(product.id) || removeCart(product.id)
                  }
                >
                  -
                </button>
                <p className="count">{product.quantity}</p>
                <button onClick={() => handleIncrement(product.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="cart-amt">Total Amount Rs.{total}</h1>
    </>
  );
};
