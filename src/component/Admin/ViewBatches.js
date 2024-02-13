import React, { useState, useEffect } from 'react'
import axios from 'axios'
import $ from "jquery"

const ViewBatches = () => {
  const [batches, setBatches] = useState([]);
  const [deleteBatchName, setDeleteBatchName] = useState("")
  const [deleteBatchId, setdeleteBatchId] = useState("")
  useEffect(() => {
    axios.get("http://localhost:4001/batches")
      .then((res) => {
        setBatches(res.data);
      })

      .catch((err) => {
        console.log(err);
      })
  })

  const deleteBatch = () => {
    axios.delete("http://localhost:4001/batches/" + deleteBatchId)
      .then(() => {
        alert("Batch deleted");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const selectDeleteBatchId = (batchId) => {
    setdeleteBatchId(batchId);
    console.log("delete Batch id")
    axios.get("http://localhost:4001/batches/" + batchId)
      .then((res) => {
        console.log(res.data)
        setDeleteBatchName(res.data.course);
        console.log(deleteBatchName)
      })
      .catch((err) => {
        console.log(err);
      })

  }
  const [id, setId] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [timings, setTimings] = useState("");
  const [duration, setDuration] = useState("");
  const [trainer, setTrainer] = useState("");

  const editBatch = (batchId) => {
    axios.get("http://localhost:4001/batches/" + batchId)
      .then((res) => {
        setId(res.data.id);
        setCourse(res.data.course);
        setDate(res.data.date);
        setTimings(res.data.timings);
        setDuration(res.data.duration);
        setTrainer(res.data.trainer);
      })

      .catch((err) => {
        console.log(err);
      })
  }
  const viewBatch = (e) => {
    e.preventDefault();
    axios.put("http://localhost:4001/batches/" + id, { id, course, date, timings, duration, trainer })
      .then(() => {
        alert("Batch details updated");
        hideModal();
      })

      .catch((err) => {
        console.log(err);
      })

  }
  var hideModal = (hideModalInfo) => {
    $("#modalId").modal("hide");
  };
  return (
    <div className=" container " id=" newbatchesData ">
      <h3 className=" text-center pb-3 ">View <span style={{ color: "#b71710" }}>Batches</span></h3>
      <div className=" row ">
        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="head-bg">
                <tr>
                  <th>Id</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Timings</th>
                  <th>Duration</th>
                  <th>Trainer</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {batches.map((batch) => {
                  return (
                    <tr key={batch.id}>
                      <td>{batch.id}</td>
                      <td>{batch.course}</td>
                      <td>{batch.date}</td>
                      <td>{batch.timings}</td>
                      <td>{batch.duration}</td>
                      <td>{batch.trainer}</td>
                      <td>
                        <button className='btn btn-success me-1' data-bs-toggle="modal" data-bs-target="#batchesModal" onClick={() => {
                          editBatch(batch.id)
                        }}>Edit</button>
                        <button className='btn btn-danger ' data-bs-toggle="modal" data-bs-target="#deleteBatch" onClick={() => {
                          selectDeleteBatchId(batch.id)
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
        id="batchesModal"
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
                Add Batches
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={viewBatch} id="addBatches">
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
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteBatch"
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
                Delete Batch
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h5 style={{ color: "red" }}>Are you sure deleting {deleteBatchName} Batch?</h5>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => { deleteBatch() }}>OK</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ViewBatches