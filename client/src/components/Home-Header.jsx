import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";

function Home_header({setAuth}) {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  async function getName(){
    try{
      const response = await fetch("http://localhost:5000/dashboard/profile", {
        method: "GET",
        headers: {token: localStorage.token}
      })
      const parseResponse = await response.json();
      setName(parseResponse.f_name)
    }catch(error){
      console.error(error.message);
    }
  }

  useEffect(()=>{
    getName();
  }, []);

  function logout(e){
    e.preventDefault();
    localStorage.removeItem("token")
    setAuth(false);
    toast.success("Successfully logged out!")
  }
  
  return (
    <div className="Header">
      <div className="container">
        <header className="border-bottom lh-1 py-3 text-center">
              <a
                className="blog-header-logo text-body-emphasis text-decoration-none font1 logo"
                onClick={()=>navigate("/dashboard")}
              >
                <span className="logo-black">Blo</span><span className="logo-red">gZi</span><span className="logo-green">lla</span>
              </a>
              <div>Welcome {name}</div>
              <div class="btn btn-warning" onClick={e => logout(e)}>Logout</div>
        </header>
      </div>
    </div>
  );
}

export default Home_header;
