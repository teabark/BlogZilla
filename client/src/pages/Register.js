import React, { Fragment, useState } from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

function Signup({setAuth}) {
  const [inputs, setInputs] = useState({
    email: "",
    f_name: "",
    l_name: "",
    password: "",
  });

  const { email, f_name, l_name, password} = inputs;

  function onChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const body = {email, f_name, l_name, password};

  async function onSubmitForm(e){
    e.preventDefault();

    try{
        const response = await fetch("http://localhost:5000/auth/register",{
            method: "POST",
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(body)
        })

        const parseResponse = await response.json();

        if(parseResponse.token){
          localStorage.setItem("token", parseResponse.token);
          setAuth(true);
          toast.success("Successfully registered!")
        } else{
          setAuth(false);
          toast.error(parseResponse);
        }

    }catch(err){
        console.error(err.message)
    }
  }

  return (
<Fragment>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-control my-3"
          onChange={(e) => onChange(e)}
          value={email}
        />
        <input
          type="text"
          name="f_name"
          placeholder="Enter First Name"
          className="form-control my-3"
          onChange={(e) => onChange(e)}
          value={f_name}
        />
        <input
          type="text"
          name="l_name"
          placeholder="Enter Last Name"
          className="form-control my-3"
          onChange={(e) => onChange(e)}
          value={l_name}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="form-control my-3"
          onChange={(e) => onChange(e)}
          value={password}
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </Fragment>
  )
}

export default Signup