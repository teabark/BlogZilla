import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventCard(props) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/read/${props.id}`);
      };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.date}</p>
              <p className="card-text">{props.content}</p>
              <button onClick={handleNavigate} className="btn btn-primary">
                Continue reading...
              </button>

            </div>
          </div>
        </div>
        {/* <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default EventCard;
