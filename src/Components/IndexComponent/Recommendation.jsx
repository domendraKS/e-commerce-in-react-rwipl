import React, { useEffect, useState } from "react";
import "./Style/Recommendation.css";
// Images
import Divider from "../../ImgOff/Divider.svg";
import Birthday from "../../ImgOff/Birthday.jpg";
import Anniversary from "../../ImgOff/anniversary.jpg";
import Manali from "../../ImgOff/Manali.png";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Recommendation = () => {
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
      <div className="recommendation-you">
        <div className="recommendationYou-heading">
          <h1>Recommendation For You</h1>
          <p>Style meets the pulse of fashion</p>
          <img src={Divider} alt="Divider" />
        </div>
        {!isMobile ? (
          <div className="recommendation-image-container">
            <div className="image-item-2">
              <a href="./Categories/OccasionCategory.html">
                <img src={Birthday} alt="Slider-2" />
              </a>
              <a href="./Categories/OccasionCategory.html">
                <img src={Anniversary} alt="Slider-3" />
              </a>
            </div>
            <div className="image-item-1">
              <a href="./Categories/OccasionCategory.html">
                <img src={Manali} alt="Slider-1" />
              </a>
            </div>
          </div>
        ) : (
          <div className="recommendation-slider-container">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
            >
              <SwiperSlide>
                <img src={Manali} alt="Slider-1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Birthday} alt="Slider-2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Anniversary} alt="Slider-3" />
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
};

export default Recommendation;
