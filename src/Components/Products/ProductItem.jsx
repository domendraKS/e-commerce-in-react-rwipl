import React from "react";

const ProductItem = ({ itemData }) => {
  return (
    <>
      <div className="item-details">
        <img src={itemData.image} alt={itemData.name} />
        <div className="price-discount">
          <p className="price">Rs. 7500</p>
          <p className="discount">30% off</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
