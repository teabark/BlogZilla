import React from "react";
import { useNavigate } from "react-router-dom";

function Home_header() {
  const navigate = useNavigate();

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
        </header>
      </div>
    </div>
  );
}

export default Home_header;
