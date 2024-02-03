import React from "react";
import { Link } from "react-router-dom";
import MakeInIndia from "../ImgOff/MakeInIndia.webp";

const Footer = () => {
  return (
    <>
      {/*- Contact footer for phone in only index page Start-*/}
      <div className="contact-phoneView">
        <span>
          <i className="ri-phone-fill" /> 1809-908-5647
        </span>
        <span>
          <i className="ri-mail-fill" /> info@crystalandcarats.com
        </span>
        <span>
          <i className="ri-chat-new-line" /> Whatsapp
        </span>
      </div>
      {/*- Contact footer for phone in only index page End-*/}

      <footer className="footer">
        <div className="footer-item-container">
          <div className="footer-item">
            <h3>Address</h3>
            <li>Crystals & Carats</li>
            <li>Plot No 44, 45, Street Number 14,</li>
            <li>Marol MIDC Industry Estate,</li>
            <li>Andheri East,Mumbai -400093</li>
          </div>
          <div className="footer-item">
            <h3>Help & Info</h3>
            <li>
              <Link to="#">About Crystals & Carats</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="#">Blogs</Link>
            </li>
            <li>
              <Link to="#">FAQs</Link>
            </li>
          </div>
          <div className="footer-item">
            <h3>Contact Us</h3>
            <li>
              <Link to="#">1809-908-5647</Link>
            </li>
            <li>
              <Link to="#">Get in Touch</Link>
            </li>
            <li>
              <Link to="#">Chat With Us</Link>
            </li>
          </div>
          <div className="footer-item">
            <h3>Useful links</h3>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#"> Terms of Use</Link>
            </li>
            <li>
              <Link to="#"> Payment Issues</Link>
            </li>
            <li>
              <Link to="#"> Net Banking</Link>
            </li>
            <li>
              <Link to="#"> Custom Jewellery</Link>
            </li>
          </div>
        </div>
        <div className="location">
          <h3>Location</h3>
          <div className="map">Google Map</div>
        </div>
        <div className="footer-icons-container">
          <span>Follow Us on : </span>
          <i className="ri-facebook-fill"></i>
          <i className="ri-instagram-line"></i>
          <i className="ri-whatsapp-line"></i>
          <i className="ri-twitter-fill"></i>
        </div>
      </footer>
      {/* <!--- Footer Section End ---> */}

      {/* <!--- Footer for phone Section Start ---> */}
      <footer className="footerPhone">
        <div className="footer_phone">
          <div className="footer_container">
            <h3>Address</h3>
            <p>
              Crystals & Carats Plot No 44, 45, Street Number 14, Marol MIDC
              Industry Estate, Andheri East,Mumbai -400093
            </p>
            <h3>Locate on Map</h3>
            <p>Google Map</p>
          </div>
          <div className="footer_container">
            <div className="dropdown">
              <div className="dropdown-heading">
                <p>About Us</p>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <ul className="dropdownUI">
                <li>About-1</li>
                <li>About-2</li>
                <li>About-3</li>
              </ul>
            </div>
            <div className="dropdown">
              <div className="dropdown-heading">
                <p>Terms of Use</p>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <ul className="dropdownUI">
                <li>Terms-1</li>
                <li>Terms-2</li>
                <li>Terms-3</li>
              </ul>
            </div>
            <div className="dropdown">
              <div className="dropdown-heading">
                <p>Services</p>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <ul className="dropdownUI">
                <li>Services-1</li>
                <li>Services-2</li>
                <li>Services-3</li>
              </ul>
            </div>
            <div className="dropdown">
              <div className="dropdown-heading">
                <p>Policies</p>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <ul className="dropdownUI">
                <li>Policies-1</li>
                <li>Policies-2</li>
                <li>Policies-3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="follow-us">
          <div className="icons-container">
            <span>Follow Us </span>
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-whatsapp-line"></i>
            <i className="ri-twitter-fill"></i>
          </div>
          <div className="image-container">
            <img src={MakeInIndia} alt="Make in INDIA" />
          </div>
        </div>
      </footer>
      {/* <!--- Footer for phone Section End ---> */}

      {/* <!--- Copy right area Section Start ---> */}
      <div className="copyright-area">
        Copyright @2023 Crystals & Carats. All Rights Reserved.
      </div>
      {/* <!--- Copy right area Section End ---> */}
    </>
  );
};

export default Footer;
