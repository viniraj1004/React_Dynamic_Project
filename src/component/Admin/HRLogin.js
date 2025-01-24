import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const HRLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const ValidateAdmin = (e) => {
    e.preventDefault();

    if (username === "Thararaj" && password === "thara1004") {
      // alert("Login Successfull");
      navigate("/hrdashboard");
    }
    else {
      alert("Invalid Login")
    }

  }
  return (
    <div className='container p-5 text-center customLogPage'>
      <h4>Welcome Admin</h4>
      <div className='row'>
        <div className='col-12 col-lg-6 w-100'>
          <form onSubmit={ValidateAdmin}>
            <input type="text" name="username" placeholder='Username' className='form-control mb-3 disCustom' value={username} onChange={(e) => {
              setUsername(e.target.value);
            }} />
            <input type="password" name="password" placeholder='Password' className='form-control mb-3' value={password} onChange={(e) => {
              setPassword(e.target.value);
            }} />
            <input type="submit" className='btn btn-danger form-control mb-3' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default HRLogin