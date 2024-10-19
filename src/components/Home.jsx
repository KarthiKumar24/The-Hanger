import React, { useState } from "react";
import data from "../assets/products.json";
import { Product } from "./Product";

export const Home = ({ cart, setCart }) => {
  const [products] = useState(data);

  return (
    /* product is my define name for products */
    <div className="product-container">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};
