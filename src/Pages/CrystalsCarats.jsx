import React, { useEffect, useState } from "react";
import "./Styles/CrystalsCarats.css";
import SideNav from "../Components/Products/SideNav";
import CrystalsItems from "../Components/Products/CrystalsItems";
import CrystalsCaratsAPI from "../Dummy-Data/CrystalsCaratsAPI";
import { useParams } from "react-router-dom";
import Products from "../Components/Products/Products";

const uniqueCategoriesAndTypes = Array.from(
  new Set(
    CrystalsCaratsAPI.map((curElem) => {
      return { category: curElem.category, type: curElem.type };
    })
  )
);

const uniqueCategories = [
  ...new Set(uniqueCategoriesAndTypes.map((item) => item.category)),
];

const uniqueCategoriesWithUniqueTypes = uniqueCategories.map((category) => ({
  category,
  types: [
    ...new Set(
      uniqueCategoriesAndTypes
        .filter((item) => item.category === category)
        .map((item) => item.type)
    ),
  ],
}));

const CrystalsCarats = () => {
  const { typeC } = useParams();
  const [productsData, setproductsData] = useState(CrystalsCaratsAPI);
  const [filterCategory, setFilterCategory] = useState(typeC);

  const filterItems = (category) => {
    setFilterCategory(category);
    const updatedData = CrystalsCaratsAPI.filter((curElem) => {
      return curElem.category === category;
    });
    setproductsData(updatedData);
  };

  const filterItemsUseLink = () => {
    const updatedData = productsData.filter((curElem) => {
      return curElem.category === typeC;
    });
    setproductsData(updatedData);
  };

  useEffect(() => {
    filterItemsUseLink();
  }, []);

  return (
    <>
      {/*--Heading Image Start--*/}
      {typeC === "Crystals" ? (
        <div className="crystal-top-img">
          <img src="/Images/Crystal-top.jpg" alt="Crystal Top" />
        </div>
      ) : typeC === "Carats" ? (
        <div className="carat-top-img">
          <img src="/Images/carat_top.png" alt="Carats Top" />
          <div className="some-lines">
            All that Glitters is not Gold &amp; Platinum
          </div>
        </div>
      ) : (
        <></>
      )}
      {/*--Heading Image End--*/}

      <div className="crystal-categories">
        <SideNav
          uniqueCategoriesAndTypes={uniqueCategoriesWithUniqueTypes}
          filterItems={filterItems}
        />
        {filterCategory === "Products" ? (
          <Products productsData={productsData} />
        ) : (
          <CrystalsItems productsData={productsData} />
        )}
      </div>
    </>
  );
};

export default CrystalsCarats;
