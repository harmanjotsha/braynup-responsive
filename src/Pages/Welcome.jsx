import "./welcome.css";
import Navbar from "../Components/Navbar";
import HeroBg from "../assets/welcomeheader.png";

import Pricing from "./Pricing";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Rating from "./Rating";

const Welcome = () => {
  return (
    <>
      <div className="Mainnn">
        <Navbar />
        <div className="welcomeMain">
          <div className="leftSideWelcome">
            <img
              src={HeroBg}
              alt="bg"
              id="heroBg"
            // data-aos="fade-left"
            // data-aos-duration="700"
            // data-aos-delay="300"
            // data-aos-easing="ease-in-out"
            />
          </div>

          <div className="rightSideWelcome">

            <h1>
              Up to 80% off: <br />Everything you need to <br />grow online
            </h1>

            <p className="keypoint">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                  <path fill="#0f0e13" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path><path fill="#00A688" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
                </svg>   &nbsp; Manage your clients' websites and services in one place
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                  <path fill="#0f0e13" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path><path fill="#00A688" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
                </svg>   &nbsp; Earn up to 200 USD per referral
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                  <path fill="#0f0e13" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path><path fill="#00A688" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
                </svg>   &nbsp; Get your clients 20% off their first hosting plan
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                  <path fill="#0f0e13" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path><path fill="#00A688" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
                </svg>   &nbsp; Enjoy 24/7 priority support
              </li>
            </p>

            <h3>
              US$ <strong className="str">3.49</strong>/mo
            </h3>
            <div className="startedBtn1">
              <a
                href="/"
                target="_blank"
                className="startedBtn"
              >
                Choose your plan
              </a>
              <a
                href="/"
                target="_blank"
                className="referBtn">
                Refer clients
              </a>
            </div>
            {/* <p className="tag">✅ 30-day money-back guarantee</p> */}
          </div>
        </div>
      </div>
      <Pricing />
      <Services />
      <Testimonial />
      <Rating/>
      <Footer />
    </>
  );
};

export default Welcome;
