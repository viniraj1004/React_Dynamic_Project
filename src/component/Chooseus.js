import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chooseus = () => {
  const [chooseus, setChooseus] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/chooseus")

      .then((res) => {
        setChooseus(res.data)
      })

      .catch((err) => {
        console.log(err);
      })
  })
  return (
    <div className=" container py-4 ">
      <h3 className=" text-center pb-3 ">Why <span style={{ color: "#b71710" }}>Choose Us?</span> </h3>
      <div className=" row ">
        {chooseus.map((item) => {
          return (
            <div className=" col-12 col-sm-12 col-md-6 col-lg-6 pb-4 ps-4">
              <h4 className=" pb-2 "> <span style={{ color: "#b71710" }}>{item.heading}</span></h4>
              <p>{item.content}</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Chooseus