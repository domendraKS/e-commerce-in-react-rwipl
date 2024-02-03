import React, { useState } from "react";
import Modal from "react-modal";
import "./Style/LoginSignup.css";
import AuthImage from "../../ImgOff/Auth.jpg";

const LoginSignup = ({ closeAuth }) => {
  const [isLogin, setIsLogin] = useState(false);

  // Set the app element to the root element with id 'root'
  Modal.setAppElement("#root");

  return (
    <>
      <Modal isOpen={true}>
        {/*- Authentication Section Start -*/}
        <div className="authentication">
          <div className="authentication-img">
            <img src={AuthImage} alt="Authentication" />
          </div>
          {/* Sign-up and Login */}
          <div className={isLogin ? "login" : "signup"}>
            <div className="divider-line">
              <button
                className={isLogin ? "" : "active"}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
              <button
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <span onClick={() => closeAuth()}>
                <i className="ri-close-line" />
              </span>
            </div>
            {!isLogin ? (
              <>
                <h3>
                  Sign up &amp; get Rs. 500 off* coupon code for your first
                  purchase!
                </h3>
                <form>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="text" name="email" placeholder="Email ID" />
                  <input
                    type="text"
                    name="phoneNo"
                    placeholder="Phone Number"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                  <div className="agreePrivacy">
                    <input type="checkbox" />I agree to the Terms of use and
                    Privacy Statement
                  </div>
                  <button type="submit">Sign Up</button>
                </form>
                <div className="switch">
                  Already have an account?{" "}
                  <span href="#" onClick={() => setIsLogin(true)}>
                    Login now
                  </span>
                </div>
              </>
            ) : (
              <>
                <form>
                  <input type="text" name="name" placeholder="Name" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <button type="submit">Log In</button>
                </form>
                <div className="forgot-pass">Forgot Password ?</div>
                <div className="login-google">
                  <i className="ri-google-fill" /> Log in with Google
                </div>
                <div className="switch">
                  New User?{" "}
                  <span onClick={() => setIsLogin(false)}>Sign up now</span>
                </div>
              </>
            )}
          </div>
        </div>
        {/*- Authentication Section End -*/}
      </Modal>
    </>
  );
};

export default LoginSignup;
