import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Students = () => {
  const [coursename, setCoursename] = useState("");
  const [trainingtype, setTrainingtype] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const postData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/register", { coursename, trainingtype, name, email, subject, phone, message })

      .then(() => {
        alert("Suucess");
      })


      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className=" offset-2 col-md-8 col-lg-8 contact-form pt-1">
          <h4 className='text-center text-muted'>Students Register</h4>

          <form action="" className="row g-3" onSubmit={postData}>
            <div className="col-md-6">
              <input type="text" className="form-control" name="coursename"
                placeholder="Course Name" value={coursename} onChange={(e) => {
                  setCoursename(e.target.value);
                }} />
              <p id="courseNote" className="pt-2"></p>
            </div>
            <div className="col-md-6">
              <select className="form-select" name="trainingtype" value={trainingtype} onChange={(e) => {
                setTrainingtype(e.target.value);
              }} >
                <option hidden>Training Type</option>
                <option >Class Room Training</option>
                <option >Online Training</option>
              </select>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" name="name" placeholder="Name" value={name} onChange={(e) => {
                setName(e.target.value);
              }} />
              <p id="studentNote" className="pt-2"></p>
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" name="email" placeholder="Email" value={email} onChange={(e) => {
                setEmail(e.target.value);
              }} />
              <p id="stuemailNote" className="pt-2"></p>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" name="subject" placeholder="Subject" value={subject} onChange={(e) => {
                setSubject(e.target.value);
              }} />
              <p id="subjectNote" className="pt-2"></p>
            </div>
            <div className="col-md-6">
              <input type="tel" className="form-control" name="phone" placeholder="Phone" value={phone} onChange={(e) => {
                setPhone(e.target.value);
              }} />
              <p id="stuphoneNote" className="pt-2"></p>
            </div>
            <div className="col-md-12">
              <textarea name="message" className="form-control textare-height"
                placeholder="Message" value={message} onChange={(e) => {
                  setMessage(e.target.value);
                }}></textarea>
              <p id="stumessageNote" className="pt-2"></p>
            </div>
            <div className="col-12">
              <button className="sub-cust" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Students