import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Home_Header from "../../components/Home-Header";
import axios from "axios";
import Parcel from "../../components/Parcel";
function Sports({ setAuth }) {
  const topic = "sports";
  const [posts, setPost] = useState([]);

  async function handleData() {
    try {
      const response = await axios.post(
        "http://localhost:5000/dashboard/features",
        {
          topic: topic,
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            token: localStorage.token,
          },
        }
      );
      console.log("API response:", response.data);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div className="features">
      <Home_Header setAuth={setAuth} />
      <Navbar />
      <div className="parcel container">
        {posts.map((post) => (
          <Parcel
            key={post.id}
            id={post.id}
            topic={post.topic}
            title={post.title}
            post_date={post.post_date}
            post_content={post.post_content}
          />
        ))}
      </div>
    </div>
  );
}

export default Sports;
