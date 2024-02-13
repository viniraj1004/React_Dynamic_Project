import React, { useState } from 'react'
import axios from 'axios'

const AddCourses = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const addCourse = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4001/courses/", { id, name, skills, path, description })
      .then(() => {
        alert('Successfully Added');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='offset-lg-3 col-12 col-lg-6 offset-lg-3' >
          <form onSubmit={addCourse} id="addCourse">
            <h4>Add Courses</h4>
            <input type="text" name="id" placeholder='Id' value={id} onChange={(e) => { setId(e.target.value) }} disabled />
            <input type="text" name="name" placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} />
            <input type="text" name="skills" placeholder='Skills' value={skills} onChange={(e) => { setSkills(e.target.value) }} />
            <input type="text" name="path" placeholder='Path' value={path} onChange={(e) => { setPath(e.target.value) }} />
            <input type="text" name="description" placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <input type="submit" className='btn btn-danger' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCourses