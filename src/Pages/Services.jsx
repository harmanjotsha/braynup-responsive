import "./services.css";
import saly2 from "../assets/fh.png";
import rocket from "../assets/fh1.png";

const Services = () => {
  return (
    <>
      <div className="servicesMainContainer">
        <h1>Hosting Service with The Resources You Need</h1>
        <div className="partOne">
          <div className="leftSidePart">
            <img
              src={saly2}
              alt="img"
              className="saly2"
              data-aos="fade-up-right"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="rightSidePart">
            <div
              className="serviceBox"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Unmatched Speed & Power</h2>
                <h3>
                We take your website performance seriously. That’s why FH Hosting uses the latest server technology including HTTP/3, IPv6, and ultra-fast LiteSpeed web servers. All Business and Premium plans come with unlimited bandwidth and top-tier CDNs to keep your site lightning-fast and responsive. 
                </h3>
              </div>
            </div>

            <div
              className="serviceBox"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="200"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Enterprise-Grade Security</h2>
                <h3>
                With FH Hosting, your site is always secure. We offer advanced protection tools like real-time threat detection, PHP version control, DDoS prevention, SSH access, Git integration, and more — giving you complete peace of mind and keeping your data safe at all times. Our advanced security infrastructure ensures 24/7 protection against evolving cyber threats.
                </h3>
              </div>
            </div>

            <div
              className="serviceBox"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="300"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-solid fa-wrench"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Full Control & Flexibility</h2>
                <h3>
                Enjoy complete control over your hosting environment with FH Hosting. Manage your site efficiently with SSH access, MySQL management, WP-CLI, Git, and multiple PHP versions. Whether you’re a developer or business owner, our tools empower you with flexibility and control. Take charge of your digital presence with developer-friendly features and powerful tools.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="partTwo">
          <div className="leftSidePart">
            <img
              src={rocket}
              alt="img"
              className="saly2 rocket"
              data-aos="fade-up-left"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="rightSidePart">
            <div
              className="serviceBox"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-solid fa-earth-asia"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Global Data Centers</h2>
                <h3>
                Looking for reliable hosting with global infrastructure? FH Hosting has you covered. Our data centers are strategically located across Europe (Netherlands, Germany, UK), Asia (India, Singapore), North America (USA), and South America (Brazil). We also support flexible server location changes. Experience faster load times with globally optimized server routing.
                </h3>
              </div>
            </div>

            <div
              className="serviceBox"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="200"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-brands fa-wordpress"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>Managed WordPress</h2>
                <h3>
                FH Hosting’s Managed WordPress hosting offers effortless website setup with built-in features. Get started instantly using our intuitive control panel, 1-click installer, and automatic WordPress updates. Pre-installed plugins and optimization tools help boost your site performance.
                </h3>
              </div>
            </div>

            <div
              className="serviceBox"
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-delay="300"
              data-aos-easing="ease"
            >
              <div className="leftSideServiceBox">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <div className="rightSideServiceBox">
                <h2>WordPress Staging</h2>
                <h3>
                FH Hosting provides a powerful staging environment for your WordPress projects. Easily create a clone of your site, test new plugins or themes, and preview changes before going live. Ensure a seamless user experience by testing everything before launch.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
