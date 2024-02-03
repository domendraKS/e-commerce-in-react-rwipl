import React, { useEffect, useState } from "react";
import "./Style/BridalJewellery.css";
// Images
import Divider from "../../ImgOff/Divider.svg";
import Enchanting from "../../ImgOff/8_Mararashtrian.png";
import Trendsetter from "../../ImgOff/show-stopper.png";
import Dazzling from "../../ImgOff/12_gujarati.png";
import Bejeweled from "../../ImgOff/Bejeweled.png";
//Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BridalJewellery = () => {
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
      <div className="bridal-jewellery">
        <div className="bridalJewellery-heading">
          <h1>Bridal Jewellery Special</h1>
          <p>Be the bride you always dreamt of</p>
          <img src={Divider} alt="Divider" />
        </div>
        {!isMobile ? (
          <div className="bridalJewellery-items-container">
            <div className="bridalJewellery-item">
              <a href="./Categories/BridalCategory.html">
                <div className="item-img">
                  <img src={Enchanting} alt="Enchanting" />
                </div>
                <p>Enchanting</p>
              </a>
            </div>
            <div className="bridalJewellery-item">
              <a href="./Categories/BridalCategory.html">
                <div className="item-img">
                  <img src={Trendsetter} alt="Trendsetter" />
                </div>
                <p>Trendsetter</p>
              </a>
            </div>
            <div className="bridalJewellery-item">
              <a href="./Categories/BridalCategory.html">
                <div className="item-img">
                  <img src={Dazzling} alt="Dazzling" />
                </div>
                <p>Dazzling</p>
              </a>
            </div>
          </div>
        ) : (
          <div className="bgColor-phone">
            <div className="mobile-bridalJewellery-container">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                slidesPerView={2}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="swiper-container"
              >
                <SwiperSlide>
                  <div className="mobile-itme-img">
                    <Link to="./Categories/BridalCategory.html">
                      <img src={Enchanting} alt="Enchanting" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-itme-img">
                    <Link to="./Categories/BridalCategory.html">
                      <img src={Bejeweled} alt="Bejeweled" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-itme-img">
                    <Link to="./Categories/BridalCategory.html">
                      <img src={Trendsetter} alt="Trendsetter" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mobile-itme-img">
                    <Link to="./Categories/BridalCategory.html">
                      <img src={Dazzling} alt="Dazzling" />
                    </Link>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BridalJewellery;
