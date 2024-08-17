import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Home_header from '../components/Home-Header'
import Large_Display from '../components/Large_Display'
import Parcel from '../components/Parcel'
import Footer from '../components/Footer'

function Dashboard() {

  const [posts, setPost] = useState([]);

  async function getData(){
    try {
      const response = await axios.post(
        "http://localhost:5000/random",
        { count : 2 },
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      );
      console.log("API response:", response.data);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(()=>{
    getData()
  },[]);

  return (
    <div className='dashboard'>
        <Home_header/>
        <Navbar/>
        <Large_Display/>
        <div className='parcel container'>
        {posts.map((post) => (
          <Parcel key={post.id} 
          id={post.id}
          topic={post.topic}
          title={post.title} 
          post_date={post.post_date}
          post_content={post.post_content}
          />
        ))}
          </div>
          <Footer/>
    </div>
  )
}

export default Dashboard