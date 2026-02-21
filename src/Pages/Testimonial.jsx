import { useState, useEffect } from "react";
import "./testimonial.css";
import user1 from "../assets/79.jpg";
import user2 from "../assets/19.jpg";
import user3 from "../assets/thapa.jpg";
import user4 from "../assets/63.jpg";
import user5 from "../assets/30.jpg";
import user6 from "../assets/2.jpg";
import man from "../assets/man.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Testimonial = () => {
  const [slidePerViewCount, setSlidePerViewCount] = useState(3);

  const Upadate = () => {
    if (window.innerWidth < 1234 && window.innerWidth > 900) {
      setSlidePerViewCount(2);
    } else if (window.innerWidth < 900) {
      setSlidePerViewCount(1);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", Upadate);
    return () => window.removeEventListener("resize", Upadate);
  });
  useEffect(() => {
    Upadate();
  }, []);

  return (
    <>
      <div className="TesttimonialMain">
        <h1>Hosting Services Trusted by Thousands ⭐</h1>
        <Swiper
          slidesPerView={slidePerViewCount}
          spaceBetween={30}
          slidesPerGroup={slidePerViewCount}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="testimonials"
        >
          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user1} alt="user" id="userImg" />
              <div className="content">
                <h2> Excellent Performance</h2>
                <h3>
                FH Hosting delivers unmatched speed and stability. Very happy with their service.
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="userName"> Aditi R. Sharma</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user2} alt="user" id="userImg" />
              <div className="content">
                <h2>Secure & Reliable</h2>
                <h3>
                Love how secure my website feels with FH Hosting. Zero downtime so far!
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="userName"> – Michael T. Evans</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user3} alt="user" id="userImg" />
              <div className="content">
                <h2> Great Customer Support</h2>
                <h3>
                Support team is super responsive and knowledgeable. Highly recommended!
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="userName">– Emily N. Carter</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user4} alt="user" id="userImg" />
              <div className="content">
                <h2> Fast & Affordable</h2>
                <h3>Affordable pricing with premium features. FH Hosting exceeded my expectations.</h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="userName">– Junaid Malik</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user5} alt="user" id="userImg" />
              <div className="content">
                <h2> Great Business Hosting</h2>
                <h3>
                Perfect choice for business websites. Solid performance and high security.
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="userName">– Neha Khurana</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonialBox">
              <img src={user6} alt="user" id="userImg" />
              <div className="content">
                <h2>Amazing Speed & Uptime</h2>
                <h3>
                My website loads in seconds and never goes down. FH Hosting rocks!
                </h3>
                <div className="ratings">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="userName">– Ryan K. Lee</p>
                <i className="fa-solid fa-quote-left"></i>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className="cloudHosting">
          <div className="leftSideCloud">
            <img
              src={man}
              alt="cloud"
              data-aos="fade-up-right"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div className="rightSideCloud">
            <h2>
              Need More Power? Try <br /> Cloud Hosting
            </h2>
            <a href="/" target="_blank">
              <button id="Cloudplans">See all plans</button>
            </a>
            <div className="guarantee">
              <h2>30-Day Money-Back Guarantee</h2>
              <h3>
                We'll refund your payment if you’re not 100% satisfied with
                FH Hosting, no risk.
              </h3>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Testimonial;
