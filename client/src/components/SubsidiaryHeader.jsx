import React from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";


function SubsidiaryHeader({setAuth}) {
  const navigate = useNavigate();

  function logout(e){
    e.preventDefault();
    localStorage.removeItem("token")
    setAuth(false);
    toast.success("Successfully logged out!")
  }

  
  return (
    <div className="Header">
      <div className="container">
        <header className="d-flex justify-content-between border-bottom lh-1 py-3 text-center">
              <a
                className="blog-header-logo text-body-emphasis text-decoration-none font1 logo"
                onClick={()=>navigate("/dashboard")}
                style={{ flex: 1, textAlign: "center" }}
              >
                <span className="logo-black">Blo</span><span className="logo-red">gZi</span><span className="logo-green">lla</span>
              </a>
              <div className="d-flex align-items-center">
                <div className="btn btn-warning" onClick={(e) => logout(e)}>Logout</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default SubsidiaryHeader;
