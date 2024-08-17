import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard";
import Navbar from "../../components/Navbar";
import Home_Header from "../../components/Home-Header";
import Footer from "../../components/Footer";
import axios from "axios";

function Politics() {
  const topic = "politics";
  const [posts, setPost] = useState([]);

  async function handleData() {
    try {
      const response = await axios.post(
        "http://localhost:5000/features",
        {
          topic: topic,
        },
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      );
      console.log("API response:", response.data);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(()=>{
    handleData()
  }, []
  );

  return (
    <div className="features">
      <Home_Header />
      <Navbar />
      {posts.map((post) => (
        <EventCard
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.post_content}
          date={post.post_date}
        />
      ))}
      <Footer />
    </div>
  );
}

export default Politics;
