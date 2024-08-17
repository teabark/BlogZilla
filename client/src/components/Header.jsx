import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
            </div>
            <div className="col-4 text-center">
              <a
                className="blog-header-logo text-body-emphasis text-decoration-none"
                href="#"
              >
                BlogZilla
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="btn btn-sm btn-outline-secondary" onClick={()=>navigate("/register")} href="#">
                Sign in
              </a>
              <a className="btn btn-sm btn-outline-secondary" onClick={()=>navigate("/login")} href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
