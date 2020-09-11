import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <!-- //header -->
// <!-- banner --> */}
        <div class="banner_w3lspvt" id="home">
          <div class="csslider infinity" id="slider1">
            <input type="radio" name="slides" checked="checked" id="slides_1" />
            <input type="radio" name="slides" checked="checked" id="slides_2" />
            <input type="radio" name="slides" checked="checked" id="slides_3" />
            <input type="radio" name="slides" checked="checked" id="slides_4" />

            <ul class="banner_slide_bg">
              <li>
                <div class="slider-info bg1">
                  <div class="bs-slider-overlay">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          We design and build epic mobile, web and desktop apps{" "}
                        </h2>
                        <p>
                          We’re Webhus – experts always ready to build your
                          product
                        </p>

                        <Link to="/contact" class="btn">
                          Get started
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg2">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h4 class="movetxt agile-title text-capitalize">
                          We build smart, well performing, and usable mobile
                          apps{" "}
                        </h4>
                        <p>
                          With our help, you can build a scalable mobile app
                          that will help your business grow
                        </p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg3">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h2 class="movetxt agile-title text-capitalize">
                          We build amazing desktop apps with well-known web
                          technologies{" "}
                        </h2>
                        <p>Get desktop apps which control external devices</p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="slider-info bg4">
                  <div class="bs-slider-overlay1">
                    <div class="banner-text">
                      <div class="container">
                        <h4 class="movetxt agile-title text-capitalize">
                          We build quality, robust, and scalable web apps{" "}
                        </h4>
                        <p>
                          We’re Webhus – experts always ready to build awesome
                          web apps
                        </p>
                        <Link to="/contact" class="btn">
                          Get appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="navigation">
              <div>
                <label for="slides_1"></label>
                <label for="slides_2"></label>
                <label for="slides_3"></label>
                <label for="slides_4"></label>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //banner -->
//  <!-- banner bottom grids --> */}
        <section class="content-info py-5" id="about">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">About us</h3>

            <div class="info-w3pvt-mid text-center px-lg-5">
              <div class="title-desc text-center px-lg-5">
                <img
                  src="assets/images/about1.jpg"
                  alt="news image"
                  class="img-fluid"
                />
                <p class="px-lg-5">
                  Webhus is a full-service software development agency, offering
                  UX/UI design, mobile development, desktop development and web
                  development services to clients from every corner of the
                  world. We are 8 energetic designers, programmers and project
                  managers ready to build your product.
                </p>

                <Link
                  to="/services"
                  class="btn mt-lg-4 mt-3 read scroll"
                  role="button"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //banner bottom grids -->

//  <!-- /services --> */}
        <section class="services py-5" id="services">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Services</h3>
            <div class="row ab-info">
              <div class="col-md-6 ab-content ab-content1">
                <div class="ab-content-inner">
                  <Link to="/Services">
                    <img
                      src="assets/images/services2.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4> UX/UI Design</h4>
                    <Link
                      to="/Services"
                      class="read-more two btn m-0 px-3"
                      role="button"
                    >
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-6 ab-content ab-content1">
                <div class="ab-content-inner">
                  <Link to="/Services">
                    <img
                      src="assets/images/services1.jpg"
                      alt="news image"
                      class="img-fluid"
                    />
                  </Link>
                  <div class="ab-info-con">
                    <h4>Mobile, Desktop or Web Development</h4>
                    <a href="Services" class="read-more two btn m-0 px-3">
                      <span class="fa fa-arrow-circle-o-right"> </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* // <!-- /services -->
 
	// <!-- pricing -->  */}
        <section class="pricing py-5">
          <div class="container py-md-5">
            <h3 class="heading text-capitalize text-center mb-3 mb-sm-5">
              {" "}
              OUR PRICE
            </h3>
            <div class="row pricing-grids">
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3>UX/UI DESIGN</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Planning (4 – 8 hrs)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$250-$550 </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Research (4 – 8 hrs)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$250-$550 </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Design (6 – 12 hrs)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$500-$800 </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Landing Page</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$500-$800</h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}

                  {/* <!-- Item ends --> */}
                </div>
              </div>
              <div class="col-lg-6  mb-lg-0 mb-5">
                <div class="padding">
                  <h3>MOBILE, DESKTOP, WEB DEVELOPMENT</h3>
                  {/* <!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Build (12 – 36 hrs)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$800-$2500 </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item my-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Content Support (8 – 16 hrs)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$500-$800 </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Handover (2 – 4 hrs)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$150-$250 </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  <div class="menu-item mt-4">
                    <div class="row border-dot no-gutters">
                      <div class="col-8 menu-item-name">
                        <h6>Testing and Launch (4 – 8 hrs)</h6>
                      </div>
                      <div class="col-4 menu-item-price text-right">
                        <h6>$250-$550 </h6>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  {/* <!-- Item ends -->
					<!-- Item starts --> */}
                  {/* <!-- Item ends --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //pricing -->
//   <!--/order-now--> */}
        <section class="order-sec py-5">
          <div class="container py-md-5">
            <div class="test-info text-center">
              <h3 class="tittle order">
                <span>CALL US TO BOOK AN APPOINTMENT</span>Our team will call
                back immediately and Book the Appointment
              </h3>
              <h4 class="tittle my-2">+46703566108</h4>

              <div class="read-more mx-auto m-0 text-center">
                <Link to="/contact" class="read-more scroll btn">
                  Click here
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//order-now-->

//  <!--/testimonials--> */}
        <section class="testimonials py-5" id="testimonials">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
            <div class="row mt-3">
              <div class="col-md-4 test-grid text-left px-lg-3">
                <div class="test-info">
                  <p>
                    When you are looking for exceptional digital product design,
                    superior web/app content and affordable maintenance for your
                    app/website, Webhus is just the option for you. We have
                    received incredible feedback upon the launch of our new
                    website.
                  </p>
                  <h3 class="mt-md-4 mt-3">Alexander Jacob</h3>

                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test1.jpg"
                      class="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="#">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                <div class="test-info">
                  <p>
                    Many thanks for the work you did. We have been getting
                    positive feedback on the new website. Having it enabled on
                    mobile is proving to be very functional for marketing
                    purpose. Thanks again for your unreserved support.
                  </p>
                  <h3 class="mt-md-4 mt-3">Dudu Durkan</h3>
                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test2.jpg"
                      class="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="#">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-4 test-grid text-left px-lg-3">
                <div class="test-info">
                  <p>
                    This software development agency is really in position to
                    handle all kinds of software development services. Great to
                    have you and honestly say the best work I got with their
                    excellent abilities. I wouldn’t hesitate in recommending
                    them.
                  </p>
                  <h3 class="mt-md-4 mt-3">Lakin Anderson</h3>

                  <div class="test-img text-center mb-3">
                    <img
                      src="assets/images/test3.jpg"
                      class="img-fluid"
                      alt="user-image"
                    />
                  </div>
                  <div class="mobl-footer test-soc text-center">
                    <ul class="list-unstyled">
                      <li>
                        <a href="#">
                          <span class="fa fa-facebook-f"></span>
                        </a>
                      </li>
                      <li class="mx-1">
                        <a href="#">
                          <span class="fa fa-twitter"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//testimonials-->
// <!-- subscribe --> */}
        <section class="subscribe" id="subscribe">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
                <div class="news-icon mr-3">
                  <span class="fa fa-paper-plane" aria-hidden="true"></span>
                </div>
                <div class="text">
                  <h3>FREE ONLINE QUOTE</h3>
                </div>
              </div>
              <div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    required=""
                  />
                  <button class="btn1">
                    <span class="fa fa-paper-plane" aria-hidden="true"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- //subscribe -->
// <!-- footer --> */}
      </div>
    );
  }
}
export default Home;
