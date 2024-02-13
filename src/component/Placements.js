import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';


const Placements = () => {
  // const [placement, setPlacement] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:4001/placements")

  //     .then((res) => {
  //       setPlacement(res.data)
  //     })

  //     .catch((err) => {
  //       console.log(err);
  //     })
  // });

  return (
    <div className=" container-fluid bg3 py-5 ">
      <h3 className=" text-center pb-4 ">Recent <span style={{ color: "#b71710" }}>Placements</span></h3>
      <div className=" container ">

        {/* <OwlCarousel items={4} className=" owl-carousel owl-theme"
          loop={false}
          nav={true}
          margin={10}
          autoplay={true} >
          {placement.map((image) => {
            return (
              <div class="item"><img src={image.path} /></div>
            )
          })}
        </OwlCarousel> */}


      </div>
    </div>
  )
}

export default Placements