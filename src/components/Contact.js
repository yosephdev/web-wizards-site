import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Contact extends Component{
    render(){
        return (
          <div>
            <section class="inner-page-banner" id="home"></section>
            <div class="breadcrumb-agile">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </div>
            <section class="content-info py-5">
              <div class="container py-md-5">
                <div class="text-center px-lg-5">
                  <h3 class="heading text-center mb-3 mb-sm-5">
                    GET IN TOUCH WITH US
                  </h3>
                  <div class="title-desc text-center px-lg-5">
                    <p class="px-lg-5 sub-wthree">
                      Whether you are looking for a reliable partner for your
                      web development agency or you need a smashing website for
                      your business or you’re simply curious about our skills,
                      just drop us a line. A reply is guaranteed!
                    </p>
                  </div>
                </div>
                <div class="contact-w3pvt-form mt-5">
                  <form action="#" class="w3layouts-contact-fm" method="post">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>First Name</label>
                          <input
                            class="form-control"
                            type="text"
                            name="Name"
                            placeholder=""
                            required=""
                          />
                        </div>
                        <div class="form-group">
                          <label>Last Name</label>
                          <input
                            class="form-control"
                            type="text"
                            name="Name"
                            placeholder=""
                            required=""
                          />
                        </div>
                        <div class="form-group">
                          <label>Email</label>
                          <input
                            class="form-control"
                            type="email"
                            name="Email"
                            placeholder=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Write Message</label>
                          <textarea
                            class="form-control"
                            name="Message"
                            placeholder=""
                            required=""
                          ></textarea>
                        </div>
                      </div>
                      <div class="form-group mx-auto mt-3">
                        <button type="submit" class="btn submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            <div class="map-w3layouts">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.884517464258!2d-76.81713478520908!3d39.449342079489256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c816235a7e91b1%3A0x128aae29d0382cb6!2sReisterstown%20Shopping%20Center!5e0!3m2!1sen!2sse!4v1598976420272!5m2!1sen!2sse"
                allowfullscreen=""
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.3918447588924!2d16.50771741569441!3d59.37648828167536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465ef2cbb6d867a3%3A0xe4907c66624d4efc!2sMUNKTELLSTORGET%203%2C%20633%2043%20Eskilstuna!5e0!3m2!1sen!2sse!4v1598976723542!5m2!1sen!2sse"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        );
    }
}
export default Contact