import React, { useEffect, useState } from "react";
import "./Styles/Home.css";
// Images
import VideoCarousel from "../ImgOff/Video Carousel.mp4";
import LocationImg from "../ImgOff/ft_top_bar.webp";
// Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Components
import Slider from "../Components/IndexComponent/Slider";
import BrowseCategory from "../Components/IndexComponent/BrowseCategory";
import BestSeller from "../Components/IndexComponent/BestSeller";
import BridalJewellery from "../Components/IndexComponent/BridalJewellery";
import ShopByGender from "../Components/IndexComponent/ShopByGender";
import Recommendation from "../Components/IndexComponent/Recommendation";
import LoginSignup from "./../Components/Modal/LoginSignup";

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  function closeAuth() {
    setShowAuth(false);
  }

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = showAuth ? "hidden" : "auto";
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = "auto"; // Reset body overflow when component unmounts
    };
  }, [showAuth]);

  useEffect(() => {
    setTimeout(() => {
      setShowAuth(true);
    }, 5000);
  }, []);

  return (
    <>
      {/*-Slider Section Start-*/}
      <Slider />
      {/*-Slider Section End-*/}

      {/*-Browse by category section start-*/}
      <BrowseCategory />
      {/*-Browse by category section end-*/}

      {/*-Best Seller Section Start-*/}
      <BestSeller />
      {/*-Best Seller Section End-*/}

      {/*-Bridal Jewellery Special Section Start-*/}
      <BridalJewellery />
      {/*-Bridal Jewellery Special Section End-*/}

      {/*-Gift Section Start-*/}
      <a href="./Categories/Gifts.html" className="giftLink">
        <div className="gift-container">GIFT CARDS</div>
      </a>
      {/*-Gift Section End-*/}

      {/*-Shop by gender Section Start-*/}
      <ShopByGender />
      {/*-Shop by gender Section End-*/}

      {/*-Video Carousel Section Start-*/}
      <div className="videoCarousel">
        <video autoPlay loop muted>
          <source src={VideoCarousel} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/*-Video Carousel Section End-*/}

      {/*-Recommendation Section Start-*/}
      <Recommendation />
      {/*-Recommendation Section End-*/}

      {/* Scroll to top Start */}
      <div className="scroll-btn">
        <button onClick={() => goTop()}>Scroll Top</button>
      </div>
      {/* Scroll to top End */}

      {/* Shop Location Section Start */}
      <div className="image-location">
        <img src={LocationImg} alt="All Location" />
      </div>
      {/* Shop Location Section End */}

      {showAuth && <LoginSignup closeAuth={closeAuth} />}
    </>
  );
};

export default Home;
