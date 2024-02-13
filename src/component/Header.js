import React from 'react'
import logo from './assets/logo.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <div className="container-fluid header-top">
          <div className="container navbar-expand-lg">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-6 ">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <i className="fa fa-envelope"></i> <span className="ms-1">@hyderabadittrainings.com</span>
                  </li>
                  <li className="nav-item ms-4">
                    <i className="fa fa-phone"></i><span className="ms-1">+91 81439 56849</span>
                  </li>
                </ul>
              </div>
              <div className=" col-sm-12 col-lg-6 col-md-6 ">
                <ul className="navbar-nav justify-content-end">
                  <li className="nav-item">
                    <i className="fa fa-facebook fa-color"></i>
                  </li>
                  <li className="nav-item ms-3">
                    <i className="fa fa-instagram fa-color"></i>
                  </li>
                  <li className="nav-item ms-3">
                    <i className="fa fa-twitter fa-color"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="stickHead">
        <div className='container '>
          <nav className="navbar navbar-expand-sm navbar-light ">

            <NavLink className="navbar-brand" to="#">
              <img src={logo} alt="" />
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
              <ul className="navbar-nav text-uppercase">
                <li className="nav-item ms-2">
                  <NavLink className="nav-link text-warning" to="/" aria-current="page"> Home <span className="visually-hidden">(current)</span></NavLink>
                </li>
                <li className="nav-item ms-2 navHove">
                  <NavLink className="nav-link" to="/about">About us</NavLink>
                </li>
                <li className="nav-item ms-2 navHove">
                  <NavLink className="nav-link" to="/courses">courses</NavLink>
                </li>
                <li className="nav-item ms-2 navHove">
                  <NavLink className="nav-link" to="/batches">new batches</NavLink>
                </li>
                <li className="nav-item dropdown nav-hove">
                  <NavLink className="nav-link dropdown-toggle ms-1" to="/placements" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Placements
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="public/currentOpenings.html">Current
                      Openings</NavLink></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><NavLink className="dropdown-item" to="public/recentPlacements.html">Recent
                      Placements</NavLink></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><NavLink className="dropdown-item" to="public/placedCompanies.html">Placed Companies</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown nav-hove">
                  <NavLink className="nav-link dropdown-toggle ms-1" to="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Register
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/students">Students</NavLink></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><NavLink className="dropdown-item" to="/instructor">Instructor</NavLink></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><NavLink className="dropdown-item" to="/hireFormUs">Hire Form Us</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item dropdown nav-hove">
                  <NavLink className="nav-link dropdown-toggle ms-1" to="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Student Zone
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="public/reviews.html">Reviews</NavLink></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><NavLink className="dropdown-item" to="public/interviewQuestions.html">Interview
                      Questions</NavLink></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><NavLink className="dropdown-item" to="public/tutorials.html">Tutorials</NavLink></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><NavLink className="dropdown-item" to="public/resumes.html">Resumes</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item ms-2 navHove">
                  <NavLink className="nav-link" to="/contact">contacts us</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div >
      </div>

    </div>
  )
}

export default Header