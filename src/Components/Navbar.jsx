import React, { useEffect, useState } from "react";
import Logo from "../ImgOff/Logo.png";
import PhoneLogo from "../ImgOff/Logo.png";
import { Link } from "react-router-dom";
import LoginSignup from "./Modal/LoginSignup";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);

  function closeAuth() {
    setShowAuth(false);
  }

  /*-----menubar start-----*/
  function OpenMenu() {
    document.querySelector(".nav_menu")?.classList.add("active");
  }
  function CloseMenu() {
    document.querySelector(".nav_menu")?.classList.remove("active");
  }

  // if click any nav button close navbar
  const allMenu = document.querySelectorAll(".nav_menu > ul > li > a");
  allMenu?.forEach((item) => {
    item.addEventListener("click", () => {
      CloseMenu();
    });
  });
  /*-----menubar end-----*/

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = showAuth ? "hidden" : "auto";
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = "auto"; // Reset body overflow when component unmounts
    };
  }, [showAuth]);
  return (
    <>
      <header>
        <button className="menuBtn" onClick={() => OpenMenu()}>
          <i className="ri-menu-line"></i>
        </button>

        <nav className="nav_menu">
          <button className="closeBtn" onClick={() => CloseMenu()}>
            <i className="ri-arrow-left-line"></i>
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Shop</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="logo_phone">
          <Link to="/">
            <img src={PhoneLogo} alt="Logo" />
          </Link>
        </div>
        <nav className="nav_icons">
          <ul>
            <li>
              <Link to="../UserProfile/MyWishlist.html">
                <i className="ri-heart-fill"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="ri-shopping-cart-2-fill"></i>
              </Link>
            </li>
            <li onClick={() => setShowAuth(true)}>
              <Link to="#">
                <i className="ri-user-add-fill"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {showAuth && <LoginSignup closeAuth={closeAuth} />}
    </>
  );
};

export default Navbar;
