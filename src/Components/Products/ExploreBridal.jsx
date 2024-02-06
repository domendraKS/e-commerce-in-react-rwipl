import React from "react";
import "./Styles/ExploreBridal.css";

const ExploreBridal = ({ productsData }) => {
  const uniqueTypes = [...new Set(productsData.map((item) => item.type))];

  return (
    <>
      <div className="category-details">
        <div className="details-heading">Explore Bridal Collections</div>
        {uniqueTypes.map((item, index) => {
          return (
            <div className="products-divide" key={index}>
              <p>Bridal Special &gt; {item} </p>
              <div className="products-items">
                {productsData.map((curElem, index) => {
                  if (curElem.type === item) {
                    return (
                      <div className="item-details" key={index}>
                        <img src={curElem.image} alt={curElem.name} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExploreBridal;
