import React, { useEffect, useState } from "react";
import "./Style/ShopByGender.css";
// Images
import Divider from "../../ImgOff/Divider.svg";
import MenG from "../../ImgOff/men.jpg";
import WomenG from "../../ImgOff/women.webp";
import Kids from "../../ImgOff/kids.png";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const ShopByGender = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="shop-gender">
        <div className="shopGender-heading">
          <h1>Shop By Gender</h1>
          <p>First-class jewelry for first-class Men, Women &amp; Children.</p>
          <img src={Divider} alt="Divider" />
        </div>
        {isMobile ? (
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className="shopGender-item">
                <a href="./Categories/GenderWise/MenSection.html">
                  <img src={MenG} alt="Men" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shopGender-item">
                <a href="./Categories/GenderWise/WomenSection.html">
                  <img src={WomenG} alt="Women" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="shopGender-item">
                <a href="./Categories/GenderWise/KidSection.html">
                  <img src={Kids} alt="Kids" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="shopGender-item-container">
            <div className="shopGender-item">
              <a href="./Categories/GenderWise/MenSection.html">
                <img src={MenG} alt="Men" />
                <p>Men</p>
              </a>
            </div>
            <div className="shopGender-item">
              <a href="./Categories/GenderWise/WomenSection.html">
                <img src={WomenG} alt="Women" />
                <p>Women</p>
              </a>
            </div>
            <div className="shopGender-item">
              <a href="./Categories/GenderWise/KidSection.html">
                <img src={Kids} alt="Kids" />
                <p>Kids</p>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopByGender;
