import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';


const Courses = () => {
  const [course, setCourse] = useState([]);
  const [deleteCourseName, setDeleteCourseName] = useState("")
  const [deleteID, setDeleteID] = useState("")
  useEffect(() => {
    axios.get("http://localhost:4001/courses")
      .then((res) => {
        setCourse(res.data);
      })

      .catch((err) => {
        console.log(err);
      })
  })

  const deleteCourse = () => {
    axios.delete("http://localhost:4001/courses/" + deleteID)
      .then(() => {
        alert("Dleted Course")
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const selectDeleteID = (courseId) => {
    setDeleteID(courseId);
    axios.get("http://localhost:4001/courses/" + courseId)
      .then((res) => {
        setDeleteCourseName(res.data.name);
      })
      .catch((err) => {
        console.log(err);
      })

  }
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const editCourse = (courseId) => {
    console.log(courseId)
    axios.get("http://localhost:4001/courses/" + courseId)
      .then((res) => {
        console.log(res.data)
        setId(res.data.id);
        setName(res.data.name);
        setSkills(res.data.skills);
        setPath(res.data.path);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const viewCourses = (e) => {
    e.preventDefault();

    axios.put("http://localhost:4001/courses/" + id, { id, name, skills, path, description })
      .then(() => {
        alert("Course added successfully")
      })
      .catch((err) => {
        console.log(err);
      })

  }


  return (
    <div className='container-fluid courBg'>
      <div className='container p-5'>
        <h3 className=" text-center pb-4 ">View <span style={{ color: "#b71710" }}>Courses</span> </h3>
        <div className='row'>
          {course.map((item) => {
            return (
              <div className='col-8 col-sm-8 col-md-6 col-lg-4 col-xl-4 px-3'>
                <div className="card shadow courTextCust">
                  <NavLink to={`/coursedetails/${item.id}`} className="text-decoration-none linkColor">
                    <img className="card-img-top img1" src={item.path} alt="Title" />
                    <div className="card-body courseCust">
                      <p className="card-text text-center">{item.name}</p>
                    </div>
                  </NavLink>
                  <div className='row pb-2'>
                    <div className='col-lg-6 text-end editHover'>
                      <button style={{ width: "55px" }} data-bs-toggle="modal" data-bs-target="#courseModal" onClick={() => { editCourse(item.id) }}>Edit</button>
                    </div>
                    <div className='col-lg-6 deleteHover'>
                      <button style={{ width: "70px" }} data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => { selectDeleteID(item.id) }}>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div
          className="modal fade"
          id="courseModal"
          tabindex="-1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"

          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Edit Courses
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">

                <form onSubmit={viewCourses} id="viewCourses">
                  <div className='mb-2 formMargin'>
                    <label for="exampleInputId" className="form-label"> Course Id :  </label>
                    <input type="text" className="form-control w-75" id="exampleInputId" aria-describedby="idHelp" value={id} onChange={(e) => {
                      setId(e.target.value);
                    }} disabled />
                  </div>
                  <div className='mb-2 formMargin'>
                    <label for="exampleInputName" className="form-label"> Course Name : </label>
                    <input type="text" className="form-control w-75" id="exampleInputName" aria-describedby="nameHelp" value={name} onChange={(e) => {
                      setName(e.target.value);
                    }} />
                  </div>
                  <div className='mb-2 formMargin'>
                    <label for="exampleInputSkills" className="form-label"> Skills : </label>
                    <input type="text" className="form-control w-75" id="exampleInputSkills" aria-describedby="skillsHelp" value={skills} onChange={(e) => {
                      setSkills(e.target.value);
                    }} />
                  </div>
                  <div className='mb-2 formMargin'>
                    <label for="exampleInputPath" className="form-label"> Path : </label>
                    <input type="text" className="form-control w-75" id="exampleInputPath" aria-describedby="pathHelp" value={path} onChange={(e) => {
                      setPath(e.target.value);
                    }} />
                  </div>
                  <div className='mb-2 formMargin'>
                    <label for="exampleInputDescription" className="form-label"> Description : </label>
                    <input type="text" className="form-control w-75" id="exampleInputDescription" aria-describedby="descriptionHelp" value={description} onChange={(e) => {
                      setDescription(e.target.value);
                    }} />
                  </div>
                  <input type="submit" className='btn btn-danger w-50 formMargin1' />
                </form>

              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="deleteModal"
          tabindex="-1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"

          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Delete Courses
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h5 style={{ color: "red" }}>Are you sure deleting {deleteCourseName} Course?</h5>
              </div>
              <div className="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { deleteCourse() }}>OK</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Courses