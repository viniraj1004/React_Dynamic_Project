import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=" container-fluid bg5 text-white py-5 ">
        <div className=" container ">
          <div className=" row ">
            <div className=" col-12 col-md-6 col-lg-3 ">
              <h5 className=" mb-3 ">Hyderabad IT Training</h5>
              <p className=" mt-10 height ">Hyderabad IT Trainings offers an excellent Software courses training with
                end to end support to the candidates. We offer MERN Full stack, Python Fullstack, React JS, UI
                Development, Web/UI Designing &amp; Web Development.
              </p>
            </div>
            <div className=" col-12 col-md-6 col-lg-3 ps-5 ">
              <h5 className=" mb-3 ">Quick Links</h5>
              <div className=" link ">
                <ul>
                  <li>
                    <a href=" student-registration.php ">
                      <i className=" fa fa-angle-right "></i> Registration
                    </a>
                  </li>
                  <li>
                    <a href=" student-registration.php ">
                      <i className=" fa fa-angle-right "></i> All Courses
                    </a>
                  </li>
                  <li>
                    <a href=" student-registration.php ">
                      <i className=" fa fa-angle-right "></i> Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href=" student-registration.php ">
                      <i className=" fa fa-angle-right "></i> Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className=" col-12 col-md-6 col-lg-3 ">
              <div className=" address ">
                <h5 className=" mb-3 ">Reach Us</h5>
                <ul>
                  <li>
                    <div className=" float-start ">
                      <i className=" fa fa-home "></i>
                    </div>
                    <div className=" float-start ps-3 ">
                      <p>House No 40, Third Floor </p>
                      <p>Vittalrao Nagar</p>
                      <p>Madhapur</p>
                      <p>Hitech City Main Rd</p>
                      <p>Hyderabad</p>
                      <p>Telangana 500081</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" col-12 col-md-6 col-lg-3 ">
              <h5 className=" mb-3 ">Contact Us</h5>
              <ul>
                <div className=" link row ">
                  <div className=" col-12 ">
                    <li>
                      <div className=" float-start address ">
                        <i className=" fa fa-phone "></i>
                      </div>
                      <div className=" float-start ps-3 ">
                        <p>+91 81439 56849</p>
                      </div>
                    </li>
                  </div>
                  <div className=" col-12 ">
                    <li>
                      <div className=" float-start address mt-3 ">
                        <i className=" fa fa-envelope-o "></i>
                      </div>
                      <div className=" float-start ps-3 mt-3 ">
                        <p>info@hyderabadittrainings.com</p>
                      </div>
                    </li>
                  </div>
                  <div className=" col-12 social-media ">
                    <ul>
                      <li>
                        <div className=" mt-4 ">
                          <a href=" https://www.facebook.com/hyderabadittrainings "><i
                            className=" fa fa-facebook-f me-3 "></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className=" mt-3 ">
                          <a href=" https://www.instagram.com/hyderabadittrainings/ ">
                            <i className=" fa fa-instagram me-3 "></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className=" mt-3 ">
                          <a href=" # "><i className=" fa fa-twitter me-3 "></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className=" container-fluid bg6 py-4 ">
        <div className=" container justify-content-center ">
          <div className=" row ">
            <div className=" col-12 col-sm-12 col-lg-8 col-xl-8 ">
              <p>&copy; Copyrights 2023 @ Hyderabad IT Trainings - MERN Python Fullstack | UI Development UI UX
                Design Institute in Hyderabad All rights reserved. </p>
            </div>
            <div className=" col-12 col-sm-12 col-lg-4 col-xl-4 ps-5 ">
              <p>Designed by <a target=" _blank " href=" http://www.enuttech.com/ "
                className=" text-decoration-none "> ENut
                Technologies Pvt Ltd.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer