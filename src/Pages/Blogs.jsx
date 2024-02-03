import React from "react";
import "./Styles/Blogs.css";
import BlogBanner from "../ImgOff/blog_ban1.webp";
import Blog1 from "../ImgOff/blog_1.webp";
import Blog2 from "../ImgOff/blog2.jpg";
import Blog3 from "../ImgOff/blog_3.jpg";
import PhotoShootBlog from "../ImgOff/photo_shoot.webp";

const Blogs = () => {
  return (
    <>
      {/* Blogs Banner Section Star  */}
      <div className="blog-banner">
        <img src={BlogBanner} alt="Blog Banner" />
      </div>
      {/*-Blogs Banner Section End-*/}
      {/* -Latest Blogs Section Start- */}
      <div className="latest-blog">
        <h1>Latest Blog</h1>
        <p className="blog-title">
          By inspired hearts, our jewellery is consciously made to look and feel
          good on skin. How do you care them? We will help you.
        </p>
        <div className="blogs-items">
          <div className="blog-item">
            <img src={Blog1} alt="Crystals Care" />
            <p>Tips to take care of your Crystals</p>
          </div>
          <div className="blog-item">
            <img src={Blog2} alt="Carats Care" />
            <p>Tips to take care of your Carats</p>
          </div>
          <div className="blog-item">
            <img src={Blog3} alt="Bridal Sets" />
            <p>Tips to take care of Bridal Sets</p>
          </div>
        </div>
      </div>
      {/*-Latest Blogs Section End-*/}
      {/*-Blogs Details Section Start-*/}
      <div className="blog-details">
        <div className="img-container">
          <img src={PhotoShootBlog} alt="Blog Shoot" />
        </div>
        <div className="desc-container">
          <p>
            It is a season of breezy dresses and boho jewellery to go funky and
            light. Colourful gemstones and sea-inspired jewellery like shell
            necklaces and pearl jewellery sets are the essence of every summer
            wardrobe.
          </p>
          <h2>Seasonal Trends in Jewellery and Accessories</h2>
        </div>
      </div>
      {/*-Blogs Details Section End-*/}
    </>
  );
};

export default Blogs;
