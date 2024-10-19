import React from "react";
import "./Product.css";
export const Product = ({ product, cart, setCart }) => {
  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };
  return (
    <>
      <div className="back">
        <div className="product-container">
          <div className="product">
            <div className="img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="product-details">
              <h4>{product.name}</h4>
              <p>&#8377; {product.amt}/-</p>
              {cart.includes(product) ? (
                <button className="btnRemove" onClick={removeCart}>
                  Remove from Cart
                </button>
              ) : (
                <button onClick={addCart}>Add to Cart</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
