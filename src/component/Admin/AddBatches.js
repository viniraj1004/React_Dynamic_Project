import React, { useState } from 'react'
import axios from 'axios'
const AddBatches = () => {
  const [id, setId] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [timings, setTimings] = useState("");
  const [duration, setDuration] = useState("");
  const [trainer, setTrainer] = useState("");

  const postBatch = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/batches", { id, course, date, timings, duration, trainer })
      .then(() => {
        alert("Success");
      })

      .catch((err) => {
        console.log(err);
      })

  }
  return (
    <div className='container'>

      <form onSubmit={postBatch} id="addBatches">
        <h4>Add Batches</h4>
        <input type="text" name="id" placeholder="Id" value={id} onChange={(e) => {
          setId(e.target.value);
        }} disabled />
        <input type="text" name="course" placeholder="Enter Course" value={course} onChange={(e) => {
          setCourse(e.target.value);
        }} />
        <input type="text" name="date" placeholder="Enter Date" value={date} onChange={(e) => {
          setDate(e.target.value);
        }} />
        <input type="text" name="timings" placeholder="Enter timings" value={timings} onChange={(e) => {
          setTimings(e.target.value);
        }} />
        <input type="text" name="duration" placeholder="Enter duration" value={duration} onChange={(e) => {
          setDuration(e.target.value);
        }} />
        <input type="text" name="trainer" placeholder="Enter trainer" value={trainer} onChange={(e) => {
          setTrainer(e.target.value);
        }} />
        <input type="submit" className='btn btn-danger' />
      </form>
    </div>
  )
}

export default AddBatches