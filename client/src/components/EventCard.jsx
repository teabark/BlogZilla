import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventCard(props) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/read/${props.id}`);
      };

      const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + "...";
      };

  return (
    <div className='container parcels'>
      <div className="row g-0 border rounded overflow-hidden  mb-4 shadow-sm h-md-250 w-50">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.date}</p>
              <p className="card-text">{truncateText(props.content, 100)}</p>
              <button onClick={handleNavigate} className="btn btn-primary">
                Continue reading...
              </button>
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
