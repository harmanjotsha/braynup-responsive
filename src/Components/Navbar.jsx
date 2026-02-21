import { useState } from "react";
import FHhostingLogo from "../assets/FH Logo Full.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [Hsotingclicked, setHostingclicked] = useState(false);
  const [Vpsclicked, setVpsclicked] = useState(false);
  const [Emailclicked, setEmailclicked] = useState(false);
  const [Domainclicked, setDomainclicked] = useState(false);
  const [MenuActive, setMenuActive] = useState(false);

  return (
    <>
      <nav>
        <div className="leftSideNav">
          <NavLink to="/">
            <img src={FHhostingLogo} alt="FHhostingLogo" id="hLogo" />
          </NavLink>
        </div>

        <div
          className={
            MenuActive === true ? "rightSideNav activeMenu" : "rightSideNav"
          }
        >
          <ul className="Links">
            <li>
              <div
                className="title"
                onClick={() => {
                  setDomainclicked(false);
                  setEmailclicked(false);
                  setHostingclicked(!Hsotingclicked);
                  setVpsclicked(false);
                }}
              >
                Hosting
                {Hsotingclicked ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </div>

              <div
                className={
                  Hsotingclicked === true ? "subMenu active" : "subMenu"
                }
              >
                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer"
                >
                  <div className="leftSubMenu">
                    <i className="fa-solid fa-server"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>Web Hosting</h3>
                    <h5>For Small To Medium Websites</h5>
                  </div>
                </a>

                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer"
                >
                  <div className="leftSubMenu">
                    <i className="fa-solid fa-cloud"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>Cloud Hosting</h3>
                    <h5>For Large Project</h5>
                  </div>
                </a>

                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer lastSub"
                >
                  <div className="leftSubMenu">
                    <i className="fa-brands fa-wordpress"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>Wordpress Hosting</h3>
                    <h5>Optimized solutions for WordPress hosting</h5>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div
                className="title"
                onClick={() => {
                  setDomainclicked(false);
                  setEmailclicked(false);
                  setHostingclicked(false);
                  setVpsclicked(!Vpsclicked);
                }}
              >
                VPS
                {Vpsclicked ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </div>
              <div
                className={Vpsclicked === true ? "subMenu active" : "subMenu"}
              >
                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer"
                >
                  <div className="leftSubMenu">
                    <i className="fa-solid fa-laptop"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>VPS Hosting</h3>
                    <h5>Dedicated resources to scale.</h5>
                  </div>
                </a>

                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer"
                >
                  <div className="leftSubMenu">
                    <i className="fa-solid fa-gauge-high"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>CyberPanel Hosting</h3>
                    <h5>Control panel with Open/LiteSpeed Webserver</h5>
                  </div>
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer lastSub"
                >
                  <div className="leftSubMenu">
                    <i className="fa-brands fa-xbox"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>Minecraft Server Hosting</h3>
                    <h5>Share your Minecraft experience</h5>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div
                className="title"
                onClick={() => {
                  setDomainclicked(false);
                  setEmailclicked(!Emailclicked);
                  setHostingclicked(false);
                  setVpsclicked(false);
                }}
              >
                Email
                {Emailclicked ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </div>
              <div
                className={Emailclicked === true ? "subMenu active" : "subMenu"}
              >
                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer"
                >
                  <div className="leftSubMenu">
                    <i className="fa-brands fa-google"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>Google Workspace Email</h3>
                    <h5>Hosting Get custom email and 30GB of storage</h5>
                  </div>
                </a>

                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer lastSub"
                >
                  <div className="leftSubMenu">
                    <i className="fa-solid fa-at"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>FH hosting Email Hosting</h3>
                    <h5>Promote your business with every outreach.</h5>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div
                className="title"
                onClick={() => {
                  setDomainclicked(!Domainclicked);
                  setEmailclicked(false);
                  setHostingclicked(false);
                  setVpsclicked(false);
                }}
              >
                Domain
                {Domainclicked ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-down"></i>
                )}
              </div>
              <div
                className={
                  Domainclicked === true ? "subMenu active" : "subMenu"
                }
              >
                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer"
                >
                  <div className="leftSubMenu">
                    <i className="fa-solid fa-earth-asia"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>Domain Name Search</h3>
                    <h5>Find the perfect domain name</h5>
                  </div>
                </a>

                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer"
                >
                  <div className="leftSubMenu">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>WHOIS Lookup</h3>
                    <h5>Lookup tool to find WHOIS information</h5>
                  </div>
                </a>

                <a
                  href="/"
                  target="_blank"
                  className="subDetailsContainer lastSub"
                >
                  <div className="leftSubMenu">
                    <i className="fa-solid fa-shuffle"></i>
                  </div>
                  <div className="rightSubMenu">
                    <h3>Domain Transfer</h3>
                    <h5>Want to transfer domain to FH hosting?</h5>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <NavLink to="/login">
            <div className="loginBtn">Login 🔒</div>
          </NavLink>
          <div className="cartOption">
            <i className="fa-solid fa-cart-plus"></i>Cart
          </div>
        </div>
      </nav>
      <div class="navsub container-fluid">
        <div className="freehosting container d-flex">
    <h1>GIANT FH hosting SALE</h1>
    
    </div>
</div>
      {MenuActive === false ? (
        <i
          className="fa-solid fa-bars"
          onClick={() => setMenuActive(!MenuActive)}
        ></i>
      ) : (
        <i
          className="fa-solid fa-xmark"
          onClick={() => setMenuActive(!MenuActive)}
        ></i>
      )}
      <img
        src={FHhostingLogo}
        alt="FHhostingLogo"
        id={MenuActive === false ? "MenuInsideLogo" : "MenuInsideLogoActive"}
      />
    </>
  );
};

export default Navbar;
