import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  function handleAddToCart() {
    setInCart(!inCart)
  }

  const liClass = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart" 
  const buttonClass = inCart ? "remove" : "add"

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
