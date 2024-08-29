import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useNavigate,  useLocation } from "react-router-dom";

function Edit() {
    const { id } = useParams(); 
    const location = useLocation();
    const { user_id } = location.state || {};
    const navigate = useNavigate();
    const [selectedTopic, setSelectedTopic] = useState(""); 
    const [title, setTitle] = useState(""); 
    const [content, setContent] = useState(""); 

    useEffect(() => {
        async function fetchPostData() {
            try {
                const response = await fetch(`http://localhost:5000/dashboard/edit/${id}`, {
                    method: "GET",
                    headers: {
                        token: localStorage.token,
                    },
                });

                const parseResponse = await response.json();
                setSelectedTopic(parseResponse.topic);
                setTitle(parseResponse.title);
                setContent(parseResponse.post_content);
            } catch (error) {
                console.error("Error fetching post data:", error);
            }
        }

        fetchPostData();
    }, [id]);

    const handleOptionChange = (event) => {
        setSelectedTopic(event.target.value);
    };
    
    async function handleAPI(event) {
        event.preventDefault(); 
        try {
            const response = await fetch(`http://localhost:5000/dashboard/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.token,
                },
                body: JSON.stringify({
                    topic: selectedTopic,
                    title: title,
                    content: content,
                }),
            });

            if (response.ok) {
                console.log("Post updated successfully");
                navigate(`/activity/${user_id}`);
            } else {
                console.error("Failed to update post");
            }
        } catch (error) {
            console.error("Error submitting form data:", error);
        }
    }

    return (
        <Fragment>
            <h1>Edit</h1>
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
                <button className="btn btn-warning" type="submit">
                    Edit
                </button>
            </form>
        </Fragment>
    );
}

export default Edit;
