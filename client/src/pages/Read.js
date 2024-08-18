import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home_header from "../components/Home-Header";

function Read() {
  const { id } = useParams(); // Retrieve the id from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    }

    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog container">
      <Home_header/>
      <Navbar />
      <div className="blog_content">
        <h6>{post.topic}</h6>
        <h1>{post.title}</h1>
        <p>{post.post_date}</p>
        <div className="post_text">
          <p>{post.post_content}</p>
        </div>
      </div>
    </div>
  );
}

export default Read;
