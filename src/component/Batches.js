import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { NavLink } from 'react-router-dom';

const Batches = () => {
  const [batches, setBatches] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/batches")

      .then((res) => {
        setBatches(res.data);
      })

      .catch((err) => {
        console.log(err);
      })
  })
  return (
    <div className=" container py-5 " id=" newbatchesData ">
      <h3 className=" text-center pb-3 ">New <span style={{ color: "#b71710" }}>Batches</span></h3>
      <div className=" row ">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="head-bg">
                <tr>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Timings</th>
                  <th>Duration</th>
                  <th>Trainer</th>
                  <th>Register for Demo</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((batch) => {
                  return (
                    <tr key={batch.id}>
                      <td>{batch.course}</td>
                      <td>{batch.date}</td>
                      <td>{batch.timings}</td>
                      <td>{batch.duration}</td>
                      <td>{batch.trainer}</td>
                      <td>
                        <NavLink>Register Now</NavLink>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Batches