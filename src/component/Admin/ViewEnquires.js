import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ViewEnquires = () => {
  const [enquires, setEnquires] = useState([]);
  const [deleteEnquireName, setDeleteEnquireName] = useState("")
  const [DeleteEnquireId, setDeleteEnquireId] = useState("")

  useEffect(() => {
    axios.get("http://localhost:4001/enquires")
      .then((res) => {
        setEnquires(res.data);
      })

      .catch((err) => {
        console.log(err);
      })
  })

  const deleteEnquires = (enqId) => {
    axios.delete("http://localhost:4001/enquires/" + enqId)

      .then(() => {
        alert("Enquiry deleted");
      })

      .catch((err) => {
        console.log(err);
      })
  }

  const deleteEnquire = () => {
    axios.delete("http://localhost:4001/enquires/" + DeleteEnquireId)
      .then(() => {
        alert("Dleted Course")
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const selectDeleteEnquireId = (enqId) => {
    setDeleteEnquireId(enqId);
    axios.get("http://localhost:4001/enquires/" + enqId)
      .then((res) => {
        setDeleteEnquireName(res.data.username);
      })
      .catch((err) => {
        console.log(err);
      })

  }
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const editEnquires = (enqId) => {
    axios.get("http://localhost:4001/enquires/" + enqId)

      .then((res) => {
        setId(res.data.id);
        setUsername(res.data.username);
        setEmail(res.data.email);
        setSubject(res.data.subject);
        setPhone(res.data.phone);
        setMsg(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const viewEquires = (e) => {
    e.preventDefault();
    axios.put("http://localhost:4001/enquires/" + id, { id, username, email, subject, phone, msg })
      .then(() => {
        alert("Details updated");
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className=" container " id=" newbatchesData ">
      <h3 className=" text-center pb-3 ">View <span style={{ color: "#b71710" }}>Enquires</span></h3>
      <div className=" row ">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="head-bg">
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Phone</th>
                  <th>Msg</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {enquires.map((enq) => {
                  return (
                    <tr key={enq.id}>
                      <td>{enq.id}</td>
                      <td>{enq.username}</td>
                      <td>{enq.email}</td>
                      <td>{enq.subject}</td>
                      <td>{enq.phone}</td>
                      <td>{enq.msg}</td>
                      <td>
                        <button className='btn btn-success me-1' data-bs-toggle="modal" data-bs-target="#enquiresModal" onClick={() => {
                          editEnquires(enq.id)
                        }}>Edit</button>
                        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#enquiryModal" onClick={() => {
                          selectDeleteEnquireId(enq.id)
                        }}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="enquiresModal"
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
                View Enquires
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={viewEquires} id="addBatches">
                <input type="text" name="id" placeholder="Id" value={id} onChange={(e) => {
                  setId(e.target.value);
                }} disabled />
                <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => {
                  setUsername(e.target.value);
                }} />
                <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => {
                  setEmail(e.target.value);
                }} />
                <input type="text" name="subject" placeholder="subject" value={subject} onChange={(e) => {
                  setSubject(e.target.value);
                }} />
                <input type="text" name="phone" placeholder="Phone" value={phone} onChange={(e) => {
                  setPhone(e.target.value);
                }} />
                <input type="text" name="msg" placeholder="Msg" value={msg} onChange={(e) => {
                  setMsg(e.target.value);
                }} />
                <input type="submit" className='btn btn-danger' />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="enquiryModal"
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
              <h5 style={{ color: "red" }}>Are you sure deleting {deleteEnquireName} User?</h5>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { deleteEnquire() }}>OK</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default ViewEnquires