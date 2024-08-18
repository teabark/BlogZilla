import React from 'react';

function Footer() {
  return (
    <div className="container footer">
      <footer className="d-flex flex-wrap justify-content-center align-items-end py-3 my-4 border-top justify-content-center">
        <div className="col-md-4 d-flex align-items-center">
          <span className="md-3 mb-md-0 text-body-secondary">© 2024 Denzel Jones</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
