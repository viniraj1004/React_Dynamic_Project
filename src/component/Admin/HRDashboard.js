import React from 'react'
import { useState } from 'react'
import AddBatches from './AddBatches'
import ViewBatches from './ViewBatches'
import AddCourses from './AddCourses'
import ViewCourses from './ViewCourses'
import ViewEnquires from './ViewEnquires'

const HRDashboard = () => {
  const [view, setView] = useState("");
  const [viewBatchFlag, setViewBatchFlag] = useState(true);
  const [addBatchesFlag, setAddBatchesFlag] = useState(false);
  const [addCoursesFlag, setAddCoursesFlag] = useState(false);
  const [viewCoursesFlag, setViewCoursesFlag] = useState(false);
  const [viewEnquiresFlag, setViewEnquiresFlag] = useState(false);
  const DashboardView = () => {
    let msg = "";
    if (view === "") {
      msg = <h1>Welcome to Admin Dashboard</h1>;
      // msg = <ViewBatches />;

    }
    else if (view === "addBatches") {
      msg = <AddBatches />;
    }
    else if (view === "viewBatches") {
      msg = <ViewBatches />;

    }
    else if (view === "addCourses") {
      msg = <AddCourses />

    }
    else if (view === "viewCourses") {
      msg = <ViewCourses />;

    }
    else if (view === "viewEnquires") {
      msg = <ViewEnquires />;
    }
    else {
      msg = <h1>This feature is not available</h1>
    }
    return msg;
  }
  const flag = (viewChange) => {
    console.log("enter flag function")
    console.log(viewChange);
    if (viewChange === "addBatches") {
      setAddBatchesFlag(true);
      setAddCoursesFlag(false);
      setViewBatchFlag(false);
      setViewCoursesFlag(false);
      setViewEnquiresFlag(false);

    }
  }
  return (
    <div className='container p-4'>
      <div className='row'>
        <div className='col-sm-12 col-lg-2 pt-4 pe-0' id="sidenav">
          <button onClick={() => { setView("addBatches"); flag(view) }} className={addBatchesFlag === true ? "activeColor" : ""}>Add Batches</button>
          <button onClick={() => { setView("viewBatches"); flag(view) }} className={viewBatchFlag === true ? "activeColor" : ""}>View Batches</button>
          <button onClick={() => { setView("addCourses"); flag(view) }} className={addCoursesFlag === true ? "activeColor" : ""}>Add Courses</button>
          <button onClick={() => { setView("viewCourses"); flag(view) }} className={viewCoursesFlag === true ? "activeColor" : ""}>View Courses</button>
          <button onClick={() => { setView("viewEnquires"); flag(view) }} className={viewEnquiresFlag === true ? "activeColor" : ""}>View Enquires</button>
        </div>

        <div className='col-sm-12 col-lg-10 ps-4'>
          {DashboardView()}
        </div>
      </div>
    </div>
  )
}


export default HRDashboard