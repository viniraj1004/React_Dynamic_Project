import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {

  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const postEnquiry = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/enquires", { id, username, email, subject, phone, msg })

      .then(() => {
        alert("Enquiry posted ! You'll get a call from admin team :)");
      })

      .catch((err) => {
        console.log(err);
      })
    let alphaExp = /^[a-zA-z]+$/;
    let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let numExp = /^[0-9]+$/;

    // Name validation
    if (username === "") {
      document.getElementById("nameNote").innerHTML = "Name is mandatory";
    }
    else {
      if (username.match(alphaExp)) {
        document.getElementById("nameNote").innerHTML = "";
      }
      else {
        document.getElementById("nameNote").innerHTML = "Only characters";
      }
    }

    // Email validation
    if (email === "") {
      document.getElementById("emailNote").innerHTML = "Valid email is mandatory";
    }
    else {
      if (email.match(emailExp)) {
        document.getElementById("emailNote").innerHTML = "";
      }
      else {
        document.getElementById("nameNote").innerHTML = "Invalid Emial Id: Ex: mysite@ourearth.com";
      }
    }

    //Subject validation
    if (subject === "") {
      document.getElementById("subjectNote").innerHTML = "Subject is mandatory";
    }
    else {
      document.getElementById("subjectNote").innerHTML = "";
    }

    //Phone validation
    if (phone === "") {
      document.getElementById("phoneNote").innerHTML = "Phone number is Mandatory";
    }
    else {
      if (phone.match(numExp)) {
        if (phone.length === 10) {
          document.getElementById("phoneNote").innerHTML = "";
        }
        else {
          document.getElementById("phoneNote").innerHTML = "10 Digit Number";
        }

      }
      else {
        document.getElementById("phoneNote").innerHTML = "Digits Only";
      }

    }

    //Message validation
    if (msg === "") {
      document.getElementById("msgNote").innerHTML = "Leave us a message";
    }
    else {
      document.getElementById("msgNote").innerHTML = "";
    }
  }

  return (
    <div>
      <div className="container p-5">
        <div className="row rowPadding">
          <div className="col-8 contact-form pt-4">
            <h5 className="mt-2 form-ml">Quick Enquiry</h5>
            <form className="row g-3" onSubmit={postEnquiry}>
              <div className="col-md-6">
                <input type="text" className="form-control" name="username" placeholder="First name" value={username} onChange={(e) => {
                  setUsername(e.target.value);
                }} />
                <p id="nameNote"></p>
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" name="email" placeholder="Email" value={email} onChange={(e) => {
                  setEmail(e.target.value);
                }} />
                <p id="emailNote"></p>
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" name="subject" placeholder="Subject" value={subject} onChange={(e) => {
                  setSubject(e.target.value);
                }} />
                <p id="subjectNote"></p>
              </div>
              <div className="col-md-6">
                <input type="tel" className="form-control" name="phone" placeholder="Phone" value={phone} onChange={(e) => {
                  setPhone(e.target.value);
                }} />
                <p id="phoneNote"></p>
              </div>
              <div className="col-md-12">
                <textarea name="msg" className="form-control textare-height" placeholder="Message" value={msg} onChange={(e) => {
                  setMsg(e.target.value);
                }} ></textarea>
                <p id="msgNote"></p>
              </div>
              <div className="col-12">
                <button className="sub-cust" type="submit">Submit</button>
              </div>
            </form>
          </div>

          <div className="col-4">
            <div className="contact-address">
              <h5 className="mt-4 ml-cus">Address</h5>
              <ul className="address-list-style">
                <li>
                  <div className="address-cust">
                    <div className="address-icon">
                      <i className="fa fa-home"></i>
                    </div>
                    <div className="area">
                      <p>House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City Main Road, Hyderabad, Telangana-
                        081
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="address-cust">
                    <div className="address-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="area">
                      <p>+91 81439 56849</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="address-cust">
                    <div className="address-icon">
                      <i className="fa fa-envelope-o"></i>
                    </div>
                    <div className="area">
                      <p>info@hyderabadittrainings.com</p>
                      <p>hr@hyderabadittrainings.com</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid p-0'>
        <div className="col-12 col-md-12 col-lg-12 py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.324498974513!2d78.38211137471177!3d17.4441760011676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c1d3e53%3A0x2d84d6e311a69e21!2sHyderabad%20IT%20Trainings%20-%20Core%20Java%20Advanced%20Java%20%7C%20Java%20Fullstack%20Python%20Fullstack%20%7C%20MERN%20Fullstack%20%7C%20React%20JS%20%7C%20UI%20UX%20Design!5e0!3m2!1sen!2sin!4v1696817159612!5m2!1sen!2sin"
            width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>


  )
}

export default Contact





