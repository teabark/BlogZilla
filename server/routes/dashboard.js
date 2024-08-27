import router from "./jwtAuth.js";
import pool from "../database.js";
import authorization from "../middleware/authorization.js";

router.get("/profile", authorization, async (req, res)=>{
  try{
    //req.user has the payload
    const user = await pool.query("SELECT f_name FROM users WHERE user_id = $1", [req.user]);
    res.json(user.rows[0]);
  }catch(error){
    console.log(error.message);
    res.status(500).json("Server Error");
  }
});

router.post("/random", authorization, async (req, res) => {
    try {
      const {count} = req.body;
      const numPosts = parseInt(count, 10) || 1; 
  
      const result = await pool.query("SELECT * FROM post");
      const posts = result.rows;
  
      if (posts.length === 0) {
        return res.status(404).send("No posts found");
      }
  
      const shuffledPosts = posts.sort();
      const randomPosts = shuffledPosts.slice(0, numPosts);
  
      console.log(randomPosts);
  
      res.json(randomPosts);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });

  router.get("/posts/:id", authorization, async (req, res) => {
    const { id } = req.params;

    try {
      const result = await pool.query("SELECT * FROM post WHERE id = $1", [id]);
      const post = result.rows[0];
  
      if (!post) {
        return res.status(404).send("No post found");
      }

      res.json(post);
    } catch (error) {
      console.error("Error fetching post:", error);
      res.status(500).send("Server error");
    }
  });
  
  router.post("/features", authorization, async (req, res) => {
    const topic = req.body.topic;
  
    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }
  
    try {
      const result = await pool.query("SELECT * FROM post WHERE topic = $1", [topic]);
      if (result.rows.length === 0) {
        return res.status(404).json({ message: "No posts found for the given topic" });
      }
  
      console.log(result.rows);
      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ error: "Server error" });
    }
  });

export default router;