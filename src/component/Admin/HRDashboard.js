import React from 'react'
import { useState } from 'react'
import AddBatches from './AddBatches'
import ViewBatches from './ViewBatches'
import AddCourses from './AddCourses'
import ViewCourses from './ViewCourses'
import ViewEnquires from './ViewEnquires'
import { NavLink } from 'react-router-dom'

const HRDashboard = () => {
  const [view, setView] = useState("");

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

  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-sm-12 col-lg-2 pe-0' id="sidenav">
          <button onClick={() => { setView("addBatches") }} >Add Batches</button>
          <button onClick={() => { setView("viewBatches") }} activeClassName="active-link">View Batches</button>
          <button onClick={() => { setView("addCourses") }} activeClassName="active-link">Add Courses</button>
          <button onClick={() => { setView("viewCourses") }} activeClassName="active-link">View Courses</button>
          <button onClick={() => { setView("viewEnquires") }} activeClassName="active-link" className='custBorder'>View Enquires</button>
        </div>

        <div className='col-sm-12 col-lg-10 ps-4'>
          {DashboardView()}
        </div>
      </div>
    </div>
  )
}


export default HRDashboard