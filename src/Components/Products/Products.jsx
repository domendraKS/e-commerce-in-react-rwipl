import React, { useEffect, useState } from "react";
import "./Styles/Products.css";
import offerBanner from "../../ImgOff/shop_page_Banner.webp";
import ProductItem from "./ProductItem";
// Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Products = ({ productsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_FIRST_PAGE = 8;
  const ITEMS_PER_PAGE = 12;
  const [displayedItem, setDisplayedItem] = useState([]);
  const [dataEach, setDataEach] = useState([]);

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const uniqueTypes = [...new Set(displayedItem.map((item) => item.type))];

  useEffect(() => {
    const startIndex =
      currentPage === 1
        ? 0
        : ITEMS_PER_FIRST_PAGE + (currentPage - 2) * ITEMS_PER_PAGE;
    const endIndex =
      startIndex + (currentPage === 1 ? ITEMS_PER_FIRST_PAGE : ITEMS_PER_PAGE);

    const productsToDisplay = productsData.slice(startIndex, endIndex);

    setDisplayedItem(productsToDisplay);
  }, [currentPage, productsData]);

  useEffect(() => {
    // get one data from each types
    const uniqueTypes = [...new Set(productsData.map((item) => item.type))];

    const oneFromEach = uniqueTypes.map((types) =>
      productsData.find((item) => item.type === types)
    );
    setDataEach(oneFromEach);
  }, [productsData]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Total pages
  const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className="product-details">
        <div className="details-heading">Best Sellers</div>
        {currentPage === 1 ? (
          <div className="products-divide">
            <p style={{ fontWeight: 500, marginBottom: "6px" }}>
              Shop &gt; Products
            </p>

            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={4}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="swiper-container"
            >
              {dataEach.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="item-details">
                      <img src={item.image} alt={item.name} />
                      <div className="price-discount">
                        <p className="price">Rs. 7500</p>
                        <p className="discount">30% off</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <></>
        )}
        {uniqueTypes.map((itemType, index) => {
          return (
            <div className="products-divide" key={index}>
              <p className="product-name">{itemType}</p>
              <div className="products-items">
                {displayedItem.map((itemData, index) => {
                  if (itemType === itemData.type) {
                    return <ProductItem key={index} itemData={itemData} />;
                  }
                  return null;
                })}
              </div>
            </div>
          );
        })}

        {currentPage === totalPages ? (
          <div className="offer-img">
            <img src={offerBanner} alt="Offer" />
          </div>
        ) : (
          <></>
        )}

        <div className="scrollTop" onClick={() => goTop()}>
          Scroll to Top
        </div>
        <div className="pagination">
          <button
            className="btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 ? true : false}
          >
            <i className="ri-arrow-left-double-line" />
            Prev
          </button>
          <div className="page_no">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages ? true : false}
          >
            Next
            <i className="ri-arrow-right-double-line" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
