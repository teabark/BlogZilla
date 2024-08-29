import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import {Rocket, NotebookPen} from "lucide-react"


function Home_header({setAuth}) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [userId, setUserId] = useState(null);

  async function getName(){
    try{
      const response = await fetch("http://localhost:5000/dashboard/profile", {
        method: "GET",
        headers: {token: localStorage.token}
      })
      const parseResponse = await response.json();
      setName(parseResponse.f_name)
      setUserId(parseResponse.user_id)
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

  function handleNavigate(){
    navigate(`/activity/${userId}`)
  }
  
  return (
    <div className="Header">
      <div className="container">
        <header className="d-flex justify-content-between border-bottom lh-1 py-3 text-center">
              <div className="d-flex align-items-center">Welcome <span style={{textTransform: "capitalize", marginLeft: "5px", marginRight: "4px"}}> {name}</span> <Rocket style={{fill: "#ffcf40"}}/>!</div>
              <a
                className="blog-header-logo text-body-emphasis text-decoration-none font1 logo"
                onClick={()=>navigate("/dashboard")}
                style={{ flex: 1, textAlign: "center" }}
              >
                <span className="logo-black">Blo</span><span className="logo-red">gZi</span><span className="logo-green">lla</span>
              </a>
              <div className="d-flex align-items-center">
                <div className="btn btn-outline-info mx-2" onClick={handleNavigate}>My Activity <NotebookPen style={{fill: "#ffcf40", stroke: "#000000"}}/></div>
                <div className="btn btn-warning" onClick={(e) => logout(e)}>Logout</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Home_header;
