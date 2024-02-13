import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';


const Courses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4001/courses")
      .then((res) => {
        setCourse(res.data);
      })

      .catch((err) => {
        console.log(err);
      })
  })
  return (
    <div className='container-fluid courBg'>
      <div className='container p-5'>
        <h3 className=" text-center pb-4 ">Our <span style={{ color: "#b71710" }}>Courses</span> </h3>
        <div className='row'>
          {course.map((item) => {
            return (
              <div className='col-8 col-sm-8 col-md-6 col-lg-3 col-xl-3 px-3'>
                <div className="card shadow">
                  <NavLink to={`/coursedetails/${item.id}`} className="text-decoration-none linkColor">
                    <img className="card-img-top img1" src={item.path} alt="Title" />
                    <div className="card-body courseCust">
                      <p className="card-text text-center">{item.name}</p>
                    </div>
                  </NavLink>
                </div>
              </div>
            )
          })}
        </div>
      </div >
    </div>

  )
}

export default Courses