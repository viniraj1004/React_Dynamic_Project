import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const TrainingsModes = () => {

  const [TrainingsModes, setTrainingModes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/trainingmodes")
      .then((res) => {
        setTrainingModes(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  })


  return (
    <div className=" container-fluid bg py-4 ">
      <div className=" container " id="imageHeight">
        <h3 className=" text-center pb-3 ">Training <span style={{ color: "#b71710" }}>Modes</span></h3>
        <div className=" row ">

          {TrainingsModes.map((item) => {
            return (
              <div className=" col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 px-3 ">
                <div className=" card justify-content-center align-items-center mt-3 cardHeight">
                  <div className=" images w-25 ">
                    <NavLink to="#">
                      <img className=" card-img-top py-2 " src={item.path} alt=" Title " />
                    </NavLink>
                  </div>
                  <div className=" card-body card-pad text-center">
                    <NavLink to="#" className=" text-decoration-none " style={{ color: "#1d2025", lineHeight: "20px" }}>
                      <h4 className=" card-title my-2 ">{item.trainingtype}</h4>
                      <p className=" card-text ">{item.description}
                      </p>
                    </NavLink>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div >
  )
}

export default TrainingsModes