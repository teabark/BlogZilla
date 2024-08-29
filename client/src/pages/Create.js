import React, { Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Create() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(); 
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState(""); 

  const handleOptionChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  async function handleAPI(event) {
    event.preventDefault(); 
    try {
      const response = await fetch(
        `http://localhost:5000/dashboard/create/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.token,
          },
          body: JSON.stringify({
            topic: selectedTopic,
            title: title,
            content: content,
          }),
        }
      );

      const result = await response.json();
      console.log(result); 
      navigate(`/activity/${id}`);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  }

  return (
    <Fragment>
      <h1>Create</h1>
      <h5>*Remember to select a topic below:</h5>
      <form className="d-flex flex-column textAlign-center" onSubmit={handleAPI}>
        <div className="d-flex">
          {["sports", "technology", "politics", "business"].map((option) => (
            <label key={option} className="checkbox-button">
              <input
                type="radio"
                name="category"
                value={option}
                checked={selectedTopic === option}
                onChange={handleOptionChange}
                style={{ display: "none" }}
              />
              <span
                className={`btn ${
                  selectedTopic === option
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setSelectedTopic(option)}
                style={{ cursor: "pointer", margin: "5px" }}
              >
                {option}
              </span>
            </label>
          ))}
        </div>
        <input
          className="form-control"
          type="text"
          placeholder="Enter title ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "90%", height: "50px", margin: "10px 0" }}
        />
        <textarea
          className="form-control"
          placeholder="Enter your blog..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "90%",
            height: "200px",
            margin: "10px 0",
            padding: "10px",
            resize: "vertical",
            overflowY: "auto",
            lineHeight: "1.5",
          }}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>
    </Fragment>
  );
}

export default Create;
