import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MaybeShowFooter = ({ children }) => {

  const location = useLocation();

  const [showFooter, setShowFooter] = useState(false);


  useEffect(() => {
    console.log('this is location: ', location)

    if (location.pathname === '/HRLogin') {
      setShowFooter(false)
    } else {
      setShowFooter(true)
    }
  }, [location])

  return (
    <div>{showFooter && children}</div>
  )
}

export default MaybeShowFooter