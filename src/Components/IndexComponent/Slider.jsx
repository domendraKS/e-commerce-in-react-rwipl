import React from "react";
import "./Style/Slider.css";
// Images
import Slider1 from "../../ImgOff/Slider-1.jpg";
import Slider2 from "../../ImgOff/Slider-2.png";
import Slider3 from "../../ImgOff/Slider-3.jpg";
import Category1Diamond from "../../ImgOff/category-1-diamond-ring.jpg";
import Category2Crystals from "../../ImgOff/category-2-crystals.jpeg";
import Category3Carats from "../../ImgOff/category-3-carats.jpg";
import Category4Bridal from "../../ImgOff/category-4-bridal-special.jpg";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      {/* For Laptops and Tablets */}
      <div className="slider-image-container">
        <div className="image-item-1">
          <img src={Slider1} alt="Slider-1" />
        </div>
        <div className="image-item-2">
          <img src={Slider2} alt="Slider-2" />
          <img src={Slider3} alt="Slider-3" />
        </div>
      </div>
      {/* for Mobile view only start*/}
      {/*--Search-bar Start--*/}
      <form className="search-bar">
        <div className="search-icons">
          <i className="ri-search-line" />
        </div>
        <input type="text" name="search-item" placeholder="Search for" />
      </form>
      {/*--Search-bar End--*/}
      {/*--Short Category Section start--*/}
      <div className="short-category-container">
        <div className="category-items">
          <img src={Category1Diamond} alt="Best Seller" />
          <p>Best Seller</p>
        </div>
        <div className="category-items">
          <img src={Category2Crystals} alt="Crystals" />
          <p>Crystals</p>
        </div>
        <div className="category-items">
          <img src={Category3Carats} alt="Carats" />
          <p>Carats</p>
        </div>
        <div className="category-items">
          <img src={Category4Bridal} alt="Bridal Special" />
          <p>Bridal Special</p>
        </div>
      </div>
      {/*--Short Category Section --select End--*/}
      {/*-Slider Section Mobile view-*/}
      <div className="slider-container">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="swiper-container"
        >
          <SwiperSlide>
            <img src={Slider1} alt="Slider-1" className="custom-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider2} alt="Slider-2" className="custom-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slider3} alt="Slider-3" className="custom-image" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* for Mobile view only end*/}
    </>
  );
};

export default Slider;
