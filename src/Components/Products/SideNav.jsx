import React from "react";
import "./Styles/CrystalAll.css";
import { useNavigate } from "react-router-dom";

const SideNav = ({ uniqueCategoriesAndTypes, filterItems }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const newPath = `/CrystalCarat/${category}`;
    navigate(newPath);
  };
  return (
    <>
      {/*--Crystal Category Navbar  Section Start--*/}

      <div className="categories-name">
        <h2 className="category-heading">Categories</h2>
        {uniqueCategoriesAndTypes.map((data, index) => {
          return (
            <ul key={index}>
              <h3
                onClick={() => {
                  filterItems(data.category);
                  handleCategoryClick(data.category);
                }}
              >
                {data.category}
              </h3>
              {data.types.map((data, index) => {
                return <li key={index}>{data}</li>;
              })}
            </ul>
          );
        })}
        <ul>
          <h3>Occasional</h3>
          <li>Birthday</li>
          <li>Anniversary</li>
          <li>Baby Birth</li>
          <li>Festive Gifts</li>
        </ul>
      </div>
      {/*--Crystal Category Navbar Section End--*/}
    </>
  );
};

export default SideNav;
