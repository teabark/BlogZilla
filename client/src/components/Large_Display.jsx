import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Large_Display() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();

  async function randomPost() {
    try {
      const response = await axios.post(
        "http://localhost:5000/random",
        { count : 1 },
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      );
      console.log("API response:", response.data);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  };

  function handleReadMore(id) {
    navigate(`/read/${id}`);
  }  

  useEffect(() => {
    randomPost();
  }, []);

  return (
    <div className="container">
      {post.map((item) => (
        <div
          key={item.id}
          className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary"
        >
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">
              {truncateText(item.title, 60)}
            </h1>
            <p className="lead my-3">{truncateText(item.post_content, 100)}</p>
            <p className="lead mb-0">
            <button
                onClick={() => handleReadMore(item.id)}
                className="text-body-emphasis fw-bold btn btn-link"
              >
                Continue reading...
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Large_Display;
