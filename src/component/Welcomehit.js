import React from 'react'


const Welcomehit = () => {
  return (
    <div className=" container pt-5 pb-5 form-section ">
      <div className=" row ">
        <div className=" col-12 col-sm-12 col-lg-8 col-xl-8 pe-4 ">
          <h3 className=" mb-4 ">Welcome to <span style={{ color: "#b71710" }}>Hyderabad IT Trainings</span></h3>
          <div className=" line-height ">
            <p className=" mb-4 ">Hyderabad IT Trainings is a Hyderabad based Training Institute delivering
              classNameroom and online trainings in India, USA and UK, Australia. We are Providing high quality
              training is our core value. We offer both classNameroom and online
              training on niche technologies which are in high demand. All our trainers are IT professionals
              with rich experience.
            </p>
            <p className=" mb-4 ">Hyderabad IT Trainings is a leading training and placement company in hyderabad
              managed by industry experts with more than 9+ years of experience in leading MNC Companies. We
              are wellknown for our practical approach towards training
              that enables students to gain realtime exposure.</p>
            <p className=" mb-4 ">Hyderabad IT Trainings is a <strong>one-stop shop for IT courses,Web Development
              services & Recruitment services.</strong> Hyderabad IT Trainings concentrates on its vision
              of building up strong client and business partnerships. To this end, Hyderabad IT Trainings
              offers Real-time and placement focuses
              training services.</p>
          </div>
        </div>

        <div className=" col-12 col-sm-12 mx-auto col-lg-4 col-xl-4 px-0 rounded-3 shadow ">
          <h5 className=" py-3 text-center form-header-round " style={{ background: "#285803", color: "white" }}>Register Now
          </h5>
          <form action="" onsubmit="return validate()">
            <input type=" text " placeholder=" Name " className=" form-control mt-3 mb-3 " name="username"
              id="username" />
            <p id="nameNote" className="pb-2"></p>
            <input type=" email " placeholder=" Email " className=" form-control mb-3 " name="email" id="email" />
            <p id="emailNote" className="pb-2"></p>
            <input type=" tel " placeholder=" Phone " className=" form-control mb-3 " name="phone" id="phone" />
            <p id="phoneNote" className="pb-2"></p>
            <div className=" mb-3 ">
              <textarea className=" form-control " placeholder=" Message " name="message" id="message"
                rows=" 3 "></textarea>
            </div>
            <p id="messageNote" className="py-3"></p>
            <button type=" submit " className=" form-control text-center btn-color ">Submit</button>
          </form>
        </div>
      </div>
    </div >
  )
}


export default Welcomehit