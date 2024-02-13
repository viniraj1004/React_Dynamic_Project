import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';

const CourseDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4001/courses/" + id)

      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  })

  return (
    <div className='container-fluid detailsBg mb-4 pt-4'>
      <div className='container p-4'>
        <div className='row'>
          <div className='col-12 col-md-7 col-lg-7'>
            <h1 className='pb-3'>{details.name}</h1>
            <p className='pb-3'><strong>Skills :</strong> {details.skills}</p>
            <p className='pb-3'><strong>Description : </strong> {details.description}</p>

          </div>
          <div className='col-12 col-md-5 col-lg-5 pt-3'>
            <img src={details.path} className='w-100 ps-5' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails