import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="footer-content">
        <div class="layer footer">
          <div class="container-fluid">
            <div class="row footer-top-inner-w3ls">
              <div class="col-lg-4 col-md-6 footer-top ">
                <h2>
                  <a href="index.html">Webhus</a>
                </h2>
                <p class="my-3">
                  We are a group of dedicated software engineers who loves to
                  build amazing apps from scratch specific to your brand and
                  goals.
                </p>
                <p>
                  We design, build and scale epic mobile, web and desktop apps
                  that can start driving purchases, quote requests, phone calls,
                  and more.
                </p>
              </div>
              <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
                <div class="footer-w3pvt">
                  <h3 class="mb-3 w3pvt_title">Opening Hours</h3>
                  <hr />
                  <ul class="list-info-w3pvt last-w3ls-contact mt-lg-4">
                    <li>
                      <p> Monday - Friday 08.00 am - 10.00 pm</p>
                    </li>
                    <li class="my-2">
                      <p>Saturday 08.00 am - 10.00 pm</p>
                    </li>
                    <li class="my-2">
                      <p>Sunday 08.00 am - 10.00 pm</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 mt-lg-0 mt-5">
                <div class="footer-w3pvt">
                  <h3 class="mb-3 w3pvt_title">Contact Us</h3>
                  <hr />
                  <div class="last-w3ls-contact">
                    <p>
                      <a href="mailto:example@email.com">info@webhus.com</a>
                    </p>
                  </div>
                  <div class="last-w3ls-contact my-2">
                    <p>USA</p>
                  </div>
                  <div class="last-w3ls-contact">
                    <p>
                      1705 East West Hwy,Silver Spring
                      <br />
                      MD 20910, United States
                    </p>
                  </div>
                  <div class="last-w3ls-contact my-2">
                    <p>EUROPE</p>
                  </div>
                  <div class="last-w3ls-contact">
                    <p>
                      Munktellstorget 3,
                      <br />
                      633 43 Eskilstuna, Sweden
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p class="copy-right-grids text-li text-center my-sm-4 my-4">
              © 2020 Webhus. All Rights Reserved | Design by
              <a href="http://webhus.com/"> Webhus </a>
            </p>
            <div class="w3ls-footer text-center mt-4">
              <ul class="list-unstyled w3ls-icons">
                <li>
                  <a href="#">
                    <span class="fa fa-facebook-f"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-dribbble"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="fa fa-vk"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="move-top text-right">
              <a href="#home" class="move-top">
                {" "}
                <span class="fa fa-angle-up mb-3" aria-hidden="true"></span>
              </a>
            </div>
          </div>
          {/* <!-- //footer bottom --> */}
        </div>
      </footer>
    );
  }
}
export default Footer;
