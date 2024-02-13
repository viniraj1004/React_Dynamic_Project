import React from 'react'
import Slider1 from "./assets/DESK1-min.jpg";
import Slider2 from "./assets/desk2-min.jpg";
import Slider3 from "./assets/desk3-min.jpg";

const Slider = () => {
  return (
    <div className='container-fluid p-0'>
      <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active list-unstyled" aria-current="true" aria-label="First slide"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide" class="list-unstyled"></li>
          <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide" class="list-unstyled"></li>
        </div>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img src={Slider1} class="w-100 d-block" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img src={Slider2} class="w-100 d-block" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img src={Slider3} class="w-100 d-block" alt="Third slide" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider