import React from "react";
import "./footer.css";
import logo from "../assets/FH Logo Full.png";
const Footer = () => {
  return (
    <>
      <div className="Footer" style={{ borderRadius: "15px" }}>
        <div className="FooterMain" style={{ borderRadius: "15px" }}>
          <div className="fhhostingDiv">
            <img
              style={{
                border: "1px solid gray",
                borderRadius: "10px",
                padding: "5px",
              }}
              src={logo}
              alt="FH Hosting"
            />
            <p>
              At FH Hosting, we’re on a mission to empower your digital presence with lightning-fast, secure, and reliable web hosting solutions. Your data is protected with advanced encryption, real-time threat monitoring, and full-stack server security — only with FH Hosting. Experience 99.99% uptime, ultra-fast loading speeds, and smooth performance designed for business success. Get up to 80% off on premium hosting plans. Enjoy free SSL, CDN, and unmatched value with every package. We safeguard your website from malware, DDoS attacks, and vulnerabilities — ensuring full protection, always.
            </p>

            <ul className="socialLinks">
              <li>
                <a
                  href="/"
                  target="_blank"
                  className="slink"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>

              <li>
                <a href="/" target="_blank" className="slink">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="/" target="_blank" className="slink">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="/" target="_blank" className="slink">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="/" target="_blank" className="slink">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footers">
            <div className="Parts">
              <div className="footerSectionPart">
                <h3>HOSTING</h3>
                <div className="links">
                  <a href="/" target="_blank">
                    Web Hosting
                  </a>
                  <a href="/" target="_blank">
                    VPS Hosting
                  </a>
                  <a href="/" target="_blank">
                    Minecraft Server Hosting
                  </a>
                  <a href="/" target="_blank">
                    CyberPanel Hosting
                  </a>
                  <a href="/" target="_blank">
                    Cloud Hosting
                  </a>
                  <a href="/" target="_blank">
                    WordPress Hosting
                  </a>
                  <a href="/" target="_blank">
                    Email Hosting
                  </a>
                  <a href="/" target="_blank">
                    CMS Hosting
                  </a>
                </div>
              </div>

              <div className="footerSectionPart">
                <h3>DOMAIN</h3>
                <div className="links">
                  <a href="/" target="_blank">
                    Domain Name Search
                  </a>
                  <a href="/" target="_blank">
                    Domain Transfer
                  </a>
                  <a href="/" target="_blank">
                    Free Domain Name
                  </a>
                  <a href="/" target="_blank">
                    XYZ Domain
                  </a>
                  <a href="/" target="_blank">
                    Cheap Domains
                  </a>
                  <a href="/" target="_blank">
                    Domain Extensions
                  </a>
                  <a href="/" target="_blank">
                    WHOIS Lookup
                  </a>
                  <a href="/" target="_blank">
                    Free SSL Certificate
                  </a>
                </div>
              </div>

              <div className="footerSectionPart">
                <h3>INFORMATION</h3>
                <div className="links">
                  <a href="/" target="_blank">
                    Migrate to FH Hosting
                  </a>
                  <a href="/" target="_blank">
                    System Status
                  </a>
                  <a href="/" target="_blank">
                    Affiliate Program
                  </a>
                  <a href="/" target="_blank">
                    Payment Methods
                  </a>
                  <a href="/" target="_blank">
                    Rewards
                  </a>
                  <a href="/" target="_blank">
                    Reviews
                  </a>
                  <a href="/" target="_blank">
                    Pricing
                  </a>
                  <a href="/" target="_blank">
                    Sitemap
                  </a>
                </div>
              </div>

              <div className="footerSectionPart">
                <h3>LEGAL</h3>
                <div className="links">
                  <a href="/" target="_blank">
                    Privacy Policy
                  </a>
                  <a href="/" target="_blank">
                    Terms of Service
                  </a>
                </div>

                <h3 id="secondLinkPart">HELP</h3>
                <div className="links">
                  <a href="/" target="_blank">
                    Tutorials
                  </a>
                  <a href="/" target="_blank">
                    Knowledge Base
                  </a>
                  <a href="/" target="_blank">
                    Report Online Abuse
                  </a>
                </div>
              </div>

              <div className="footerSectionPart lastPart">
                <h3>COMPANY</h3>
                <div className="links">
                  <a href="/" target="_blank">
                    About FH Hosting
                  </a>
                  <a href="/" target="_blank">
                    Our Technology
                  </a>
                  <a href="/" target="_blank">
                    Roadmap
                  </a>
                  <a href="/" target="_blank">
                    Customer Care
                  </a>
                  <a href="/" target="_blank">
                    Blog
                  </a>
                </div>
              </div>
            </div>

            <p>
              © 2025 - Design & Devloped By{" "}
              <a href="/" target="_blank">
                Ajit Singh
              </a>{" "}
              👈
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
