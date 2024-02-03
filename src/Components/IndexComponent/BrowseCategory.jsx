import React from "react";
import "./Style/BrowseCategory.css";
// Images
import Gemstone from "../../ImgOff/gemstone.jpeg";
import Diamond from "../../ImgOff/diamond.jpg";
import Gold from "../../ImgOff/gold.jpg";
import Platinum from "../../ImgOff/platinum_cat.jpeg";
import Divider from "../../ImgOff/Divider.svg";
import { Link } from "react-router-dom";

const BrowseCategory = () => {
  return (
    <>
      <div className="browse-category">
        <h1>Browse By Category</h1>
        <p>Discover elegance at your fingertips</p>
        <img src={Divider} alt="Divider" />
        {/* For desktop laptop and tablet view */}
        <div className="browse-category-container">
          <div className="category-items">
            <h3>Crystals</h3>
            <div className="category-item-container">
              <div className="category-image">
                <Link to="/CrystalCarat/Crystals">
                  <img src={Gemstone} alt="GEMSTONE" />
                  <p>GEMSTONE</p>
                </Link>
              </div>
              <div className="category-image">
                <Link to="/CrystalCarat/Crystals">
                  <img src={Diamond} alt="DIAMOND" />
                  <p>DIAMOND</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="category-items">
            <h3>Carats</h3>
            <div className="category-item-container">
              <div className="category-image">
                <Link to="/CrystalCarat/Carats">
                  <img src={Gold} alt="GOLD" />
                  <p>GOLD</p>
                </Link>
              </div>
              <div className="category-image">
                <Link to="/CrystalCarat/Carats">
                  <img src={Platinum} alt="PLATINUM" />
                  <p>PLATINUM</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* for mobile view */}
        <div className="browse-category-img">
          <div className="category-container">
            <img src={Gemstone} alt="GEMSTONE" />
            <p>GEMSTONE</p>
          </div>
          <div className="category-container">
            <img src={Diamond} alt="DIAMOND" />
            <p>DIAMOND</p>
          </div>
          <div className="category-container">
            <img src={Gold} alt="GOLD" />
            <p>GOLD</p>
          </div>
          <div className="category-container">
            <img src={Platinum} alt="PLATINUM" />
            <p>PLATINUM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseCategory;
