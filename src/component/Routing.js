import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Courses from './Courses';
import About from './About';
import { Home } from './Home';
import Batches from './Batches';
import NoPage from './NoPage';
import Contact from './Contact'
import Students from './Students';
import HRLogin from './Admin/HRLogin';
import HRDashboard from './Admin/HRDashboard';
import CourseDetails from './CourseDetails';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/coursedetails/:id' element={<CourseDetails />} />
        <Route path='/batches' element={<Batches />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/students' element={<Students />} />
        <Route path='/hrlogin' element={<HRLogin />} />
        <Route path='/hrdashboard' element={<HRDashboard />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default Routing