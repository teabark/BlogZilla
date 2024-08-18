import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();

        axios.post("http://localhost:5000/register", 
            {
                username: username,
                password: password
            },
            {headers: {'content-type': 'application/x-www-form-urlencoded'}}
        )
        .then((response) => {
            console.log(response.data);
            if (response.data === true) {
                navigate('/dashboard');
            } else if (response.data === false) {
                navigate('/login');
            } else {
                alert(response.data);
            }
        })
        .catch((error) => {
            console.error("There was an error registering!", error);
            navigate('/'); 
        });;
    }
  return (
    <div className='forms'>
        <form onSubmit={handleSubmit}>
    <h1 className="h3 mb-3 fw-normal font1">
      <span className='logo-black'>Re</span>
      <span className='logo-red'>gist</span>
      <span className='logo-green'>er</span>
      
      </h1>

    <div className="form-floating">
      <input type="email" onChange={(e) => setUsername(e.target.value)}  value={username} className="form-control" id="floatingInput" placeHolder="username@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="floatingPassword" placeHolder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <button className="btn btn-success w-100 py-2" type="submit">Register</button>
  </form>
    </div>
  )
}

export default Signup