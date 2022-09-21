import React from "react";

function Price({ originalPrice, salePrice }) {
  if (salePrice) {
    return (
      <div className="book__price">
        <span className="book__price--normal">{originalPrice.toFixed(2)}$</span>
        {salePrice.toFixed(2)}$
      </div>
    );
  } else {
    return <div className="book__price">{originalPrice.toFixed(2)}$</div>;
  }
}

export default Price;
