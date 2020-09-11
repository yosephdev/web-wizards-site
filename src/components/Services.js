import React, { Component } from "react";
class Services extends Component {
  render() {
    return (
      <div>
        <section class="inner-page-banner" id="home"></section>

        <div class="breadcrumb-agile">
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Services
            </li>
          </ol>
        </div>

        <section class="what-we-do py-5">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">WHAT WE WORK</h3>
            <div class="row what-we-do-grid">
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0">
                <img src="assets/images/sp1.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr">
                <h4 class="mt-md-0 my-2">UX/UI Design</h4>
                <p class="">
                  We design your digital product from top to bottom and make
                  sure it is perfectly fit to the market.
                </p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-0 mt-4">
                <img src="assets/images/sp2.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-0 mt-md-4">
                <h4 class="mt-md-0 my-2">Web development</h4>
                <p class="">
                  We build quality, robust, and scalable web apps. We’ll take
                  care of even the most complex projects, trust us!
                </p>
              </div>

              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img src="assets/images/sp3.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 class="mt-md-0 my-2">Mobile Development</h4>
                <p class="">
                  Maximize profits and grow your business by developing
                  top-notch mobile products adjusted to market needs, user
                  experience, and the project’s vision.
                </p>
              </div>
              <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                <img src="assets/images/sp4.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                <h4 class="mt-md-0 my-2">DESKTOP DEVELOPMENT</h4>
                <p class="">
                  We build cross-platform desktop applications with JavaScript,
                  HTML, and CSS for Mac, Linux or Windows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="testimonials py-5" id="testimonials">
          <div class="container py-md-5">
            <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
            <div class="row mt-3">
              <div class="col-md-4 test-grid text-left px-lg-3">
                <div class="test-info">
                  <p>
                    If you are looking for an exceptional digital product design,
                    superior web content and amazing app, Webhus is the right option for you. We have
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
                    This agency is in a position to
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
      </div>
    );
  }
}
export default Services;
