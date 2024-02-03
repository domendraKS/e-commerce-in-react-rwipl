import React from "react";
import "./Styles/CrystalAll.css";
import { useParams } from "react-router-dom";

const CrystalsItems = ({ productsData }) => {
  const { typeC } = useParams();
  return (
    <>
      <div className="category-details">
        <div className="details-heading">{typeC}</div>
        <div className="crystal-divide">
          <p>Shop</p>
          <div className="crystal-items">
            {productsData.map((data, index) => {
              const price = (
                data.actualPrice *
                (data.offerPercent / 100)
              ).toFixed(2);

              return (
                <div className="item-details" key={index}>
                  <img src={data.image} alt={data.name} />
                  <p>{data.name}</p>
                  <div className="price-discount">
                    <p className="price">{`Rs. ${price}`}</p>
                    <p className="discount">{`${data.offerPercent}% off`}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CrystalsItems;
