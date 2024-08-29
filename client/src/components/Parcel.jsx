import React from 'react';
import { useNavigate } from 'react-router-dom';

function Parcel(props) {

    const navigate = useNavigate();

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.substring(0, length) + "...";
      };

      const handleReadMore = () => {
        navigate(`/read/${props.id}`); // Navigate to the Read page with the post id
      };

  return (
    <div className="row g-0 border rounded overflow-hidden  mb-4 shadow-sm h-md-250">
      <div className="col p-4 py-2 d-flex flex-column position-static">
        <strong className="d-inline-block m-2 text-primary-emphasis"><span style={{textTransform: "capitalize"}}>{props.topic}</span></strong>
        <h3 className="mb-0 mt-2">{truncateText(props.title, 50)}</h3>
        <div className="mb-1 text-body-secondary">{props.post_date}</div>
        <p className="card-text mb-2">
        {truncateText(props.post_content, 100)}
        </p>
        <button
          onClick={handleReadMore}
          className="text-body-emphasis fw-bold btn btn-link"
        >
          Continue reading
          <svg className="bi">
            <use xlinkHref="#chevron-right" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Parcel;
