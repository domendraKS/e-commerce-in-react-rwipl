import React, { useEffect, useState } from "react";
import "./Style/BestSeller.css";
// Images
import Divider from "../../ImgOff/Divider.svg";
import { Link } from "react-router-dom";
// Slider
// import Carousel from "react-grid-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Pagination } from "swiper/modules";
import "swiper/css/grid";
//API
import BestSelllerData from "../../Dummy-Data/BestSellerApi";

const BestSeller = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [dataBestSeller, setDataBestSeller] = useState(BestSelllerData);

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
      <div className="Best-seller">
        <div className="bestSeller-heading">
          <h1>Best Sellers</h1>
          <p>Timeless elegance meets contemporary style</p>
          <img src={Divider} alt="Divider" />
        </div>
        {isMobile ? (
          <div className="bestSeller-item-mobile">
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={3}
              grid={{
                rows: 2,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Grid, Pagination]}
            >
              {dataBestSeller.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to="#">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="sliderImg"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <>
            <div className="bestSeller-item-container">
              {dataBestSeller.map((data, index) => {
                return (
                  <div key={index} className="bestSeller-item">
                    <img src={data.image} alt={data.name} />
                    <p>{data.name}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BestSeller;
