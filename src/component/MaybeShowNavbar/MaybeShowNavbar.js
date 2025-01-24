import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import HRLogin from '../Admin/HRLogin';



const MaybeShowNavbar = ({ children }) => {

  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);


  useEffect(() => {
    console.log('this is location: ', location)

    if (location.pathname === '/HRLogin') {
      setShowNavbar(false)
    } else {
      setShowNavbar(true)
    }
  }, [location])

  return (
    <div>{showNavbar && children}</div>
  )
}

export default MaybeShowNavbar