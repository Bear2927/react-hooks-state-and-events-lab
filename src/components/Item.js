import React, { useState } from "react";

function Item({ name, category }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const handleAddToCart = () => {
    setIsAddedToCart(!isAddedToCart)
  }

  return (
    <li className={isAddedToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAddedToCart ? "remove" : "add"} onClick={handleAddToCart}>{isAddedToCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
