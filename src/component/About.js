// import './About.css'
import React from 'react'
import BackImage from './assets/page-banner-1.jpg'

const About = () => {
  return (
    <div className="container-fluid p-0 page-banner subHeader" style={{ width: "100%", height: "15vh", backgroundImage: `url(${BackImage})` }}>
      <div className="bg-dark1">
        <div className="container">
          <div className="row">
            <div className="col-4" style={{ margin: "20px 0px", padding: "15px 0px" }}>
              <h2 className="text-white abou-size">About Us</h2>
            </div>
            <div className="col-8" style={{ margin: "20px 0px", padding: "15px 0px" }}>
              <div className="sub-header1">
                <ul className="style-list">
                  <li className="breadcrumb-item"><a className="text-decoration-none text-hom" href="home.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page"><a className=" text-decoration-none active"
                    href="about.html">About Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About