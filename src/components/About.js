import React from 'react';

import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* <!-- banner --> */}
      <section class="inner-page-banner" id="home"></section>
      {/* <!-- //banner -->
<!-- page details --> */}
      <div class="breadcrumb-agile">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </div>
      {/* <!-- //page details -->
	<!--about-mid --> */}
      <section class="banner-bottom py-5" id="exp">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">About More</h3>
          <div class="row mid-grids mt-lg-5 mt-3">
            <div class="col-md-5 content-w3pvt-img">
              <img src="assets/images/ab1.jpg" alt="" class="img-fluid" />
            </div>
            <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
              <h5 class="mt-1">MISSION </h5>
              <h4>
                fast service, quality design
                <br />
                and affordable pricing!
              </h4>
              <p class="mt-2 text-left">
                Our mission is to provide affordable software development services to clients from all over the
                world.
              </p>
            </div>
          </div>
          <div class="row mid-grids mt-lg-5 mt-3 py-3">
            <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
              <h5 class="mt-1">OUR VALUES</h5>
              <h4>
                Respect, passion
                <br />
                and honest communication
              </h4>
              <p class="mt-2 text-left">
                We take pride in offering
                customized services that takes your business or app to the next
                level. We strive to deliver professional work in a timely
                manner by balancing our actions to address the needs of
                our clients and of our team.
              </p>
            </div>
            <div class="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
              <img src="assets/images/ab2.jpg" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //about-mid -->
<!-- states --> */}
      <section class="stats-count">
        <div class="overlay py-5">
          <div class="container py-md-5">
            <div class="row text-center">
              <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info ">
                <h5>40+</h5>
                <h6 class="pt-2">Clients</h6>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                <h5>20</h5>
                <h6 class="pt-2">Web apps</h6>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                <h5>15</h5>
                <h6 class="pt-2">UX/UI designs</h6>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                <h5>5</h5>
                <h6 class="pt-2">Mobile apps</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//states -->

 <!--//team --> */}
      <section class="banner-bottom  py-5">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">Our Team</h3>
          <div class="row mt-lg-5 mt-4">
            <div class="col-md-4 team-gd text-center">
              <div class="team-img mb-4">
                <img
                  src="assets/images/t1.jpg"
                  class="img-fluid"
                  alt="user-image"
                />
              </div>
              <div class="team-info">
                <h3 class="mt-md-4 mt-3">Deni Rasenberg</h3>
                <p>Deni has been working as a UX/UI designer since 2015.</p>
                <ul class="list-unstyled team-icons mt-4">
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-md-4 team-gd second text-center my-md-0 my-5">
              <div class="team-img mb-4">
                <img
                  src="assets/images/t2.jpg"
                  class="img-fluid"
                  alt="user-image"
                />
              </div>
              <div class="team-info">
                <h3 class="mt-md-4 mt-3">Jack Kniess</h3>
                <p>
                  Jack has been working as a web app developer since 2012.
                </p>
                <ul class="list-unstyled team-icons mt-4">
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4 team-gd text-center">
              <div class="team-img mb-4">
                <img
                  src="assets/images/t3.jpg"
                  class="img-fluid"
                  alt="user-image"
                />
              </div>
              <div class="team-info">
                <h3 class="mt-md-4 mt-3">Eric Marko</h3>
                <p>
                  Eric has been working as a mobile app developer since the 2016.
                </p>
                <ul class="list-unstyled team-icons mt-4">
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About